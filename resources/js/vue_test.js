const { TrackOpTypes } = require("vue");

$(document).ready(function(){
    
    const chartLabel = Vue.createApp({
        data(){
            return{
                defultChart: 'chart.js',
                chartLists: ['d3.js', 'chart.js']
            }
        },
        methods:{
            getChartType: function(chartType){
                this.defultChart = chartType
                
                return this.chartType
            },
            changeChart: function(chartType){

                if(chartType === 'd3.js'){

                    showChartjs()

                }else if(chartType === 'chart.js')

                showD3js()
            }
        }
    })
})
