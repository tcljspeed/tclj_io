$(document).ready(function(e) {
	//二维码标题点击事件
	$('.land .land_t .title_text1').bind('click',function(){
		$('.land .land_code').css('display','block');
		$('.land .land_b').css('display','none');
		$('.title_text1').css('color','red');
		$('.title_text2').css('color','RGB(102,102,102)');
	});
	//账号密码标题点击事件
	$('.land .land_t .title_text2').bind('click',function(){
		$('.land .land_code').css('display','none');
		$('.land .land_b').css('display','block');
		$('.title_text1').css('color','RGB(102,102,102)');
		$('.title_text2').css('color','red');
	});
	//图标切换
	$('.username').bind('focus',function(){
		$(this).css('backgroundImage','url("images/usename_l.png")');
	});
	$('.username').bind('blur',function(){
		$(this).css('backgroundImage','url("images/usename_d.png")');
	});
	$('.pass_word').bind('focus',function(){
		$(this).css('backgroundImage','url("images/pass_l.png")');
	});
	$('.pass_word').bind('blur',function(){
		$(this).css('backgroundImage','url("images/pass_d.png")');
	});
	
	
	
	
	
	
	
	//二维码绑定鼠标移入事件
   $('.land_code .land_img').bind('mouseover',function(){
	   $('.land_code .land_img').stop();
	   $(this).animate({left:'10px'});   
   });
   //二维码绑定鼠标移出事件
   $('.land_code .land_img').bind('mouseout',function(){
	   $('.land_code .land_img_r').css('display','none');
	   $('.land_code .land_img').stop();
	   $(this).animate({left:'100px'},500);
	   
   });
   //二维码绑定移动事件
	$('.land_code .land_img').bind('mousemove',function(){
		if(parseInt($('.land_code .land_img').css('left'))<20){
			$('.land_code .land_img_r').css('display','block');
		}
	});
		
	  
});