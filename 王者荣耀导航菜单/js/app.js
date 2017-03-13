// JavaScript Document
$(document).ready(function(e) {
	var flag=false;
    $('.nav').bind('mouseover',function(){
		$('.child_nav').css('display','block');
		flag=false;
	});
	
	//$('.nav').bind('mouseout',function(){
//		flag=true;
	//});
	
	 $('.child_nav').bind('mouseleave',function(){
		
			$('.child_nav').css('display','none');
		
	});
	
	
});