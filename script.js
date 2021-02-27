$(document).ready(function () {
    $(window).scroll(function (event) {
        var scroll = $(this).scrollTop();
        var width = $(this).outerWidth();
        var content_height = $('.content').outerHeight();
        var parallax_height = $('.parallax').outerHeight();
        var main_scrolling = scroll / content_height * 100;
        var parallax_scrolling = scroll / parallax_height * 100;
        var opacity_percent = 1 - 1 / 100 * parallax_scrolling;

        var zoom1 = 1 + (width / 10000 * parallax_scrolling);
        $('.parallax__fog').css('transform', 'scale(' + zoom1 + ')');
        $('.parallax__fog').css('opacity', opacity_percent);

        var zoom2 = 1 + (width / 5000000 * main_scrolling);
        $('.parallax_mountain_1').css('transform', 'scale(' + zoom2 + ')');

        var horizontal_shift = width / 2000 * parallax_scrolling;
        var zoom3 = 1 + (width / 0.000005 * parallax_scrolling);
        $('.parallax_mountain_2').css('transform', 'translate3d(' + horizontal_shift +
            'px, 0, 0) scale(' + zoom3 + ')'
        );

        var horizontal_shift2 = width / 1500 * parallax_scrolling;
        var zoom4 = 1 + (width / 0.00001 * parallax_scrolling);
        $('.parallax_mountain_3').css('transform', 'translate3d(' + horizontal_shift2 +
            'px, 0, 0) scale(' + zoom4 + ')'
        );
    });
});