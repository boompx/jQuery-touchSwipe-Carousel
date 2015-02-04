/*
 * jQuery touchSwipe - Carousel
 * Author  : http://boompx.com/
 * Follow  : @boom_px
 * Github  : https://github.com/boompx/jQuery-touchSwipe-Carousel
 * Vendors : https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * Licensed under the MIT license
 */
$(function () {
    $(".bp-touchSwipe").each(function () {
        function e() {
            a.find(".bp-touchSwipe_inner").css({
                width: a.find(".bp-inner_item").length * a.find(".bp-inner_item").width()
            })
        }
        var a = $(this);
        e();
        window.onresize = e;
        a.find(".bp-touchSwipe_inner").width() > a.width() && a.swipe({
            swipeStatus: function (f, c, b, d, e, g) {
                f = parseInt(a.find(".bp-touchSwipe_inner").css("left"));
                d = a.find(".bp-inner_item");
                d.last().position();
                d.last().width();
                a.width();
                b = "left" == b ? -1 : 1;
                "end" == c && (-1 == b ? (c = f + b * d.width(), b = -a.find(".bp-touchSwipe_inner").width() + a.innerWidth(), a.find(".bp-touchSwipe_inner").css("left", Math.max(c, b))) : 1 == b && (c = f + b * d.width(), a.find(".bp-touchSwipe_inner").css("left", Math.min(0, c))))
            },
            threshold: 0,
            maxTimeThreshold: 5E3,
            fingers: "all"
        })
    })
});