$(".contain").fadeOut(1000);
setTimeout(function(){
	if($('.contain').css('display')!='block'){
		$('.contain').parents($('body')).css('background-color','#EFEFF4')
		$('.contain-dl').css('display','block')
		$('.contain').remove()
	}
},1100)
$('#password').one('touchend',function(){
	if($('#password').val()!=''&&$('#text').val()!=''){
		$('.bottom-btn').attr('disabled','true')
		$('.bottom-btn').css('background','#EA5404')
	}
})
$('.xy').on('touchend',function(){
	
	if($('.box').css('display')=='none'){
		$('.box').css('display','block')
		$('.xy').css('transform','rotate(0deg)')
	}else{
		$('.box').css('display','none')
		$('.xy').css('transform','rotate(180deg)')
	}
})
$('.news-top div').on('touchend',function(){
	var oindex = $(this).index()
	if(oindex == 0){
		window.location.href="xinxi-xiaoxi.html";
	}else if(oindex==1){
		window.location.href="xinxi-tongzhi.html";
	}else if(oindex==2){
		window.location.href="xinxi.html";
	}
})
$('.page-last li').on('touchend',function(){
	var oindex = $(this).index()
	if(oindex == 0){
		window.location.href="homepage.html"
	}else if(oindex==1){
		window.location.href="appointment.html"
	}else if(oindex==2){
		window.location.href="fabu.html"
	}else if(oindex==3){
		window.location.href="xinxi-xiaoxi.html"
	}else if(oindex==4){
		window.location.href="wo.html"
	}
})
$('.zh-right-yz').on('touchend',function(){
	var i = 60
	$('.zh-right-yz').html(i+"s后重新获取")
	$('.zh-right-yz').css({'background-color':'#C7C7C7',"color":'white'})
	var p = setInterval(function(){
		i--;
		$('.zh-right-yz').html(i+"s后重新获取")
		if(i==0){
			clearInterval(p)
			$('.zh-right-yz').html('获取验证码')
			$('.zh-right-yz').css({'background-color':'#EA5404',"color":'#FBE1DA'})
		}
	},1000)
})
$('.end-first').on('touchend',function(){
	window.location.href="wo.html"
})
$('.bottom-btn').on('touchend',function(){
	window.location.href="wo.html"
})
$('.dl-top-back').on('touchend',function(){
  	window.history.back()
})
$('.i-end-fangyuan').on('touchend',function(){
	window.location.href="wo-fangyuan.html"
})
$('.i-end-xuqiu').on('touchend',function(){
	window.location.href="wo-xuqiu.html"
})
$('.i-end-guoqi').on('touchend',function(){
	window.location.href="wo-guoqi.html"
})
$('.i-end-jiaoyi').on('touchend',function(){
	window.location.href="wo-jiaoyi.html"
})
$('.i-contain-top').on('touchend',function(){
	window.location.href="wo-ziliao.html"
})
$('.i-top-right-img').on('touchend',function(){
	window.location.href="wo-set.html"
})
$('.contain-content-set').on('touchend',function(){
	window.location.href="wo-setmeans.html"
})
$('.contain-bottom-ul-li .show').on('touchend',function(){
	$('.absolute').fadeIn(600)
})
$('.details-data-right').on('touchend',function(){
	$('.absolute-center-bottom-right').css('background','white');
	$('.absolute-center-bottom-left').css({'background':'white','color':'black'});
	$('.phone-absolute').fadeIn(600)
})
$('.absolute-center-bottom-left').on('touchstart',function(){
	$(this).css({'background':'#363636','color':'white'})
})
$('.absolute-bottom-ul .hidden').on('touchstart',function(){
	$(this).css('background',"#484848")
})
$('.absolute-bottom-ul .hidden').on('touchstart',function(){
	$('.absolute').fadeOut(600)
	$(this).css('background',"white")
})
$('.set-contain-li-right').on('touchend',function(){
	var _this = $(this)
	if($(this).find($('.set-contain-ul-li-right .round')).css('left')=='1px'){
		$(this).find($('.set-contain-ul-li-right .round')).animate({
			'left' : '40%'
		},1)
		$(this).find($('.set-contain-ul-li-right')).css('background-color','#484848')
	}else{
		$(this).find($('.set-contain-ul-li-right .round')).animate({
			'left' : '1px'
		},1)
		$(this).find($('.set-contain-ul-li-right')).css('background-color','#EA5404')
	}
})
$('.set-contain-li-right').on('touchend',function(){
	if($(this).siblings().find($('.set-contain-ul-li-left')).text()=='关于'){
		window.location.href="wo-set-about.html"
	}
})
$('.set-contain-ul-li:last').on('touchend',function(){
	window.location.href="st.html"
})
$('.set-contain-ul-li').on('touchend',function(){	
	if($(this).find($('.set-contain-ul-li-left')).text()=='清除缓存'){
		$('.absolute').fadeIn(600)
	}
})
// 
$('.absolute-center-bottom').on('touchend',function(){
	$(this).parent().parent().fadeOut(400)
})
$('.absolute-center-bottom-right').on('touchend',function(){
	$(this).css('background','#363636')
	$('.set-contain-li-right-prayer').remove()
})
var paehomewidth = $(window).width();
var paehomeheight = $(window).height()*0.6;
var pagehomeheight = paehomewidth*0.85;
var pagehome_top_height = $('.homepage-top-title').height()
$('.homepage-content-li-img').width(paehomewidth);
$('.homepage-cantain').height(pagehomeheight);
$('.homepage-top-seach').css('top',pagehome_top_height+5+'px')
$('.homepage-last').width(paehomewidth)
var pagehome_last_top_height =  $(".homepage-last-top-cantain").height()/2
$(".homepage-last-top-cantain").css('margin-top',-pagehome_last_top_height)
$(".homepage-last-top-img").css('top',$(".homepage-last-top-prayer").height()+7)
$('.homepage-last-top-hidden').width(paehomewidth);
$('.homepage-last-top-hidden').height(paehomeheight);
var homepage_hidden_top = $(".homepage-last-top").height()
var homepage_cantain_top = $('.homepage-cantain-two')
var homepage_cantain_height = $('.homepage-cantain').height()
$('.homepage-last-top-hidden').css('top',homepage_hidden_top-4);
var num = 0
$(".homepage-last-top-cantain").on('touchend',function(){

	if($(".homepage-last-top-cantain").index($(this))==$(".homepage-last-top-cantain").length-1){
		
		if(num==0){
			$(this).children().removeClass();
			$(this).children().addClass('homepage-last-top-end-img-two');
			num ++
			console.log(1)
		}else if(num==1){
			$(this).children().removeClass();
			$(this).children().addClass('homepage-last-top-end-img-three');
			num++
			console.log(2)
		}else{
			$(this).children().removeClass();
			$(this).children().addClass('homepage-last-top-cantain');
			num=0
			console.log(3)
		}
	}else{
		if($('.homepage-cantain').css('display')=='block'){
			$('.homepage-cantain').slideUp(700);
			$('.homepage-absolute').css('top',$('.homepage-last-top-hidden').height());
			// $('.homepage-cantain-two').fadeIn(800);
			$('.homepage-cantain-two').animate({
				'height':'50px'
			},800);
			$('.homepage-absolute').fadeIn(1000)
			$('.homepage-last').css('margin-top','0px');
			$('.homepage-last-top-hidden').fadeIn(1000);
			setTimeout(settime,1000)
		}else{
			$('.homepage-cantain').slideDown(700);
			// $('.homepage-cantain-two').fadeOut(1000);
			$('.homepage-last').css('margin-top','10px');
			$('.homepage-cantain-two').animate({
				'height':'0px'
			},800)
			$('.homepage-absolute').fadeOut(1000)
			$('.homepage-last-top-hidden').fadeOut(800);
		}
	}
	
})
$('.h3').find($('.right')).on('touchend',function(){
	if($(this).hasClass('right')){
		$(this).removeClass('right');
		$(this).addClass('addright')
	}else{
		$(this).removeClass('addright');
		$(this).addClass('right')
	}
})

function settime(){
	var outerHeight = $(document.body).outerHeight(true);
	var outerwidth = $(document.body).outerWidth(true);
	$('.homepage-absolute').height(outerHeight-homepage_cantain_height+50);
	$('.homepage-absolute').width(outerwidth);
}
$('.appointment-box-bottom').on('touchend',function(){
	$(this).text('已接单，待反馈');
	$(this).css({
		'width':'90%',
		'text-align':'right',
		'background':'white',
		'color':'#434343'
	})
	setTimeout(appointment,700)
})
function appointment(){
	window.location.href = 'appointment-details.html'
}
$('.details-btn').on('touchend',function(){
	$('.details-top-txt').text('订单详情');
	$('.details-end').css('display','block');
	$('.details-cantain-box').css('margin-bottom','60px');
	$(this).css('display','none');
	$('.details-hide').css('display','block')
})
$('.details-end-last').on('touchend',function(){
	$('.details-end').css('display','none');
	$('.details-hide').css('display','none');
	$('.details-btn').css('display','block');
	$('.details-last-hide').css('display','none');
})
$('.details-end-first').on('touchend',function(){
	$('.time-absolute').fadeIn(400);
	$('.details-last-hide').css('display','block');
	$('.details-cantain-box').css('margin-bottom','0px');
	$('.details-hide').css('display','none');
})
$('.details-end-first').on('touchstart',function(){
	$('.details-btn').css('display','none');
	$('.absolute-center-bottom-right').css('background','white');
	$('.absolute-center-bottom-left').css({'background':'white','color':'black'});
})
$('.myDate').blur(function(){
	$('.setTime-absolute').fadeIn(400);
	$('.setTime-ok').css('background','white');
})
$('.absolute-center-bottom-left').on('touchend',function(){
	$('.details-top-txt').text('订单详情');
	$('.details-end').css('display','block');
	$('.details-cantain-box').css('margin-bottom','60px');
	$('.details-last-hide').css('display','none');
	$('.details-btn').css('display','block');
})
$('.appointment-remove').on('touchstart',function(){
	$(this).parent().css('display','none')
})
$('.details-end-ok').on('touchend',function(){
	$('.body-absolute').css('display','block');
	$('.absolute-center-bottom-right').css('background','white');
	$('.absolute-center-bottom-left').css({'background':'white','color':'black'});
})
// $('.details-end-ok .absolute-center-bottom').on('touchend',function(){
// 	$('.body-absolute').css('display','none')
// })
var bodyheight = $(window).height()
$('.fabu-homepage').css('height',bodyheight);
$('.fabu-needs').css('height',bodyheight);
// $('.fabu-housing').css('height',bodyheight);

$('.needs-top-left').on('touchend',function(){
	$('.needs-absolute').fadeIn(400);
	$('.absolute-center-bottom-right').css('background','white');
	$('.absolute-center-bottom-left').css({'background':'white','color':'black'});
})
$('.needs-absolute .absolute-center-bottom-right').on('touchend',function(){
	$('.fabu-homepage').fadeIn(200);
	$('.fabu-needs').fadeOut(400);
})
$('.fabu-absolute .absolute-center-bottom-right').on('touchend',function(){
	$('.fabu-homepage').fadeIn(200);
	$('.fabu-needs').fadeOut(400);
})

$('.fabu-homepage-center-left').on('touchend',function(){
	$('.fabu-homepage').fadeOut(300);
	$('.fabu-needs').fadeIn(400);
})
$('.needs-top-right').on('touchend',function(){
	$('.fabu-absolute').fadeIn(200);
	$('.absolute-center-bottom-right').css('background','white');
})
$('.fabu-homepage-bottom').on('touchend',function(){
	window.history.back()
})
$('.housing-news-title-bottom-li').find($('.news-img-two').removeClass('housing-news-title-bottom-li-img-radius'))
$('.housing-news-title-bottom-li').on('touchend',function(){
	$('.housing-news-title-bottom-li').find($('.news-img-two')).removeClass('housing-news-title-bottom-li-img-radius')
	$(this).find($('.news-img-two')).addClass('housing-news-title-bottom-li-img-radius')
})
var off = true;
$('.housing-news-centent-li-right').on('touchend',function(){
	if(off){
		$(this).find($('.news-img-two')).addClass('housing-news-title-bottom-li-img-radius');
		off=false
	}else{
		$(this).find($('.news-img-two')).removeClass('housing-news-title-bottom-li-img-radius');
		off = true
	}
})
$('.housing-contain-end-btn').on('touchend',function(){
	$('.fabu-house-absolute').css({
		'top':$(document).scrollTop(),
		// 'height':$(document).height()
	})
	$('.fabu-house-absolute').fadeIn(400);
	$('.absolute-center-bottom-right').css('background','white');
})
function oimg(e){
	if(e.value!=''){
		$('.housing-add-position-img').css('display','block')
	}else{
		$('.housing-add-position-img').css('display','none')
	}
}
$('.housing-top-left').on('touchend',function(){
	$('.fabu-no-absolute').fadeIn(400);
	$('.absolute-center-bottom-right').css('background','white');
	$('.absolute-center-bottom-left').css({'background':'white','color':'black'});
})
$('.fabu-homepage-center-right').on('touchend',function(){
	$('.fabu-homepage').fadeOut(300);
	$('.fabu-housing').fadeIn(400)
})
$('.fabu-no-absolute .absolute-center-bottom-right').on('touchend',function(){
	$('.fabu-homepage').fadeIn(400)
	$('.fabu-housing').fadeOut(300)
})
$('.fabu-house-absolute .setTime-ok').on('touchend',function(){
	$('.fabu-homepage').fadeIn(400)
	$('.fabu-housing').fadeOut(300)
})