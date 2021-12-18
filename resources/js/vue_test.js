if (document.getElementById("url-string").getAttribute("href") !== ""){

    const Counter = {
        data() {
        return {
            counter: 0
        }
        }
    }
    
    Vue.createApp(Counter).mount('.chart-list')
}