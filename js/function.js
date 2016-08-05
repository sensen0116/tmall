/*
getClass(select,[context])  获取具有指定class的元素
select 指定的className
context 指定的范围（不指定的话为document）

第一步：
    先看看有没有指定范围
第二步；
    判断浏览器类型
第三步：
    1.w3c的话直接用
    2.IE的话需要构造函数
        a.选中所有的元素
        b.声明一个空数组（用来接收指定class的元素）
        c.遍历所有的类名，如果类名与所指定的类名相同时把这个类名压入空数组中
        d.返回空数组

*/ 
// alert(1);
function getClass1(select){
	if(document.getElementsByClassName){
		console.log("w3c");
		var name=document.getElementsByClassName(select);
		return name;
	}else{
		console.log("IE");
		var all=document.getElementsByTagName("*")
		var arr=[];
		for(var i=0;i<all.length;i++){
			if(all[i].className==select){
				arr.push(all[i]);
			}
		}
		return arr;
	}
}




// 防止一个元素有多个类名（IE中会算少）
function getClass2(select){
	if(document.getElementsByClassName){
		console.log("w3c");
		var name=document.getElementsByClassName(select);
		return name;
	}else{
		console.log("IE");
		var all=document.getElementsByTagName("*")
		var arr=[];
		for(var i=0;i<all.length;i++){
			if(checkClass(all[i].className,select)){
				arr.push(all[i]);
			}
		}
		return arr;
	}
}
function checkClass2(classname,select){
	var arr1=classname.split(" ")
	for(var i=0;i<arr.length;i++){
		if(arr1[i]==select){
			return true;
		}
	}
	return false;
}



// 在指定范围内选择
function getClass(select,context){
	var context = context ? context:document;
	if(document.getElementsByClassName){
		console.log("w3c");
		var name=context.getElementsByClassName(select);
		return name;
	}else{
		console.log("IE");
		var all=context.getElementsByTagName("*")
		var arr=[];
		for(var i=0;i<all.length;i++){
			if(checkClass(all[i].className,select)){
				arr.push(all[i]);
			}
		}
		return arr;
	}
}
function checkClass(classname,select){
	var arr1=classname.split(" ")
	for(var i=0;i<arr.length;i++){
		if(arr1[i]==select){
			return true;
		}
	}
	return false;
}








/*
$(string)获取页面中的集合

".one"  获取指定类名的元素的集合
"#one"  获取指定ID的第一个元素
"div"   获取指定标签名的元素的集合

思路：
    第一步：
        判断字符串的首字符
    第二步：
        .    getClass()
        #    document.getElementById()
       标签  document.getElementsByTagName()
*/ 
// 缺陷：只能判断一个数值
function $1(selector){
	if(selector.charAt(0)=="."){
		return getClass(selector.slice(1));
	}else if(selector.charAt(0)=="#"){
		return document.getElementById(selector.slice(1));
	}else if(/^[a-z][a-z1-6]{0,8}/.test(selector)){
		return document.getElementsByTagName(selector);
	}
}

// 可以增加函数功能
function $2(selector,context){
	var context=context||document
	if(selector.charAt(0)=="."){
		return getClass(selector.slice(1),context);
	}else if(selector.charAt(0)=="#"){
		return document.getElementById(selector.slice(1));
	}else if(/^[a-z][a-z1-6]{0,8}/.test(selector)){
		return context.getElementsByTagName(selector);
	}
}


function $(selector,context){
	if(typeof selector=="string"){
		var context=context||document
	    if(selector.charAt(0)=="."){
		    return getClass(selector.slice(1),context);
	    }else if(selector.charAt(0)=="#"){
		    return document.getElementById(selector.slice(1));
	    }else if(/^[a-z][a-z1-6]{0,8}/.test(selector)){
		    return context.getElementsByTagName(selector);
	    }
	}else if(typeof selector=="function"){
		window.onload=function(){
			selector();
		}
	}
}










/*
setContent(obj;val)
obj 
val 所修改的内容 （有的话是修改   没的话是返回值）
第一步：判断val有木有
第二步：判断浏览器类型
*/

function setContent(obj,val){
    for(var i=0;i<obj.length;i++){
        if(val){
            if(obj[i].innerText){
                obj[i].innerText=val;
            }else{
                obj[i].textContent=val;
            }
        }else{
            if(obj[i].innerText){
                return innerText[i];
            }else{
                return textContent[i];
            }
        }
    } 
}



// 用来获取指定元素的指定的元素
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr]
	}
}






