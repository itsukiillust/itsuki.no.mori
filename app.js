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
    $('.tora_series').click(function() {
        $('.tora_series1').fadeIn('slow');
    });

    $('.tora_series1').click(function() {
        $('.tora_series1').fadeOut('slow');
    });
    // 
    $('.muji').click(function() {
        $('.muji1').fadeIn('slow');
    });

    $('.muji1').click(function() {
        $('.muji1').fadeOut('slow');
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
        // $('.drawer_open').fadeOut('slow');
    });

    // メニューのクリック
    $('.nav_content').click(function() {
        $('.nav_content').fadeOut();
        // $('.drawer_open').fadeIn();
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

    
   
    $(window).scroll(function() {
        // 画面のスクロールされた壁を取得
        let scrollTop = $(document).scrollTop();
         // profileスクロールで表示
        let greetingTop = $('.greeting').offset().top;
        //　矢印の表示・非表示を切り替える
        // スクロール量がsection2Topを超えたら、矢印を表示
        if (scrollTop >= greetingTop) {
            // arrowの表示
            $('.portfolio').fadeIn(2000);
            $('.intro').fadeIn(2500);
        } else {
            // スクロール量がsection2Topを超えていないとき
            $('.portfolio').fadeOut(1000);
            $('.intro').fadeOut(1000);    
            
        };


    // worksスクロールで表示
        let introTop = $('.profile').offset().top;

        if (scrollTop >= introTop) {
            // $('.main2').fadeIn(1000);
            $('.kitties').fadeIn(1500);
            $('.tora_series').fadeIn(2000);
            $('.muji').fadeIn(2500);
            $('.books').fadeIn(3000);

        } else {
            // $('.main2').fadeOut();
            $('.kitties').fadeOut();
            $('.tora_series').fadeOut();
            $('.muji').fadeOut();
            $('.books').fadeOut();
        };

    });




    $(window).scroll(function() {
        // 画面のスクロールされた壁を取得
        let scrollTop = $(document).scrollTop();
    //movieスクロールで表示
        let bookTop = $('.books').offset().top;
        let main1Top = $('.main1').offset().top;

        // 
        

        if (scrollTop >= bookTop) {
            $('.moji').fadeIn('slow');
            $('.tanko').fadeIn('slow');
            $('.youtube').fadeIn('slow');
            $('.movie_h2').fadeIn('slow');

        } else {
            $('.moji').fadeOut();
            $('.tanko').fadeOut();
            $('.youtube').fadeOut();
            $('.movie_h2').fadeOut();

        };

    });

    //トラの画面をスクロールで表示
    $(window).scroll(function() {
        let scrollTop = $(document).scrollTop();
        let main3Top = $('.main3').offset().top;
        let main3Enter = main3Top - 800;

        if (scrollTop >= main3Enter) {
            $('.main3_h1').fadeIn('slow');
            $('.main3_h2').fadeIn('slow');
            $('.tora').fadeIn('slow');
            $('.torabun_p').fadeIn('slow');
            $('.torabun_a').fadeIn('slow');
        } else {
            $('.main3_h1').fadeOut();
            $('.main3_h2').fadeOut();
            $('.tora').fadeOut();
            $('.torabun_p').fadeOut();
            $('.torabun_a').fadeOut();
        
        };
    });


//////worksスクロールで表示 (errorになるの何故？)///////////////////


    // $(window).scroll(function(){

    //     let scrollTop = $(docment).scrollTop();
    //     let introTop = $('.intro-text').offset().top;

    //     if (scrollTop >= introTop) {
    //         $('.kitties').fadeIn(1500);
    //         $('.stool').fadeIn(2000);
    //         $('.books').fadeIn(2500);
    //         $('.animalF').fadeIn(3000);

    //     } else {
    //         $('.kitties').fadeOut(1000);
    //         $('.stool').fadeOut(1000);
    //         $('.books').fadeOut(1000);
    //         $('.animalF').fadeOut(1000);
    //     };
    // });










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