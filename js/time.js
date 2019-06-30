function setDay(){
  $('div#bg_img').css("background-image","url(../images/blog/bg-day.png)")
  $('#message span').eq(0).html("What a nice day!")
  $('div#head_container').css("background-color","#81ceef")
  $('div.box_title').css("background-color","#81ceef")
}

function setNight(){
  $('div#bg_img').css("background-image","url(../images/blog/bg-night.png)")
  $('#message span').eq(0).html("Have a good dream")
  $('div#head_container').css("background-color","#4e1800")
  $('div.box_title').css("background-color","#4e1800")
}

// $('div#home').click(function(){setDay();})
// $('div#new').click(function(){setNight();})


var systime=new Date();
var hour = systime.getHours();
if(hour<21||hour>6){
  setDay();
}else{
  setNight();
}

var Mingyan={
  "code": 200,
  "msg": "success",
  "date":"",
  "newslist": [
    {
      "content": "所有的科学都是错误先真理而生，错误在先比错误在后好。",
      "author": "沃尔波斯",
      "typeid": 24
    }
  ]
}

$('#message span').eq(1).html(Mingyan.newslist[0].content)
$('#message span').eq(2).html("--"+Mingyan.newslist[0].author)
