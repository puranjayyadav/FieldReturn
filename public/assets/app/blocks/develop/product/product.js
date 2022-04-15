$(document).ready(function(){
  $(".product-gallery__img-preview").on('click', function(){
    $(".product-gallery__current-img").find('img').attr('src',$(this).find('img').attr('src'));
  });
  $('select').chosen({disable_search_threshold: 10}).trigger("liszt:updated");
  $('select').chosen()
    .on('chosen:showing_dropdown', function(e) {
      const chosenElement = $(e.currentTarget.nextSibling);
      chosenElement
        .find('li.active-result:contains(Pink Sugar)')
        .addClass('pink');
    });
});
