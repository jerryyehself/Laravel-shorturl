$(document).ready(function(){
    const chartLabel = Vue.createApp({
        data(){
            return{
                chartLists: ['d3.js', 'chart.js']
            }
        }
    })
    const vm = chartLabel.mount('.chartlist');

    const listContent = Vue.createApp({
        data(){
            return{
                shadow: "none"
            }
        },
        computed:{
            modelStyle(){
                return{
                    'box-shadow': this.shadow ? '': 'none'
                }
            }
        },
        methods:{
            toggleModal(){
                this.shadow = !this.shadow;
            }
        }
    })
    
    const vm2 = listContent.mount('.list-content.active');
})
