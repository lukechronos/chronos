// Sticky Nav
var slideshowY;
var headerContainer = $(".header-container");
var body = $("body");
var headerHeight = headerContainer.height();
var preorderButton = $(".header-container .preorder");

$(function(){
  if($("body").hasClass("preorder-body") || $("body").hasClass("about-body")){
    slideshowY = headerHeight;
  }else{
    slideshowY = $('.vertical-slideshow').offset().top;
  }

  if ($(window).width() > 758) {
    // Pull down hand in disc section
    $('.pull-down').each(function() {
      $(this).css('margin-top', $(this).parent().height()-$(this).height());
    });
  }

});

$("[data-hover~=change-image").hover(
  function() {
    $('.app-image').attr("src", $(this).data("image-src"));
  }, function() {
    $('.app-image').attr("src", $(this).data("image-init-src"));
  }
);
$("[data-hover~=change-format").hover(
  function() {
    $(this).attr("src", $(this).data("image-hover-src"));
  }, function() {
    $(this).attr("src", $(this).data("image-orig-src"));
  }
);

// Sticky Nav
function stickyScroll(e) {
  if( window.pageYOffset > slideshowY ) {
    console.log("below fold");
    headerContainer.addClass("fixed-header");
    preorderButton.addClass("btn");
    preorderButton.addClass("btn-default");
    body.css("padding-top", headerHeight);
  }

  if( window.pageYOffset < slideshowY ) {
    console.log("above fold");
    headerContainer.removeClass("fixed-header");
    preorderButton.removeClass("btn");
    preorderButton.removeClass("btn-default");
    body.css("padding-top", 0);
  }
}

if ($(window).width() > 960 && !$("body").hasClass("preorder-body")) {
 window.addEventListener('scroll', stickyScroll, false);
}
// Scroll handler to toggle classes.
