$(document).ready(function(e) {
    var tit_list=$('.tab_tit li');
	var divs=$('.tab_con div');
	tit_list.bind('mouseover',function(){
		var _index=$(this).index();
		tit_list.removeClass('select');
		divs.css('display','none');
		$(this).addClass('select');
		divs.eq(_index).css('display','block');
	});
	
	//第二个组件
	//鼠标移入时
	$('.img_container li').bind('mouseover',function(){
		var _dex=$(this).index();
		$('.img_container div').eq(_dex).stop();
		$('.img_container div').eq(_dex).css('display','block').animate({bottom:"0px"});
		
	});
	
	//鼠标移出时
	$('.img_container li').bind('mouseout',function(){
		var _dex=$(this).index();
		$('.img_container div').eq(_dex).stop();
		$('.img_container div').eq(_dex).animate({bottom:"-50px"});
		
	});
	
	
	
	
	
});