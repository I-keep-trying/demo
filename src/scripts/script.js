// add custom js below
$(document).ready(function() {
  $("a[href*='#']").click(function(event) {
    event.preventDefault()
    $('html,body').animate({scrollTop: $(this.hash).offset().top}, 500)
  })

})
