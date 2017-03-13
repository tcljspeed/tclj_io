// JavaScript Document
$(document).ready(function(e) {
    var lv_ban_tab=$('.lv_ban_tab li');		//轮播图按钮的集合
	var lv_ban_img=$('.lv_ban_wrap .lv_ban_img li')  //轮播图集合
	var pre=0;		//前一个按钮坐标
	
	//自动轮播图函数
	function autoMove(){
		player=setTimeout(function(){
				lv_ban_img.removeClass("active");
				lv_ban_tab.removeClass("active");
				
				if(pre==7){		//最后一个
					pre=0;
					lv_ban_tab.eq(0).addClass("active");
					lv_ban_img.eq(0).addClass("active");				
				}
				else{
					pre=pre+1;
					lv_ban_tab.eq(pre).addClass("active");
					lv_ban_img.eq(pre).addClass("active");
				}			
			autoMove();
		},5000);
	}
	autoMove();	
	
	//阻止图片自动轮播的函数
	function stopMove(){
		clearTimeout(player);
	}	
	
	//轮播图按钮滑过效果
	lv_ban_tab.bind('mouseover',function(){
		stopMove();
		lv_ban_img.addClass("act");
		var _this=$(this);
		var _index=$(this).index();
		if(_this.attr("class")=="active"){
			pre=_index;	
		}else{
			lv_ban_img.removeClass("active");
			lv_ban_img.eq(_index).addClass("active");			
			lv_ban_tab.removeClass("active");				
			_this.addClass("active");;
		}	
		pre=_index;	
	});
	
	//鼠标移动到图片内停止自动轮播	
	var lv_ban_wrap=$('.lv_ban .lv_ban_wrap');
	lv_ban_wrap.bind('mouseover',function(){
		stopMove();
	});
	lv_ban_wrap.bind('mouseout',function(){
		autoMove();
	});
	
	//特卖会模块的标题滑动
	var specialBuy=$('.specialBuy .public_sub li');
	specialBuy.bind('mouseover',function(){
		var _thisbuy=$(this);
		specialBuy.removeClass("active");
		_thisbuy.addClass("active");
	});
	
	//模块的标题滑动
	var publicTit=$('.public_sub li');
	publicTit.bind('mouseover',function(){
		var _thispublic=$(this);
		_thispublic.siblings().removeClass("active");
		_thispublic.addClass("active");
	})
	
	//鼠标滚动事件
	var nav_left=$('.nav_left');
	var items=$('.floor_item'); //获取每一层楼
	var nav_left_list=$('.nav_left ul li');  //获取左侧的导航条
	
	$(window).scroll(function() {
		var top=$(document).scrollTop();
		var currentId = "";
		if(top<490){
			nav_left.css('display','none');
		}else if(top>490){
			nav_left.css('display','block');
		}
		//每一层遍历
		items.each(function() {		
		   var m=$(this);
		   if(top>m.offset().top-200){
			   nav_left_list.removeClass('active');
			   nav_left_list.eq($(this).index()).addClass('active');
		   }else{
			   return;
		   }	   
        });	
    });
	
	//左侧导航栏点击事件，对应滚动条滚动
	nav_left_list.bind('click',function(){
		$("html,body").animate(
			{scrollTop:items.eq($(this).index()).offset().top},
			500);
	})
	
	//右侧侧边栏交互开始
	var global_close_sider=$('.global_close_sider'); 	//	右侧侧边栏底下那个叉叉
	var global_sider=$('.global_sider');				//右侧整个侧边栏
	var global_open_sider=$('.global_open_sider');		//打开右侧侧边栏的那个兔子
	var sider_status="open";
	global_close_sider.bind('click',function(){
		if(sider_status=="open"){
			global_sider.animate({right:'-36px'},500,function(){
				global_open_sider.animate({left:'-70px'},300);
				sider_status="close";
			});
		}
	
	});
	global_open_sider.bind('click',function(){
		if(sider_status=="close"){
			global_open_sider.animate({left:'80px'},300,function(){
				global_sider.animate({right:'0px'},500);
				sider_status="open";
			});
		}
	});
	
	//返回顶部点击按钮
	var global_sider_gotop = $('.global_sider_gotop');
	global_sider_gotop.bind('click',function(){
		$("html,body").animate(
			{scrollTop:0},
			500);
	});
	
	/**轮播图的左侧栏目开始**/
	var lv_s_tab=$('.lv_s_tab li');	//左侧导航那个东东
	lv_s_tab.bind('click',function(){
		lv_s_tab.removeClass("active");
		lv_s_tab.eq($(this).index()).addClass("active");
	});
	var lv_s_ipt_tab=$('.lv_s_ipt_tab li');
	lv_s_ipt_tab.bind('click',function(){
		lv_s_ipt_tab.removeClass("active");
		lv_s_ipt_tab.eq($(this).index()).addClass("active");
	});
	/**轮播图的左侧栏目结束**/
		
	
});