$(document).ready(function(){

    const Counter = {
        data() {
        return {
            counter: 0
        }
        }
    }
    
    Vue.createApp(Counter).mount('.chart-list')
});