$(document).ready(function(){
    const test = Vue.createApp({
        data(){
            return{
                chartLists: ['d3.js', 'chart.js']
            }
        }
    })
    const vm = test.mount('.test')
})