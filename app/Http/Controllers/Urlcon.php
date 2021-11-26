<?php

namespace App\Http\Controllers;

use App\Models\Urltrans;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\DomCrawler\Crawler;
use Carbon\Carbon;

class Urlcon extends Controller
{
    

    public function turn_in(Request $request){
        
        $pre_url =  $request->input('pre_url');

        if(!isset($pre_url))
        {
            return view('/welcome',['pre_url'=>'',
                                    'new_id' => '',
                                    'url_title'=> '',
                                    'usage_number'=> '',
                                    'number_of_inseret_times' => '',
                                    'ins_time' => '',
                                    'url_host' => '',
                                    'url_update_time'=> '']);
        } 

        $sql = DB::table('urltrans')
                ->where('pre_id', $pre_url)
                ->first();
        
        if($sql == null)
        {

            $url_random = rand(10 ,100);

            $html_content = file_get_contents($pre_url);
            //dd($html_content);
            if(!$html_content){
                echo 'in error';
            }

            $crawler = new Crawler();

            $url_content = $crawler -> addHtmlContent($html_content);

            if($url_content == null){

                $url_title = "無法取得網頁內容";
            
            }else{

                $url_title = $crawler -> filterXpath("//title") -> text();
            
            }
            
            $url_host = parse_url($pre_url, PHP_URL_HOST);
            
            $item = new Urltrans;
            $item -> pre_id = $pre_url;
            $item -> new_id = $url_random;
            $item -> ins_time = Carbon::now("Asia/Taipei");
            $item -> url_title = $url_title; 
            $item -> number_of_inseret_times = 1;
            $item -> url_host = $url_host;
            //$item -> url_update_time = get_headers($pre_url,1)["Last-Modified"];
            $item -> usage_number = 0;

            $item -> save();

            return view('/welcome', ['pre_url'=> $pre_url,
                                     'new_id'=>$item -> new_id,
                                     'url_title'=> $url_title,
                                     'ins_time'=>$item -> ins_time,
                                     //'url_update_time'=>$item -> url_update_time,
                                     'number_of_inseret_times'=> $item -> number_of_inseret_times,
                                     'url_host' => $url_host,
                                     'usage_number' => $item -> usage_number]);               
        }
        else
        {
            $new_insert_number = DB::table('urltrans')
                                    -> where('pre_id', $pre_url)
                                    -> increment('number_of_inseret_times');

            $new_update_time = get_headers($pre_url,1)["Last-Modified"];
            dd($new_update_time);
            //$save_update_time = DB::table('urltrans')-> where('pre_id', $pre_url)  -> update(['url_update_time'=>$new_update_time]);
            //dd($sql);

            return view('/welcome', ['pre_url'=> $pre_url,
                                     'new_id'=> $sql -> new_id,
                                     'url_title'=> $sql -> url_title,
                                     'ins_time'=> $sql -> ins_time,
                                     'url_update_time'=> $new_update_time,
                                     'number_of_inseret_times'=> $sql -> number_of_inseret_times,
                                     'url_host' => $sql -> url_host,
                                     'usage_number' => $sql -> usage_number]);
        }
    }
    
    public function turn_t($codee){

            $sql = DB::table('urltrans')
                    ->where('new_id', $codee)
                    ->first();

            $new_insert_number = DB::table('urltrans')
                                    ->where('new_id', $codee)
                                    ->increment('usage_number');

            return '<script>document.location.href="'.$sql -> pre_id.'";</script>';
    }
}
