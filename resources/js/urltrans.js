if (document.getElementById("url-string").getAttribute("href") != ""){
    $(".head-bar").toggleClass("active");
    $(".title-zh").toggleClass("active");
    $(".title-eng").toggleClass("active");
    $(".input-mag").toggleClass("active");
    $(".function-input").toggleClass("active");
    $(".url").toggleClass("active");
    $(".main-content").toggleClass("active");
    $(".footer").toggleClass("active");
    $(".title-font").toggleClass("active");
    $(".input-msg").remove();
    $(function() {
            var arr = $('.url-tran').find('input').toArray();// 把三個div放進數組裡面
            var temp;
            // 1 3對調
            temp = arr[0];
            arr[0] = arr[1];
            arr[1] = temp;
         
            $('.url-tran').html(arr);
        });
    $(".submit").css("display", "none");
};


$(document).ready(function(){

    
    $(".url.active").on('focus', function(event){
        $(".submit").css("display", "inline-block");
    });    
        
    $(".url.active").on('blur', function(event){
        $(".submit").css("display", "none");
    });   
});

var vote = ['30','50','100','20'];

d3.select('.chart-output')
  .append('svg')
  .attr({
    "width": "100%",
    "height": "100%",
  });

d3.select('.list')
  .selectAll('li') // 預先選取等一下會創建的與資料數相同的 li
  .data(vote)  // 導入資料
  .enter()  // 自動生成與資料對應數量的元素
  .append('li') // 插入元素
  .text(function(d){
    return d;
    // d 指的是資料陣列中的每個元素(如果陣列內是物件，帶進來的就是物件)
  });