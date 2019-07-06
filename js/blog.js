//Markdown html化
// hljs.initHighlightingOnLoad();
//document.title = ArticleInfo.title;
//document.getElementById('mark_result').innerHTML = "<h1 style='font-size:37px;color:#4e1800'>"+ ArticleInfo.title +"</h1>";
//document.getElementById('mark_result').innerHTML += marked(ArticleInfo.content);
//
//$("#box_info li span").eq(0).html(ArticleInfo.date);
//$("#box_info li span").eq(1).html(ArticleInfo.author);
//$("#box_info li span").eq(2).html(ArticleInfo.category);
//$("#box_info li span").eq(3).html(ArticleInfo.viewTimes);
//$("#box_info li span").eq(4).html(ArticleInfo.commentNumber);

// 实时转化函数
// function convert(){
//     var text = document.getElementById("oriContent").value;
//     var converter = new showdown.Converter();
//     var html = converter.makeHtml(text);
//     document.getElementById("result").innerHTML = html;
// }


// document.title = ${title};
// document.getElementById('mark_result').innerHTML += marked(${content});
document.title=$('#article_container span').text();
var content=$('#mark_result').text();
$('#mark_result').html(marked(content));

// Recent
var Recent=[
  {"title":"web前端开发随笔","id":""},
  {"title":"wait和sleep区别","id":""},
  {"title":"数据结构复习","id":""},
  {"title":"python爬虫","id":""},
  {"title":"nlp论文","id":""}
]
var i;
for(i=0;i<Recent.length;i++){
  document.getElementById('box_recent').innerHTML+="<div class='choco_recent'><a>"+Recent[i].title+"</a></div>"
  $('div#box_recent div a').eq(i).attr('href','http://www.zamonia.cn/'+Recent[i].id);
}

// categroy
var Categroy=[
  {"cate":"前端","num":2},
  {"cate":"Java","num":5},
  {"cate":"Python","num":3},
  {"cate":"NLP","num":1},
  {"cate":"随笔","num":2},
]
var i;
for(i=0;i<Categroy.length;i++){
  document.getElementById('box_categroy').innerHTML+="<div class='choco_recent'><a>"+Categroy[i].cate+"("+Categroy[i].num+")"+"</a></div>"
  $('div#box_categroy div a').eq(i).attr('href','http://www.zamonia.cn/');
}
