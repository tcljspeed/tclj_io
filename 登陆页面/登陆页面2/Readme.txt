// JavaScript Document
function getname(classname){
	return document.getElementsByClassName(classname);
}

window.onload=function(){
	var flag1=true;
	var flag2=true;
	var land_img=getname("land-img")[0];		//��ά��ͼƬ
	var land_img_r=getname("land-img-r")[0];   //��ά���ұߵ�ͼƬ
		username=getname("username")[0]			//�û��������
		pass_word=getname("pass_word")[0]			//���������
		title_text1=getname("title_text1")[0]	//ɨ���½��ť
		title_text2=getname("title_text2")[0]	//�˻���½��ť
		land_b=getname("land-b")[0]				//�˻���½������
		land_code=getname("land-code")[0]		//��ά���½������
	
	title_text1.onclick=function(){		//�����ɨ�밴ť��
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
	
	
	//�����ά��
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
					//Ϊtrue��ʾ��ά���ƶ������ˣ���ʱ���ܵ����Ƴ����¼�
					flag1=true;
					flag2=false;
				}
			},30)
	 	}
		if(flag2==true){
			movx();
		} 
	}
	//�Ƴ���ά��
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
						//�Ƴ���������ܵ��������¼�
						flag1=false;
						flag2=true;
					}
					movy();
				}
			},30)
	 	}
		//ֻ��Ϊtrueʱ���ܵ����Ƴ��¼�
		if(flag1==true){
			movy();	
		}
		 
	}
	
	
}