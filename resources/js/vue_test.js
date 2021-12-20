const { TrackOpTypes } = require("vue");

$(document).ready(function(){
    const chartLabel = Vue.createApp({
        data(){
            return{
                chartLists: ['d3.js', 'chart.js']
            }
        }
    })

    const vm = chartLabel.mount('.chartlist');

    function ttry(){
        alert('s');
    }
    /*const hideShadow = Vue.createApp({
        methods:{
            hidden(event){
                this.style.boxShadow = 'none';
            }
        }
    })
    
    const vm2 = hideShadow.mount('.list-content.active');*/
})
