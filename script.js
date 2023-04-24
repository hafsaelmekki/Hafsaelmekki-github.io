// Add smooth scrolling to nav links
$(document).ready(function() {
  $('nav a[href^="#"]').on('click', function(event) {
    event.preventDefault();

    var target = this.hash;

$('html, body').animate({
  scrollTop: $(target).offset().top
}, 1000, 'swing');
});
});
