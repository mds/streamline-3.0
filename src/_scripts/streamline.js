// @codekit-prepend 'vendor/jquery.js'
// @codekit-prepend 'vendor/jquery.cookie.js'
// @codekit-prepend 'vendor/bodymovin.js'
// @codekit-prepend 'vendor/TweenMax.min.js'
// @codekit-prepend 'vendor/ScrollMagic.js'
// @codekit-prepend 'vendor/animation.gsap.js'
// @codekit-prepend 'vendor/jquery.countdown.min.js'

$(document).ready(function() {

  // console.log("Look ma, no errors!\n\nBuuuuuut.... if you see something crazy or just plain wrong though, please reach out. I only half know what I'm doing here. A DM or public reply is perfectly acceptable.\n\n🖤\n—MDS\nhttp://twitter.com/mds\n\n");
  console.log("Thanks for popping open the inspector.\nIf you see something wrong, please let me know!\nA DM or public reply is perfectly acceptable.\n\n—MDS\nhttp://twitter.com/mds\n\n");

  // update theme based on color pref cookie
  if ($.cookie('colorPref') === 'white') { setThemeWhite(); };
  if ($.cookie('colorPref') === 'color') { setThemeColor(); };
  if ($.cookie('colorPref') === "dark")  { setThemeDark();  };

  // disable horizontal scroll – THIS IS A TOTAL HACK
  // because I couldn't figure out how to get
  // the position: sticky <h2>s working while having the .body-wrapper class set to overflow-x: hidden
  $(function() {
      var $body = $(document);
      $body.bind('scroll', function() {
          // "Disable" the horizontal scroll.
          if ($body.scrollLeft() !== 0) {
              $body.scrollLeft(0);
          }
      });

  });

  // make sure the menu is showing if the menu get's closed on mobile and then the browser gets scaled up
  // $(window).resize(function() {
  //   if ($(window).width() > 1180) {
  //      // console.log('Greater than 1180');
  //      // $(".section-nav .menu").fadeIn();
  //      $(".section-nav .menu").removeClass("display-none");
  //      $(".section-nav .menu").addClass("display-block");
  //   } else {
  //     $(".section-nav .menu").remove("display-block");
  //     $(".section-nav .menu").addClass("display-none");
  //   }
  // });

  //////////////////////////////////////////////////////////////////////

  // ****************************************************
  // icon animations via Lottie/Bodymovin
  var domMood = document.getElementById('icon-mood');
  var domLaptop = document.getElementById('icon-laptop');
  var domCamera = document.getElementById('icon-camera');
  var domGirl = document.getElementById('icon-girl');
  var domPencil = document.getElementById('icon-pencil');
  var domShake = document.getElementById('icon-shake');
  var domTarget = document.getElementById('icon-target');
  var domWifi = document.getElementById('icon-wifi');
  var domYesno = document.getElementById('icon-yesno');
  var domHeadphones = document.getElementById('icon-headphones');
  var domPen = document.getElementById('icon-pen');
  var domView = document.getElementById('icon-view');
  var domFlag = document.getElementById('icon-flag');
  var domFooter = document.getElementById('icon-footer');

  var aniMood = loadAnimation(domMood, 'svg', true, true, '_json/bubble.json');
  var aniLaptop = loadAnimation(domLaptop, 'svg', false, true, '_json/laptop.json');
  var aniCamera = loadAnimation(domCamera, 'svg', false, true, '_json/camera.json');
  var aniGirl = loadAnimation(domGirl, 'svg', false, true, '_json/girl.json');
  var aniPencil = loadAnimation(domPencil, 'svg', false, true, '_json/pencil.json');
  var aniShake = loadAnimation(domShake, 'svg', false, true, '_json/shake.json');
  var aniTarget = loadAnimation(domTarget, 'svg', false, true, '_json/target.json');
  var aniWifi = loadAnimation(domWifi, 'svg', false, true, '_json/wifi.json');
  var aniYesno = loadAnimation(domYesno, 'svg', false, true, '_json/yesno.json');
  var aniHeadphones = loadAnimation(domHeadphones, 'svg', false, true, '_json/headphones.json');
  var aniPen = loadAnimation(domPen, 'svg', false, true, '_json/pen.json');
  var aniView = loadAnimation(domView, 'svg', false, true, '_json/view.json');
  var aniFlag = loadAnimation(domFlag, 'svg', false, true, '_json/flag.json');
  var aniFooter = loadAnimation(domFooter, 'svg', false, true, '_json/bubble.json');

  function loadAnimation(container, renderer, autoplay, loop, jsonpath) {
    var animData = {
      container: container,
      renderer: renderer,
      autoplay: autoplay,
      loop: loop,
      path: jsonpath
    };
    return bodymovin.loadAnimation(animData);
  }

  // ****************************************************
  // SCROLL MAGIC
  // init controller

  // firefox detect
  if(navigator.userAgent.indexOf("Firefox") > 0){
    // it's Firefox
    // alert("I had to disable certain JavaScript features like SVG animation and parallaxy stuff, because Firefox is challenging to get that to work and I'm out of time. Sorry for the jankiness! Pop open Chrome or Safari for a better experience on this site. —MDS");
  } else {
    // it's something else
    var controller = new ScrollMagic.Controller();

    var smallDistance = 100;
    var mediumDistance = 300;
    var largeDistance = -400;

    var tweenMainContent = new TimelineMax ()
      .add([
        TweenMax.staggerFromTo("#main .section-content-wrapper .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo("#main .section-content-wrapper .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo("#main .section-content-wrapper .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut}),
      ]);

    var sceneMainContent = new ScrollMagic.Scene({triggerElement: "#main", triggerHook: 'onLeave', duration: ($("#main").height()+800)})
        .setTween(tweenMainContent)
        .addTo(controller);

    // play/stop animation on scene enter/leave
    sceneMainContent.on("enter", function (event) { aniMood.play(); });
    sceneMainContent.on("leave", function (event) { aniMood.pause(); });


    ////////////////////////////////////////////////////////////////////

    var tweenIconDividerone = new TimelineMax ()
      .add([
        TweenMax.staggerFromTo(".icon-divider-one .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-one .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-one .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
      ]);

    var sceneIconDividerone = new ScrollMagic.Scene({triggerElement: ".icon-divider-one", offset: -500, triggerHook: 'onLeave', duration: ($(".icon-divider-one").height()+800)})
        .setTween(tweenIconDividerone)
        .addTo(controller);
    // play/stop animation on scene enter/leave
    sceneIconDividerone.on("enter", function (event) { aniYesno.play(); });
    sceneIconDividerone.on("leave", function (event) { aniYesno.pause(); });

    //////////////////////////////////////////////////////////////////////

    var tweenIconDividertwo = new TimelineMax ()
      .add([
        TweenMax.staggerFromTo(".icon-divider-two .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-two .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-two .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
      ]);

    var sceneIconDividertwo = new ScrollMagic.Scene({triggerElement: ".icon-divider-two", offset: -500, triggerHook: 'onLeave', duration: ($(".icon-divider-two").height()+800)})
        .setTween(tweenIconDividertwo)
        .addTo(controller);

    //////////////////////////////////////////////////////////////////////

    var tweenIconDividerthree = new TimelineMax ()
      .add([
        TweenMax.staggerFromTo(".icon-divider-three .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-three .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-three .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
      ]);

    var sceneIconDividerthree = new ScrollMagic.Scene({triggerElement: ".icon-divider-three", offset: -500, triggerHook: 'onLeave', duration: ($(".icon-divider-three").height()+800)})
        .setTween(tweenIconDividerthree)
        .addTo(controller);
    // play/stop animation on scene enter/leave
    sceneIconDividerthree.on("enter", function (event) { aniLaptop.play(); });
    sceneIconDividerthree.on("leave", function (event) { aniLaptop.pause(); });

    //////////////////////////////////////////////////////////////////////

    var tweenIconDividerfour = new TimelineMax ()
      .add([
        TweenMax.staggerFromTo(".icon-divider-four .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-four .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-four .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
      ]);

    var sceneIconDividerfour = new ScrollMagic.Scene({triggerElement: ".icon-divider-four", offset: -500, triggerHook: 'onLeave', duration: ($(".icon-divider-four").height()+800)})
        .setTween(tweenIconDividerfour)
        .addTo(controller);
    // play/stop animation on scene enter/leave
    sceneIconDividerfour.on("enter", function (event) { aniPencil.play(); });
    sceneIconDividerfour.on("leave", function (event) { aniPencil.pause(); });

    //////////////////////////////////////////////////////////////////////

    var tweenIconDividerfive = new TimelineMax ()
      .add([
        TweenMax.staggerFromTo(".icon-divider-five .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-five .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-five .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
      ]);

    var sceneIconDividerfive = new ScrollMagic.Scene({triggerElement: ".icon-divider-five", offset: -500, triggerHook: 'onLeave', duration: ($(".icon-divider-five").height()+800)})
        .setTween(tweenIconDividerfive)
        .addTo(controller);
    // play/stop animation on scene enter/leave
    sceneIconDividerfive.on("enter", function (event) { aniHeadphones.play(); });
    sceneIconDividerfive.on("leave", function (event) { aniHeadphones.pause(); });


    //////////////////////////////////////////////////////////////////////

    var tweenIconDividersix = new TimelineMax ()
      .add([
        TweenMax.staggerFromTo(".icon-divider-six .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-six .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-six .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
      ]);

    var sceneIconDividersix = new ScrollMagic.Scene({triggerElement: ".icon-divider-six", offset: -500, triggerHook: 'onLeave', duration: ($(".icon-divider-six").height()+800)})
        .setTween(tweenIconDividersix)
        .addTo(controller);
    // play/stop animation on scene enter/leave
    sceneIconDividersix.on("enter", function (event) { aniView.play(); });
    sceneIconDividersix.on("leave", function (event) { aniView.pause(); });

    //////////////////////////////////////////////////////////////////////

    var tweenIconDividerseven = new TimelineMax ()
      .add([
        TweenMax.staggerFromTo(".icon-divider-seven .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-seven .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-seven .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
      ]);

    var sceneIconDividerseven = new ScrollMagic.Scene({triggerElement: ".icon-divider-seven", offset: -500, triggerHook: 'onLeave', duration: ($(".icon-divider-seven").height()+800)})
        .setTween(tweenIconDividerseven)
        .addTo(controller);
    // play/stop animation on scene enter/leave
    sceneIconDividerseven.on("enter", function (event) { aniGirl.play(); });
    sceneIconDividerseven.on("leave", function (event) { aniGirl.pause(); });

    //////////////////////////////////////////////////////////////////////

    var tweenIconDividereight = new TimelineMax ()
      .add([
        TweenMax.staggerFromTo(".icon-divider-eight .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-eight .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-eight .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
      ]);

    var sceneIconDividereight = new ScrollMagic.Scene({triggerElement: ".icon-divider-eight", offset: -500, triggerHook: 'onLeave', duration: ($(".icon-divider-eight").height()+800)})
        .setTween(tweenIconDividereight)
        .addTo(controller);
    // play/stop animation on scene enter/leave
    sceneIconDividereight.on("enter", function (event) { aniShake.play(); });
    sceneIconDividereight.on("leave", function (event) { aniShake.pause(); });

    //////////////////////////////////////////////////////////////////////

    var tweenIconDividernine = new TimelineMax ()
      .add([
        TweenMax.staggerFromTo(".icon-divider-nine .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-nine .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-nine .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
      ]);

    var sceneIconDividernine = new ScrollMagic.Scene({triggerElement: ".icon-divider-nine", offset: -500, triggerHook: 'onLeave', duration: ($(".icon-divider-nine").height()+800)})
        .setTween(tweenIconDividernine)
        .addTo(controller);
    // play/stop animation on scene enter/leave
    sceneIconDividernine.on("enter", function (event) { aniCamera.play(); });
    sceneIconDividernine.on("leave", function (event) { aniCamera.pause(); });

    //////////////////////////////////////////////////////////////////////

    var tweenIconDividerten = new TimelineMax ()
      .add([
        TweenMax.staggerFromTo(".icon-divider-ten .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-ten .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-ten .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
      ]);

    var sceneIconDividerten = new ScrollMagic.Scene({triggerElement: ".icon-divider-ten", offset: -500, triggerHook: 'onLeave', duration: ($(".icon-divider-ten").height()+800)})
        .setTween(tweenIconDividerten)
        .addTo(controller);
    // play/stop animation on scene enter/leave
    sceneIconDividerten.on("enter", function (event) { aniTarget.play(); });
    sceneIconDividerten.on("leave", function (event) { aniTarget.pause(); });

    //////////////////////////////////////////////////////////////////////

    var tweenIconDividereleven = new TimelineMax ()
      .add([
        TweenMax.staggerFromTo(".icon-divider-eleven .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-eleven .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-eleven .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
      ]);

    var sceneIconDividereleven = new ScrollMagic.Scene({triggerElement: ".icon-divider-eleven", offset: -500, triggerHook: 'onLeave', duration: ($(".icon-divider-eleven").height()+800)})
        .setTween(tweenIconDividereleven)
        .addTo(controller);
    // play/stop animation on scene enter/leave
    sceneIconDividereleven.on("enter", function (event) { aniFlag.play(); });
    sceneIconDividereleven.on("leave", function (event) { aniFlag.pause(); });

    //////////////////////////////////////////////////////////////////////

    var tweenIconDividertwelve = new TimelineMax ()
      .add([
        TweenMax.staggerFromTo(".icon-divider-twelve .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-twelve .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-twelve .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
      ]);

    var sceneIconDividertwelve = new ScrollMagic.Scene({triggerElement: ".icon-divider-twelve", offset: -500, triggerHook: 'onLeave', duration: ($(".icon-divider-twelve").height()+800)})
        .setTween(tweenIconDividertwelve)
        .addTo(controller);

    //////////////////////////////////////////////////////////////////////

    var tweenIconDividerthirteen = new TimelineMax ()
      .add([
        TweenMax.staggerFromTo(".icon-divider-thirteen .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-thirteen .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-thirteen .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
      ]);

    var sceneIconDividerthirteen = new ScrollMagic.Scene({triggerElement: ".icon-divider-thirteen", offset: -500, triggerHook: 'onLeave', duration: ($(".icon-divider-thirteen").height()+800)})
        .setTween(tweenIconDividerthirteen)
        .addTo(controller);
    // play/stop animation on scene enter/leave
    sceneIconDividerthirteen.on("enter", function (event) { aniWifi.play(); });
    sceneIconDividerthirteen.on("leave", function (event) { aniWifi.pause(); });

    //////////////////////////////////////////////////////////////////////

    var tweenIconDividerfourteen = new TimelineMax ()
      .add([
        TweenMax.staggerFromTo(".icon-divider-fourteen .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-fourteen .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-fourteen .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
      ]);

    var sceneIconDividerfourteen = new ScrollMagic.Scene({triggerElement: ".icon-divider-fourteen", offset: -500, triggerHook: 'onLeave', duration: ($(".icon-divider-fourteen").height()+800)})
        .setTween(tweenIconDividerfourteen)
        .addTo(controller);
    // play/stop animation on scene enter/leave
    sceneIconDividerfourteen.on("enter", function (event) { aniPen.play(); });
    sceneIconDividerfourteen.on("leave", function (event) { aniPen.pause(); });

    //////////////////////////////////////////////////////////////////////

    var tweenIconDividerfifteen = new TimelineMax ()
      .add([
        TweenMax.staggerFromTo(".icon-divider-fifteen .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-fifteen .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
        TweenMax.staggerFromTo(".icon-divider-fifteen .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
      ]);

    var sceneIconDividerfifteen = new ScrollMagic.Scene({triggerElement: ".icon-divider-fifteen", offset: -500, triggerHook: 'onLeave', duration: ($(".icon-divider-fifteen").height()+800)})
        .setTween(tweenIconDividerfifteen)
        .addTo(controller);
  }



  //////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
  //  UPDATE NAVIGATION ON SCROLL
  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////


  var sceneMain = new ScrollMagic.Scene({triggerElement: "#main", duration: $("#main").height() })
    .addTo(controller);
  sceneMain.on("enter", function (event) {
    $('.menu a').removeClass("is-active"); // remove active from all
    $('.menu a[href^="#main"]').addClass("is-active"); // make active
  });

  var sceneIcons = new ScrollMagic.Scene({triggerElement: "#icons", duration: $("#icons").height() })
    .addTo(controller);
  sceneIcons.on("enter", function (event) {
    $('.menu a').removeClass("is-active"); // remove active from all
    $('.menu a[href^="#icons"]').addClass("is-active"); // make active
  });

  var sceneWeights = new ScrollMagic.Scene({triggerElement: "#weights", duration: $("#icons").height() })
    .addTo(controller);
  sceneWeights.on("enter", function (event) {
    $('.menu a').removeClass("is-active"); // remove active from all
    $('.menu a[href^="#weights"]').addClass("is-active"); // make active
  });

  var sceneWorkflow = new ScrollMagic.Scene({triggerElement: "#workflow", duration: $("#workflow").height() })
    .addTo(controller);
  sceneWorkflow.on("enter", function (event) {
    $('.menu a').removeClass("is-active"); // remove active from all
    $('.menu a[href^="#workflow"]').addClass("is-active"); // make active
  });

  var sceneAction = new ScrollMagic.Scene({triggerElement: "#action", duration: $("#action").height() })
    .addTo(controller);
  sceneAction.on("enter", function (event) {
    $('.menu a').removeClass("is-active"); // remove active from all
    $('.menu a[href^="#action"]').addClass("is-active"); // make active
  });

  var sceneBrands = new ScrollMagic.Scene({triggerElement: "#brands", duration: $("#brands").height() })
    .addTo(controller);
  sceneBrands.on("enter", function (event) {
    $('.menu a').removeClass("is-active"); // remove active from all
    $('.menu a[href^="#brands"]').addClass("is-active"); // make active
  });

  var sceneWebViewer = new ScrollMagic.Scene({triggerElement: "#webviewer", duration: $("#webviewer").height() })
    .addTo(controller);
  sceneWebViewer.on("enter", function (event) {
    $('.menu a').removeClass("is-active"); // remove active from all
    $('.menu a[href^="#webviewer"]').addClass("is-active"); // make active
  });

  var sceneOptions = new ScrollMagic.Scene({triggerElement: "#options", duration: $("#options").height() })
    .addTo(controller);
  sceneOptions.on("enter", function (event) {
    $('.menu a').removeClass("is-active"); // remove active from all
    $('.menu a[href^="#options"]').addClass("is-active"); // make active
  });

  var sceneBuy = new ScrollMagic.Scene({triggerElement: "#buy", duration: $("#buy").height() })
    .addTo(controller);
  sceneBuy.on("enter", function (event) {
    $('.menu a').removeClass("is-active"); // remove active from all
    $('.menu a[href^="#buy"]').addClass("is-active"); // make active
  });

  var sceneFooter = new ScrollMagic.Scene({triggerElement: "#footer", offset: -500, duration: $("#footer").height()+500 })
    .addTo(controller);
  // play/stop animation on scene enter/leave
  sceneFooter.on("enter", function (event) { aniFooter.play(); });
  sceneFooter.on("leave", function (event) { aniFooter.pause(); });

  //////////////////////////////////////////////////////////////////////

  // weight selector fly in (or not)

  weightCheck();

  $(window).resize(function() {
    weightCheck();
  });

  function weightCheck() {
    if ($(window).width() < 1180) {
       $(".weight-selector").addClass("weight-selector--showing");
    } else {
      $(".weight-selector").removeClass("weight-selector--showing");
    }
  }

  var sceneWeightSelector = new ScrollMagic.Scene({triggerElement: ".icon-categories", offset: 0, duration: $(".icon-categories").height() - ($(".icon-categories").height()/7.5) })
    // .setClassToggle(".weight-selector", "weight-selector--showing")
    .addTo(controller);

    sceneWeightSelector.on("enter", function (event) {
      cycleIcons()
    });

  if ($(window).width() > 1180) {
    var sceneWeightSelector = new ScrollMagic.Scene({triggerElement: ".icon-categories", offset: 0, duration: $(".icon-categories").height() - ($(".icon-categories").height()/7.5) })
      .setClassToggle(".weight-selector", "weight-selector--showing")
      .addTo(controller);

      sceneWeightSelector.on("enter", function (event) {
        cycleIcons()
      });
  }


  //Final countdown
  var expiration= "2018/08/07";
  $("#expiration1").countdown(expiration, function(event) {
    $(this).html(
      event.strftime('<strong>%-D</strong>'+' days  '+'<strong>%-H</strong>'+' hrs  '+'<strong>%M</strong>'+' mins  '+'<strong>%S</strong>'+' secs')
    );
  });

  //Final countdown
  $("#expiration2").countdown(expiration, function(event) {
    $(this).html(
      event.strftime('<strong>%-D</strong>'+' days  '+'<strong>%-H</strong>'+' hrs  '+'<strong>%M</strong>'+' mins  '+'<strong>%S</strong>'+' secs')
    );
  });


  // console.log( $(".icon-categories").height() );

  if ($(window).width() > 1180) {
    $(".solid h2").each(function() {
      var sceneNavFade = new ScrollMagic.Scene({
        triggerElement: this,
        offset: -600,
        duration: 600,
        reverse: true
      })
        .setClassToggle(".section-nav", "is-faded")
        .addTo(controller)
        ;
    });
  }

  // $("#icons .section-text-wrapper").each(function() {
  //   var scenePinHeader = new ScrollMagic.Scene({
  //     triggerElement: this,
  //     offset: 350,
  //     duration: $("#icons").height()-800,
  //     reverse: true
  //   })
  //     .setClassToggle("#icons h2", "is-sticky")
  //     .addTo(controller)
  //     .addIndicators({name: "header pin"})
  //     ;
  // });

  // var scenePinHeader = new ScrollMagic.Scene({triggerElement: "#icons .section-text-wrapper", duration: $("#icons").height() })
  //   .addTo(controller);


  // var scenePinHeader = new ScrollMagic.Scene({
  //   triggerElement: "#icons .section-text-wrapper",
  //   // duration: $("#icons").height()
  // })
  //   .setPin("#icons .section-text-wrapper")
  //   .addIndicators({name: "pin h2"}) // add indicators (requires plugin)
  //   .addTo(controller)
  //   ;


  // ****************************************************
  // section nav click and scroll

  $(".menu").find("a").click(function(e) {
    e.preventDefault();
    $('.menu a').removeClass("is-active"); // remove active from all
    $(this).addClass("is-active"); // make active

    // hide menu on smaller screens when item is clicked
    if ($(window).width() < 1180) {
       hideMenu();
    }

    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
  });


  // ****************************************************
  // scroll around the page functions
  $(".buy-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#price").offset().top
    }, 1000);
  });

  $("header h1").click(function() {
    $('html, body').animate({
        scrollTop: $("#main").offset().top
    }, 1000);
  });

  // ****************************************************
  // show / hide header bg on scroll
  var h = $("header");
  var pos = h.position();
  $(window).scroll(function() {
    var windowpos = $(window).scrollTop();
    if (windowpos >= pos.top & windowpos >=100) {
      h.addClass("is-scrolled");
    } else {
      h.removeClass("is-scrolled");
    }
  });

  // *******
  // auto animate weights
  // Switch to detect if controls have been clicked or not
  var controlClicked = false;

  // Cycle through icon styles if the controls haven't been clicked
  function cycleIcons(callback) {

      setTimeout(function () {
        if(controlClicked == false) {
          showRegular();
          // console.log("regular showing");
        };
      }, 2400);

      setTimeout(function () {
        if(controlClicked == false) {
          showBold();
          // console.log("bold showing");
        };
      }, 4800);

      setTimeout(function () {
        if(controlClicked == false) {
          showLight();
          // console.log("light showing");
        };
      }, 7200);

      // loop the function again (uncomment if you want it to go forever)
      // setTimeout(function () {
      //   if(controlClicked == false) {
      //     cycleIcons();
      //   };
      // }, 7200);

  };

  // ****************************************************
  // show light icons
  function showLight() {

    $(".weight-selector #light").addClass("is-active");
    $(".weight-selector #regular").removeClass("is-active");
    $(".weight-selector #bold").removeClass("is-active");

    // Transition icons out
    setTimeout(function () {
      $("ul.icons--light li .svg-wrapper").addClass("icons--out");
      $("ul.icons--regular li .svg-wrapper").removeClass("icons--in").addClass("icons--out");
      $("ul.icons--bold li .svg-wrapper").removeClass("icons--in").addClass("icons--out");
    }, 0);

    // Transition icons in
    setTimeout(function () {
      $("ul.icons--light").removeClass("icons-hidden").addClass("icons-showing");
      $("ul.icons--regular").removeClass("icons-showing").addClass("icons-hidden");
      $("ul.icons--bold").removeClass("icons-showing").addClass("icons-hidden");
    }, 300);

    // Transition icons in
    setTimeout(function () {
      $("ul.icons--light li .svg-wrapper").addClass("icons--in");
    }, 350);

  };

  // ****************************************************
  // Show REGULAR icons
  function showRegular() {

    $("#light").removeClass("is-active");
    $("#regular").addClass("is-active");
    $("#bold").removeClass("is-active");

    // Transition icons out
    setTimeout(function () {
      $("ul.icons--light li .svg-wrapper").removeClass("icons--in").addClass("icons--out");
      $("ul.icons--regular li .svg-wrapper").addClass("icons--out");
      $("ul.icons--bold li .svg-wrapper").removeClass("icons--in").addClass("icons--out");
    }, 0);

    // Transition icons in
    setTimeout(function () {
      $("ul.icons--light").removeClass("icons-showing").addClass("icons-hidden");
      $("ul.icons--regular").removeClass("icons-hidden").addClass("icons-showing");
      $("ul.icons--bold").removeClass("icons-showing").addClass("icons-hidden");
    }, 300);

    // Transition icons in
    setTimeout(function () {
      $("ul.icons--regular li .svg-wrapper").addClass("icons--in");
    }, 350);

  };

  // ****************************************************
  // Show BOLD icons
  function showBold() {

    $("#light").removeClass("is-active");
    $("#regular").removeClass("is-active");
    $("#bold").addClass("is-active");

    // Transition icons out
    setTimeout(function () {
      $("ul.icons--light li .svg-wrapper").removeClass("icons--in").addClass("icons--out");
      $("ul.icons--regular li .svg-wrapper").removeClass("icons--in").addClass("icons--out");
      $("ul.icons--bold li .svg-wrapper").addClass("icons--out");
    }, 0);

    // Transition icons in
    setTimeout(function () {
      $("ul.icons--light").removeClass("icons-showing").addClass("icons-hidden");
      $("ul.icons--regular").removeClass("icons-showing").addClass("icons-hidden");
      $("ul.icons--bold").removeClass("icons-hidden").addClass("icons-showing");
    }, 300);

    // Transition icons in
    setTimeout(function () {
      $("ul.icons--bold li .svg-wrapper").addClass("icons--in");
    }, 350);

  };

  // Show light icons
  $("#light").on("click", function() {
    showLight();
    // changeTitleLight();
    controlClicked = true;
  });

  // Show REGULAR icons
  $("#regular").on("click", function() {
    showRegular();
    // changeTitleRegular();
    controlClicked = true;
  });

  // Show BOLD icons
  $("#bold").on("click", function() {
    showBold();
    // changeTitleBold();
    controlClicked = true;
  });

  // function changeTitleLight (){
  //   $(".section-right-icon-wrapper#interface h3").html("User Interface – Light");
  //   $(".section-right-icon-wrapper#social h3").html("Social Media – Light");
  //   $(".section-right-icon-wrapper#programming h3").html("Programming – Light");
  //   $(".section-right-icon-wrapper#business h3").html("Business – Light");
  //   $(".section-right-icon-wrapper#design h3").html("Design – Light");
  //   $(".section-right-icon-wrapper#avatars h3").html("Avatars – Light");
  //   $(".section-right-icon-wrapper#ecology h3").html("Ecology – Light");
  // }

  // // function changeTitleRegular (){
  //   $(".section-right-icon-wrapper#interface h3").html("User Interface – Regular");
  //   $(".section-right-icon-wrapper#social h3").html("Social Media – Regular");
  //   $(".section-right-icon-wrapper#programming h3").html("Programming – Regular");
  //   $(".section-right-icon-wrapper#business h3").html("Business – Regular");
  //   $(".section-right-icon-wrapper#design h3").html("Design – Regular");
  //   $(".section-right-icon-wrapper#avatars h3").html("Avatars – Regular");
  //   $(".section-right-icon-wrapper#ecology h3").html("Ecology – Regular");
  // }

  // function changeTitleBold (){
  //   $(".section-right-icon-wrapper#interface h3").html("User Interface – Bold");
  //   $(".section-right-icon-wrapper#social h3").html("Social Media – Bold");
  //   $(".section-right-icon-wrapper#programming h3").html("Programming – Bold");
  //   $(".section-right-icon-wrapper#business h3").html("Business – Bold");
  //   $(".section-right-icon-wrapper#design h3").html("Design – Bold");
  //   $(".section-right-icon-wrapper#avatars h3").html("Avatars – Bold");
  //   $(".section-right-icon-wrapper#ecology h3").html("Ecology – Bold");
  // }

  // ****************************************************
  // color control
  function setThemeWhite() {
    $("body").removeClass();
    $(".color-selector a").removeClass("is-active");
    $("a.white").addClass("is-active");
    $.cookie("colorPref", "white");
    $("#favicon").attr("href","_assets/img/favicon-light.png");
  }

  function setThemeColor() {
    $("body").removeClass();
    $("body").addClass("color");
    $(".color-selector a").removeClass("is-active");
    $("a.color").addClass("is-active");
    $.cookie("colorPref", "color");
    $("#favicon").attr("href","_assets/img/favicon-color.png");
  }

  function setThemeDark() {
    $("body").removeClass();
    $("body").addClass("dark");
    $(".color-selector a").removeClass("is-active");
    $("a.dark").addClass("is-active");
    $.cookie("colorPref", "dark");
    $("#favicon").attr("href","_assets/img/favicon-dark.png");
  }

  $("a.white").click(function() {
    setThemeWhite();
  });

  $("a.color").click(function() {
    setThemeColor();
  });

  $("a.dark").click(function() {
    setThemeDark();
  });

  // ****************************************************
  // mobile menu

  var menuShowing = false;
  $(".menu-btn").click(function() {
    if(menuShowing == false){
      showMenu();
    } else {
      hideMenu();
    }
  });

  function showMenu(){
    menuShowing = true;
    // $(".section-nav .menu").fadeIn("fast");
    $(".section-nav .menu").removeClass("menu-flyout-hide");
    $(".section-nav .menu").addClass("menu-flyout-show");
    $(".menu-btn .ui-btn-content").html("<svg><use xlink:href='#icon-ui-close'></use></svg");
  }

  function hideMenu(){
    menuShowing = false;
    // $(".section-nav .menu").fadeOut("fast");
    console.log("hideMenu fired");
    $(".section-nav .menu").removeClass("menu-flyout-show");
    $(".section-nav .menu").addClass("menu-flyout-hide");
    $(".menu-btn .ui-btn-content").html("<svg><use xlink:href='#icon-ui-hamburger'></use></svg");
  }

});

