$(document).ready(function() {
    $('.call-up__button').click(function(event) {
        event.preventDefault();
        $('.call-up__menu').toggleClass('active');
        $('.call-up__submenu').slideToggle(300);
    })
})