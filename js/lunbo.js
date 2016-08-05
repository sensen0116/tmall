$(function(){
	var images=$("a",$(".box")[0]);
	var lis=$("li",$(".window")[0]);
	var win=$(".window")[0];
	var left=$(".Left")[0];
    var right=$(".Right")[0];
    var ul=$("ul",$(".window")[0])

    /*获取图片宽度*/
    var widths=parseInt(getStyle(win,"width"));
    /*初始化状态*/
    lis[0].style.background="red";
	for (var i = 0; i < images.length; i++) {
		if (i==0) {
			continue;
		}
		images[i].style.left=widths+"px";
	}
	var index=0;
	var next=0;
	var flag=true;
	var t=setInterval(moveR,1800);
	function moveL(){
		// 更新next
		next--;
		// 判断边界
		if (next<0) {
			next=images.length-1;
		};
		lis[index].style.background="#ccc";
		lis[next].style.background="red";
		// 让下一张图片就位
		images[next].style.left=-widths+"px";
		// 做动画，让下一张图片left：-widths；当前图片的left：0
		animate(images[index],{left:widths},Tween.Quad.easeIn,function(){flag=true;});
		animate(images[next],{left:0},Tween.Quad.easeIn,function(){flag=true;});
		// 更新index
		index=next;
	}
	function moveR(){
		// 更新next
		next++;
		// 判断边界
		if (next==images.length) {
			next=0;
		};
		lis[index].style.background="#ccc";
		lis[next].style.background="red";
		// 让下一张图片就位
		images[next].style.left=widths+"px";
		// 做动画，让下一张图片left：-widths；当前图片的left：0
		animate(images[index],{left:-widths},Tween.Quad.easeIn,function(){flag=true;});
		animate(images[next],{left:0},Tween.Quad.easeIn,function(){flag=true;});
        
		// 更新index
		index=next;
	}
	win.onmouseover=function(){
		clearInterval(t);
		animate(left,{opacity:1})
		animate(right,{opacity:1})
		animate(lis,{opacity:1})

	}
	win.onmouseout=function(){ 
		t=setInterval(moveR,1800);
		animate(left,{opacity:0})
		animate(right,{opacity:0})
		animate(lis,{opacity:0})
	}
	for (var i = 0; i < lis.length; i++) {
		lis[i].index=i;
		lis[i].onclick=function(){
			if (index==this.index) {return};
			if (this.index>index) {
                images[this.index].style.left=widths+"px";
		        animate(images[index],{left:-widths},Tween.Quad.easeIn,function(){flag=true;});
		        animate(images[this.index],{left:0},Tween.Quad.easeIn,function(){flag=true;});
		        lis[index].style.background="#ccc";
		        lis[this.index].style.background="red";
			}else if(this.index<index){
				images[this.index].style.left=-widths+"px";
		        animate(images[index],{left:widths},Tween.Quad.easeIn,function(){flag=true;});
		        animate(images[this.index],{left:0},Tween.Quad.easeIn,function(){flag=true;});
		        lis[index].style.background="#ccc";
		        lis[this.index].style.background="red";
			}
		    
		    next=this.index;
		    index=this.index;   
	    }
	}
	right.onclick=function(){
		if (flag) {
			flag=false;
			moveR();
		}
				
	}
	left.onclick=function(){
		if (flag) {
			flag=false;
			moveL();
		}
				
	}






	// 我的天猫下拉框
	var c2=$(".c2")
	var list=$(".list")
	for(var i=0;i<c2.length;i++){
		c2[i].index=i;
		c2[i].onmouseover=function(){
			list[this.index].style.display="block"
		}
		c2[i].onmouseout=function(){
			for(var j=0;j<list.length;j++){
			list[j].style.display="none"
		}
		}
	}
    // 收藏夹下拉框
    
	var c3=$(".c3")[0]
	var list1=$(".list1")[0]
	
		
		c3.onmouseover=function(){
			list1.style.display="block"

		}
		c3.onmouseout=function(){
			
			list1.style.display="none"
		
		}



	// 手机淘宝下拉框

var c4=$(".c4")
	var list2=$(".list2")
	for(var i=0;i<c4.length;i++){
		c4[i].index=i;
		c4[i].onmouseover=function(){
			list2[this.index].style.display="block"
		}
		c4[i].onmouseout=function(){
			for(var j=0;j<list.length;j++){
			list2[j].style.display="none"
		}
		}
	}

// 商家支持下拉框
 	var c5=$(".c5")[0]
	var list3=$(".list3")[0]
	
		
		c5.onmouseover=function(){
			list3.style.display="block"

		}
		c5.onmouseout=function(){
			
			list3.style.display="none"
		
		}

    var c6=$(".c6")[0]
	var list4=$(".list4")[0]
	
		
		c6.onmouseover=function(){
			list4.style.display="block"

		}
		c6.onmouseout=function(){
			
			list4.style.display="none"
		
		}








// 左侧所有右拉框
var nz=$(".nz")
	var list5=$(".list5")
	for(var i=0;i<nz.length;i++){
		nz[i].index=i;
		nz[i].onmouseover=function(){
			list5[this.index].style.display="block"
		}
		nz[i].onmouseout=function(){
			
			list5[this.index].style.display="none"
		
		}
	}




	// 右侧黑块动画
	var heikuai=$(".heikuai")[0];
	console.log(heikuai)
	heikuai.onmouseover=function(){
	heikuai.style.opacity="0.9";
	}
		heikuai.onmouseout=function(){
	heikuai.style.opacity="0.7";
	}



// 主会场动画
// var baitu=$(".baitu")[0];
// baitu.onmouseover=function(){
// 	baitu.style.opacity="0.2"
// }
// baitu.onmouseout=function(){
// 	baitu.style.opacity="0"
// }




var baitu=$(".baitu")
	console.log(baitu)
	for(var i=0;i<baitu.length;i++){
		baitu[i].index=i;
		baitu[i].onmouseover=function(){
			baitu[this.index].style.opacity="0.2"
		}
		baitu[i].onmouseout=function(){
			baitu[this.index].style.opacity="0"
			
		
		}
	}

// 热门品牌右侧动画

	var mask=$(".mask")

	for(var i=0;i<mask.length;i++){
		mask[i].index=i;
		mask[i].onmouseover=function(){
			mask[this.index].style.opacity="0.8"
		}
		mask[i].onmouseout=function(){
			mask[this.index].style.opacity="0"
			
		
		}
	}



	var back=$(".back")[0];

	var obj=document.body.scrollTop?document.body:document.documentElement;
    var scrollTop=obj.scrollTop;
    back.onclick=function(){
    animate(obj,{scrollTop:0});
}


//     var qzsg=$(".qzsgan")[0];
// 	console.log(qzsg);
// 	var obj=document.body.scrollTop?document.body:document.documentElement;
//     var scrollTop=obj.scrollTop;
//     qzsg.onclick=function(){
//     animate(obj,{scrollTop:2000})
// }


// 点击哪个楼层跳转挨个写
    var qzsg=$(".qzsgan")[0];
	// var obj=document.body.scrollTop?document.body:document.documentElement;
 //    var scrollTop=obj.scrollTop;
    qzsg.onclick=function(){
    animate(obj,{scrollTop:2080})
}


    var hwcx=$(".hwcxan")[0];
	// var obj=document.body.scrollTop?document.body:document.documentElement;
 //    var scrollTop=obj.scrollTop;
    hwcx.onclick=function(){
    animate(obj,{scrollTop:2590})
}

    var dzac=$(".dzacan")[0];
	// var obj=document.body.scrollTop?document.body:document.documentElement;
 //    var scrollTop=obj.scrollTop;
    dzac.onclick=function(){
    animate(obj,{scrollTop:3180})
}

    var jjsh=$(".jjshan")[0];
	// var obj=document.body.scrollTop?document.body:document.documentElement;
 //    var scrollTop=obj.scrollTop;
    jjsh.onclick=function(){
    animate(obj,{scrollTop:3680})
}
    var cdkw=$(".cdkwan")[0];
	// var obj=document.body.scrollTop?document.body:document.documentElement;
 //    var scrollTop=obj.scrollTop;
    cdkw.onclick=function(){
    animate(obj,{scrollTop:4290})
}

   var mlrs=$(".mlrsan")[0];
	// var obj=document.body.scrollTop?document.body:document.documentElement;
 //    var scrollTop=obj.scrollTop;
    mlrs.onclick=function(){
    animate(obj,{scrollTop:4790})
}
   var cnxh=$(".cnxhan")[0];
	// var obj=document.body.scrollTop?document.body:document.documentElement;
 //    var scrollTop=obj.scrollTop;
    cnxh.onclick=function(){
    animate(obj,{scrollTop:6240})
}


       var ssflag=true
       var ssk=$(".sspfk")[0];
       var arr=[];
       arr.push(2080,2590,3180,3680,4290,4790,6240);
     // console.log(arr)
       var jump=$(".jump")[0];


        var cw=document.documentElement.clientWidth;
       	var ch=document.documentElement.clientHeight;
       	var dptpl=$(".dptpl");
       	// var dptpl2=$(".dptpl")[1];
       	// console.log(dptpl)
        window.onscroll=function(){
       var obj=document.body.scrollTop?document.body:document.documentElement;
       var scrollTop=obj.scrollTop
   // 中部内容按需加载
   for(var i=0;i<dptpl.length;i++ ){
          		if(ch+scrollTop>=arr[i]+350){
          			var imgs=$("img",dptpl[i]);
          			for(var j=0;j<imgs.length;j++){
                  

          				imgs[j].src=imgs[j].getAttribute("imgpath")


                  }
          			}
          		}


      // 下部奶瓶按需加载

      var arr1=[];
      var tgjk=$(".tgjk")
      console.log(tgjk)
      for(var i=0;i<tgjk.length;i++){
                 arr1.push(tgjk[i].offsetTop);

            	}
      
      console.log(arr1)


      for(var i=0;i<tgjk.length;i++ ){
          		if(ch+scrollTop>=arr1[i]+250){
          			var imgs=$("img",tgjk[i]);
          			for(var j=0;j<imgs.length;j++){
                  

          				imgs[j].src=imgs[j].getAttribute("impath")


                  }
          			}
          		}









                
          		
          		














      if(scrollTop>="1000"){
      	

        if(ssflag){
           ssflag=false;
          animate(ssk,{top:0})
          animate(jump,{opacity:1})
          
      }
        
      }else {
        if(!ssflag){
            ssflag=true;   
          animate(ssk,{top:-50})
          animate(jump,{opacity:0})
          
          
        }
        
      }

      
     
              // 滚 到哪个楼层，哪个楼层灯亮
              // if(!flag)return
              
              if(scrollTop>=arr[0]){
                    
                      // lis[j],index=j;
                    qzsg.className="qzsgan1"
                    hwcx.className="hwcxan"
                    dzac.className="dzacan"
                    jjsh.className="jjshan"
                    cdkw.className="cdkwan"
                    mlrs.className="mlrsan"
                    cnxh.className="cnxhan"

                 if(scrollTop>=arr[1]){
                 	qzsg.className="qzsgan"     
                 
                    hwcx.className="hwcxan1"
                    dzac.className="dzacan"
                    jjsh.className="jjshan"
                    cdkw.className="cdkwan"
                    mlrs.className="mlrsan"
                    cnxh.className="cnxhan"

                 if(scrollTop>=arr[2]){
                 	qzsg.className="qzsgan"     
                    hwcx.className="hwcxan"
                    dzac.className="dzacan1"

                    jjsh.className="jjshan"
                    cdkw.className="cdkwan"
                    mlrs.className="mlrsan"
                    cnxh.className="cnxhan"
                 if(scrollTop>=arr[3]){
                 	qzsg.className="qzsgan"     
                    hwcx.className="hwcxan"
                    dzac.className="dzacan"
                    jjsh.className="jjshan1"
                    cdkw.className="cdkwan"
                    mlrs.className="mlrsan"
                    cnxh.className="cnxhan"
                    if(scrollTop>=arr[4]){
                 	qzsg.className="qzsgan"     
                    hwcx.className="hwcxan"
                    dzac.className="dzacan"
                    jjsh.className="jjshan"
                    cdkw.className="cdkwan1"
                    mlrs.className="mlrsan"
                    cnxh.className="cnxhan"
                    if(scrollTop>=arr[5]){
                 	qzsg.className="qzsgan"     
                    hwcx.className="hwcxan"
                    dzac.className="dzacan"
                    jjsh.className="jjshan"
                    cdkw.className="cdkwan"
                    mlrs.className="mlrsan1"
                    cnxh.className="cnxhan"
                    if(scrollTop>=arr[6]){
                 	qzsg.className="qzsgan"     
                    hwcx.className="hwcxan"
                    dzac.className="dzacan"
                    jjsh.className="jjshan"
                    cdkw.className="cdkwan"
                    mlrs.className="mlrsan"
                    cnxh.className="cnxhan1"
                    
                 }
                 }
                 }
                 }
                 }
               }
           }
               
               
                
                 

          	

          	






}


// 超级大牌鼠标挪上去动画
// var image86=$(".image86")[0];
// var cjdp4=$(".cjdp4")[0];
// console.log(image86)
// var imw=image86.offsetWidth;
// var imh=image86.offsetHeight;

// console.log(imw);
// cjdp4.onmouseover=function(){
// 	// alert(1);
// animate(image86,{imw:299});
// }

 
var clqy=$(".clqy")[0]

var clqyimg=$("img",clqy);
// console.log(clqyimg)
clqyimg[1].onmouseover=function(){
	animate(clqyimg[1],{width:152,height:152});
}
clqyimg[1].onmouseout=function(){
	animate(clqyimg[1],{width:142,height:142});
}
clqyimg[2].onmouseover=function(){
	animate(clqyimg[2],{width:152,height:152});
}
clqyimg[2].onmouseout=function(){
	animate(clqyimg[2],{width:142,height:142});
}
clqyimg[4].onmouseover=function(){
	animate(clqyimg[4],{width:152,height:152});
}
clqyimg[4].onmouseout=function(){
	animate(clqyimg[4],{width:142,height:142});
}
clqyimg[5].onmouseover=function(){
	animate(clqyimg[5],{width:152,height:152});
}
clqyimg[5].onmouseout=function(){
	animate(clqyimg[5],{width:142,height:142});
}



clqyimg[7].onmouseover=function(){
	animate(clqyimg[7],{width:152,height:152});
}
clqyimg[7].onmouseout=function(){
	animate(clqyimg[7],{width:142,height:142});
}
clqyimg[8].onmouseover=function(){
	animate(clqyimg[8],{width:152,height:152});
}
clqyimg[8].onmouseout=function(){
	animate(clqyimg[8],{width:142,height:142});
}



clqyimg[10].onmouseover=function(){
	animate(clqyimg[10],{width:152,height:152});
}
clqyimg[10].onmouseout=function(){
	animate(clqyimg[10],{width:142,height:142});
}
clqyimg[11].onmouseover=function(){
	animate(clqyimg[11],{width:152,height:152});
}
clqyimg[11].onmouseout=function(){
	animate(clqyimg[11],{width:142,height:142});
}

clqyimg[13].onmouseover=function(){
	animate(clqyimg[13],{width:152,height:152});
}
clqyimg[13].onmouseout=function(){
	animate(clqyimg[13],{width:142,height:142});
}
clqyimg[14].onmouseover=function(){
	animate(clqyimg[14],{width:152,height:152});
}
clqyimg[14].onmouseout=function(){
	animate(clqyimg[14],{width:142,height:142});
}




// 顶部我的淘宝左右侧边框
// var wdtb1=$(".wdtb1")[0];
// var wdtb1a=$(".wdtb1a")[0];
// wdtb1.onmouseover=function(){
// 	wdtb1a.style.border="#000"
// }
var list1=$(".list1")[0];
var scja=$(".scja")[0];


list1.onmouseover=function(){
	scja.style.background="#fff"
}
list1.onmouseout=function(){
	scja.style.background="#f2f2f2"
}
scja.onmouseover=function(){
	scja.style.background="#fff"
}
scja.onmouseout=function(){
	scja.style.background="#f2f2f2"
}


var list4=$(".list4")[0];
var wzdh6=$(".wzdh6")[0];
var wzdh6a=$("a",wzdh6)[0]
wzdh6.onmouseover=function(){
	wzdh6a.style.background="#fff"
	wzdh6a.style.borderColor="#e5e5e5"

}
wzdh6.onmouseout=function(){
	wzdh6a.style.background="#f2f2f2"
	wzdh6a.style.borderColor="#f2f2f2"
	
}
list4.onmouseover=function(){
	wzdh6a.style.background="#fff"
	wzdh6a.style.borderColor="#e5e5e5"
}
list4.onmouseout=function(){
	wzdh6a.style.background="#f2f2f2"
	wzdh6a.style.borderColor="#f2f2f2"

}









// 上边猫头
var tmcs2i=$(".tmcs2i")[0];
var tmgj1i=$(".tmgj1i")[0];

var tmcs2=$(".tmcs2")[0];
var tmgj1=$(".tmgj1")[0];
var tmhy=$(".tmhy")[0];
var tmhyi=$(".tmhyi");
console.log(tmhyi)

var tmhyli=$("li",tmhy)


tmcs2.onmouseover=function(){
	animate(tmcs2i,{top:-20})
	tmcs2i.style.display="block"
}
tmcs2.onmouseout=function(){
	animate(tmcs2i,{top:-10})
	tmcs2i.style.display="none"
}
tmgj1.onmouseover=function(){
	animate(tmgj1i,{top:-20})
	tmgj1i.style.display="block"
}
tmgj1.onmouseout=function(){
	animate(tmgj1i,{top:-10})
	tmgj1i.style.display="none"
}
for(var i=0; i<tmhyli.length;i++){
	console.log(222222)
	tmhyli[i].index=i;
	tmhyli[i].onmouseover=function(){
	
		
		animate(tmhyi[this.index],{top:-12})
	tmhyi[this.index].style.display="block"
	}


		tmhyli[i].onmouseout=function(){
	
		
		animate(tmhyi[this.index],{top:-6})
	tmhyi[this.index].style.display="none"
	}

}



// 右侧出现黑块
var yctps1=$(".yctps1");
var ycgwczuo=$(".ycgwczuo");
for(var i=0;i<yctps1.length;i++){
yctps1[i].index=i;

yctps1[i].onmouseover=function(){
	ycgwczuo[this.index].style.display="block"

	animate(ycgwczuo[this.index],{left:-105})

}
yctps1[i].onmouseout=function(){
	ycgwczuo[this.index].style.display="none"
	animate(ycgwczuo[this.index],{left:-120})

}


}




var yctps3=$(".yctps3")[0];
var ewm88=$(".ewm88")[0];
yctps3.onmouseover=function(){
	ewm88.style.display="block"
}
yctps3.onmouseout=function(){
	ewm88.style.display="none"
}





// 右侧返回顶部

var ycfh=$(".ycfh")[0]
ycfh.onclick=function(){
	animate(obj,{scrollTop:0})
}


















  



	

})