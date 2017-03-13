// JavaScript Document
function getname(classname){
	return document.getElementsByClassName(classname);
}

window.onload=function(){
	var flag1=true;
	var flag2=true;
	var land_img=getname("land-img")[0];		//二维码图片
	var land_img_r=getname("land-img-r")[0];   //二维码右边的图片
		username=getname("username")[0]			//用户名输入框
		pass_word=getname("pass_word")[0]			//密码输入框
		title_text1=getname("title_text1")[0]	//扫码登陆按钮
		title_text2=getname("title_text2")[0]	//账户登陆按钮
		land_b=getname("land-b")[0]				//账户登陆的容器
		land_code=getname("land-code")[0]		//二维码登陆的容器
	
	title_text1.onclick=function(){		//点击了扫码按钮后
		land_code.style.display="block";
		land_b.style.display="none";
		title_text1.style.color="red";
		title_text2.style.color="RGB(102,102,102)";
	}
	title_text2.onclick=function(){
		land_code.style.display="none";
		land_b.style.display="block";
		title_text1.style.color="RGB(102,102,102)";
		title_text2.style.color="red";
	}
	username.onfocus=function(){
		username.style.backgroundImage="url('images/usename_l.png')";
	}
	username.onblur=function(){
		username.style.backgroundImage="url('images/usename_d.png')";
	}
	pass_word.onfocus=function(){
		pass_word.style.backgroundImage="url('images/pass_l.png')";
	}
	pass_word.onblur=function(){
		pass_word.style.backgroundImage="url('images/pass_d.png')";
	}
	
	
	//移入二维码
	land_img.onmouseenter=function (){
		var x=land_img.offsetLeft;
		function movx(){
			setTimeout(function(){
				if(x>10){
					x=x-20;
					land_img.style.left=x+"px";
					land_img_r.style.display="none";
					movx();
				}
				else{
					//land_img_r.style.display="block";
					setInterval(function(){},1000);
					//为true表示二维码移动结束了，此时才能调用移除的事件
					flag1=true;
					flag2=false;
				}
			},30)
	 	}
		if(flag2==true){
			movx();
		} 
	}
	//移出二维码
	land_img.onmouseout=function (){
		var y=land_img.offsetLeft;
		function movy(){
			setTimeout(function(){
				if(y<95){
					y=y+20;
					land_img.style.left=y+"px";
					if(y<10){
						land_img_r.style.display="block";
					}
					else{
						land_img_r.style.display="none";
						//移出结束后才能调用移入事件
						flag1=false;
						flag2=true;
					}
					movy();
				}
			},30)
	 	}
		//只有为true时才能调用移出事件
		if(flag1==true){
			movy();	
		}
		 
	}
	
	
}