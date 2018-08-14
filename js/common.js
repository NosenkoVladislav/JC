$(function () {
    var tab = $('.offers-tab');

    tab.click(function () {
        tab.removeClass('checked').find('.tab-hidden').fadeOut(200);
        $(this).addClass('checked').find('.tab-hidden').fadeIn(200);
    })
})

$(function () {
    var backFly = $('.fly-back-wrap');
    var prefFly = $('.fly-pref');
    var ctrlBackOpen = $('#openBackFly');
    var ctrlPrefOpen = $('#openPrefFly');
    var ctrlBackClose = $('#close-back');
    var ctrlPrefClose = $('#close-pref');

    ctrlBackOpen.click(function () {
        backFly.slideDown(300);
        ctrlBackClose.slideDown(300);
    });

    ctrlPrefOpen.click(function () {
        prefFly.slideDown(300);
        ctrlPrefClose.slideDown(100);
    });

    ctrlBackClose.click(function () {
        backFly.slideUp(300);
        ctrlBackClose.slideUp(100);
    });

    ctrlPrefClose.click(function () {
        prefFly.slideUp(300);
        ctrlPrefClose.slideUp(100);
    });
})


class Valdiation{
    constructor(selector) {
        this.element = $(selector);
        this.isValid();
    }

    isValid() {
        this.element.keydown(function (e) {
            var pressed = e.which;
            if (pressed > 31 && (pressed < 48 || pressed > 57) && (pressed < 96 || pressed > 105)) {
                return false
            }
        })
    }
}

var passNum = new Valdiation('.passNum');

$(function () {
    $('#datetimepickerTo').datetimepicker({
        inline: false,
        keepOpen: true,
        allowInputToggle: true,
        viewMode : 'days',
        useCurrent: true,
        format:'DD.MM.Y HH:mm',
        icons: {
            up: "fa fa-chevron-circle-up",
            down: "fa fa-chevron-circle-down",
            next: 'fa fa-chevron-circle-right',
            previous: 'fa fa-chevron-circle-left',
            time: 'far fa-clock',
            date: 'far fa-calendar-alt',
            close :'far fa-calendar-alt',
        }
    });

    $('#datetimepickerBack').datetimepicker({
        inline: false,
        viewMode : 'days',
        useCurrent: true,
        allowInputToggle: true,
        format:'DD.MM.Y HH:mm',
        icons: {
            up: "fa fa-chevron-circle-up",
            down: "fa fa-chevron-circle-down",
            next: 'fa fa-chevron-circle-right',
            previous: 'fa fa-chevron-circle-left',
            time: 'far fa-clock',
            date: 'far fa-calendar-alt',
            close :'far fa-calendar-alt',
        }
    });
});

$('.hamburger').click(function () {
    $('.nav-mob-content-wrap').slideToggle(300)
})

$(function () {
    $(window).scroll(function () {
        if($(window).scrollTop()>70) {
            $('.nav-mob').addClass('sticky');
        } else {
            $('.nav-mob').removeClass('sticky');
        }
    })

})

// Popups
$(function () {
    $('#mainForm').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });

    $('.call-back').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });

    $(document).on('click', '.popup-close', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
})
