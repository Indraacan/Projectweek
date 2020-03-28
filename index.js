$(document)
    .ready(function () {
        $('.owl-carousel').owlCarousel({
            loop: true,
            smartSpeed: 900,
            autoWidth: true,
            center: true,
            nav: false,

        });
        $('.fa-gojek-left').click(function () {
            $('.owl-carousel').trigger('next.owl.carousel');
        });
        $('.fa-gojek-right').click(function () {
            $('.owl-carousel').trigger('prev.owl.carousel');
        });
    });