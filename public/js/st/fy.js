var startX,moveX;
var dom = document.getElementsByClassName('i-contain-right');
var othis
for(var i=0;i<dom.length;i++){
	dom[i].addEventListener('touchstart',function(e){
		var th = e.touches[0];
		startX = th.clientX;
	})
	dom[i].addEventListener('touchmove',function(e){
		var th = e.touches[0];
		moveX = th.clientX;
		if(startX-moveX>20){
			$(this).find($('.i-right-remove')).css('right','0px')
		}else if(startX-moveX<20){
			$(this).find($('.i-right-remove')).css('right','-95px')
		}
	})
}