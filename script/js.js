document.querySelector('button').addEventListener('click', function () {
    document.querySelector('.popup').style.display = 'none';
})

$('.main-nav ul li:has(.gnb-dropdown)').on({
    'mouseenter': function () {
        $('header').addClass('on');

    }, 'mouseleave': function () {
        $('header').removeClass('on');
    }
})