$(document).ready(function() {

  // ****************************************************
  // Show light icons
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

