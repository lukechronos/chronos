$(function(){

});

$("[data-hover~=show-controls]").hover(
  function() {
    $('.carousel-control').show();
  }, function() {
    $('.carousel-control').hide();
  }
);
$("[data-hover~=change-image").hover(
  function() {
    $('.app-image').attr("src", $(this).data("image-src"));
  }, function() {
    $('.app-image').attr("src", "images/home/phone-1.png");
  }
);
