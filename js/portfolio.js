
    $(function() {
        var h = $(window).height();
        $('body').css('display', 'none');
        $('#loader-bg ,#loader').height(h).css('display', 'block');
    });
    $(window).on('load',function() {
        $('#loader-bg').delay(1500).slideUp(1000);
        $('body').css('display', 'block');
    });

$(function(){
     var scroll = new SmoothScroll('a[href*="#"]',{
          speed: 1500,
     });

	$('.keyvisual').vegas({ //背景画像でスライドショーしたい場所の設定
    slides: [
    { src: 'images/neon.jpg' },
    { src: 'images/water.jpg' },
     { src: 'images/season2.jpg' }, //スライドする画像を配列で設定
     { src: 'images/season3.jpg' },
     { src: 'images/season4.jpg'}
    ],
     delay: 5000, //スライドまでの時間ををミリ秒単位で設定
     timer: true, //タイマーバーの表示/非表示を切り替え
     // overlay: 'https://cdnjs.cloudflare.com/ajax/libs/vegas/2.4.0/overlays/07.png', //オーバーレイする画像の設定
     animation: 'kenburns', //スライドのアニメーションを設定
     transition: 'fade2', //スライド間のエフェクトを設定
     transitionDuration: 1000 //エフェクト時間をミリ秒単位で設定
  	}); 

	$('#keytext').fadeIn(6000);


	$('#bar').click(function(){
		$('.headernav').slideDown();

	$('#times').click(function(){
		$('.headernav').slideUp();
	});
});
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