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
    
    
    var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
        11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

    var w = "100%";
    var h = "100%";
    var barPadding = 1;

    var svg = d3.select(".chart-output")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("y", 0)
        .attr("height", 100)
        .attr("width", w / dataset.length - barPadding)
});

