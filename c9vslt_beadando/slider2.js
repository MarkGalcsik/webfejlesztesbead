$(document).ready(function() {

    $(".szolg-slider").slick({
        dots: true,
        arrows: true,
        infinite: true,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerPadding: '60px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    centerPadding: '60px',
                    slidesToShow: 1
                }
            }
        ]
    });


});


