var ArticleInfo={
    "time_d":"13",             //日
    "time_m":"11",              //月
    "time_y":"2017",               //年
    "date":"2017-11-13",
    "title":"让你的站点也支持Markdown",      //标题
    "author":"A~kuma",              //作者
    "summary":"Markdown 是一种轻量级的「标记语言」，它的优点很多，目前也被越来越多的写作爱好者，撰稿者广泛使用。Markdown 的语法十分简单，常用的标记符号也不超过十个，这种相对于更为复杂的 HTML 标记语言来说，Markdown 可谓是十分轻量的，学习成本也不需要太多，且一旦熟悉这种语法规则，会有一劳永逸的效果。",
    "category":"html",              //分类
    "viewTimes":12,                //浏览次数
    "commentNumber":3,             //评论数量
        "link":"detail.html",
    "pre":"#",
    "next":"detail_2.html",
    "content":"# Markdown简介\n" +
    "\n" +
    "Markdown 是一种轻量级的「标记语言」，它的优点很多，目前也被越来越多的写作爱好者，撰稿者广泛使用。Markdown 的语法十分简单，常用的标记符号也不超过十个，这种相对于更为复杂的 HTML 标记语言来说，Markdown 可谓是十分轻量的，学习成本也不需要太多，且一旦熟悉这种语法规则，会有一劳永逸的效果。\n" +
    "\n" +
    "### Markdown优点\n" +
    "\n" +
    "用markdown编写完后，我们可以导出到html发布到网站或者导出pdf保存到本地，十分的方便。最重要的是markdown源文件是纯文本文件，也就是意味着可以跨平台，使用 Markdown 的优点如下：\n" +
    "\n" +
    "专注你的文字内容而不是排版样式，安心写作。\n" +
    "\n" +
    "轻松的导出 HTML、PDF 和本身的 .md 文件。\n" +
    "\n" +
    "纯文本内容，兼容所有的文本编辑器与字处理软件。\n" +
    "\n" +
    "随时修改你的文章版本，不必像字处理软件生成若干文件版本导致混乱。\n" +
    "\n" +
    "可读、直观、学习成本低。\n" +
    "\n" +
    "### Markdown语法教程\n" +
    "\n" +
    "[点这儿 ------ Markdown语法教程--图片版](https://www.jianshu.com/p/f1ba8d72625e)，[Markdown编辑器推荐与语法教程--展示版](https://www.jianshu.com/p/448ef0a6fd81)\n" +
    "\n" +
    "*我是分割线我是分割线我是分割线我是分割线我是分割线*\n" +
    "\n" +
    "## 如何让自己的站点也支持Markdown\n" +
    "\n" +
    "> 上面介绍了Markdown的好处和使用教程，下面就是开始让自己的网站也支持该语言。\n" +
    "> \n" +
    "> 之所以markdown可以在网站中使用，是因为markdown可以导出html，我们要做的便是将markdown转换成html\n" +
    "\n" +
    "## showdown.js\n" +
    "\n" +
    "#### 第一步\n" +
    "\n" +
    "我们先去下载开源js库[showdown.js](https://link.jianshu.com?t=https://github.com/showdownjs/showdown)，这是现在比较流行的开源库，我们没有必要自己再去造轮子。\n" +
    "\n" +
    "下载下来后是一个这样的一个文件夹：\n" +
    "\n" +
    "![](http://upload-images.jianshu.io/upload_images/9364031-fbf245bf5914e4cc.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n" +
    "\n" +
    "里面包含：\n" +
    "\n" +
    "![](http://upload-images.jianshu.io/upload_images/9364031-3e75e3568bcfdd28.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n" +
    "\n" +
    "\n" +
    "#### 第二步\n" +
    "\n" +
    "将这个文件夹拖入我们工程的public目录下(根据自己的情况去找对应的文件夹)\n" +
    "\n" +
    "![](http://upload-images.jianshu.io/upload_images/9364031-0da2f86e102ce905.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n" +
    "\n" +
    "\n" +
    "#### 第三步\n" +
    "\n" +
    "我们需要在哪个页面使用markdown就在哪个界面引入showdown.min.js文件\n" +
    "\n" +
    "![](http://upload-images.jianshu.io/upload_images/9364031-595d484c9e66fc1e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n" +
    "\n" +
    "\n" +
    "**在head头中引入，一定要搞清楚准确的路径去找出showdown.min.js文件**\n" +
    "\n" +
    "![](http://upload-images.jianshu.io/upload_images/9364031-4edca518c3f818a2.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n" +
    "\n" +
    "#### 第四步\n" +
    "\n" +
    "showdown.js的使用方法很简单\n" +
    "\n" +
    "```\n" +
    "function compile(){\n" +
    "\n" +
    "    //获取要转换的文字\n" +
    "    var text = document.getElementById(\"content\").value;\n" +
    "    //创建实例\n" +
    "    var converter = new showdown.Converter();\n" +
    "    //进行转换\n" +
    "    var html = converter.makeHtml(text);\n" +
    "    //展示到对应的地方  result便是id名称\n" +
    " document.getElementById(\"result\").innerHTML = html;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "**如果想实现实时的转换，比如：简书的预览模式**\n" +
    "\n" +
    "**可以参考下面的代码**\n" +
    "\n" +
    "```\n" +
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "    <title>Markdown.js</title>\n" +
    "    <script type=\"text/javascript\" src=\"showdown-master/dist/showdown.min.js\"></script>\n" +
    "</head>\n" +
    "<--我们可以使用样式自定义markdown转换后的样式--!>\n" +
    "<style>\n" +
    "<--引用样式--!>\n" +
    "    blockquote {\n" +
    "        border-left:#eee solid 5px;\n" +
    "        padding-left:20px;\n" +
    "    }\n" +
    "<--列表样式--!>\n" +
    "    ul li {\n" +
    "        line-height: 20px;\n" +
    "    }\n" +
    "\n" +
    "<--代码样式--!>\n" +
    "    code {\n" +
    "        color:#D34B62;\n" +
    "        background: #F6F6F6;\n" +
    "    }\n" +
    " }\n" +
    "</style>\n" +
    "<body>\n" +
    "<div>\n" +
    "    <--设置id为oriContent，如果想实现实时更新，使用onkeyup方法--!>\n" +
    "\n" +
    "    <textarea id=\"oriContent\" style=\"height:400px;width:600px;\" onkeyup=\"convert()\"></textarea>\n" +
    "\n" +
    "<---设置展示的div添加id-!>\n" +
    "    <div id=\"result\"></div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<--写转化函数--!>\n" +
    "<script type=\"text/javascript\">\n" +
    "function convert(){\n" +
    "    var text = document.getElementById(\"oriContent\").value;\n" +
    "    var converter = new showdown.Converter();\n" +
    "    var html = converter.makeHtml(text);\n" +
    "    document.getElementById(\"result\").innerHTML = html;\n" +
    "}\n" +
    "</script>\n" +
    "</body>\n" +
    "</html>\n" +
    "\n" +
    "```\n" +
    "\n" +
    "**效果如下：**\n" +
    "\n" +
    "![](http://upload-images.jianshu.io/upload_images/9364031-a1a04770e48013f8.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)\n" +
    "\n" +
    "\n" +
    "**如果不实现实时变换，把onkeyup去掉，然后直接获取到标记语言的文本，然后进行转换输出到对应的位置就可以了，大家自行尝试吧**"
};


//Markdown html化
// hljs.initHighlightingOnLoad();
document.getElementById('mark_result').innerHTML = "<h1 style='font-size:37px;color:#4e1800'>"+ ArticleInfo.title +"</h1>"
document.getElementById('mark_result').innerHTML += marked(ArticleInfo.content);

$("#box_info li span").eq(0).html(ArticleInfo.date);
$("#box_info li span").eq(1).html(ArticleInfo.author);
$("#box_info li span").eq(2).html(ArticleInfo.category);
$("#box_info li span").eq(3).html(ArticleInfo.viewTimes);
$("#box_info li span").eq(4).html(ArticleInfo.commentNumber);

// 实时转化函数
// function convert(){
//     var text = document.getElementById("oriContent").value;
//     var converter = new showdown.Converter();
//     var html = converter.makeHtml(text);
//     document.getElementById("result").innerHTML = html;
// }


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
