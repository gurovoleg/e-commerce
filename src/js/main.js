$(document).ready(function() {

	var $w = $(window).width();
	
	$(window).resize(function(){
		$w = $(window).width();
	});
		
	// NEWCOMERS carousel	
	var owlNewcomers = $("#owl-carousel-newcomers");
	owlNewcomers.owlCarousel({
	    dots:false,
	    onChanged: carouselControlsChange,
	    margin:30,
        responsive: {
    	      0 : {items : 1},
    	    480 : {items : 2},
    	    768 : {items : 3},
    		992 : {items : 4}
       	}	
	});

		function carouselControlsChange(event) {
			if (event.item.index == 0) {
				$('.prev').addClass('disabled');
			} else $('.prev').removeClass('disabled');

			if (event.item.index + event.page.size >= event.item.count) {
				$('.next').addClass('disabled');
			} else $('.next').removeClass('disabled');
		};

		// Custom Navigation Events
		$(".next").click(function(){
			owlNewcomers.trigger('next.owl.carousel');
		})
		$(".prev").click(function(){
			owlNewcomers.trigger('prev.owl.carousel');
		})

	// MENU carousel
	$("#owl-carousel-menu").owlCarousel({
		// items:4,
	    dots:false,
	    autoplay:true,
	    responsive: {
		      0 : {items : 1},
		    480 : {items : 2},
		    768 : {items : 3},
			992 : {items : 4}
		}	
	});

	// HEADER-SLIDER carousel
	var owlHeader = $("#owl-carousel-header");
	owlHeader.owlCarousel({
		items : 1, 
	    dots:false
	});

		// Custom Navigation Events
		$(".h-next").click(function(){
			owlHeader.trigger('next.owl.carousel');
		})
		$(".h-prev").click(function(){
			owlHeader.trigger('prev.owl.carousel');
		})

	// Товар отмечаем в Избранное
	$('.fa-star').on('click',function(){
		$(this).toggleClass('favorite animated rubberBand');
	});

	// Добавляем/Убираем класс с тенью на карту
	$('.carousel-item').on('mouseenter', function(){
		if ($w < 992) $(this.children).addClass('item-card--shadow'); 
	});
	
	$('.carousel-item').on('mouseleave', function(){
		if ($w < 992) $(this.children).removeClass('item-card--shadow'); 
	});

	//pageScroll2id - плавная прокрутка
	$("a[rel='m_PageScroll2id'], .mobile-menu a").mPageScroll2id({
		scrollSpeed: 800,
		offset:50
	});
	
});
