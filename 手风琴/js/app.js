// JavaScript Document
window.onload=function(){
	var li_list=document.getElementsByTagName("li");
	for(var i=0;i<li_list.length;i++){
		li_list[i].onmouseover=function(){
			li_list[0].className="";
			this.className="big";
		}
		li_list[i].onmouseout=function(){
				this.className="";
		}
	}
	
}