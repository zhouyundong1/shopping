var top=document.querySelector('.top');
var divs=document.querySelectorAll('.top div');
var p1=document.querySelector('.p1')
var p2=document.querySelector('.p2')
var p3=document.querySelector('.p3')
var index=0;
hideDiv()
function hideDiv(){
	for(var i=0;i<divs.length;i++){
		divs[i].style.display='none';
	}
}
divs[index].style.display='block';
var timer=setInterval(function(a){
	index++;
	hideDiv()
	if (index>=3) {
		index=0
	}
	divs[index].style.display='block';
},1000)
top.onmouseover=function(){
	clearInterval(timer)
}
top.onmouseout=function(){
	timer=setInterval(function(){
		index++;
		hideDiv()
		if (index>=3) {
			index=0
		}
		divs[index].style.display='block';
	},1000)
}
p1.onclick=function(){
	index=0;
	hideDiv();
	divs[index].style.display='block';
}
p2.onclick=function(){
	index=1;
	hideDiv();
	divs[index].style.display='block';
}
p3.onclick=function(){
	index=2;
	hideDiv();
	divs[index].style.display='block';
}