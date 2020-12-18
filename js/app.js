// $('.banner-area').owlCarousel({
//     loop:true,
//     dots:true,
//     nav:false,
//     autoplay:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:1
//         }
//     }
// })
// $(document).ready(function() {
//     $('.project-popup').magnificPopup({type:'image'});
//   });

  $(document).ready(function(){
    $('.banner-area').owlCarousel({
        loop:true,
        dots:true,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    });
    $('.project-popup').magnificPopup({
        type:'image',
        gallery: {
            enabled: true
          },
    });
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
  });