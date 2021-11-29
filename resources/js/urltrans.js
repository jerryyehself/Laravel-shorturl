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



    var svg = d3.select(".chart-output")
                .append("svg")

    //var xScale = d3.scale.linear() //製作線性尺度
    //                     .domain([0, 100]) //輸入的範圍
    //                     .range([padding , w - barpadding])
                
    
                         
    $("svg").attr("id", "canvas");

    var w = document.getElementById("canvas").clientWidth;
    var h = document.getElementById("canvas").clientHeight;
    var barPadding = 1;

    var yScale = d3.scaleLinear() //製作線性尺度
                    .domain([0, 100]) //輸入的範圍
                    .range([h - barPadding, barPadding])
                         

    var yAxis = d3.axisLeft(yScale)
                    .ticks(10)
	                

    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", function(d, i) {return i * (w/ dataset.length)+20;})
        .attr("y", function(d) {return h - (d * 4);})
        .attr("width", (w / dataset.length - barPadding) -20)
        .attr("height", function(d) {return d * 4;})
        .attr("fill", function(d) {return "rgb(0, 0, " + (d * 10) + ")";});

    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(function(d) {return d;})
        .attr("text-anchor", "middle")
        .attr("x", function(d, i) {return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2 + 20;})
        .attr("y", function(d) {return h - (d * 4) + 14;})
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "white");

        /*svg.axis()
            .scale("bottom")
            .scale("left");*/

    svg.append('g').attr('class', 'axis')
        .attr('transform', 'translate(20)', 0) //移動到左方
        .call(yAxis);

});

