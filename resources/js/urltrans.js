const { TrackOpTypes } = require("vue");
import * as d3 from "d3";

function showChartjs(){

    const labels = [
        '短網址使用次數',
        '網址被轉換次數',
    ];
        
    const suicide = {
        type:'bar',
        label: '短網址使用次數',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [5285, 5554, 5842, 5592, 5723, 5901, 7103],
    };

    const antidepressant = {
        type:'bar',
        label: '全台抗憂鬱藥物使用人數',
        backgroundColor: 'rgb(255, 255, 132)',
        borderColor: 'rgb(60, 95, 189)',
        data: [1141151, 1165942, 1194395, 1212659, 1273561, 1330204, 1397197],
    };

    const config = {
        type: 'scatter',
        data: {labels: labels,datasets:[suicide, antidepressant]},
        options:{}
    };

    const myChart = new Chart(
        $('#cjs'),
        config
    )};

    /*function showD3js(dataset){

        var svg = d3.select("#djs")
                    .append("svg")
        
        $("svg").attr("id", "canvas");

        const w = document.getElementById("canvas").clientWidth;
        const h = document.getElementById("canvas").clientHeight;
        const barPadding = 1;

        const yScale = d3.scaleLinear() //製作線性尺度
                        .domain([0, 100]) //輸入的範圍
                        .range([h - barPadding, barPadding])                         

        const yAxis = d3.axisLeft(yScale)
                        .ticks(10)

        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {return i * ((w-20) / dataset.length) + 20;})
            .attr("y", function(d) {return h - (d * 4);})
            .attr("width", (w  - (20*(dataset.length+barPadding)) - barPadding) / dataset.length+20 - barPadding)
            .attr("height", function(d) {return d * 4;})
            .attr("fill", function(d) {return "rgb(0, 0, " + (d * 10) + ")";});

        svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .text(function(d) {return d;})
            .attr("text-anchor", "middle")
            .attr("x", function(d, i) {return i * (w / dataset.length  - barPadding) + (w / dataset.length - barPadding) / 2 + 20;})
            .attr("y", function(d) {return h - (d * 4) + 14;})
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("fill", "white");

        svg.append('g').attr('class', 'axis')
            .attr('transform', 'translate(20)', 0) //移動到左方
            .call(yAxis);
    }*/

if (document.getElementById("url-string").getAttribute("href") !== ""){
    $(".head-bar").toggleClass("active");
    $(".title-zh").toggleClass("active");
    $(".title-eng").toggleClass("active");
    $(".input-mag").toggleClass("active");
    $(".function-input").toggleClass("active");
    $(".url").toggleClass("active");
    $(".main-content").toggleClass("active");
    $(".footer").toggleClass("active");
    $(".title-font").toggleClass("active");
    $(".chartlist").toggleClass("active");
    $(".visual").toggleClass("active");
    $(".chart-output").toggleClass("active");
    $('.list-content').toggleClass("active");
    //$("input").toggleClass("active");
    //$("div").toggleClass("active");
    //$("footer").toggleClass("active");
    $(".input-msg").remove();
    $(function() {
            var arr = $('.url-tran').find('input').toArray();
            var temp;
            // 1 3對調
            temp = arr[0];
            arr[0] = arr[1];
            arr[1] = temp;
            $('.url-tran').html(arr);
        });
    $(".submit").css("display", "none");
};


$(document).ready(function(){
    
    $(".url.active").on('focus', function(event){
        $(".submit").css("display", "inline-block");
    });    
        
    $(".url.active").on('blur', function(event){
        $(".submit").css("display", "none");
    });
    
    let dataset = [usage_num, trans_num];

    const chartLabel = Vue.createApp({
        data(){
            return{
                defultChart: 'chart.js',
                chartLists: ['d3.js', 'chart.js'],
                chartShow: ""
            }
        },
        methods:{
            getChartType: function(chartType){

                this.defultChart = chartType

                return this.chartType
            }
        }
    })

    const vm = chartLabel.mount('.visual');

    showChartjs();

});

