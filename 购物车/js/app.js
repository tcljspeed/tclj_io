// JavaScript Document
window.onload=function(){
	function getname(className){
		return document.getElementsByClassName(className);
	}
	//获取元素
	var checkall=getname("checkall");		//顶部全选框
		checkboxs=getname("check");
		reduce=getname("reduce");					//商品数量减少按钮集合
		add=getname("add");							//商品数量增加按钮集合
		row_det=getname("row_det");					//每一行的删除按钮集合
		bottom_det=getname("bottom_det")[0];		//底部删除按钮
		goods_total=document.getElementById("goods_total");		//商品数量总计
		total_put=getname("arrow");			//展开
		price_total=document.getElementById("price_total");		//总价		
		trs=getname("tab_container")[0].children[1].rows;		//获取到表格所有tbody的行
		table=getname("tab_container")[0];
		show_shoplist=getname("show-shoplist")[0];
		foot_shopview=getname("selected-view")[0];
		
		//每行的小计,传递了参数每行
		function rowTotal(tr){
			var singlePrice=parseFloat(tr.getElementsByTagName("span")[0].innerHTML);
			var tr_count=parseInt(tr.getElementsByTagName("input")[1].value);
			var tr_price=parseFloat(singlePrice*tr_count);
			var show_trprice=tr.getElementsByTagName("span")[3];
			show_trprice.innerHTML=tr_price.toFixed(2);
		}
		
		//计算总价
		function totalPrice(){
			var count=0;
			var totalprice=0;
			var insertImg="";
			for(var i=0;i<trs.length;i++){
				if(trs[i].getElementsByTagName("input")[0].checked){
					count+=parseInt(trs[i].getElementsByTagName("input")[1].value);
					totalprice+=parseFloat(trs[i].getElementsByTagName("span")[3].innerHTML);
					insertImg+='<div><img src="'+trs[i].getElementsByTagName("img")[0].src+'"><span>取消选择</span></div>';
				}
			}
			show_shoplist.innerHTML=insertImg;
			price_total.innerHTML=totalprice.toFixed(2);
			goods_total.innerHTML=count;
		}
		//复选框点击事件
		
		for(var i=0;i<checkboxs.length;i++){
			checkboxs[i].onclick=function(){
				if(this.className==="check checkall"){
					for(var j=0;j<checkboxs.length;j++){
						checkboxs[j].checked=this.checked;
					}
				}
				if(this.checked==false){
					for(var k=0;k<checkall.length;k++){
						checkall[k].checked=false;
					}
				}
				totalPrice();
			}
		}
		
		
		for(var i=0;i<trs.length;i++){
			var a=trs[i];
			//键盘事件
			a.getElementsByTagName("input")[1].onkeyup=function(){
				var val = parseInt(this.value);
				var tr=this.parentNode.parentNode;			//局部变量，每一行
				if (isNaN(val) || val <= 1) {
                	val = 1;
					tr.getElementsByTagName("span")[1].innerHTML=" ";					
            	}
				this.value=val;
				if(val>1){
					tr.getElementsByTagName("span")[1].innerHTML="-";
				}
				rowTotal(tr);
				totalPrice();
			}
			//减少按钮事件
			a.getElementsByTagName("span")[1].onclick=function(){
				var tr=this.parentNode.parentNode;			//局部变量，每一行
				var val=parseInt(tr.getElementsByTagName("input")[1].value);	//输入框的值
				if(val<=1){
					val=1;
					tr.getElementsByTagName("span")[1].innerHTML=" ";					
				}
				if(val>1){
					val=val-1;
					tr.getElementsByTagName("input")[1].value=val;				
				}
				rowTotal(tr);
				totalPrice();
			}
			//增加按钮事件
			a.getElementsByTagName("span")[2].onclick=function(){
				var tr=this.parentNode.parentNode;			//局部变量，每一行
				var val=parseInt(tr.getElementsByTagName("input")[1].value);	//输入框的值
				if(val<1){
					val=1;				
				}
				if(val>=1){
					val=val+1;
					tr.getElementsByTagName("input")[1].value=val;
					tr.getElementsByTagName("span")[1].innerHTML="-";				
				}
				rowTotal(tr);
				totalPrice();
			}
			
			//每行的删除事件
			a.getElementsByTagName("a")[2].onclick=function(){
				var tr=this.parentNode.parentNode;			//局部变量，每一行
				var sure=confirm("Are you sure delete?");
				if(sure){
					tr.parentNode.removeChild(tr);
					totalPrice();
				}
			}
		}
		
		//底部删除事件
		bottom_det.onclick=function(){
			var sure=confirm("确认删除选中项？");
			if(sure){
				for(var i=0;i<checkboxs.length;i++){
					if(checkboxs[i].className==="check checkall" && checkboxs[i].checked){	//如果全选选中了
						table.removeChild(trs[0].parentNode);
						console.log(checkboxs[i]);
						return;
					}
					if(checkboxs[i].className==="check" && checkboxs[i].checked){
						trs[0].parentNode.removeChild(trs[i-1]);
						console.log(trs[i]);
					}
					
				}
			}		
		}	
			
			total_put[0].onclick=function(e){
				if(goods_total.innerHTML>=1){
					foot_shopview.style.display="block";
					total_put[0].className="arrow total_up hidden";
					total_put[1].className="arrow total_down"
					e.stopPropagation();
				}else{
					foot_shopview.style.display="none";
					e.stopPropagation();
				}
			}
			total_put[1].onclick=function(){
				total_put[0].className="arrow total_up";
				total_put[1].className="arrow total_down hidden"
				foot_shopview.style.display="none";
				e.stopPropagation();
			}
			
	
		
		
}