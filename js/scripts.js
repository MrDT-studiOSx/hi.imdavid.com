$(document).ready(function() {
    $('.menu-toggle').on('click', function() {
      $('.nav').toggleClass('showing');
      $('.nav li ul').toggleClass('showing');
    });
});