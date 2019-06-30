var systime = new Date();
var sec = systime.getSeconds();
var min = systime.getMinutes();
var hour = systime.getHours();
var time=hour*3600+min*60+sec;

var clock = new FlipClock($('.clock'), time, {
  clockFace: 'HourlyCounter'
});
$('span.seconds').hide();
$('span.flip-clock-label').hide();
$('ul.flip').eq(4).hide();
$('ul.flip').eq(5).hide();
