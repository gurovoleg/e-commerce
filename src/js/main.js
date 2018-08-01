$(document).ready(function() {

	$(".owl-carousel-newcomers").owlCarousel({
		 // singleItem : true,
	    items:4,
	    slideSpeed : 800,
	    paginationSpeed : 800,
	    rewindSpeed : 1000,
	    navigation : true,
	    pagination : false,
    	paginationNumbers: false,
	    navigationText : ["",""],
	    theme : "newcomers-slider-theme"
	});

	$(".owl-carousel-menu").owlCarousel({
		 // singleItem : true,
	    items:4,
	    slideSpeed : 800,
	    paginationSpeed : 800,
	    rewindSpeed : 1000,
	    navigation : false,
	    pagination : false,
	    autoPlay : true,
	    stopOnHover : true,
    	paginationNumbers: false
	     // theme : "newcomers-slider-theme"
	});
	
	

	
});