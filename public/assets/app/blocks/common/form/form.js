$(document).ready(function() {
  $(".basic-form-select").chosen();
  $(".basic-form-select-multi").chosen({
    placeholder_text_multiple: ' ',
  });
  $('.passwordClick').on('click', function(e){
    e.preventDefault();
    const input = $(this).parent().find('input');
    $(this).toggleClass('active');
    input.attr('type', input.attr('type') === 'password' ? 'text' : 'password');
  });
});
