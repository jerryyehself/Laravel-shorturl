$(document).ready(function(){
    const chartLabel = Vue.createApp({
        data(){
            return{
                chartLists: ['d3.js', 'chart.js']
            }
        }
    })
    const vm = chartLabel.mount('.chartlist')
})