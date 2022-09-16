$('.navbar-item').on('click', function(e) {
    var destination = $(this).attr('href');
    var element = $(destination);
    $('html, body').animate({
        scrollTop: element.offset().top
    });
    e.preventDefault();
});

const img = document.querySelector('.img');
img.setAttribute('draggable',false);