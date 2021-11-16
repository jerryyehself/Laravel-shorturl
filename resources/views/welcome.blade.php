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
<div class="main-content">
    <div class=left-show>
        
    </div>
    <div class="function-output">
        @if(@isset($pre_url))
            <p>轉換結果</p>
                <span class="url_title" name="url_title" id="url_title"> 
                    網頁名稱:<br/>
                    {{ $url_title }}
                </span>
                <br>    
                <span class="url-string">
                    短網址:        
                    <a class="ot" id="urlt" href="{{ $pre_url }}" name = "new_url">
                        https://dbtes.herokuapp.com/{{ $new_id }}
                    </a>
                </span>              
        @endif
    </div>
    <div class="right-show">
    </div>
</div>
<footer class="footer">
        測試用
</footer>  
@endsection