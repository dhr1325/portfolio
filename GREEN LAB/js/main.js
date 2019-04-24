$(function(){
    $('#slider').slick({
        autoplay:true,
        autoplaySpeed: 3500,
        arrow:false
    });

    $('.g_nav li').hover(function(){
        $(this).find('.g_nav_txt').stop().animate({
            left:'25px',
            opacity:1
        }).css('visibility','visible');
    },function(){
        $.when($(this).find('.g_nav_txt').stop().animate({
            left:0,
            opacity:0
        })
        ).done(function(){
            $(this).find('.g_nav_txt').css('visibility','hidden!important');
        });
    });

    $('#to_top').click(function(){
        $('html,body').animate({
            scrollTop:0
        },500);
    });
});