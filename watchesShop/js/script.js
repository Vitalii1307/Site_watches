$(window).scroll(function() {
    let scrolled = $(window).scrollTop();

    if(scrolled > 300) {
        $('#scrollTop').addClass('active');
    } else{
        $('#scrollTop').removeClass('active');
    }
});

$('#scrollTop').click(function() {
    $('body,html').animate({scrollTop: 0}, 500)
});