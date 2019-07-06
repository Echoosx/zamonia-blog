$(document).ready(function(){
  $.getJSON("https://v1.hitokoto.cn/?encode=json",function(result){
    $('#message span').eq(1).html(result.hitokoto)
    $('#message span').eq(2).html("『"+result.from+"』")
  });
})
