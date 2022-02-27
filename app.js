// section3のアニメーションの状態を保存する変数
// show: 左から右のアニメーション中
// hide: 右から左のアニメーション中
let section3ShowFlg = 'hide';

// 画面の準備ができたら
$(function() {

    // ddmenuの子要素の liにマウスが入ってきたら
    $('.ddmenu li').mouseenter(function() {
        // フォーカスされた liの兄弟が持つ ulを表示する
        $(this).siblings().find('ul').hide();

        // フォーカスされた liの子要素を表示する
        $(this).children().slideDown('slow');
    });

    // 画面のどこかがクリックされた場合
    $('html').click(function() {

        // フォーカスされた liの子要素を slideUpする
        $('.ddmenu ul').slideUp('slow');
    });

    // 矢印がクリックされたら
    $('.arrow').click(function() {
        // 画面のtopまでスクロールする
        $('html').animate({ scrollTop: 0 }, 1000);
        
    });


    

    //イラストがクリックされた時-------------------------------------------------------------
    $('.kitties').click(function() {
        $('.kitties1').fadeIn('slow');
    });

    $('.kitties1').click(function() {
        $('.kitties1').fadeOut('slow');
    });
    // 
    $('.animalF').click(function() {
        $('.animalF1').fadeIn('slow');
    });

    $('.animalF1').click(function() {
        $('.animalF1').fadeOut('slow');
    });
    // 
    $('.stool').click(function() {
        $('.stool1').fadeIn('slow');
    });

    $('.stool1').click(function() {
        $('.stool1').fadeOut('slow');
    });
    // 
    $('.books').click(function() {
        $('.books1').fadeIn('slow');
    });

    $('.books1').click(function() {
        $('.books1').fadeOut('slow');
    });

    // ハンバーガーのクリック
    $('.drawer_open').click(function() {
        
        $('.nav_content').slideDown('slow');
        $('.drawer_open').fadeOut('slow');
    });

    // メニューのクリック
    $('.nav_content').click(function() {
        $('.nav_content').fadeOut();
        $('.drawer_open').fadeIn();
    });

    // メニューがスクロールで消える----------------------------------------------------------
    $(window).scroll(function() {

        let scrollTop = $(document).scrollTop();
        let menuHide = $('.main1').offset().top;
        let menuLeft = $('.nav_content').offset().left;
        
        
        if (scrollTop >= menuHide) {
                $('.nav_content').fadeOut('slow');

        }
      
    });

    
    // 画面がスクロールされたら
    $(window).scroll(function() {
        // 画面のスクロールされた壁を取得
        let scrollTop = $(document).scrollTop();

        // section2のスクロールしたときの表示位置の取得
        let section2Top = $('.section2').offset().top;

        //　矢印の表示・非表示を切り替える
        // スクロール量がsection2Topを超えたら、矢印を表示
        if (scrollTop >= section2Top) {
            // arrowの表示
            $('.arrow').fadeIn();

            // Hello Scrollの表示
            $('.hello-scroll').fadeIn('slow');

        } else {
            // スクロール量がsection2Topを超えていないとき
            $('.arrow').fadeOut();    
            
            // Hello Scrollが800を超えていないとき
            $('.hello-scroll').fadeOut('slow');
        };

    });

    

    $(window).scroll(function() {
        let scrollTop = $(document).scrollTop();

        // section3の位置の取得
        let section3Top = $('.section3').offset().top;
        let section3Enter = section3Top - 800; 

        if (scrollTop >= section3Enter) {
                // ピンクのボックスを左から右に表示する
                if (section3ShowFlg == 'hide') {
                  $('.section3').stop().animate({left: 0}, 1000)
                  section3ShowFlg = 'show';
                }
        } else {
          
                if (section3ShowFlg == 'show') {
                  $('.section3').stop().animate({left: '-100%'}, 1000)
                  section3ShowFlg = 'hide';
                }
        }
        
    });
});