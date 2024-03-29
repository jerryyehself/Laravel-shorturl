@extends('model.model')
@section('content')
<div id="head-bar" class="head-bar">
    <a class="title-font" href="https://dbtes.herokuapp.com/">
        <div class="title-zh">
            短網址練習
        </div>
        <div class="title-eng">
            short URL exercise
        </div>
    </a>
    <div class="function-input">
        <form action="" method="get" class="url-tran">
            <h2 class="input-msg">請輸入要縮短的網址</h2>
            <input id="submit" class="submit" type="submit" value="轉換"><br>
            <input id="url" class="url" type="url" placeholder="http:\\..." name="pre_url" required>
        </form>
    </div>
</div>
@if(@isset($pre_url))
<div class="main-content">

    <div class="visual">

        <div class="chartlist">
            
            <div class="chartType">
                <p class="trans-result">短網址使用率圖表</p>
                <p class="sub-title">圖表套件(請點兩次)<p>
                <span class="url_title" name="url_title" id="url_title">@{{ this.defultChart }}</span>
            </div>
            <div class="list-content" v-for="chartList in chartLists" @click='getChartType(chartList)'>
                @{{ chartList }}
            </div>

        </div>
        
        <div class="chart-output">
            <div v-if="this.defultChart === 'chart.js'">
                <canvas id="cjs"></canvas>
            </div>
            <div id="djs" v-if="this.defultChart === 'd3.js'"></div>
        </div>
    
    </div>

    <div class="function-output">
        
        <p class="trans-result">轉換結果</p>
        
        <p class="sub-title" name="sub-title" id="sub-title">來源網頁名稱</p>

        <span class="url_title" name="url_title" id="url_title">
            {{ $url_title }}
        </span>

        <p class="sub-title" name="sub-title" id="sub-title">短網址</p>

        <span class="url_title" name="url_title" id="url_title">
            <a class="url-string" id="url-string" href="{{ $pre_url }}" name = "new_url">
                https://dbtes.herokuapp.com/{{ $new_id }}
            </a>
        </span>
        
        <p class="sub-title" name="sub-title" id="sub-title">短網址使用次數</p>

        <span class="url_title" name="url_title" id="url_title">
            {{ $usage_number }}次
        </span>
    

    </div>
    <div class="origin-url">

        <p class="trans-result">來源網站相關資料</p>

        <p class="sub-title" name="sub-title" id="sub-title">網址被轉換次數</p>

        <span class="url_title" name="url_title" id="url_title">
            {{ $number_of_inseret_times }}次
        </span>
        
        <p class="sub-title" name="sub-title" id="sub-title">本站首次轉換短網址時間</p>

        <span class="url_title" name="url_title" id="url_title">
            {{ $ins_time }}
        </span>
        <p class="sub-title" name="sub-title" id="sub-title">所屬網域</p>

        <span class="url_title" name="url_title" id="url_title">
            {{ $url_host }}
        </span>

    </div>
</div>
@endif
<footer class="footer">
© 2021
</footer>  
@endsection