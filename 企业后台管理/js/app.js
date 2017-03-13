// JavaScript Document
$(document).ready(function(e) {
	//logo点击效果,返回主页
	$('.logo').click(function(){		
		$(".main_content iframe").attr('src','main.html');
	})
	//顶部导航菜单栏点击效果
    $(".topmunu_list li").click(function(){
		var _id=$(this).index();
		$(this).addClass("topmenu_click");
		$(this).siblings().removeClass("topmenu_click");
		
		$(".leftmenu").find(".leftmenu_item").eq(_id).css('display','block');
		$(".leftmenu").find(".leftmenu_item").eq(_id).siblings('.leftmenu_item').css('display','none');
	});
	var d=false;
	//左侧菜单栏的标题点击效果
	$(".leftmenu_item dl dt").click(function(){	
		var dis=($(this).siblings('dd').css('display'));	
		if(dis=='none'){
			$(this).css('background-position','right 12px');
		}else{
			$(this).css('background-position','right -42px');			
		}	
		$(this).siblings('dd').slideToggle('fast');	
	});
	//隐藏显示左侧菜单栏
	
	$(".toolsmenu #tools_2").click(function(){
		
		var leftdis=$(".leftmenu").css('display');
		if(leftdis=='none'){
			
			$('.leftmenu').css('display','block');
			$(this).children('a').text('隐藏菜单');
			$('body').addClass('showleftmenu').removeClass('hideleftmenu');
		}else{
			$('.leftmenu').css('display','none');
			$(this).children('a').text('显示菜单');
			$('body').addClass('hideleftmenu').removeClass('showleftmenu')
		}
	});
	
	$(".leftmenu_item dd li a").click(function(){
		var _link = $(this).attr('_link');
		$(".main_content iframe").attr('src',_link);
		$(this).addClass("onleftmenu");
		$(this).parent().siblings('li').children('a').removeClass('onleftmenu');
		
		$(this).parents('dl').siblings('dl').find('a').removeClass('onleftmenu');
	});
	$(".toolsmenu li a").click(function(){
		var _link = $(this).attr('_link');
		$(".main_content iframe").attr('src',_link);
	});
		
	
});