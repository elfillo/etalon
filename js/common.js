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
//open mobile menu
$(document).ready(function(){
    var showMenu = false;
    $('.burger').click(function(){
        showMenu = !showMenu;
        if(showMenu){
            $('.header_mobile').css({
                'display':'flex',
            });
            $('.burger span:nth-child(2)').css({
                'display':'none'
            });
            $('.burger span:nth-child(1)').css({
                'transform':'rotate(45deg)',
                'position':'absolute',
                'top':'50%',
                'transition':'0.2s'
            });
            $('.burger span:nth-child(3)').css({
                'transform':'rotate(-45deg)',
                'position':'absolute',
                'top':'50%',
                'transition':'0.2s'
            });
        }else{
            $('.header_mobile').css({
                'display':'none',
            });
            $('.burger span:nth-child(2)').css({
                'display':'block'
            });
            $('.burger span:nth-child(1)').css({
                'transform':'none',
                'position':'static',
                'transition':'0.2s'

            });
            $('.burger span:nth-child(3)').css({
                'transform':'none',
                'position':'static',
                'transition':'0.2s'
            });
        }
    });
});
$(document).ready(function () {
   $('.header--middle .btn').click(function () {
      $('.header_mobile--catalog').css({'display' : 'block'});
   });
   $('.header_mobile--catalog_close').click(function () {
       $('.header_mobile--catalog').css({'display' : 'none'});
   });

   var open = false;
    $('.burger').click(function () {
       open = !open;
       if(open){
           $('.header_mobile--main').css({'display' : 'block'});
           $('.logo').css({'z-index' : '300'});
           $('.burger').css({'z-index' : '300'});
       }else{
           $('.header_mobile--main').css({'display' : 'none'});
           $('.logo').css({'z-index' : '100'});
           $('.burger').css({'z-index' : '100'});
       }
    });
});
$(document).ready(function (){
   $('.partners_button').click(function () {
       $('.modal').css({'display': 'flex'});
   });
    $('.product_detail .button').click(function () {
        $('.modal').css({'display': 'flex'});
    });
    $('.help_promo .button').click(function () {
        $('.modal').css({'display': 'flex'});
    });
    $('.modal_form .close').click(function () {
        $('.modal').css({'display': 'none'});
    });
});