// JavaScript Document
window.onload=function(){
	function getname(classname){
		return document.getElementsByClassName(classname);
	}
	var left_arrow=getname("left_arrow")[0];
	var right_arrow=getname("right_arrow")[0];
	var list=getname("img_list")[0];
	var cir=document.getElementById("img_cir");
	var aLi = cir.getElementsByTagName("span");
	var index=1;
	aLi[index-1].className="on";
	var animated=false;
	var play=true;		//自动播放
	var player;			//定时器
	//清除按钮焦点并获得当前焦点
	function clearButton(){
		for(var i=0;i<aLi.length;i++){
			if(aLi[i].className=="on"){
				aLi[i].className="";			
				break;				
			}
		}
		aLi[index-1].className="on";
	}
	/**********************/
	function autoMove(){
		player=setTimeout(function(){			
			right_arrow.onclick();
			autoMove();
		},6000);	
	}
	function stopp(){
		clearTimeout(player);
	}
	/**********************/
	
	/*图片切换的动画,movdis为移动的总距离*/
	function animation(movdis){
		animated=true;	//正在移动
		var times=300;	//动画的总时间
		var inter=10;	//每一小次移动的时间
		var speed=movdis/(times/inter);	//每一小次移动的距离
		var left=parseInt(list.style.left)+ movdis;
		var moveAni=function(){
			if((speed>0&&parseInt(list.style.left)<left)||(speed<0&&parseInt(list.style.left)>left)){
				list.style.left=parseInt(list.style.left)+speed+"px";
				setTimeout(moveAni,inter);
			}else{
				animated=false;
				list.style.left=left+"px";
				if(left>-200){
					list.style.left=-2700+"px";
				}
				if(left<-2700){
					list.style.left=-540+"px";
				}
			}
		}
		moveAni();	
	}
	/*箭头点击事件*/
	left_arrow.onclick=function(){	
		if(animated){
			return;
		}
		if(index==1){
			index=5;
		}else{
			index -= 1;	
		}
		animation(540);
		clearButton();
	}
	right_arrow.onclick=function(){	
		if(animated){
			return;
		}	
		if(index==5){
			index=1;
		}else{
			index += 1;	
		}		
		animation(-540);	
		clearButton();
	}

    for(var i = 0;i<aLi.length;i++){ 
		aLi[i].onclick = function (){				
			var myIndex = parseInt(this.getAttribute('index'));	//鼠标点击的按钮位置
			var moveoffset=myIndex-index;
			animation(-540*moveoffset);
			index=myIndex;
			clearButton();
		}
	}	
	list.onmouseover=stopp;
	list.onmouseout=autoMove;	
	autoMove();	
	
	//时间显示
	function checkTime(i){
		if(i<10){
			i="0"+i;
		}
		return i;
	}
	var now_time=document.getElementsByClassName("toprig")[0].getElementsByTagName("p")[0];
	function getTime(myDate){		//从当前时间对象中获取每个细节时间
			    myYear=myDate.getFullYear();		//年
				myMonth=myDate.getMonth();			//月
				myDay=myDate.getDate();				//日
				myHours=myDate.getHours();
				myMinus=checkTime(myDate.getMinutes());
				mySeconds=checkTime(myDate.getSeconds());	
		}
	function showTime(){		//显示现在时间
		var myDate=new Date();		//当前时间对象
		getTime(myDate);		
		var times=myYear+'年'+(myMonth+1)+'月'+myDay+'日'+" "+" "+myHours+":"+myMinus+":"+mySeconds;		
		now_time.innerHTML=times;
		setTimeout(showTime,500);
	}
	showTime();
	
	//登陆
	var login=document.getElementById("login");
	var username=document.getElementById("username");
	var password=document.getElementById("password");
	login.onclick=function(){
		
	
		if(username.value.length==0&&password.value.length==0){
			alert("请输入用户名和密码");
		}
		else if(username.value.length==0){
			alert("请输入用户名");
		}
		else if(password.value.length==0){
			alert("请输入密码");
		}
	}
	
	
	
	
}