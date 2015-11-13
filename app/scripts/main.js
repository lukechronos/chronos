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
    headerContainer.addClass("fixed-header");
    preorderButton.addClass("btn");
    preorderButton.addClass("btn-default");
    body.css("padding-top", headerHeight);
  }

  if( window.pageYOffset < slideshowY ) {
    headerContainer.removeClass("fixed-header");
    preorderButton.removeClass("btn");
    preorderButton.removeClass("btn-default");
    body.css("padding-top", 0);
  }
}



// Parallax
// Mobile
// Put it live

if ($(window).width() > 960 && !$("body").hasClass("preorder-body")) {
 window.addEventListener('scroll', stickyScroll, false);
}

if ($("body").hasClass("index-body")) {
  var windowHeight = $(window).innerHeight();
  var $vcontainer = $('.vertical-slideshow-container');
  var $vslide = $('.vertical-slideshow');
  var verticalTopSlide = $vslide.offset().top;
  var circlesContainerTop = $('.circles').offset().top;
  var verticalSecondSlide = verticalTopSlide + windowHeight * 2;
  var verticalThirdSlide = verticalSecondSlide + windowHeight * 2;
  var verticalThirdSlide = verticalSecondSlide + windowHeight * 2;
  $(function(){
    $('#cta-carousel').carousel({
      interval: false
    });
  });
  $('#cta-carousel').carousel();
  // window.addEventListener('scroll', verticalSlideShow, false);
}

function verticalSlideShow(e){
  if((window.pageYOffset > verticalTopSlide) && (window.pageYOffset < verticalTopSlide + windowHeight)){
    $vcontainer.addClass("sticky");
    $vcontainer.addClass("active");
    $('#cta-carousel').carousel(0);
  }else if ((window.pageYOffset > verticalTopSlide + windowHeight + 1) && (window.pageYOffset < verticalSecondSlide) && $vcontainer.hasClass("active")) {
    $vcontainer.addClass("sticky");
    $('#cta-carousel').carousel(1);
  }else if ((window.pageYOffset > verticalSecondSlide) && (window.pageYOffset < verticalSecondSlide + windowHeight) && $vcontainer.hasClass("active"))  {
    $vcontainer.addClass("sticky");
    $('#cta-carousel').carousel(2);
  }else if (window.pageYOffset > verticalSecondSlide + windowHeight){
    $vcontainer.removeClass("sticky");
    $vcontainer.removeClass("active");
    $(document).scrollTop(circlesContainerTop);
    $('#cta-carousel').carousel(0);
  }
}
