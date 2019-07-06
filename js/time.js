function setDay(){
  $('div#bg_img').css("background-image","url(http://www.zamonia.cn/statics/blog_images/blog/bg-day.png)")
  $('#message span').eq(0).html("今日も頑張ります!")
  $('div#head_container').css("background-color","#81ceef")
  $('div.box_title').css("background-color","#81ceef")
}

function setNight(){
  $('div#bg_img').css("background-image","url(http://www.zamonia.cn/statics/blog_images/blog/bg-night.png)")
  $('#message span').eq(0).html("今夜の月は綺麗ですね")
  $('div#head_container').css("background-color","#4e1800")
  $('div.box_title').css("background-color","#4e1800")
}

$(document).ready(function(){
  var systime=new Date();
  var hour = systime.getHours();
  // console.log(hour);
  if(hour>5&&hour<21){
    setDay();
  }else{
    setNight();
  }
})
