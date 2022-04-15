'use strict';

//Anchors
$(function () {
  $('a.menu__nav-item[href^=\'#\']').on('click', function () {
    let target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top - 80}, 800);
    return false;
  });
});