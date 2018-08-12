$(function () {
    var tab = $('.offers-tab');

    tab.click(function () {
        tab.removeClass('checked').find('.tab-hidden').fadeOut(200);
        $(this).addClass('checked').find('.tab-hidden').fadeIn(200);
    })
})