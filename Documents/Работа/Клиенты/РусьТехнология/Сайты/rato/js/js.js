(function ($) {
    $(document).ready(function () {
        var $btt = $('a.btt');
        if ($btt.length > 0) {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('.scrollToTop').fadeIn();
                } else {
                    $('.scrollToTop').fadeOut();
                }
            });
            $btt.click(function () {
                $('html, body').animate({scrollTop: 0}, 600);
                return false;
            });
        }
        var $p60 = $('.p-60');
        if ($p60.length > 0) {
            $p60.append('<div class="toggle"></div>');
            $p60.children('.toggle').click(function () {
                $p60.toggleClass('toggle');
            });
        }
        var $menu_btn = $('div.navbar-toggle');
        if ($menu_btn.length > 0) {
            $menu_btn.click(function () {
                $('#navbar.menu').toggleClass('opened');
            });
        }
        var $cart_remove = $('.cart-item .remove>div');
        if ($cart_remove.length > 0) {

            $cart_remove.click(function () {
                $(this).toggleClass('active');
            });
            $('.cart-item .remove .actions>div').click(function () {
                $(this).parent('.actions').parent('.confirm').parent('.remove-action').parent('div').removeClass('active');
            });
        }
        var $filter_sel = $('.filters select.vis-items');
        if ($filter_sel.length > 0) {
            console.log('select');
            $filter_sel.selectmenu();
        }
        var $sm = $('.orders .order .show-more a');
        if ($sm.length > 0) {
            $sm.click(function () {
                $(this).parent('.show-more').siblings('.more-info').slideToggle(500);
                return false;
            });
        }
        var $mmt = $('.mm-trigger');
        if ($mmt.length > 0) {
            $('#mobile-vis .dropdown-header').each(function () {
                $(this).addClass('dropdown');
                $(this).children('ul').addClass('submenu');
            });
            $('#mobile-vis .submenu').each(function () {
                $(this).prepend('<li class="menu-back"><a href="#back">Назад</a></li>');
            });
            $('#mobile-vis .dropdown').each(function () {
                $(this).addClass('closed');
            });
            $mmt.click(function () {
                $('#mobile-vis .menu').toggleClass('mm-open');
            });

            $('#mobile-vis .dropdown').click(function () {
                if ($(this).children('.submenu').length > 0) {
                    next_level($(this));
                    if ($(this).children('a').length > 0) {
                        $(this).children('a').attr('href', '#sub-menu-open');

                    }
                }
            });
            function next_level($data) {
                $data.removeClass('open').addClass('closed');
                if ($data.hasClass('open')) {
                    $data.removeClass('open').addClass('closed');
                    return false;
                } else {
                    $data.removeClass('closed').addClass('open');
                    var $child = $data.children('.submenu');
                    if ($child.hasClass('sub-close')) {
                        $child.removeClass('sub-close');
                    } else {
                        $child.addClass('sub-open');
                    }
                }
            }
            $('.menu-back').click(function () {
                var $parent = $(this).parent('.submenu');
                $parent.addClass('sub-close').removeClass('sub-open');
                $parent.parent('.dropdown').removeClass('open');
                console.log('remove "sub-open" and add "sub-close"');
            });
        }
        var $popup_img = $('.more-images');
        if ($popup_img.length > 0) {
            $popup_img.each(function () {
                $(this).children('.big-images').children('img').eq(0).addClass('active');
                $(this).children('.thumbs').children('img').eq(0).addClass('active');
            });
            $('.more-images .thumbs img').click(function () {
                var $parent = $(this).parent('.thumbs').parent('.more-images');

                var $big_images = $parent.children('.big-images').children('img');
                $big_images.each(function () {
                    $(this).removeClass('active');
                });
                var $min_images = $parent.children('.thumbs').children('img');
                $min_images.each(function () {
                    $(this).removeClass('active');
                });
                $big_images.eq($(this).index()).addClass('active');
                $(this).addClass('active');
//                console.log(parent);
            });
        }

        var $tovar_img = $('.tovar-page .images');
        if ($tovar_img.length > 0) {
            $tovar_img.each(function () {
                $(this).children('.big-images').children('img').eq(0).addClass('active');
                $(this).children('.thumbs').children('img').eq(0).addClass('active');
            });
            $('.tovar-page .images .thumbs img').click(function () {
                var $parent = $(this).parent('.thumbs').parent('.images');
                var $big_images = $parent.children('.big-images').children('img');
                $big_images.each(function () {
                    $(this).removeClass('active');
                });
                var $min_images = $parent.children('.thumbs').children('img');
                $min_images.each(function () {
                    $(this).removeClass('active');
                });
                $big_images.eq($(this).index()).addClass('active');
                $(this).addClass('active');
//                console.log(parent);
            });
        }

        var $colors = $('.colors input');
        if ($colors.length > 0) {

            function hex2rgb(hexStr) {
                // note: hexStr should be #rrggbb
                var hex = parseInt(hexStr.substring(1), 16);
                var r = (hex & 0xff0000) >> 16;
                var g = (hex & 0x00ff00) >> 8;
                var b = hex & 0x0000ff;
                return [r, g, b];
            }
            $colors.each(function () {
                var $color = $(this).val();
                var $id = $(this).attr('id');
                var $label = $('label[for="' + $id + '"]');
                $label.css({
                    'background-color': $color
                });
//                console.log($rgb[0]);
            });

            $colors.eq(0).prop('checked', true);
            var $rgb = hex2rgb($colors.eq(0).val());
            $('label[for="' + $colors.eq(0).attr('id') + '"]').parent('.color').css({
                'border-color': 'rgba(' + $rgb[0] + ', ' + $rgb[1] + ', ' + $rgb[2] + ', 1)'
            });
            $colors.click(function () {

                $colors.each(function () {
                    $(this).prop('checked', false);
                    var $id = $(this).attr('id');
                    var $label = $('label[for="' + $id + '"]');
                    $label.parent('.color').css({
                        'border-color': 'rgba(0,0,0,0)'
                    });
                });
                $(this).prop('checked', true);
                var $color = $(this).val();
                var $rgb = hex2rgb($color);
                var $id = $(this).attr('id');
                var $label = $('label[for="' + $id + '"]');
                $label.parent('.color').css({
                    'border-color': 'rgba(' + $rgb[0] + ', ' + $rgb[1] + ', ' + $rgb[2] + ', 1)'
                });
            });
        }
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            //>=, not <=
            if (scroll >= 105) {
                //clearHeader, not clearheader - caps H
                $(".header .menu").addClass("fixed");
            } else {
                $(".header .menu").removeClass('fixed');
            }
        });



        var $slider = $('.slider');
        if ($slider.length > 0) {
            $('.slider .slider-items').carouFredSel({
                responsive: true,
                items: {
                    visible: 1,
//                    height: 330
                },
                scroll: {
                    duration: 350,
                    timeoutDuration: 35000,
                    fx: 'crossfade'
                },
                pagination: '.slider-pager',
                prev: '#slider-prev',
                next: '#slider-next'
            });
        }
        var $novinki = $('.novinki');

        if ($novinki.length > 0) {
            $('.novinki .row .items').carouFredSel({
                responsive: true,
                items: {
                    visible: {min: 1, max: 4},
                    height: {min: 445, max: 490}
                },
                scroll: {
                    items: 1,
                    duration: 350
//                    timeoutDuration: 5000
                },
                auto: false,
                pagination: '.novinki-pager',
                prev: '.novinki-prev',
                next: '.novinki-next'
            });
            var resizeCallback = function () {
                var showThatManyItems = 3; // determine the number of items to be shown depending on viewport size
                $novinki.trigger('configuration', [
                    'items', {
                        visible: showThatManyItems
                    }
                ], true);
            }
        }
    });
    $(document).ajaxComplete(function () {

    });
})(jQuery);
 