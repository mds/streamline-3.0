$(document).ready(function() {

  $("img").addClass("svg");

  //Final countdown
  $("#expiration").countdown("2018/06/19", function(event) {
    $(this).html(
      event.strftime('<strong>%-D</strong>'+' days '+'<strong>%-H</strong>'+' hours '+'<strong>%M</strong>'+' mins '+'<strong>%S</strong>'+' secs')
    );
  });

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
  // Show light icons
  function showLight() {

    $("#light").addClass("is-active");
    $("#regular").removeClass("is-active");
    $("#bold").removeClass("is-active");

    // Transition icons out
    setTimeout(function () {
      $("ul.icons--light li img").addClass("icons--out");
      $("ul.icons--regular li img").removeClass("icons--in").addClass("icons--out");
      $("ul.icons--bold li img").removeClass("icons--in").addClass("icons--out");
    }, 0);

    // Transition icons in
    setTimeout(function () {
      $("ul.icons--light").removeClass("is-hidden").addClass("is-showing");
      $("ul.icons--regular").removeClass("is-showing").addClass("is-hidden");
      $("ul.icons--bold").removeClass("is-showing").addClass("is-hidden");
    }, 300);

    // Transition icons in
    setTimeout(function () {
      $("ul.icons--light li img").addClass("icons--in");
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
      $("ul.icons--light li img").removeClass("icons--in").addClass("icons--out");
      $("ul.icons--regular li img").addClass("icons--out");
      $("ul.icons--bold li img").removeClass("icons--in").addClass("icons--out");
    }, 0);

    // Transition icons in
    setTimeout(function () {
      $("ul.icons--light").removeClass("is-showing").addClass("is-hidden");
      $("ul.icons--regular").removeClass("is-hidden").addClass("is-showing");
      $("ul.icons--bold").removeClass("is-showing").addClass("is-hidden");
    }, 300);

    // Transition icons in
    setTimeout(function () {
      $("ul.icons--regular li img").addClass("icons--in");
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
      $("ul.icons--light li img").removeClass("icons--in").addClass("icons--out");
      $("ul.icons--regular li img").removeClass("icons--in").addClass("icons--out");
      $("ul.icons--bold li img").addClass("icons--out");
    }, 0);

    // Transition icons in
    setTimeout(function () {
      $("ul.icons--light").removeClass("is-showing").addClass("is-hidden");
      $("ul.icons--regular").removeClass("is-showing").addClass("is-hidden");
      $("ul.icons--bold").removeClass("is-hidden").addClass("is-showing");
    }, 300);

    // Transition icons in
    setTimeout(function () {
      $("ul.icons--bold li img").addClass("icons--in");
    }, 350);

  };

  // function reCycleIcons (){
  //   setTimeout(function () {
  //     controlClicked = false;
  //     cycleIcons();
  //   }, 7200);
  // }

  // ****************************************************
  // Show light icons
  $("#light").on("click", function() {
    controlClicked = true;
    showLight();
    // reCycleIcons();
  });

  // ****************************************************
  // Show REGULAR icons
  $("#regular").on("click", function() {
    controlClicked = true;
    showRegular();
    // reCycleIcons();
  });

  // ****************************************************
  // Show BOLD icons
  $("#bold").on("click", function() {
    controlClicked = true;
    showBold();
    // reCycleIcons();
  });





});

