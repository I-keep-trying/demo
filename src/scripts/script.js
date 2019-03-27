/* eslint-disable prettier/prettier */
// add custom js below
$(document).ready(function () {

    $("a[href*='#']").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
    });

    $(window).scroll(function (event) {
        let scroll = $(this).scrollTop();
        let opacity = 0 + (scroll / 1000);
        if (opacity <= 1) {
            $('.top-icon').css('opacity', opacity);
        }
    });

    // document ready  
});
