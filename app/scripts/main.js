$(function(){
  $('.pull-down').each(function() {
    $(this).css('margin-top', $(this).parent().height()-$(this).height());
  });
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
var slideshowY = $('.vertical-slideshow').offset().top;
var headerContainer = $(".header-container");
var body = $("body");
var headerHeight = headerContainer.height();
var preorderButton = $(".header-container .preorder");
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

// Scroll handler to toggle classes.
window.addEventListener('scroll', stickyScroll, false);
