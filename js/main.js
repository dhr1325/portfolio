$(function() {
     // ローディング
    var h = $(window).height()
      $('body').css('display', 'none');
      $('#loader-bg ,#loader').height(h).css('display', 'block');
  });
  $(window).on('load',function() {
      $('#loader-bg').delay(1000).slideUp(1000);
      $('body').css('display', 'block');
  });
    // ヘッダーメニュー
      $('.menu-trigger').on('click', function() {
        $(this).toggleClass('active');
    });
      // スムーススクロール
      var scroll = new SmoothScroll('a[href*="#"]',{
          speed: 1500,
     });

    // スライドショー
    $('.topArea').vegas({ //背景画像でスライドショーしたい場所の設定
        slides: [
         { src: 'images/key01.jpg'}, //スライドする画像を配列で設定
         { src: 'images/key02.jpg' },
         { src: 'images/key03.jpg' },
         { src: 'images/key04.jpg'},
         { src: 'images/key05.jpg'}
        ],
         delay: 5000, //スライドまでの時間ををミリ秒単位で設定
         timer: true, //タイマーバーの表示/非表示を切り替え
         overlay: 'https://cdnjs.cloudflare.com/ajax/libs/vegas/2.4.0/overlays/01.png', //オーバーレイする画像の設定
         animation: 'random', //スライドのアニメーションを設定
         transition: 'blur', //スライド間のエフェクトを設定
         transitionDuration: 1000 //エフェクト時間をミリ秒単位で設定
    });

    $('.menu').on('click',function(){
        $('.menu__line').toggleClass('active');
        $('.gnav').fadeToggle();
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
