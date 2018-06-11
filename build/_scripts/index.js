$(document).ready(function() {

  // ****************************************************
  // SCROLL MAGIC
  // init controller
  var controller = new ScrollMagic.Controller();

  // ****************************************************
  // scroll magic scene – main
  var tweenMain = new TimelineMax();
  tweenMain.add(TweenMax.fromTo("#main p", 1, {y: 200}, {y: -200, ease: Linear.easeOut}));
  var scene0 = new ScrollMagic.Scene({triggerElement: "#main", duration: "100%"})
    .setTween(tweenMain)
    .addTo(controller);
  scene0.on("enter", function (event) {
      $('.section-nav a').removeClass("nav--is-active"); // remove active from all
    });

  // ****************************************************
  // scroll magic scene – new
  var tweenNew = new TimelineMax();
    tweenNew.add(
        TweenMax.fromTo("#new p", 1, {y: 200}, {y: -200, ease: Linear.easeOut})
    );
    // tweenNew.add(
    //     TweenMax.fromTo("#new p", 1, {color: '#000000'}, {color: '#ff0000', ease: Linear.easeOut})
    // );

  var scene1 = new ScrollMagic.Scene({triggerElement: "#new", duration: "100%"})
    .setTween(tweenNew)
    .addTo(controller);

  scene1.on("enter", function (event) {
      $('.section-nav a').removeClass("nav--is-active"); // remove active from all
      $('.section-nav a[href^="#new"]').addClass("nav--is-active"); // make active
    });

  // ****************************************************
  // scroll magic scene – more
  var tweenMore = new TimelineMax();
  tweenMore.add( TweenMax.fromTo("#more p", 1, {y: 200}, {y: -200, ease: Linear.easeOut}));
  var scene2 = new ScrollMagic.Scene({triggerElement: "#more", duration: "100%"})
    .setTween(tweenMore)
    .addTo(controller);
  scene2.on("enter", function (event) {
      $('.section-nav a').removeClass("nav--is-active"); // remove active from all
      $('.section-nav a[href^="#more"]').addClass("nav--is-active"); // make active
    });


  // ****************************************************
  // scroll magic scene – weights
  var tweenWeights = new TimelineMax();
  tweenWeights.add(TweenMax.fromTo("#weights p", 1, {y: 200}, {y: -200, ease: Linear.easeOut}));
  var scene3 = new ScrollMagic.Scene({triggerElement: "#weights", duration: "100%"})
    .setTween(tweenWeights)
    .addTo(controller);
  scene3.on("enter", function (event) {
      $('.section-nav a').removeClass("nav--is-active"); // remove active from all
      $('.section-nav a[href^="#weights"]').addClass("nav--is-active"); // make active
    });

  // ****************************************************
  // scroll magic scene – Faster
  var tweenFaster = new TimelineMax();
  tweenFaster.add(TweenMax.fromTo("#faster p", 1, {y: 200}, {y: -200, ease: Linear.easeOut}));
  var scene4 = new ScrollMagic.Scene({triggerElement: "#faster", duration: "100%"})
    .setTween(tweenFaster)
    .addTo(controller);
  scene4.on("enter", function (event) {
      $('.section-nav a').removeClass("nav--is-active"); // remove active from all
      $('.section-nav a[href^="#faster"]').addClass("nav--is-active"); // make active
    });

  // ****************************************************
  // scroll magic scene – org
  var tweenOrg = new TimelineMax();
  tweenOrg.add(TweenMax.fromTo("#org p", 1, {y: 200}, {y: -200, ease: Linear.easeOut}));
  var scene5 = new ScrollMagic.Scene({triggerElement: "#org", duration: "100%"})
    .setTween(tweenOrg)
    .addTo(controller);
  scene5.on("enter", function (event) {
      $('.section-nav a').removeClass("nav--is-active"); // remove active from all
      $('.section-nav a[href^="#org"]').addClass("nav--is-active"); // make active
    });

  // ****************************************************
  // scroll magic scene – web
  var tweenWeb = new TimelineMax();
  tweenWeb.add(TweenMax.fromTo("#web p", 1, {y: 200}, {y: -200, ease: Linear.easeOut}));
  var scene6 = new ScrollMagic.Scene({triggerElement: "#web", duration: "100%"})
    .setTween(tweenWeb)
    .addTo(controller);
  scene6.on("enter", function (event) {
      $('.section-nav a').removeClass("nav--is-active"); // remove active from all
      $('.section-nav a[href^="#web"]').addClass("nav--is-active"); // make active
    });

  // ****************************************************
  // scroll magic scene – sketch
  var tweenSketch = new TimelineMax();
  tweenSketch.add(TweenMax.fromTo("#sketch p", 1, {y: 200}, {y: -200, ease: Linear.easeOut}));
  var scene7 = new ScrollMagic.Scene({triggerElement: "#sketch", duration: "100%"})
    .setTween(tweenSketch)
    .addTo(controller);
  scene7.on("enter", function (event) {
      $('.section-nav a').removeClass("nav--is-active"); // remove active from all
      $('.section-nav a[href^="#sketch"]').addClass("nav--is-active"); // make active
    });

  // ****************************************************
  // scroll magic scene – SVG
  var tweenSVG = new TimelineMax();
  tweenSVG.add(TweenMax.fromTo("#svg p", 1, {y: 200}, {y: -200, ease: Linear.easeOut}));
  var scene8 = new ScrollMagic.Scene({triggerElement: "#svg", duration: "100%"})
    .setTween(tweenSVG)
    .addTo(controller);
  scene8.on("enter", function (event) {
      $('.section-nav a').removeClass("nav--is-active"); // remove active from all
      $('.section-nav a[href^="#svg"]').addClass("nav--is-active"); // make active
    });

  // ****************************************************
  // scroll magic scene – buy
  var tweenBuy = new TimelineMax();
  tweenBuy.add(TweenMax.fromTo("#buy p", 1, {y: 200}, {y: -200, ease: Linear.easeOut}));
  var scene9 = new ScrollMagic.Scene({triggerElement: "#buy", duration: "100%"})
    .setTween(tweenBuy)
    .addTo(controller);
  scene9.on("enter", function (event) {
      $('.section-nav a').removeClass("nav--is-active"); // remove active from all
      $('.section-nav a[href^="#buy"]').addClass("nav--is-active"); // make active
    });


  // ****************************************************
  // section nav click and scroll
  var $root = $('html, body');
  $('.section-nav a[href^="#"]').click(function() {
      var href = $.attr(this, 'href');

      // updates hashmark on nav
      $('.section-nav a').removeClass("nav--is-active"); // remove active from all
      $(this).addClass("nav--is-active"); // make active

      // animates scroll
      $root.animate({
          scrollTop: $(href).offset().top - 56
      }, 1000, function () {
          window.location.hash = href;
      });

      return false;
  });

  $("a.more").click(function() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 1000);
  });

  $("a.cta").click(function() {
    $('html, body').animate({
        scrollTop: $("#buy").offset().top
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





});

