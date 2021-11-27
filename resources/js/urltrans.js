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
};

import * as d3 from "d3";
$(document).ready(function(){
    
    $(".url.active").on('focus', function(event){
        $(".submit").css("display", "inline-block");
    });    
        
    $(".url.active").on('blur', function(event){
        $(".submit").css("display", "none");
    });
    
    

    

});

var vote =[
    {
    "name": "Grete",
    "num": 80
    },
    {
    "name": "Steffi",
    "num": 100
    },
    {
    "name": "Lala",
    "num": 200
    },
];

d3.select('.chart-output')
.append('svg')
.attr({
    "width": "100%",
    "height": "100%",
});

d3.select('.chart')
//.selectAll('div')
.data(vote)
.enter()
.append('div')
.html(function(d){
    // .html() 類似 .innerHTML，D3 允許 SVG 跟 HTML 標籤混用
    return d.name + '<br>' + d.num
})
.style("height", function(d){
    return d.num + 'px'  // 調整每個長條的高度
});