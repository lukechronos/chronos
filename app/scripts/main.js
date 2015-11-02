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
$("[data-hover~=change-format").hover(
  function() {
    $(this).attr("src", $(this).data("image-src") + ".gif");
  }, function() {
    $(this).attr("src", $(this).data("image-src") + ".jpg");
  }
);
