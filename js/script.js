$('.navbar-item').on('click', function(e) {
    var destination = $(this).attr('href');
    var element = $(destination);
    $('body').animate({
        scrollTop: element.offset().top - 50
    });
    e.preventDefault();
});