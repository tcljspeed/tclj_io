// JavaScript Document
$(document).ready(function(e) {
	//底部小图片切换
    $('.min_pic ul li').bind('click',function(){
		$('.min_pic ul li').removeClass('choose');
		var url_mid="images/mid"+ ($(this).index()+1) + ".jpg";
		var url_big="images/big"+ ($(this).index()+1) + ".jpg";
		$('.mid_pic img').attr("src",url_mid);
		$('.big_img').attr("src",url_big);
		$(this).addClass('choose');
	});
	
	//放大镜效果
	var small_wid=430;
		small_hei=430;
		mask_wid=200;	
		mask_hei=200;
		scalex=small_wid/mask_wid;		//缩放比
		scaley=small_hei/mask_hei;
		//大图片宽高和大图片容器宽高
		big_width=800;
		big_hei=800;
		big_mask_width=430;
		big_mask_hei=430;
	
	$('.mid_pic').bind('mousemove',function(e){
		$('.mask').css('display','block');
		$('.big_pic').css('display','block');
		var x=e.clientX;
		y=e.clientY;		
		l=x-$('.mid_pic').offset().left-($('.mask').outerWidth()/2);		
		t=y-$('.mid_pic').offset().top-($('.mask').outerHeight()/2);
		var ll=l;
		var tt=t;	
		if(l<0){
			l=0;
		}else if(l>$('.mid_pic').outerWidth()-$('.mask').outerWidth()){
			l=$('.mid_pic').outerWidth()-$('.mask').outerWidth();
		}
		if(t<0){
			t=0;
		}else if(t>$('.mid_pic').outerHeight()-$('.mask').outerHeight()){
			t=$('.mid_pic').outerHeight()-$('.mask').outerHeight();
		}					
		$('.mask').css("left",l);
		$('.mask').css("top",t);
		//计算大图片坐标
		var xx=-parseInt(l*scalex);
		var yy=-parseInt(t*scaley);
		
		if(xx<-370){
			xx=-370;
		}
		if(yy<-370){
			yy=-370;
		}
			
		$('.big_img').css('left',xx);
		$('.big_img').css('top',yy);		
	});
	$('.mid_pic').bind('mouseout',function(){
		$('.mask').css('display','none');
		$('.big_pic').css('display','none');
	});
	
	//秒杀开始
	var countdown=$('.secKill span');
	function countDown(){
			var now_time1=new Date();
			var goalTime=new Date("2017,11,11");
			//剩余秒数
			count_time=parseInt((goalTime-now_time1)/1000);
			if(count_time<0){
				countdown.html(秒杀结束);
				clearTimeout(countDown());
			}
			//剩余的天数
			d=parseInt(count_time/(24*60*60));
			h=parseInt(count_time/(60*60)%24);	
			m=parseInt(count_time/60%60);
			s=parseInt(count_time%60)
			countdown.html(d+"天"+h+"小时"+m+"分"+s+"秒");		
			setTimeout(countDown,500);
	}
	countDown();
	
	//商品尺寸选择开始
	$('.size li').bind('click',function(){
		$('.size li').removeClass('size_select');
		$(this).addClass('size_select');
	});
	
	//商品数量选择开始
	$('.add').bind('click',function(){
		var add=parseInt($('.count input').val());
		$('.count input').val(add+1);
	});
	$('.reduce').bind('click',function(){
		var reduce=parseInt($('.count input').val());
		if(parseInt($('.count input').val())<=1){
			$('.count input').val(1);
		}else{
			$('.count input').val(reduce-1);
		}		
	});
	$('.count input').bind('keyup',function(){
		if(parseInt($('.count input').val())<=1){
			$('.count input').val(1);		
		}
		if(parseInt($('.count input').val())>999){
			$('.count input').val(999);	
		}
	});
	$('.count input').bind('blur',function(){
		if($('.count input').val()==''){
			$('.count input').val(1);	
		}
	});
	
	//下拉菜单
	$('.dro ul li').bind('click',function(){
		var a=$(this).text();
		$('.dro button').text(a);
	});
	
	//右侧图片切换
	var up=-462;
	$('.goup').bind('click',function(){	
		if(-1848==parseInt(up)){
			up=-462+'px';
			$('.rig_img ul').css('top',up);
		}else{
			up=(parseInt(up)-462)+'px';
			$('.rig_img ul').animate({top:up});
		}		
	});
	$('.godown').bind('click',function(){	
		if(-462==parseInt(up)){
			up=-1848+'px';
			$('.rig_img ul').css('top',up);
		}else{
			up=(parseInt(up)+462)+'px';
			$('.rig_img ul').animate({top:up});
		}
	});
	
		
});