$('.btn_trigger').on('click',function(){//.btn_triggerをクリックすると
  $('.btn_trigger').toggleClass('close');//.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
  $('.nav-wrapper').fadeToggle(300);//.nav-wrapperが0.3秒でフェードイン(メニューのフェードイン)
  $('body').toggleClass('noscroll');//bodyにnoscrollクラスを付与(スクロールを固定)
});

if( $(window).width() <= 375 ){//デバイスの幅が375以下のとき
  $('.nav-item>a').on('click',function(){//.nav-item>aをクリックすると
    $('.nav-wrapper').fadeOut(300);//.nav-wrapperが0.3秒でフェードアウト(メニューのフェードアウト)
    $('.btn_trigger').removeClass('close');//.btn_triggerのcloseクラスを削除
    $('body').removeClass('noscroll');//bodyのnoscrollクラスを削除
  });
}

$(function(){
  $('a[href^="#"]').click(function(){//　#で始まるa要素をクリックした場合に処理//
    var adjust = 100;　//　移動先を100px下にずらす//
    var speed = 500;　// スクロールのスピード、0.5秒//
    var href= $(this).attr("href"); //　アンカーの値取得、リンク先(href)を取得して、hrefという変数に代入//
    var target = $(href == "#" || href == "" ? 'html' : href); //移動先を取得　リンク先（href)のidがある要素を探して、targetに代入//
    var position = target.offset().top + adjust; // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入//
    $("html, body").animate({scrollTop:position}, speed, "swing");// スムーススクロール linear（等速） or swing（変速）
    return false;
  });
});
