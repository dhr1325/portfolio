$(function() {
      // ヘッダーメニュー
      $('.menu-trigger').on('click', function() {
        $(this).toggleClass('active');
    });
      // スムーススクロール
      var scroll = new SmoothScroll('a[href*="#"]',{
          speed: 1500,
     });

    $('.menu').on('click',function(){
        $('.menu__line').toggleClass('active');
        $('.gnav').fadeToggle();
    });

    $('.fade').fadeIn(2000);
});

$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
      });
  });