$('.navbar-item').on('click', function(e) {
    var destination = $(this).attr('href');
    var element = $(destination);
    $('body').animate({
        scrollTop: element.offset().top + 10
    });
    e.preventDefault();
});

const img = document.querySelector('.img');
img.setAttribute('draggable',false)

//parallax
$(halo).scroll(function() {
    var wScroll = $(this).scrollTop();
    $('.jumbotron ').css({
        'transform': 'translate(0px, ' + wScroll + 'px)'
    });
})