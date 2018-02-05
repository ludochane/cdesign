$(document).ready(function() {
   // MagnificPopup
	var magnifPopup = function() {
		$('.image-popup').each(function() {
			var hrefs = $(this).next().find('.images-popup').map(function(i, e) {
				return { src: $(e).attr('href') };
			}).get();
			$(this).magnificPopup({
		    items: hrefs,
		    gallery: {
		      enabled: true
		    },
		    type: 'image' // this is default type
			});
		});
	};

	var magnifVideo = function() {
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
	};

	// Call the functions
	magnifPopup();
	magnifVideo();

});
