var startX,startY,moveX,moveY,fs=14;

var dom = document.getElementsByClassName('md')[0]

dom.addEventListener('touchstart',function(e){
	var th = e.touches[0];
	startX = th.clientX;
	startY = th.clientY;
})

dom.addEventListener('touchmove',function(e){
	var th = e.touches[0];
	moveX = th.clientX;
	moveY = th.clientY;
	if(moveX-startX>=50){
		fs+=2
		if(fs>=50){
			fs=50
		}
		dom.style.fontSize = fs+'px'
	}else if(startX-moveX>=10){
		fs-=2
		if(fs<=14){
			fs = 14
		}
		dom.style.fontSize = fs+'px'
	}
})

dom.addEventListener('touchend',function(e){
	
})