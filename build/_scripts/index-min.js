$(document).ready(function() {

  console.log("Thanks for popping open the inspector.\nIf you see something crazy, let me know!\nI only half know what I'm doing here.😉\n\n—@MDS\nhttp://twitter.com/mds");

  // ****************************************************
  // SCROLL MAGIC
  // init controller
  var controller = new ScrollMagic.Controller();

  // UNCOMMENT WHEN YOU'RE READY TO ADD ANIMATIONS TO THE ICON CONTENT
  // var tweenMain = new TimelineMax ()
  // .add([
  //   TweenMax.fromTo("#icon-small", 2, {y: 300}, {y: -600, ease: Linear.easeOut}),
  //   TweenMax.fromTo("#icon-medium", 2, {y: 100}, {y: -275, ease: Linear.easeOut})
  // ]);

  // var sceneMain = new ScrollMagic.Scene({triggerElement: "#main", triggerHook: .5, duration: 300})
  //   .setTween(tweenMain)
  //   .addTo(controller);


  // ****************************************************
  // main
  // var tweenMain = new TimelineMax ()
  //   .add([
  //     // TweenMax.staggerFromTo("#main .section-text-wrapper", .3, {y: 0}, {y: -240, ease: Linear.easeOut, delay: 1}),
  //     // TweenMax.to("#main .section-text h2", 2, {className: "+=shrink-h2"}),
  //     // TweenMax.to("#main .section-text p", 2, {className: "+=shrink-p", delay: .05}),
  //     // TweenMax.fromTo("#new .section-text-wrapper", .2, {opacity: 0}, {opacity: 1, ease: Linear.easeOut, delay: 1.3}),
  //     // TweenMax.fromTo("#new .section-text p", 1, {y: 32}, {y: 0, ease: Linear.easeOut, delay: 1})
  //   ]);

  // var sceneMain = new ScrollMagic.Scene({triggerElement: "#main .trigger", triggerHook: 'onLeave', duration: $("#main").height()-500})
  //     .setPin("section#main .section-text", {pushFollowers: false})
  //     .addIndicators({name: "main text"})
  //     .setTween(tweenMain)
  //     .addTo(controller);

  var tweenMainContent = new TimelineMax ()
    .add([
      TweenMax.staggerFromTo("#main .section-content .icon-small", 1, {y: 0}, {y: 100, ease: Linear.easeOut}),
      TweenMax.staggerFromTo("#main .section-content .icon-medium", 1, {y: 0}, {y: -100, ease: Linear.easeOut}),
      TweenMax.staggerFromTo("#main .section-content .icon-large", 1, {y: 0}, {y: -200, ease: Linear.easeOut}),
    ]);

  var sceneMainContent = new ScrollMagic.Scene({triggerElement: "#main", triggerHook: 'onLeave', duration: $("#main").height()})
      // .addIndicators({name: "main content"})
      .setTween(tweenMainContent)
      .addTo(controller);

  // // sceneMain.on("enter", function (event) {
  // //   $('section#main .section-text h2').addClass("shrink"); // remove active from all
  // // });

  // // sceneMain.on("leave", function (event) {
  // //   $('section#main .section-text h2').removeClass("shrink");
  // // });


  // // ****************************************************
  // // new
  // var tweennew = new TimelineMax ()
  //   .add([
  //     // TweenMax.staggerFromTo("#new .section-text-wrapper", .3, {y: 0}, {y: -240, ease: Linear.easeOut, delay: 1}),
  //     // TweenMax.to("#new .section-text h2", 2, {className: "+=shrink-h2"}),
  //     // TweenMax.to("#new .section-text p", 2, {className: "+=shrink-p", delay: .05}),
  //     // TweenMax.fromTo("#more .section-text-wrapper", .3, {opacity: 0}, {opacity: 1, ease: Linear.easeOut, delay: 1.5}),
  //     // TweenMax.fromTo("#more .section-text p", 1, {y: 32}, {y: 0, ease: Linear.easeOut, delay: 1})
  //   ]);

  // var scenenew = new ScrollMagic.Scene({triggerElement: "#new .trigger", triggerHook: 'onLeave', duration: 600})
  //     .setPin("section#new .section-text-wrapper", {pushFollowers: false})
  //     // .addIndicators({name: "new text"})
  //     .setTween(tweennew)
  //     .addTo(controller);

  // // scenenew.on("enter", function (event) {
  // //   $('section#new .section-text h2').addClass("shrink"); // remove active from all
  // // });

  // // scenenew.on("leave", function (event) {
  // //   $('section#new .section-text h2').removeClass("shrink");
  // // });


  // // ****************************************************
  // // more
  // var tweenmore = new TimelineMax ()
  //   .add([
  //     TweenMax.staggerFromTo("#more .section-text-wrapper", .3, {y: 0}, {y: -240, ease: Linear.easeOut, delay: 1}),
  //     // TweenMax.to("#more .section-text h2", 1, {className: "+=shrink-h2"}),
  //     // TweenMax.to("#more .section-text p", 1, {className: "+=shrink-p", delay: .05}),
  //     TweenMax.fromTo("#weights .section-text-wrapper", .3, {opacity: 0}, {opacity: 1, ease: Linear.easeOut, delay: 1.5}),
  //     TweenMax.fromTo("#weights .section-text p", 1, {y: 32}, {y: 0, ease: Linear.easeOut, delay: 1})
  //   ]);

  // var scenemore = new ScrollMagic.Scene({triggerElement: "#more .trigger", triggerHook: 'onLeave', duration: 600})
  //     .setPin("section#more .section-text-wrapper", {pushFollowers: false})
  //     // .addIndicators({name: "more text"})
  //     .setTween(tweenmore)
  //     .addTo(controller);



  // // ****************************************************
  // // weights
  // var tweenweights = new TimelineMax ()
  //   .add([
  //     TweenMax.staggerFromTo("#weights .section-text-wrapper", .3, {y: 0}, {y: -240, ease: Linear.easeOut, delay: 1}),
  //     // TweenMax.to("#weights .section-text h2", 1, {className: "+=shrink-h2"}),
  //     // TweenMax.to("#weights .section-text p", 1, {className: "+=shrink-p", delay: .05}),
  //     TweenMax.fromTo("#faster .section-text-wrapper", .3, {opacity: 0}, {opacity: 1, ease: Linear.easeOut, delay: 1.5}),
  //     TweenMax.fromTo("#faster .section-text p", 1, {y: 32}, {y: 0, ease: Linear.easeOut, delay: 1})
  //   ]);

  // var sceneweights = new ScrollMagic.Scene({triggerElement: "#weights .trigger", triggerHook: 'onLeave', duration: 600})
  //     .setPin("section#weights .section-text-wrapper", {pushFollowers: false})
  //     // .addIndicators({name: "weights text"})
  //     .setTween(tweenweights)
  //     .addTo(controller);


  // // ****************************************************
  // // faster
  // var tweenfaster = new TimelineMax ()
  //   .add([
  //     TweenMax.staggerFromTo("#faster .section-text-wrapper", .3, {y: 0}, {y: -240, ease: Linear.easeOut, delay: 1}),
  //     // TweenMax.to("#faster .section-text h2", 1, {className: "+=shrink-h2"}),
  //     // TweenMax.to("#faster .section-text p", 1, {className: "+=shrink-p", delay: .05}),
  //     TweenMax.fromTo("#org .section-text-wrapper", .3, {opacity: 0}, {opacity: 1, ease: Linear.easeOut, delay: 1.5}),
  //     TweenMax.fromTo("#org .section-text p", 1, {y: 32}, {y: 0, ease: Linear.easeOut, delay: 1})
  //   ]);

  // var scenefaster = new ScrollMagic.Scene({triggerElement: "#faster .trigger", triggerHook: 'onLeave', duration: 600})
  //     .setPin("section#faster .section-text-wrapper", {pushFollowers: false})
  //     // .addIndicators({name: "faster text"})
  //     .setTween(tweenfaster)
  //     .addTo(controller);


  // // ****************************************************
  // // org
  // var tweenorg = new TimelineMax ()
  //   .add([
  //     TweenMax.staggerFromTo("#org .section-text-wrapper", .3, {y: 0}, {y: -240, ease: Linear.easeOut, delay: 1}),
  //     // TweenMax.to("#org .section-text h2", 1, {className: "+=shrink-h2"}),
  //     // TweenMax.to("#org .section-text p", 1, {className: "+=shrink-p", delay: .05}),
  //     TweenMax.fromTo("#web .section-text-wrapper", .3, {opacity: 0}, {opacity: 1, ease: Linear.easeOut, delay: 1.5}),
  //     TweenMax.fromTo("#web .section-text p", 1, {y: 32}, {y: 0, ease: Linear.easeOut, delay: 1})
  //   ]);

  // var sceneorg = new ScrollMagic.Scene({triggerElement: "#org .trigger", triggerHook: 'onLeave', duration: 600})
  //     .setPin("section#org .section-text-wrapper", {pushFollowers: false})
  //     // .addIndicators({name: "org text"})
  //     .setTween(tweenorg)
  //     .addTo(controller);


  // // ****************************************************
  // // web
  // var tweenweb = new TimelineMax ()
  //   .add([
  //     TweenMax.staggerFromTo("#web .section-text-wrapper", .3, {y: 0}, {y: -240, ease: Linear.easeOut, delay: 1}),
  //     // TweenMax.to("#web .section-text h2", 1, {className: "+=shrink-h2"}),
  //     // TweenMax.to("#web .section-text p", 1, {className: "+=shrink-p", delay: .05}),
  //     TweenMax.fromTo("#sketch .section-text-wrapper", .3, {opacity: 0}, {opacity: 1, ease: Linear.easeOut, delay: 1.5}),
  //     TweenMax.fromTo("#sketch .section-text p", 1, {y: 32}, {y: 0, ease: Linear.easeOut, delay: 1})
  //   ]);

  // var sceneweb = new ScrollMagic.Scene({triggerElement: "#web .trigger", triggerHook: 'onLeave', duration: 600})
  //     .setPin("section#web .section-text-wrapper", {pushFollowers: false})
  //     // .addIndicators({name: "web text"})
  //     .setTween(tweenweb)
  //     .addTo(controller);


  // // ****************************************************
  // // sketch
  // var tweensketch = new TimelineMax ()
  //   .add([
  //     TweenMax.staggerFromTo("#sketch .section-text-wrapper", .3, {y: 0}, {y: -240, ease: Linear.easeOut, delay: 1}),
  //     // TweenMax.to("#sketch .section-text h2", 1, {className: "+=shrink-h2"}),
  //     // TweenMax.to("#sketch .section-text p", 1, {className: "+=shrink-p", delay: .05}),
  //     TweenMax.fromTo("#svg .section-text-wrapper", .3, {opacity: 0}, {opacity: 1, ease: Linear.easeOut, delay: 1.5}),
  //     TweenMax.fromTo("#svg .section-text p", 1, {y: 32}, {y: 0, ease: Linear.easeOut, delay: 1})
  //   ]);

  // var scenesketch = new ScrollMagic.Scene({triggerElement: "#sketch .trigger", triggerHook: 'onLeave', duration: 600})
  //     .setPin("section#sketch .section-text-wrapper", {pushFollowers: false})
  //     // .addIndicators({name: "sketch text"})
  //     .setTween(tweensketch)
  //     .addTo(controller);

  // // ****************************************************
  // // svg
  // var tweensvg = new TimelineMax ()
  //   .add([
  //     TweenMax.staggerFromTo("#svg .section-text-wrapper", .3, {y: 0}, {y: -240, ease: Linear.easeOut, delay: 1}),
  //     // TweenMax.to("#svg .section-text h2", 1, {className: "+=shrink-h2"}),
  //     // TweenMax.to("#svg .section-text p", 1, {className: "+=shrink-p", delay: .05}),
  //     TweenMax.fromTo("#buy .section-text-wrapper", .3, {opacity: 0}, {opacity: 1, ease: Linear.easeOut, delay: 1.5}),
  //     TweenMax.fromTo("#buy .section-text p", 1, {y: 32}, {y: 0, ease: Linear.easeOut, delay: 1})
  //   ]);

  // var scenesvg = new ScrollMagic.Scene({triggerElement: "#svg .trigger", triggerHook: 'onLeave', duration: 600})
  //     .setPin("section#svg .section-text-wrapper", {pushFollowers: false})
  //     // .addIndicators({name: "svg text"})
  //     .setTween(tweensvg)
  //     .addTo(controller);


  // // ****************************************************
  // // buy
  // var tweenbuy = new TimelineMax ()
  //   .add([
  //     TweenMax.staggerFromTo("#buy .section-text-wrapper", .3, {y: 0}, {y: -240, ease: Linear.easeOut, delay: 1}),
  //     // TweenMax.to("#buy .section-text h2", 1, {className: "+=shrink-h2"}),
  //     // TweenMax.to("#buy .section-text p", 1, {className: "+=shrink-p", delay: .05}),
  //     TweenMax.fromTo("#buy .section-text p", 1, {y: 32}, {y: 0, ease: Linear.easeOut, delay: 1})
  //     // TweenMax.fromTo("#svg .section-text-wrapper", .3, {opacity: 0}, {opacity: 1, ease: Linear.easeOut, delay: 1.5})
  //   ]);

  // var scenebuy = new ScrollMagic.Scene({triggerElement: "#buy .trigger", triggerHook: 'onLeave', duration: 600})
  //     .setPin("section#buy .section-text-wrapper", {pushFollowers: false})
  //     // .addIndicators({name: "buy text"})
  //     .setTween(tweenbuy)
  //     .addTo(controller);


  // ****************************************************
  // section nav click and scroll
  var $root = $('html, body');
  $('.section-nav a[href^="#"]').click(function() {
      var href = $.attr(this, 'href');

      // updates hashmark on nav
      $('.section-nav a').removeClass("is-active"); // remove active from all
      $(this).addClass("is-active"); // make active

      // animates scroll
      $root.animate({
          scrollTop: $(href).offset()
      }, 1000, function () {
          window.location.hash = href;
      });

      return false;
  });

  // ****************************************************
  // scroll around the page functions
  $("a.more").click(function() {
    $(this).html("Material &nbsp;&nbsp;&nbsp;&nbsp; Futuristic &nbsp;&nbsp;&nbsp;&nbsp; Illustrations &nbsp;&nbsp;&nbsp;&nbsp; Emoji");
    $('html, body').animate({
        scrollTop: $("#main").offset().top
    }, 1000);
    setTimeout(function () {
      $("a.more").html("More");
    }, 2000);
  });

  $(".buy-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#buy").offset().top
    }, 1000);
    console.log("buy button got clicked, yo");
  });

  $("h1").click(function() {
    $('html, body').animate({
        scrollTop: $("#main").offset().top
    }, 1000);
  });

  // ****************************************************
  // show light icons
  function showLight() {

    $("#light").addClass("is-active");
    $("#regular").removeClass("is-active");
    $("#bold").removeClass("is-active");

    // Transition icons out
    setTimeout(function () {
      $("ul.icons--light li .svg-wrap").addClass("icons--out");
      $("ul.icons--regular li .svg-wrap").removeClass("icons--in").addClass("icons--out");
      $("ul.icons--bold li .svg-wrap").removeClass("icons--in").addClass("icons--out");
    }, 0);

    // Transition icons in
    setTimeout(function () {
      $("ul.icons--light").removeClass("is-hidden").addClass("is-showing");
      $("ul.icons--regular").removeClass("is-showing").addClass("is-hidden");
      $("ul.icons--bold").removeClass("is-showing").addClass("is-hidden");
    }, 300);

    // Transition icons in
    setTimeout(function () {
      $("ul.icons--light li .svg-wrap").addClass("icons--in");
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
      $("ul.icons--light li .svg-wrap").removeClass("icons--in").addClass("icons--out");
      $("ul.icons--regular li .svg-wrap").addClass("icons--out");
      $("ul.icons--bold li .svg-wrap").removeClass("icons--in").addClass("icons--out");
    }, 0);

    // Transition icons in
    setTimeout(function () {
      $("ul.icons--light").removeClass("is-showing").addClass("is-hidden");
      $("ul.icons--regular").removeClass("is-hidden").addClass("is-showing");
      $("ul.icons--bold").removeClass("is-showing").addClass("is-hidden");
    }, 300);

    // Transition icons in
    setTimeout(function () {
      $("ul.icons--regular li .svg-wrap").addClass("icons--in");
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
      $("ul.icons--light li .svg-wrap").removeClass("icons--in").addClass("icons--out");
      $("ul.icons--regular li .svg-wrap").removeClass("icons--in").addClass("icons--out");
      $("ul.icons--bold li .svg-wrap").addClass("icons--out");
    }, 0);

    // Transition icons in
    setTimeout(function () {
      $("ul.icons--light").removeClass("is-showing").addClass("is-hidden");
      $("ul.icons--regular").removeClass("is-showing").addClass("is-hidden");
      $("ul.icons--bold").removeClass("is-hidden").addClass("is-showing");
    }, 300);

    // Transition icons in
    setTimeout(function () {
      $("ul.icons--bold li .svg-wrap").addClass("icons--in");
    }, 350);

  };

  // Show light icons
  $("#light").on("click", function() {
    showLight();
  });

  // Show REGULAR icons
  $("#regular").on("click", function() {
    showRegular();
  });

  // Show BOLD icons
  $("#bold").on("click", function() {
    showBold();
  });

  // ****************************************************
  // color control
  $("a.white").click(function() {
    $("body").removeClass();
    $(".color-control a").removeClass("is-active");
    $(this).addClass("is-active");
  });

  $("a.color").click(function() {
    $("body").removeClass();
    $("body").addClass("color");
    $(".color-control a").removeClass("is-active");
    $(this).addClass("is-active");
  });

  $("a.dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark");
    $(".color-control a").removeClass("is-active");
    $(this).addClass("is-active");
  });

  // ****************************************************
  // mobile menu
  var menuShowing = false;
  $(".menu-btn").click(function() {
    console.log("menu clicked");
    if(menuShowing == false){
      menuShowing = true;
      $(".section-nav").fadeIn();
      // $(".section-nav").removeClass("is-hidden");
      // $(".section-nav").addClass("is-showing");
      $(".menu-btn .ui-btn-content").html("<svg><use xlink:href='_assets/img/icon-close.svg#target'></use></svg");
    } else {
      hideMenu();
    }
  });

  function hideMenu(){
    menuShowing = false;
    $(".section-nav").fadeOut();
    // $(".section-nav").removeClass("is-showing");
    // $(".section-nav").addClass("is-hidden");
    $(".menu-btn .ui-btn-content").html("<svg><use xlink:href='_assets/img/icon-hamburger.svg#target'></use></svg");
  }




});



