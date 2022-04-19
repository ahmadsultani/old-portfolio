$('.navbar-item').on('click', function(e) {
    var destination = $(this).attr('href');
    var element = $(destination);
    $('body').animate({
        scrollTop: element.offset().top + 10
    });
    e.preventDefault();
});

let img = document.querySelector('.img-container');
img.setAttribute('draggable',false)