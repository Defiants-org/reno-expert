$(window).resize(function() {
  if ($(window).width() <= 768) {
    $('.kutija1').remove().insertAfter($('.kutija2'));
  } else {
    $('.kutija1').remove().insertBefore($('.kutija2'));
  }
})
