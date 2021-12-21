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
            }
        }
    })

    chartLabel.component('chart-list',{
        template:  `
        <div class="list-content">
            @{{ chartList }}
        </div>
        `
    });

    const vm = chartLabel.mount('.chartlist');

    
    /*const hideShadow = Vue.createApp({
        methods:{
            hidden(event){
                this.style.boxShadow = 'none';
            }
        }
    })
    
    const vm2 = hideShadow.mount('.list-content.active');*/
})
