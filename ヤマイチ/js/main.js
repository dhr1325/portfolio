$(function(){
    $('#top_down').animate({
        top:0
    },1000,'easeOutElastic');

    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $('.to_top').show();
        }else{
            $('.to_top').hide();
        };
    });

    $('#slider').slick({
        autoplay:true,
        autoplaySpeed: 3500,
        arrow:false,
        dotted:true
    });

    $('.g_nav a').hover(function(){
        $(this).stop().animate({
            marginTop: '5px'
        },200);
    },function(){
        $(this).stop().animate({
            marginTop: 0
        },200);
    });

    $('.to_top').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000,'easeInQuint')
    });

    $('.hover').hover(function(){
        $(this).find('.plan_bg02').stop().animate({
            top:0,
			left:0,
            width:'450px',
            height:'450px'
        },300,'easeInBack');
        },function(){
            $(this).find('.plan_bg02').stop().animate({
            top:'25px',
			left:'32px',
            width:'385px',
            height:'385px'
        },1000,'easeOutElastic');
    });

    $('.hover02').hover(function(){
        $(this).find('.plan_bg02').stop().animate({
            top:0,
			left:0,
            width:'980px',
            height:'280px'
        },300,'easeInBack');
        },function(){
            $(this).find('.plan_bg02').stop().animate({
            top:'50px',
			left:'230px',
            width:'520px',
            height:'210px'
        },1000,'easeOutElastic');
    });

    $('.hover03').hover(function(){
        $(this).find('.plan_bg02').stop().animate({
            top:0,
			left:0,
            width:'300px',
            height:'300px'
        },300,'easeInBack');
        },function(){
            $(this).find('.plan_bg02').stop().animate({
            top:'20px',
			left:'20px',
            width:'260px',
            height:'260px'
        },1000,'easeOutElastic');
    });
});