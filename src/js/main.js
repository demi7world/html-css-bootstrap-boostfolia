// carousel vertical
$('#mainCarousel').bind('mousewheel', function(e) {
    if(e.originalEvent.wheelDelta /120 < 0) {
        $(this).carousel('next');
        $('.scrollTip').addClass('fadeOut');
    }
});


