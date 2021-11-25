


$(document).ready(function(){

    if (document.getElementById("url-string").getAttribute("href") != ""){
        $(".head-bar").toggleClass("active");
        $(".title-zh").toggleClass("active");
        $(".title-eng").toggleClass("active");
        $(".input-mag").toggleClass("active");
        $(".function-input").toggleClass("active");
        $(".url").toggleClass("active");
        $(".main-content").toggleClass("active");
        $(".footer").toggleClass("active");
        $(".title-font").toggleClass("active");
        $(".input-msg").remove();
        $(function() {
                var arr = $('.url-tran').find('input').toArray();// 把三個div放進數組裡面
                var temp;
                // 1 3對調
                temp = arr[0];
                arr[0] = arr[1];
                arr[1] = temp;
             
                $('.url-tran').html(arr);
            });
        $(".submit").css("display", "none");

        $(".url.active").on('focus', function(event){
            $(".submit").css("display", "inline-block");
        });    
        
        $(".url.active").on('blur', function(event){
            $(".submit").css("display", "none");
        });
        
    };


});


