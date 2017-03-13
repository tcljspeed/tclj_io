function getname(classname){
	return document.getElementsByClassName(classname);
}
window.onload=function(){
	var close=getname("close")[0];
	var landtitle=getname("landtitle")[0];		<!--面板的标题-->
	var land=getname("land")[0];		<!--登陆面板-->
	var user_input=getname("user_input")[0];
	var pass_input=getname("pass_input")[0];
	var clientW=document.documentElement.clientWidth||document.body.clientWidth;
	var clientH=document.documentElement.clientHeight||document.body.clientHeight;
	var movex=clientW-392;	<!--鼠标可以移动的最大范围-->
		movey=clientH-402;	
	close.onmouseover=function(){
		this.src="images/close_l.png";
		
	}
	close.onmouseout=function(){
		this.src="images/close_d.png";
	}
	close.onclick=function(){
		land.style.display="none";
		drakscreen.style.display="none";
	}
	user_input.onfocus=function(){
		user_input.style.backgroundImage="url('images/usename_l.png')";		
	}
	user_input.onblur=function(){
		user_input.style.backgroundImage="url('images/usename_d.png')";
	}
	pass_input.onfocus=function(){
		pass_input.style.backgroundImage="url('images/pass_l.png')";
	}
	pass_input.onblur=function(){
		pass_input.style.backgroundImage="url('images/pass_d.png')";
	}
	
	
	
	var landtext=document.getElementById("land");
	var drakscreen=getname("drakscreen")[0];
	landtext.onclick=function(){
		land.style.display="block";
		drakscreen.style.display="block";
	}
	
	landtitle.onmousedown=function(event){
		event=event||window.event;
		var landx=land.offsetLeft;
			landy=land.offsetTop;
			mx=event.clientX;
			my=event.clientY;
			disx=mx-landx;
			disy=my-landy;
		document.onmousemove=function(event){
			event=event||window.event;
			var mousex=event.clientX;
				mousey=event.clientY;
				surex=mousex-disx;
				surey=mousey-disy;				
				if(surex<0){			<!--边距判断-->
					surex=0;
				}else if(surex>movex){
					surex=movex;
				}
				if(surey<0)
				{
					surey=0;
				}else if(surey>movey){
					surey=movey;
				}			
				land.style.left=surex+"px";
				land.style.top=surey+"px";
		}
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
		}
	}
	
	
}