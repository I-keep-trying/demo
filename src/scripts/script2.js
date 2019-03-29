$(document).ready(function() {
  $(window).scroll(function(event) {
    let scroll = $(this).scrollTop()
    let opacity = 0 + scroll / 100
    if (opacity <= 1) {
      $('.float-action-button').css('opacity', opacity)
    }
  })
})
