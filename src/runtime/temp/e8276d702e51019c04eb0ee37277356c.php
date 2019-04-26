<?php if (!defined('THINK_PATH')) exit(); /*a:2:{s:79:"P:\Projects\phpRedisX\src\public/../application/admin\view\manage\edit_app.html";i:1555142293;s:69:"P:\Projects\phpRedisX\src\application\admin\view\common\template.html";i:1555059366;}*/ ?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>无标题文档</title>
<link rel="stylesheet" href="/static/css/bootstrap.min.css" >
<link rel="stylesheet" href="/static/css/system2.css" >
<link rel="stylesheet" href="/static/css/system.css" >
<link rel="stylesheet" href="/static/css/fontawesome.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
<script src="/static/js/jquery-3.3.1.slim.min.js"> </script>
<script src="/static/js/layer/layer.js"></script>
<script src="/static/js/popper.min.js"> </script>
<script src="/static/js/bootstrap.min.js"> </script>
<script src="/static/js/wow.min.js"></script>
<script src="/static/js/soup/admin.js"></script>
<script src="/static/js/chart/Chart.bundle.js"></script>
 <script>
         new WOW(
            ).init();
	 
 </script>

<link href="/static/css/bootstrap-responsive.css" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body style="height:100%">
<nav class=" soup-admin-topnav navbar navbar-expand-lg navbar-dark bg-dark shadow-sm "> 
	<a class="navbar-brand soup-nav-whiteColor" href="#">大汤易语言管理后台</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
  <div class="collapse navbar-collapse soup-navcontent" id="navbarSupportedContent" >
    <ul class="navbar-nav mr-auto">
     
      
    </ul>
    <div class=" my-2 my-lg-0"style="margin-right: 10%;">
      
      <button class="btn btn-primary my-2 my-sm-0" onClick="window.location.href='/index.php'">返回前台</button>
		<button class="btn btn-outline-danger my-2 my-sm-0" onClick="window.location.href='logout'">登出</button>
    </div>
  </div>
</nav>
	<div class="soup-content">
	<div class="soup-leftnav">
	  <ul class="nav flex-column nav nav-pills">
		<li class="nav-item"> <a class="nav-link soup-nav-link " href="index">首页</a> </li>
		<li class="nav-item"> <a class="nav-link soup-nav-link active" href="manageApp">应用管理</a> </li>
		<li class="nav-item"> <a class="nav-link soup-nav-link " href="newApp">新建应用</a> </li>
		<li class="nav-item"> <a class="nav-link soup-nav-link " href="#">我的账号</a> </li>
	  </ul>
	</div>

	
<div class="soup-bodycontent ">
	<div class="row">
		<div class="soup-bodyBlock soup-formBlock col shadow-sm bg-white">
			<h5 class="soup-el-pgtitle">修改应用</h5>
			<hr style="margin-top:0px">
			<form class="soup-el-pgcontent" method="post" action="editApp?id=<?php echo $id; ?>">
			  <div class="form-group">
				<label>应用名称*</label>
				<input type="input" class="form-control" name="appName" value="<?php echo $name; ?>"placeholder="请输入应用名称（必填）">
			  </div>
			  <div class="form-group">
				<label>应用简介</label>
				<textarea class="form-control"  rows="5" name="appDescription" placeholder="请输入应用简介"><?php echo $description; ?></textarea>
			  </div>
			 <div class="form-group">
				<label>应用版本*<small id="emailHelp" class="form-text text-muted">请不要随便更改，不然客户端可能会出现错误。若是要推送更新请回到管理页面点击‘发布更新’</small></label>
			 	
				<input type="input" class="form-control" name="appVersion" value="<?php echo $version; ?>" placeholder="请输入应用版本（必填）">
			  </div>
			 <div class="form-group">
				<label>验证码*</label><br>
				 <img src="<?php echo captcha_src(); ?>" alt="captcha" style="margin-bottom: 5px"/>
				<input type="text" name="validateCode" class="form-control"  placeholder="验证码（必填）">
			  </div>
				<?php switch($status): case "0": ?><div class="alert alert-danger" role="alert"><?php echo $error_msg; ?></div><?php break; endswitch; ?>
			  <button type="submit" class="btn btn-primary">提交</button>
			</form>
		</div>
	</div>
</div>

	
</div>
</body>
</html>
