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

        //@$_GET['pre_url'];
        
        $pre_url =  $request->input('pre_url');
        if(!isset($pre_url))
        {
            return view('/welcome',['pre_url'=>'', 'new_id' => '', 'url_title'=> '']);
        } 
        //isset($pre_url));
        $sql = DB::table('urltrans')->where('pre_id', $pre_url)->first();

        //dd(($sql));

        if($sql == null)
        {
            
                
            $sql = $sql;

            $url_random = rand(10 ,100);

            $crawler = new Crawler();

            $html_content = file_get_contents($pre_url);

            $crawler -> addHtmlContent($html_content);

            //$doc = new \DOMDocument();
            
            //libxml_use_internal_errors(true);

            
            //$contents = mb_convert_encoding($contents, 'HTML-ENTITIES', "UTF-8");
            
            //$doc -> loadHTML($contents);
            //libxml_use_internal_errors(false);
            
            //$xpath = new \DOMXpath($doc);
            //dd($xpath);
            //$entries = $xpath -> query('//title') -> item(0) -> textContent;


            
            //dd(preg_match("/<title>(.*)<\/title>/s", $contents, $match));

            $url_title = $crawler -> filterXpath("//title") -> text();

            $item = new Urltrans;
            $item -> pre_id = $pre_url;
            $item -> new_id = $url_random;
            $item -> ins_time = now();
            $item -> url_title = $url_title; 
            $item -> number_of_inseret_times = 1;
            $item -> save();

            return view('/welcome', ['pre_url'=> $pre_url,
                                     'new_id'=>$item -> new_id,
                                     'url_title'=> $url_title,
                                     'number_of_inseret_times'=> $item -> number_of_inseret_times]);               
        }
        else
        {
            $item = new Urltrans;
            $item -> pre_id = $pre_url;
            $item -> new_id = $sql -> new_id;
            $item -> url_title = $sql -> url_title;

            $item -> number_of_inseret_times = $sql -> number_of_inseret_times;
            $new_insert_number = $item -> number_of_inseret_times++;
            $item -> $sql-> update('number_of_inseret_times', $new_insert_number);
            //$item -> number_of_inseret_times = $sql -> number_of_inseret_times
            //$new_insert_number = $item -> number_of_inseret_times;
            //$item -> number_of_inseret_times = $new_insert_number++;
            

            return view('/welcome', ['pre_url'=> $pre_url,
                                     'new_id'=> $item -> new_id,
                                     'url_title'=> $item -> url_title,
                                     'number_of_inseret_times'=> $item -> number_of_inseret_times ]);

        }

    }
    
    public function turn_t($codee){

            $sql = DB::table('urltrans')->where('new_id', $codee)->first();

            $item = new Urltrans;
            $item -> pre_id = $sql -> pre_id;
            
            $fp = file_get_contents($pre_url); 
            preg_match("/<title>(.*)<\/title>/s", $fp, $match);

            $url_title = string($match[1]);
            
            return '<script>document.location.href="'.$item -> pre_id.'";</script>';
        }
}
