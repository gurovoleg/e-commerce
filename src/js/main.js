$(document).ready(function() {

	var owlNewcomers = $(".owl-carousel-newcomers");

	owlNewcomers.owlCarousel({
		 // singleItem : true,
	    items : 4, //4 items above 1000px browser width
	    itemsDesktop : [1200,4], //4 items between 1200px and 993px
	    itemsDesktopSmall : [992,3], // betweem 992px and 769px
	    itemsTablet: [768,2], //2 items between 768 and 0
	    // itemsMobile : [540,1] // itemsMobile disabled - inherit from itemsTablet option

	    slideSpeed : 800,
	    paginationSpeed : 800,
	    rewindSpeed : 1000,
	    navigation : false,
	    pagination : false,
    	paginationNumbers: false,
	    navigationText : ["",""],
	    // theme : "newcomers-slider-theme"
	});

	// Custom Navigation Events
	$(".next").click(function(){
		owlNewcomers.trigger('owl.next');
	})
	$(".prev").click(function(){
		owlNewcomers.trigger('owl.prev');
	})

	//Menu carousel
	$(".owl-carousel-menu").owlCarousel({
		 // singleItem : true,
	    items:4

	});

	var owlHeader = $(".owl-carousel-header");

	owlHeader.owlCarousel({
		singleItem : true,
	    // items : 4, //4 items above 1000px browser width
	    // itemsDesktop : [1200,4], //4 items between 1200px and 993px
	    // itemsDesktopSmall : [992,3], // betweem 992px and 769px
	    // itemsTablet: [768,2], //2 items between 768 and 0
	    // // itemsMobile : [540,1] // itemsMobile disabled - inherit from itemsTablet option

	    slideSpeed : 800,
	    paginationSpeed : 800,
	    rewindSpeed : 1000,
	    navigation : false,
	    pagination : false,
    	paginationNumbers: false,
	    navigationText : ["",""],
	    // theme : "newcomers-slider-theme"
	});

	// Custom Navigation Events
	$(".h-next").click(function(){
		owlHeader.trigger('owl.next');
	})
	$(".h-prev").click(function(){
		owlHeader.trigger('owl.prev');
	})





	$('.fa-star').on('click',function(){
		$(this).toggleClass('favorite');
	});
	
	

	
});