$(document).ready(function() {
    $('.header__burger-wrapper').click(function(event) {
        $('.header__burger').addClass('active');

        setTimeout(() => {
            $('.header__burger').removeClass('active');
        }, 500);
    })
})