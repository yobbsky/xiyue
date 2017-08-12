//ios
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
   //alert(navigator.userAgent); 
   
   //add a new meta node of viewport in head node
	head = document.getElementsByTagName('head');
	viewport = document.createElement('meta');
	viewport.name = 'viewport';
	viewport.content = 'target-densitydpi=device-dpi, width=' + 750 + 'px, user-scalable=no';
	head.length > 0 && head[head.length - 1].appendChild(viewport);    
   
}
//android
//if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
//  //alert(navigator.userAgent);  
//  window.location.href ="iPhone.html";
//} else if (/(Android)/i.test(navigator.userAgent)) {
//  //alert(navigator.userAgent); 
//  window.location.href ="Android.html";
//} else {
//  window.location.href ="pc.html";
//};

$(function(){
	
	//active 点击样式
	document.body.addEventListener('touchstart', function () { });
	/*页面不足一屏，铺满一屏*/
	$('.layout').css('min-height',$(window).height());
	
	
	/*Home轮播*/
	function loadSlide(){
		if($('.hslide').size()>0){
			var glide = $('.hslide').glide({
	
				autoplay:false,//是否自动播放 默认值 true如果不需要就设置此值
	
				animationDuration:600, //动画过度效果，只有当浏览器支持CSS3的时候生效
				
//				animationTimingFunc: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
				
				hoverpause: true,
				
				circular: true,
				
				arrows:true, //是否显示左右导航器
				//arrowsWrapperClass: "arrowsWrapper",//滑块箭头导航器外部DIV类名
				//arrowMainClass: "slider-arrow",//滑块箭头公共类名
				//arrowRightClass:"slider-arrow--right",//滑块右箭头类名
				//arrowLeftClass:"slider-arrow--left",//滑块左箭头类名
				arrowRightText:"",//定义左右导航器文字或者符号也可以是类
				arrowLeftText:"",
				
				navigation: true, //主导航器也就是本例中显示的小方块
				navigationCenter: true,//主导航器位置是否居中
				navigationClass:"slider-nav",//主导航器外部div类名
				navigationItemClass:"slider-nav__item", //本例中小方块的样式
				navigationCurrentItemClass:"slider-nav__item--current" //被选中后的样式
				//
			});
		}
	}
	
	/*first~twice功能调用*/
	function loadFirstShow(){
		$('.f_content li .hd').click(function(){
			if($(this).parent().hasClass('on')){
				$(this).parent().removeClass('on');
			}else{
				$(this).parent().addClass('on');
			}
		})
	}
	
	/*主导航*/
	function loadMainNav(){
		$(".gh").click(function(){
			if($('.h_nav').is(':animated')) return false;
			$('.h_qrcode').fadeOut();
			$('.ui_mask').fadeOut();
			if($('.title').hasClass('selected')){
				$('.h_nav').removeClass('on').animate({'height':0},1600);
				$('.title').removeClass('selected');
				$(".hide").show();
			}
			else{
				var i = parseInt($(".h_nav ul").css('paddingTop'));
				var j = parseInt($(".h_nav ul").css('paddingBottom'));
				var h = $(".h_nav ul").height()+i+j;
				$('.h_nav').addClass('on').animate({'height':h},1600);
				$('.title').addClass('selected');
				$(".hide").hide();
			}
			return false;
		})
		
		$(".qrcode").click(function(){
			if($('.h_qrcode').is(':animated')) return false;
			if($('.h_qrcode').is(':visible')){
				$('.h_qrcode').fadeOut();
				$('.ui_mask').fadeOut();
			}
			else{
				$('.h_qrcode').fadeIn();
				$('.ui_mask').fadeIn();
			}
			return false;
		})
		
		$('.ui_mask').click(function(){
			$('.h_qrcode').fadeOut();
			$('.ui_mask').fadeOut();
		})
		
		
		
		
		
		$('.h_lists li').click(function(){
			$(this).find('.mask').show();			
		})
	}
	
	/*动画效果*/
	function loadWayPoint(){
		if($(".willUp,.willDown,.willRight,.willLeft,.willUpFast").size()>0){
			$(".willUp,.willDown,.willRight,.willLeft,.willUpFast").waypoint(function(){
	            jQuery(this).addClass('on');
	        }, { triggerOnce: true, offset: "100%" });
	        
		    $(".will").waypoint(function(){
		        jQuery(this).addClass('on');
		    }, { triggerOnce: true, offset: "80%" });
		}
	}



	/*load*/
	loadSlide();		/*Home轮播*/	
	loadFirstShow();	/*first~twice功能调用*/
	loadMainNav();      /*主导航*/
	loadWayPoint();		/*动画效果*/
})




