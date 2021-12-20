$(document).ready(function(){
    const chartLabel = Vue.createApp({
        data(){
            return{
                chartLists: ['d3.js', 'chart.js']
            }
        }
    })
    const vm = chartLabel.mount('.chartlist');
    const vm3 = new chartLabel;
    vm3.mount('.chartType')

    const hideShadow = Vue.createApp({
        methods:{
            hidden(event){
                this.style.boxShadow = 'none';
            }
        }
    })
    
    const vm2 = hideShadow.mount('.list-content.active');
})
