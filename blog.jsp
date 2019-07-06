<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Blog</title>
  <!-- <script type="text/javascript" src="lib/showdown-master/dist/showdown.min.js"></script> -->
  <script type="text/javascript" src="lib/jquery/jquery.min.js"></script>
  <script type="text/javascript" src="lib/marked.js"></script>
  <script type="text/javascript" src="lib/highlight/highlight.js"></script>
  <script>hljs.initHighlightingOnLoad();</script>
  <link rel="stylesheet" href="lib/highlight/styles/an-old-hope.css">

  <script src="lib/flipclock/flipclock.min.js"></script>
  <link rel="stylesheet" href="lib/flipclock/flipclock.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css"/>

  <link rel="stylesheet" href="css/blog.css">
</head>
<body>
  <!-- head -->
  <div id="head">
    <div id="bg_img">
      <div id="message">
        <span id="time_message"></span>
        <span id="mingyan_content"></span>
        <span id="mingyan_author"></span>
      </div>
    </div>
    <script type="text/javascript" src="js/hitokoto.js"></script>
    <div id="head_container">
      <div class="head_box" id="home">首页</div>
      <div class="head_box" id="new">新随笔</div>
      <div class="head_box" id="manage">管理</div>
    </div>
  </div>
  <script type="text/javascript" src="js/time.js"></script>

  <!-- content -->
  <div id="content">
    <div id="article_container">
      <span style='font-size:37px;font-weight:bold'>${title}</span>
      <!-- <textarea id="oriContent" style="height:400px;width:600px;" onkeyup="convert()"></textarea> -->
      <div id="mark_result">${content}</div>
    </div>

    <div id="article_right">
      <div class="clock"></div>

      <script type="text/javascript" src="js/clock.js"></script>

		<%; %>
      <div id="info">
        <div class="box_title" id="article">本文章</div>
        <div class="box_content" id="box_info">
          <ul>
            <li>日期：<span>${date}</span></li>
			      <%-- <li>作者：<span><%=id %></span></li> --%>
            <li>分类：<span>${categroy}</span></li>
            <!-- <li>浏览次数：<span></span></li> -->
            <!-- <li>评论次数：<span></span></li> -->
          </ul>
        </div>
      </div>

      <div id="recent">
        <div class="box_title">最近</div>
        <div class="box_content" id="box_recent"></div>
      </div>

      <div id="categroy">
        <div class="box_title">分类</div>
        <div class="box_content" id="box_categroy"></div>
      </div>

      <script src="lib/autoload.js"></script>
    </div>
  </div>

  <script type="text/javascript" src="js/live2d.js"></script>
  <!-- 转化函数 -->
  <script type="text/javascript" src="js/blog.js"></script>
</body>
</html>
