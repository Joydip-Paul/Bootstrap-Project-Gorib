// banner area slider
$('.bannar-area').owlCarousel({
    loop: true,
    items:1,
    nav: false,
    dots:true,
    navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
    autoplay:true
});

$('.brand').owlCarousel({
    loop: true,
    items:5,
    nav: false,
    autoplay:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
});

$('.testimonials').owlCarousel({
    loop: true,
    items:2,
    nav: false,
    dots:true,
    margin:50,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
/* One Page Nav */
$('.navbar-nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    easing: 'swing',
    scrollOffset: 60
});
/* Portfolio Popup */
$('.gallery').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
});

$('.video').magnificPopup({
    type: 'iframe'
});

/* Counter Up */
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

/* Sticky Header */
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 1) {
        $('.header-fixed').addClass("sticky");
    } else {
        $('.header-fixed').removeClass("sticky");
    }
});