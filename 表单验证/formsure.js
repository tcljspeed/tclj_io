// JavaScript Document

function getLength(str){
  // \x00-xff代表单字节字符。
  return str.replace(/[^\x00-\xff]/g, "xx").length;
}

function findStr(str, n){
  var tmp = 0;
  for (var i = 0; i < str.length; i++){
    if(str.charAt(i)==n){
      tmp++;
    }
  }
  return tmp;
}

window.onload=function(){
	var flag1=false;
	var flag2=false;
	var flag2=false;
	var aInput=document.getElementsByTagName('input');		//所有输入框
	var oName=aInput[0];									//用户名
	var pwd=aInput[1];										//密码
	var pwd2=aInput[2];										//确认密码
	var aP=document.getElementsByTagName('p');				//所有p标签集合
	var name_msg=aP[0];										//用户名后面的提示
	var pwd_msg=aP[1];										//密码后面的提示
	var pwd2_msg=aP[2];										//确认密码后面的提示
	var count=document.getElementById('count');				//用户名下方的统计字符
	var aEm=document.getElementsByTagName('em');			//密码强度
	var name_length = 0;									//统计字符的长度
	//用户名输入框获得焦点时
	oName.onfocus = function(){
    name_msg.style.display = "inline";
    name_msg.innerHTML = "<i class=‘ati’></i>5-25个字符，一个汉字为两个字符，推荐使用中文会员名。";
  }
  //用户名输入时
  oName.onkeyup = function(){
    count.style.visibility = "visible";
    name_length = getLength(this.value); //计算有多少个字符
    count.innerHTML = name_length + "个字符";
    if(name_length==0){
      count.style.visibility = "hidden";
    }
  }
  
  oName.onblur = function(){
	 flag1=false;
    //含有非法字符            
    var reg = /[^\w\u4e00-\u9fa5]/g;    // \w代表“数字、字母（不分大小写）、下划线”，\u4e00-\u9fa5代表汉字。 

    if(reg.test(this.value)){
      name_msg.innerHTML = '<i class="err"></i>含有非法字符！';
    }
    //不能为空
    else if (this.value==""){
      name_msg.innerHTML = "<i class='err'></i>不能为空！";
    }
    //长度超过25个字符
    else if (name_length > 25){
      name_msg.innerHTML = "<i class='err'></i>长度超过25个字符！";
    }
    //长度少于6个字符
    else if (name_length < 6){
      name_msg.innerHTML = "<i class='err'></i>长度少于6个字符！";
    }
    //OK
    else {
      name_msg.innerHTML = "<i class='err success'></i>OK！";
      count.style.visibility = "hidden";
	  flag1=true;
    }
  }

//密码

  pwd.onfocus = function(){
    pwd_msg.style.display = "inline";
    pwd_msg.innerHTML = '<i class="ati"></i>6-16个字符。'
  }

  pwd.onkeyup = function(){
    //大于5字符为“中”
    if(this.value.length>5){
      aEm[1].className = "active";
      pwd2.removeAttribute("disabled");  //使得确认密码框可用
      pwd2_msg.style.display = "inline";
    }else{
      aEm[1].className = "";
      pwd2.setAttribute("disabled","");
	  pwd2.value="";
      pwd2_msg.style.display = "none";      
    }

    //大于10字符为“强”
    if(this.value.length>10){
      aEm[2].className = "active";
	  
    }else{
      aEm[2].className = "";
    }
  }


pwd.onblur = function(){
	flag2=false;
    var m = findStr(pwd.value, pwd.value[0]);

    var reg_n = /[^\d]/g;
    var reg_c = /[^a-zA-Z]/g;

	if(this.value.length>5 && this.value.length<=10){
		aEm[1].className = "active";
		aEm[2].className="";
	}else if(this.value.length>10){
		aEm[1].className = "active";
		aEm[2].className="active";
	}else{
		aEm[1].className="";
		aEm[2].className="";
	}
    //不能为空
    if(this.value==""){
      pwd_msg.innerHTML = '<i class="err"></i>密码不能为空！';
    }
    //不能用相同字符
    else if(m == this.value.length){
      pwd_msg.innerHTML = '<i class="err"></i>不能用相同字符！';
    }
    //长度应为6-16个字符
    else if(this.value.length < 6 || this.value.length > 16){
      pwd_msg.innerHTML = '<i class="err"></i>长度应为6-16个字符！';
    }
    //不能全为数字
    else if(!reg_n.test(this.value)){
      pwd_msg.innerHTML = '<i class="err"></i>不能全为数字！';
    }
    //不能全为字母
    else if(!reg_c.test(this.value)){
      pwd_msg.innerHTML = '<i class="err"></i>不能全为字母！';
    }
    //OK
    else{
      pwd_msg.innerHTML = '<i class="ok success"></i>OK！';
	  flag2=true;
    }
  }

//确认密码
//当确认密码框失去焦点的时候
  pwd2.onblur = function(){
	  flag3=false;
	//从这里开始修改，先判断正确的，再判断错误的
	if(this.value==pwd.value && pwd.value!=""){
		pwd2_msg.innerHTML = '<i class="ok success"></i>OK！';
		flag3=true;
	}else if(this.value!=pwd.value && this.value!=""){
		pwd2_msg.innerHTML = '<i class="err"></i>两次输入的密码不一致！';
	}else if(this.value==""){
		pwd2_msg.innerHTML='请再次输入密码';
	}else{
		pwd2_msg.innerHTML='不合法请求';
	}
  }
  
  var registered=document.getElementsByClassName("registered")[0];
  registered.onclick=function(){
	  if(flag1==true && flag2==true && flag3==true){
		  alert("注册成功");
	  }else{
		  alert("请输入完整的正确信息");
	  }
  }



}