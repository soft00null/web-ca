// JavaScript Document
if (Modernizr.touch) {
    window.addEventListener("load", function() {
        setTimeout(function() {
            window.scrollTo(0, 1);
        }, 0);
    });
}

$(document).ready(function(e) {
	/*30-3-2015*/
	if (!Modernizr.touch) {

	}/* else {
		$('a.dropDown').on('click', function(e){
			var hrefAtt = $(this).attr('data-target');
			$('html, body').animate({
				scrollTop: $("#"+hrefAtt).offset().top
			});
		});
	}*/
	$('#ServRadBtn2').on('click', function(){
            var carLink = $("#carLink").val()
            window.location= carLink;
        });

	//homepage banner
	$('.bannerSection').flexslider({
		animation: "fade",
		slideshowSpeed: 4000,
		directionNav: false,
		controlNav: false
	});

	$('footer ul li:last-child').css({background: 'none'});

	//bg cover
	$('.fullBg').each(function(index, element) {
        var imgBg = $(this).find('.bgImg').attr('src');
		$(this).css('background-image', 'url(' + imgBg + ')');
    });

	//home page tab
	$('ul.tabs-menu li:first-child').addClass('current');
	$('ul.tabs-menu li a').on('click touchend', function(event) {
        event.preventDefault();
        $(this).parent().addClass('current');
        $(this).parent().siblings().removeClass('current');
        var tab = $(this).attr('href');
        $('.tab-content').not(tab).css('display', 'none');
        $(tab).fadeIn();
    });

	// Scroll Animation
	$('*[data-animated]').addClass('animated');

	//parallex
	//$('.bannerSection').parallax("50%", 0.5);
	$('#workUs').parallax("50%", 0.5);

	$('.menuTigger').on('click', function(){
		$('body, .menu, .menuWrap').toggleClass('open');
		//alert('fdjhgjuhfd');
	});

	$('.menu ul li a').on('click', function(){
		$(this).parents().removeClass('open');
	});

	$('.sideBarList ul li ul').parent().addClass('subList');
	$('.sideBarList ul li a').on('click', function(){
		if(!$(this).parent().hasClass('open')){
			$(this).parent().siblings('li').removeClass('open');
			$(this).parent().siblings('li').find('>ul').slideUp();
			$(this).parent().addClass('open');
			$(this).parent().find('>ul').slideDown();
		} else {
			$(this).parent().removeClass('open');
			$(this).parent().find('>ul').slideUp();
		}
	});


	/* Equal height */
	$('.addres-wrapper .col-xs-6, .client-blk ul li').matchHeight();

	//function calling

	$('#fileupload').customFile();
	$('.file-upload-input').addClass('textBox').attr('placeholder','UPLOAD RESUME');
	$('.file-upload-button').addClass('btn-form');
    setScreen();

	$('#mainBlock .menu ul li a').on('click', function(e){
		var scrollAtt = $(this).attr('href');
		$('#banner').slideUp(500, function(){
			$('html, body').animate({
				scrollTop: $(scrollAtt).offset().top - 72
			}, 800);
		});
		return false;
	});

	// Window Location
	$('footer ul li a').on('click', function(e) {
        var locationHash = this.hash;
		$('html, body').animate({
			scrollTop:$(locationHash).offset().top-100
		}, 1000);
    });

	var locationHash = window.location.hash;
	if(locationHash.length>0){
		if(locationHash=="#whoWe"){
			$('#banner').slideUp(function(){
				$('html, body').animate({
					scrollTop:$('#whoWe').offset().top-100
				}, 1000);
			});
		} else {
			$('html, body').animate({
				scrollTop:$(locationHash).offset().top-100
			}, 1000);
		}
   	}
 //   	if($('.bxslider').length>0){
	//    	$('.bxslider').bxSlider({
	// 		mode: 'vertical',
	// 		auto: true,
	// 		autoHover: true,
	// 		slideMargin: 5,
	// 		touchEnabled: true,
	// 		oneToOneTouch: true,
	// 		pager:false,
	// 		pause: 7000,
	// 		controls: false
	// 	});
	// }
	if($('.bxslider').length>0){


		$('.pdflink').on({
			click: function(e){
				var url = window.location.href, thisAttr = $(this).attr('data-href'), finalurl =  url.substring(0,url.lastIndexOf("/"));
				window.open(
				  thisAttr,
				  '_blank'
				);
			},
		});
	}
	$('.news-widget').each(function(){
		var n = $(this).find('li').length;
		$(this).find('.bxslider').bxSlider({
			mode: 'vertical',
			ticker: true,
			speed: 4000*n,
		  	slideMargin: 20,

		});
	});
	// $('.bxslider').bxSlider({
	// mode: 'vertical',
	//   maxSlides: 1,
	//   ticker: true,
	//   speed: 180000
	// });
	if($('.select_option').length>0) {
		$('.select_option').selectmenu();
	}
});

function setScreen(){
  var winWidth = $(window).width();
  var winHeight = $(window).height();
  var headerHeg =$('.menuWrap').innerHeight();
  var banContent = $('.bannerContent').innerHeight();
  var whowr =$('.who-Wrap').innerHeight();
  var totalHeg = winHeight- headerHeg;
  $('.bannerContent').css({marginTop:-(banContent/2)});
  $('.mainContent').css({height:totalHeg});
  $('.bannerHeight, #introBanner').css({height:winHeight});

	if(winWidth<=568){
		$('.formRow').each(function(index, element) {
          $(this).find('.errorBox').insertAfter($(this).find('.formInnerField'))
        });
	}else{
		$('.formRow').each(function(index, element) {
          $(this).find('.errorBox').insertBefore($(this).find('.formInnerField'))
        });
	}

}

$(window).load(function(){
	$('body').animate({opacity:1});

	setScreen();
	// Scroll Animation
	var animated_contents = function() {
		$(".animated:appeared").each(function (i) {
			var $this    = $(this),
				animated = $(this).data('animated');
			setTimeout(function () {
				$this.addClass(animated);
			}, 70 * i);

		});
	}
	animated_contents();

	$(window).scroll(function () {
		animated_contents();
	});
});

$(window).on('orientationchange', function() {
	setScreen();
});
if (!Modernizr.touch) {
	$(window).on('scroll', function() {
		var sct = $(window).scrollTop();
		var stoff = $(window).height()-40;
		if(sct>stoff){
			$('.menuWrap').addClass('sticky');
		} else {
			$('.menuWrap').removeClass('sticky');
		}
	});
}

$(window).resize(function(){
	setScreen();
});
if (!Modernizr.touch || $(window).width()>1024) {
	$(window).scroll(function(e) {
		var headerHeg =$('.menuWrap').innerHeight();
		$('#banner').slideUp(500, function(){
			$('.menuWrap').addClass('sticky');
		});
		if($('#banner').is(':visible')){
			$('html, body').scrollTop(0);
		}
		$("section").each(function(index) {
			var offset = $(this).offset().top;
			if ($(window).scrollTop() >= offset - headerHeg) {
				$('#mainBlock nav > ul > li > a').removeClass('active');
				$('#mainBlock nav > ul > li').eq(index).children('a').addClass('active');
			}
		});
	});

	$('a.dropDown').on('click', function(e){
		var hrefAtt = $(this).attr('data-target');
		$('#banner').slideUp(500, function(){
			$('html, body').animate({
				scrollTop: $("#"+hrefAtt).offset().top - 70
			}, 800);
		});
		//return false;
	});
        $('.pagination').on('click',function(etm){
           var opage = $('.opage').attr('href');
           $('.newsPage').load(opage);
        });
}
if (Modernizr.touch && $(window).width()<=1024) {
	function setScroll(){
		$('#banner').hide();
		$('.menuWrap').addClass('sticky');
		$('html, body').animate({
			scrollTop:0
		}, 400)
		setTimeout(function(){$(window).off('scroll');}, 200);
	}
	$('a.dropDown').on('click', function(e){
		$('#banner').slideUp(function(){
			$('.menuWrap').addClass('sticky');
		});
	});
	$(window).on('scroll', function(event) {
		if(window.scrollY>$(window).height()-40){
			setScroll();
		}
	});
}
$('.sepPage').on('click', function(){
    var div_id = $(this).attr('id');
    $('.newsWrap').css('display','none');
    $('.'+div_id).css("display", "block");
    $('.pager a.active').removeClass('active');
    $(this).children('a').addClass('active');

});
$('.pagenxt').on('click', function(){
   var currentelement = $('.sepPage a.active').parent();
   var next_id =  $(currentelement).next('').attr('id');
   if(next_id!=undefined && next_id!="" )
   {
        $('.sepPage a.active').removeClass('active');
        $('.newsWrap').css("display", "none");
        $(currentelement).next('').find('a').addClass('active');
        $('.'+next_id).css("display", "block");
   }
});
$('.pageprev').on('click', function(){
   var currentelement = $('.sepPage a.active').parent();
   var prev_id =  $(currentelement).prev('').attr('id');
   if(prev_id!=undefined && prev_id!="" )
   {
        $('.sepPage a.active').removeClass('active');
        $('.newsWrap').css("display", "none");
        $(currentelement).prev('').find('a').addClass('active');
        $('.'+prev_id).css("display", "block");
   }
});
