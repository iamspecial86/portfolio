$(function () {
  //skrollr
  const s = skrollr.init({
    edgeStrategy: 'set',
    easing: 'linear',
  });
  function loading() {
    let progress = $('.progress'),
      progressText = progress.find('.progress-text'),
      imgLoad = imagesLoaded('body'),
      imgTotal = imgLoad.images.length,
      imgLoaded = 0,
      imgCurrent = 0,
      progressTimer = setInterval(updateProgress, 1000 / 60);

    imgLoad.on('progress', function () {
      imgLoaded++;
    });

    function updateProgress() {
      let target = (imgLoaded / imgTotal) * 100;

      imgCurrent += (target - imgCurrent) * 0.1;
      progressText.text(Math.floor(imgCurrent) + '%');

      //이미지 로딩 완료
      if (imgCurrent >= 100) {
        clearInterval(progressTimer);
        //progress.delay(1000).animate({ top: "-130%" },400, "easeInExpo");
        progress.delay(1000).fadeOut();
      }

      if (imgCurrent > 99) {
        imgCurrent = 100;
      }
    }
  }
  loading();
  //scroll
  $(window).scroll(function () {
    let wScroll = $(this).scrollTop();
    let sec3 = $('#section3 .sec3').offset().top;
    let work = $('#section3 .sec3').offset().top + $(window).height() / 2;
    let sec4 = $('#section4').offset().top;
    let sectionSec4 = $('#section4 .sec4').offset().top;
    let section4 = $('#section4 .sec4_1').offset().top;
    let text1 = $('.atit .text1').offset().top;
    let text2 = $('.atit .text2').offset().top;
    let aimg = $('.sec2_1 .aimg').offset().top;
    let atit = $('.sec2_1 .atit').offset().top;
    let sec2 = $('#section2').offset().top;
    let section3 = $('#section3').offset().top;
    let btnText = $('.btn-menu-text').text();
    $('.scroll').text(wScroll);
    if (sec2 < $('.btn-menu-icon').offset().top) {
      if (btnText == 'Hello') {
        $('.btn-menu-text').text('About');
      }
      if (section3 < $('.btn-menu-icon').offset().top) {
        if (btnText == 'About') {
          $('.btn-menu-text').text('Portfolio');
        }
      }
      if (sec4 < $('.btn-menu-icon').offset().top) {
        if (btnText == 'Portfolio') {
          $('.btn-menu-text').text('Contact');
        }
      }
    }

    if (sec2 > $('.btn-menu-icon').offset().top) {
      if (btnText == 'About') {
        $('.btn-menu-text').text('Hello');
      }
    }
    if (section3 > $('.btn-menu-icon').offset().top) {
      if (btnText == 'Portfolio') {
        $('.btn-menu-text').text('About');
      }
    }
    if (sec4 > $('.btn-menu-icon').offset().top) {
      if (btnText == 'Contact') {
        $('.btn-menu-text').text('Portfolio');
      }
    }
    //scrollDown mouse
    if (wScroll >= 800) {
      $('#mouse').css('border', '2px solid #fff');
      $('#wheel').css('background-color', '#fff');
      $('#mouse .scroll1').css('border-top', '5px solid #fff');
      $('#mouse .scroll2').css('border-top', '5px solid #fff');
      $('#mouse .scroll3').css('border-top', '5px solid #fff');
    }
    if (wScroll >= sec2 && wScroll < 3000) {
      $('#mouse').css('border', '2px solid #000');
      $('#wheel').css('background-color', '#000');
      $('#mouse .scroll1').css('border-top', '5px solid #000');
      $('#mouse .scroll2').css('border-top', '5px solid #000');
      $('#mouse .scroll3').css('border-top', '5px solid #000');
      $('#mouse').css('display', 'block');
    }
    if ((wScroll >= 3000) & (wScroll < sec3)) {
      $('#mouse').css('display', 'none');
    }
    if (wScroll >= sec3 && wScroll < work) {
      $('#mouse').css('border', '2px solid #fff');
      $('#wheel').css('background-color', '#fff');
      $('#mouse .scroll1').css('border-top', '5px solid #fff');
      $('#mouse .scroll2').css('border-top', '5px solid #fff');
      $('#mouse .scroll3').css('border-top', '5px solid #fff');
      $('#mouse').css('display', 'block');
    }
    if (wScroll >= work && wScroll < sec4) {
      $('#mouse').css('display', 'none');
    }
    if (wScroll >= sec4 && wScroll < 26500) {
      $('#mouse').css('border', '2px solid #000');
      $('#wheel').css('background-color', '#000');
      $('#mouse .scroll1').css('border-top', '5px solid #000');
      $('#mouse .scroll2').css('border-top', '5px solid #000');
      $('#mouse .scroll3').css('border-top', '5px solid #000');
      $('#mouse').css('display', 'block');
    }
    if (wScroll >= 26500) {
      $('#mouse').css('display', 'none');
    }

    //main text fixed
    if (wScroll >= 1000) {
      $('.main_text h1').removeClass('fixed');
    } else if (wScroll == 0) {
      $('.main_text h1').addClass('fixed');
    }

    //about menu
    if (wScroll >= sec2) {
      $('.opc1').addClass('off');
    } else if (wScroll < sec2) {
      $('.opc1').removeClass('off');
    }
    if (wScroll >= sec2 + 100) {
      $('.about').addClass('right');
    } else if (wScroll < sec2 + 100) {
      $('.about').removeClass('right');
    }

    //work menu
    if (wScroll >= sec3) {
      $('.opc2').addClass('off');
    } else if (wScroll < sec3) {
      $('.opc2').removeClass('off');
    }
    if (wScroll >= sec3) {
      $('.Work').addClass('center');
    } else if (wScroll < sec3) {
      $('.Work').removeClass('center');
    }

    //contact menu
    if (wScroll >= 24500) {
      $('.opc3').addClass('off');
    } else if (wScroll < 24500) {
      $('.opc3').removeClass('off');
    }
    if (wScroll >= 24600) {
      $('.Contact').addClass('left');
    } else if (wScroll < 24600) {
      $('.Contact').removeClass('left');
    }

    //section2
    if (wScroll >= text1 - $(window).height() / 2) {
      $('.atit .text1 .t1').addClass('up');
    }

    //section3 fixed
    if (wScroll >= $('#section3').offset().top) {
      $('#section3 .sec3').addClass('pos');
    } else {
      $('#section3 .sec3').removeClass('pos');
    }
    console.log(sectionSec4, section4, sec4);

    //section4 opacity1,fixed

    if (wScroll >= $('#section3').offset().top) {
      $('#section4 .sec4').addClass('pos');
    } else {
      $('#section4 .sec4').removeClass('pos');
    }
    if (wScroll >= 25500) {
      $('#section4 .sec4_1').addClass('pos');
    } else {
      $('#section4 .sec4_1').removeClass('pos');
    }
  });

  $('.btn-menu-wrap').click(function () {
    if ($('.nav-main').hasClass('active')) {
      $('.nav-main').addClass('inactive').removeClass('active');
    } else {
      $('.nav-main').addClass('active').removeClass('inactive');
    }
    $('#overlay').toggleClass('show');
  });

  let all = $('.overlay-menu li a');
  let home = $('.overlay-menu .menu1 a');
  let about = $('.overlay-menu .menu2 a');
  let work = $('.overlay-menu .menu3 a');
  let contact = $('.overlay-menu .menu4 a');
  let overlay = $('.overlay');

  all.click(function () {
    $(overlay).removeClass('show');
    $('.nav-main').addClass('inactive').removeClass('active');
  });

  home.mouseover(function () {
    $(all).css('color', '#3366ff');
    $(overlay).addClass('homeColor');
  });
  home.mouseout(function () {
    $(all).css('color', '#fff');
    $(overlay).removeClass('homeColor');
  });

  about.mouseover(function () {
    $(overlay).addClass('aboutColor');
  });
  about.mouseout(function () {
    $(overlay).removeClass('aboutColor');
  });

  work.mouseover(function () {
    $(all).css('color', '#00ff33');
  });
  work.mouseout(function () {
    $(all).css('color', '#fff');
  });

  contact.mouseover(function () {
    $(overlay).addClass('conColor');
  });
  contact.mouseout(function () {
    $(overlay).removeClass('conColor');
  });
});
