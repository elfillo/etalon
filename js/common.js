"use strict";

//active link
$(function () {
    $(".header_menu--list li a").each(function () {
        window.location.href == this.href && $(this).addClass("active");
    });

    $(".footer--menu__list li a").each(function () {
        window.location.href == this.href && $(this).addClass("active");
    });
});