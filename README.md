<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

## 網站連結
### [短網址練習](https://dbtes.herokuapp.com/)

## 練習目標
 * 熟悉MVC框架
 * 練習網路空間架站
 * 練習設計prototype
 * 複習前端/後端語言
 * 探索實作時可用的資源
    
## 原型設計
 ![原型](https://github.com/jerryyehself/Laravel-shorturl/blob/main/prototype.png?raw=true)
 * Figma網站

## 部屬環境
 * 虛擬環境：Docker
    * laravel 8以上在Windows中建立專案需透過Docker虛擬主機，作業系統使用ubuntu 20.04
 * 網路空間：Heroku
 * 資料庫：PostgreSQL
    
## 前端設計
 * HTML5
 * CSS3
    * display:grid
    * transition 
 * javascript
 * jQuery
    * .toggleClass() 
 * Vue
    > 圖表套件選單
        
            //Vue v-for v-on
            <div class="list-content" v-for="chartList in chartLists" @click='getChartType(chartList)'>
                @{{ chartList }}
            </div>
            
            //Js使用Vue
            const chartLabel = Vue.createApp({
                data(){
                    return{
                        defultChart: 'chart.js',//預設套件
                            chartLists: ['chart.js', 'd3.js']//套件項目
                        }
                    },
                    methods:{
                        getChartType: function(chartType){
                            this.defultChart = chartType;//改變套件
                            if(this.defultChart === 'chart.js'){
                                showChartjs(urlData);
                            }else if(this.defultChart === 'd3.js'){
                                showD3js(urlData);
                            }
                            return this.defultChart;//回傳套件種類字串
                        }
                    }
                })
                const vm = chartLabel.mount('.visual');//App實例化
      > 圖表畫布顯示

                //Vue v-is
                <div v-if="this.defultChart === 'chart.js'">
                    <canvas id="cjs"></canvas>
                </div>
                <div id="djs" v-if="this.defultChart === 'd3.js'"></div>

## 資料庫設計
 * 欄位
    * 原網址、亂數(以數字1-100代替)、首次縮網址時間、網址轉換次數、短網址被使用次數、網頁標題、 所屬網域

## 自我檢討
 * js流程控制
 * Vue元件使用
 * Ajax使用
 * 視覺、版面設計

## 追加練習：資料視覺化
 * D3.js
    ```
    function showD3js(dataset){
        //掛載畫布
        var svg = d3.select("#djs")
                    .append("svg")
        $("svg").attr("id", "canvas");
        //取得畫布長寬、邊框
        const w = document.getElementById("canvas").clientWidth;
        const h = document.getElementById("canvas").clientHeight;
        const barPadding = 1;
        const yScale = d3.scaleLinear() //製作線性尺度
                        .domain([0, 100]) //輸入的範圍
                        .range([h - barPadding, barPadding])                         
        const yAxis = d3.axisLeft(yScale)
                        .ticks(10)
        //製作長條
        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {return i * ((w-20) / dataset.length) + 20;})//起點X軸位置
            .attr("y", function(d) {return h - (d * 4);})//起點Y軸位置
            .attr("width", (w  - (20*(dataset.length+barPadding)) - barPadding) / dataset.length+20 - barPadding)//長條寬度
            .attr("height", function(d) {return d * 4;})//長條高度
            .attr("fill", function(d) {return "rgb(0, 0, " + (d * 10) + ")";});//長條間間距
        svg.selectAll("text")//顯示數值標籤
            .data(dataset)
            .enter()
            .append("text")
            .text(function(d) {return d;})
            .attr("text-anchor", "middle")
            .attr("x", function(d, i) {return i * (w / dataset.length  - barPadding) + (w / dataset.length - barPadding) / 2 + 20;})//起點X軸位置
            .attr("y", function(d) {return h - (d * 4) + 14;})//起點Y軸位置
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("fill", "white");
        svg.append('g').attr('class', 'axis')
            .attr('transform', 'translate(20)', 0) //移動尺標到左方
            .call(yAxis);
    }
    ```
 * chart.js
    ```
    function showChartjs(outsideData){
    //資料項目標籤
    const labels = [  
        '短網址使用次數',
        '網址被轉換次數',
    ];
    //長條圖相關屬性(標籤、顏色)
    const shortUrlCounting = {
        labels: labels,
        datasets:[{
            label: "次數",
            data: outsideData,
            backgroundColor: [
                'rgb(255, 255, 132)',
                'rgb(255, 100, 132)'
            ]}
        ]};
    //圖表類型
    const config = {
        type: 'bar',
        data: shortUrlCounting,
        options:{}
    };
    //產生圖表
    const myChart = new Chart(
        $('#cjs'),
        config
    )};
    ```

