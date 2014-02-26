function fill_viewport() {
  $(".fill-vp").css( 'height', $(window).height() + 'px');
}

$(document).ready(function() {
  fill_viewport();
  $(window).bind('resize', fill_viewport);
});

