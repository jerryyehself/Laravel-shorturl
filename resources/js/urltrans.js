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
    
    var svg = d3.select('.chart-output')
                .append('svg')
                .attr({
                    "width": "100%",
                    "height": "100%",
                }); 
    
    var dataset = [ 5, 10, 15, 20, 25 ];
    
    
    
    svg.selectAll("div")
        .data(dataset)
        .enter()
        .append("div")
        .attr("class", "bar").style("height", function(d) {
            var barHeight = d * 5;  //Scale up by factor of 5
            return barHeight + "px";
        });
    
    /*svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr({"x": 0,
              "y": 0,
              "width": 20,
              "height": 100});*/

    

});

