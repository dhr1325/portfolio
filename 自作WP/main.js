$(function(){
    $('body').animate({
        marginTop:0,
        opacity:1
    },1000);

    $('.logo').animate({
        width:"100%"
    },1000);

    $('#slick').slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay:true
    });

    $('.to_top a').click(function(){
        $('html').animate({
            scrollTop:0
        },500);
    });
});