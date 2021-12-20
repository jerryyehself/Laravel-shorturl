$(document).ready(function(){
    const chartLabel = Vue.createApp({
        data(){
            return{
                chartLists: ['d3.js', 'chart.js']
            }
        },
        methods:{
            getChartType(){
                return this.text();
            }
        }
    })

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
