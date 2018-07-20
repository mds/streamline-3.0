$(document).ready(function() {

  console.log("Look ma, no errors!\n\nBuuuuuut.... if you see something crazy or just plain wrong though, please reach out. I only half know what I'm doing here. A DM or public reply is perfectly acceptable.\n\n🖤\n—MDS\nhttp://twitter.com/mds\n\n");

  // update theme based on color pref cookie
  if ($.cookie('colorPref') === 'white') { setThemeWhite(); };
  if ($.cookie('colorPref') === 'color') { setThemeColor(); };
  if ($.cookie('colorPref') === "dark")  { setThemeDark();  };

  // disable horizontal scroll – THIS IS A TOTAL HACK because I couldn't figure out how to get the position: sticky <h2>s working while having the .body-wrapper class set to overflow-x: hidden
  $(function() {

      var $body = $(document);
      $body.bind('scroll', function() {
          // "Disable" the horizontal scroll.
          if ($body.scrollLeft() !== 0) {
              $body.scrollLeft(0);
          }
      });

  });

  // for float label form
  Array.from(document.getElementsByClassName('floatl')).forEach(
    function(element) {
      new Floatl(element);
    }
  );

  // make sure the menu is showing if the menu get's closed on mobile and then the browser gets scaled up
  $(window).resize(function() {
    if ($(window).width() > 1180) {
       // console.log('Greater than 1180');
       $(".section-nav .menu").fadeIn();
    }
  });

  // ****************************************************
  // SCROLL MAGIC
  // init controller

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
      // .addIndicators()
      .addTo(controller);


  ////////////////////////////////////////////////////////////////////

  var tweenIconDividerone = new TimelineMax ()
    .add([
      TweenMax.staggerFromTo(".icon-divider-one .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-one .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-one .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
    ]);

  var sceneIconDividerone = new ScrollMagic.Scene({triggerElement: ".icon-divider-one", offset: -($(".icon-divider").height()/2), triggerHook: 'onLeave', duration: ($(".icon-divider-one").height()+800)})
      .setTween(tweenIconDividerone)
      // .addIndicators()
      .addTo(controller);

  //////////////////////////////////////////////////////////////////////

  var tweenIconDividertwo = new TimelineMax ()
    .add([
      TweenMax.staggerFromTo(".icon-divider-two .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-two .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-two .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
    ]);

  var sceneIconDividertwo = new ScrollMagic.Scene({triggerElement: ".icon-divider-two", offset: -($(".icon-divider").height()/2), triggerHook: 'onLeave', duration: ($(".icon-divider-two").height()+800)})
      .setTween(tweenIconDividertwo)
      // .addIndicators()
      .addTo(controller);

  //////////////////////////////////////////////////////////////////////

  var tweenIconDividerthree = new TimelineMax ()
    .add([
      TweenMax.staggerFromTo(".icon-divider-three .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-three .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-three .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
    ]);

  var sceneIconDividerthree = new ScrollMagic.Scene({triggerElement: ".icon-divider-three", offset: -($(".icon-divider").height()/2), triggerHook: 'onLeave', duration: ($(".icon-divider-three").height()+800)})
      .setTween(tweenIconDividerthree)
      // .addIndicators()
      .addTo(controller);

  //////////////////////////////////////////////////////////////////////

  var tweenIconDividerfour = new TimelineMax ()
    .add([
      TweenMax.staggerFromTo(".icon-divider-four .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-four .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-four .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
    ]);

  var sceneIconDividerfour = new ScrollMagic.Scene({triggerElement: ".icon-divider-four", offset: -($(".icon-divider").height()/2), triggerHook: 'onLeave', duration: ($(".icon-divider-four").height()+800)})
      .setTween(tweenIconDividerfour)
      // .addIndicators()
      .addTo(controller);

  //////////////////////////////////////////////////////////////////////

  var tweenIconDividerfive = new TimelineMax ()
    .add([
      TweenMax.staggerFromTo(".icon-divider-five .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-five .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-five .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
    ]);

  var sceneIconDividerfive = new ScrollMagic.Scene({triggerElement: ".icon-divider-five", offset: -($(".icon-divider").height()/2), triggerHook: 'onLeave', duration: ($(".icon-divider-five").height()+800)})
      .setTween(tweenIconDividerfive)
      // .addIndicators()
      .addTo(controller);

  //////////////////////////////////////////////////////////////////////

  var tweenIconDividersix = new TimelineMax ()
    .add([
      TweenMax.staggerFromTo(".icon-divider-six .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-six .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-six .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
    ]);

  var sceneIconDividersix = new ScrollMagic.Scene({triggerElement: ".icon-divider-six", offset: -($(".icon-divider").height()/2), triggerHook: 'onLeave', duration: ($(".icon-divider-six").height()+800)})
      .setTween(tweenIconDividersix)
      // .addIndicators()
      .addTo(controller);

  //////////////////////////////////////////////////////////////////////

  var tweenIconDividerseven = new TimelineMax ()
    .add([
      TweenMax.staggerFromTo(".icon-divider-seven .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-seven .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-seven .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
    ]);

  var sceneIconDividerseven = new ScrollMagic.Scene({triggerElement: ".icon-divider-seven", offset: -($(".icon-divider").height()/2), triggerHook: 'onLeave', duration: ($(".icon-divider-seven").height()+800)})
      .setTween(tweenIconDividerseven)
      // .addIndicators()
      .addTo(controller);

  //////////////////////////////////////////////////////////////////////

  var tweenIconDividereight = new TimelineMax ()
    .add([
      TweenMax.staggerFromTo(".icon-divider-eight .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-eight .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-eight .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
    ]);

  var sceneIconDividereight = new ScrollMagic.Scene({triggerElement: ".icon-divider-eight", offset: -($(".icon-divider").height()/2), triggerHook: 'onLeave', duration: ($(".icon-divider-eight").height()+800)})
      .setTween(tweenIconDividereight)
      // .addIndicators()
      .addTo(controller);

  //////////////////////////////////////////////////////////////////////

  var tweenIconDividernine = new TimelineMax ()
    .add([
      TweenMax.staggerFromTo(".icon-divider-nine .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-nine .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-nine .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
    ]);

  var sceneIconDividernine = new ScrollMagic.Scene({triggerElement: ".icon-divider-nine", offset: -($(".icon-divider").height()/2), triggerHook: 'onLeave', duration: ($(".icon-divider-nine").height()+800)})
      .setTween(tweenIconDividernine)
      // .addIndicators()
      .addTo(controller);

  //////////////////////////////////////////////////////////////////////

  var tweenIconDividerten = new TimelineMax ()
    .add([
      TweenMax.staggerFromTo(".icon-divider-ten .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-ten .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-ten .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
    ]);

  var sceneIconDividerten = new ScrollMagic.Scene({triggerElement: ".icon-divider-ten", offset: -($(".icon-divider").height()/2), triggerHook: 'onLeave', duration: ($(".icon-divider-ten").height()+800)})
      .setTween(tweenIconDividerten)
      // .addIndicators()
      .addTo(controller);

  //////////////////////////////////////////////////////////////////////

  var tweenIconDividereleven = new TimelineMax ()
    .add([
      TweenMax.staggerFromTo(".icon-divider-eleven .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-eleven .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-eleven .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
    ]);

  var sceneIconDividereleven = new ScrollMagic.Scene({triggerElement: ".icon-divider-eleven", offset: -($(".icon-divider").height()/2), triggerHook: 'onLeave', duration: ($(".icon-divider-eleven").height()+800)})
      .setTween(tweenIconDividereleven)
      // .addIndicators()
      .addTo(controller);

  //////////////////////////////////////////////////////////////////////

  var tweenIconDividertwelve = new TimelineMax ()
    .add([
      TweenMax.staggerFromTo(".icon-divider-twelve .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-twelve .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-twelve .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
    ]);

  var sceneIconDividertwelve = new ScrollMagic.Scene({triggerElement: ".icon-divider-twelve", offset: -($(".icon-divider").height()/2), triggerHook: 'onLeave', duration: ($(".icon-divider-twelve").height()+800)})
      .setTween(tweenIconDividertwelve)
      // .addIndicators()
      .addTo(controller);

  //////////////////////////////////////////////////////////////////////

  var tweenIconDividerthirteen = new TimelineMax ()
    .add([
      TweenMax.staggerFromTo(".icon-divider-thirteen .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-thirteen .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-thirteen .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
    ]);

  var sceneIconDividerthirteen = new ScrollMagic.Scene({triggerElement: ".icon-divider-thirteen", offset: -($(".icon-divider").height()/2), triggerHook: 'onLeave', duration: ($(".icon-divider-thirteen").height()+800)})
      .setTween(tweenIconDividerthirteen)
      // .addIndicators()
      .addTo(controller);

  //////////////////////////////////////////////////////////////////////

  var tweenIconDividerfourteen = new TimelineMax ()
    .add([
      TweenMax.staggerFromTo(".icon-divider-fourteen .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-fourteen .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-fourteen .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
    ]);

  var sceneIconDividerfourteen = new ScrollMagic.Scene({triggerElement: ".icon-divider-fourteen", offset: -($(".icon-divider").height()/2), triggerHook: 'onLeave', duration: ($(".icon-divider-fourteen").height()+800)})
      .setTween(tweenIconDividerfourteen)
      // .addIndicators()
      .addTo(controller);

  //////////////////////////////////////////////////////////////////////

  var tweenIconDividerfifteen = new TimelineMax ()
    .add([
      TweenMax.staggerFromTo(".icon-divider-fifteen .icon-small", 1, {y: 0}, {y: smallDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-fifteen .icon-medium", 1, {y: 0}, {y: mediumDistance, ease: Power0.easeOut}),
      TweenMax.staggerFromTo(".icon-divider-fifteen .icon-large", 1, {y: 0}, {y: largeDistance, ease: Power0.easeOut})
    ]);

  var sceneIconDividerfifteen = new ScrollMagic.Scene({triggerElement: ".icon-divider-fifteen", offset: -($(".icon-divider").height()/2), triggerHook: 'onLeave', duration: ($(".icon-divider-fifteen").height()+800)})
      .setTween(tweenIconDividerfifteen)
      // .addIndicators()
      .addTo(controller);

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

  //////////////////////////////////////////////////////////////////////

  weightCheck();

  $(window).resize(function() {
    weightCheck();
    // console.log("weight check fired");
  });

  function weightCheck() {
    if ($(window).width() < 1180) {
       $(".weight-selector").addClass("weight-selector--showing");
    } else {
      $(".weight-selector").removeClass("weight-selector--showing");
      var sceneWeightSelector = new ScrollMagic.Scene({triggerElement: ".icon-categories", offset: 0, duration: $(".icon-categories").height() - ($(".icon-categories").height()/7.5) })
        .setClassToggle(".weight-selector", "weight-selector--showing")
        .addTo(controller);
    }
  }

  //Final countdown
  var expiration= "2018/07/28";
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
        // .addIndicators()
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

  //////////////////////////////////////////////////////////////////////

  // ****************************************************
  // icon animations via Lottie

  var animationMood = bodymovin.loadAnimation({
    container: document.getElementById('icon-mood'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '_json/bubble.json'
  });

  var animationFooter = bodymovin.loadAnimation({
    container: document.getElementById('icon-footer'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '_json/bubble.json'
  });

  var animationCamera = bodymovin.loadAnimation({
    container: document.getElementById('icon-camera'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '_json/camera.json'
  });

  var animationGirl = bodymovin.loadAnimation({
    container: document.getElementById('icon-girl'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '_json/girl.json'
  });

  var animationLaptop = bodymovin.loadAnimation({
    container: document.getElementById('icon-laptop'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '_json/laptop.json'
  });

  var animationPencil = bodymovin.loadAnimation({
    container: document.getElementById('icon-pencil'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '_json/pencil.json'
  });

  var animationShake = bodymovin.loadAnimation({
    container: document.getElementById('icon-shake'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '_json/shake.json'
  });

  var animationTarget = bodymovin.loadAnimation({
    container: document.getElementById('icon-target'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '_json/target.json'
  });

  var animationWifi = bodymovin.loadAnimation({
    container: document.getElementById('icon-wifi'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '_json/wifi.json'
  });

  var animationYesno = bodymovin.loadAnimation({
    container: document.getElementById('icon-yesno'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '_json/yesno.json'
  });

  var animationHeadphones = bodymovin.loadAnimation({
    container: document.getElementById('icon-headphones'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '_json/headphones.json'
  });

  var animationPen = bodymovin.loadAnimation({
    container: document.getElementById('icon-pen'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '_json/pen.json'
  });

  var animationView = bodymovin.loadAnimation({
    container: document.getElementById('icon-view'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '_json/view.json'
  });

  var animationFlag = bodymovin.loadAnimation({
    container: document.getElementById('icon-flag'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '_json/flag.json'
  });




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
    // if(menuShowing == true){hideMenu();}
  });


  // ****************************************************
  // scroll around the page functions
  $(".buy-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#buy").offset().top
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
        };
      }, 2400);

      setTimeout(function () {
        if(controlClicked == false) {
          showBold();
        };
      }, 4800);

      setTimeout(function () {
        if(controlClicked == false) {
          showLight();
        };
      }, 7200);

      // loop the function again
      setTimeout(function () {
        if(controlClicked == false) {
          cycleIcons();
        };
      }, 7200);

  };

  // Initate animation
  cycleIcons();

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
  }

  function setThemeColor() {
    $("body").removeClass();
    $("body").addClass("color");
    $(".color-selector a").removeClass("is-active");
    $("a.color").addClass("is-active");
    $.cookie("colorPref", "color");
  }

  function setThemeDark() {
    $("body").removeClass();
    $("body").addClass("dark");
    $(".color-selector a").removeClass("is-active");
    $("a.dark").addClass("is-active");
    $.cookie("colorPref", "dark");
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
    // console.log("menu clicked");
    if(menuShowing == false){
      menuShowing = true;
      $(".section-nav .menu").fadeIn();
      $(".menu-btn .ui-btn-content").html("<svg><use xlink:href='_assets/img/ui/icon-close.svg#target'></use></svg");
    } else {
      hideMenu();
    }
  });

  function hideMenu(){
    menuShowing = false;
    $(".section-nav .menu").fadeOut();
    $(".menu-btn .ui-btn-content").html("<svg><use xlink:href='_assets/img/ui/icon-hamburger.svg#target'></use></svg");
  }

});

