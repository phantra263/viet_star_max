$(document).ready(function(){
    $('.slick-banner').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        pauseOnHover: false,
    });

    $('.slick-opinion').slick({
        infinite: true,
        slidesToShow: 3,    
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        }]
    });
  });