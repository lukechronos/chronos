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
