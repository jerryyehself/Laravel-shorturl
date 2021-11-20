<?php

namespace App\Http\Controllers;

use App\Models\Urltrans;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\DomCrawler\Crawler;

class Urlcon extends Controller
{
    

    public function turn_in(Request $request){
        
        $pre_url =  $request->input('pre_url');

        if(!isset($pre_url))
        {
            return view('/welcome',['pre_url'=>'', 'new_id' => '', 'url_title'=> '']);
        } 
        
        $sql = DB::table('urltrans')->where('pre_id', $pre_url)->first();

        if($sql == null)
        {

            $url_random = rand(10 ,100);

            $html_content = file_get_contents($pre_url);

            $crawler = new Crawler();

            $crawler -> addHtmlContent($html_content);

            $url_title = $crawler -> filterXpath("//title") -> text();

            $url_host = parse_url($pre_url, PHP_URL_HOST);

            $item = new Urltrans;
            $item -> pre_id = $pre_url;
            $item -> new_id = $url_random;
            $item -> ins_time = now();
            $item -> url_title = $url_title; 
            $item -> number_of_inseret_times = 1;
            $item -> url_host = $url_host;

            /*$r->sendRequest();
            $response_headers = $r->getResponseHeader();
            $item -> url_update_time = $response_headers["last-modified"];
            
            $item -> usage_number = 0;
            */

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
            $item = new Urltrans;
            $item -> pre_id = $pre_url;
            $item -> new_id = $sql -> new_id;
            $item -> url_title = $sql -> url_title;
            $item -> number_of_inseret_times = $sql -> number_of_inseret_times+1;
            $item -> ins_time =  $sql -> ins_time;
            //$item -> url_update_time =  $sql -> url_update_time;
            $item -> url_host = $sql -> url_host;
            $item -> uasge_number = $sql -> usage_number;

            $new_insert_number = DB::table('urltrans')-> increment('number_of_inseret_times', 1, ['pre_id' => $pre_url]);



            
            return view('/welcome', ['pre_url'=> $pre_url,
                                     'new_id'=>$item -> new_id,
                                     'url_title'=> $item -> url_title,
                                     'ins_time'=>$item -> ins_time,
                                     //'url_update_time'=>$item -> url_update_time,
                                     'url_host' => $url_host,
                                     'number_of_inseret_times'=> $item -> number_of_inseret_times]);

        }

    }
    
    public function turn_t($codee){

            $sql = DB::table('urltrans')->where('new_id', $codee)->first();

            $item = new Urltrans;
            $item -> pre_id = $sql -> pre_id;

            $new_insert_number = DB::table('urltrans')-> increment('usage_number', 1, ['pre_id' => $pre_url]);

            //
            
            return '<script>document.location.href="'.$item -> pre_id.'";</script>';
        }
}
