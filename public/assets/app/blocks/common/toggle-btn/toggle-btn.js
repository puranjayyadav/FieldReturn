$(document).ready(function(){
  $(".toggle-btn button").on('click', function(){
    const input = $(this).parent().find('input');
    input.prop('checked', !input.prop('checked'))
  })
});
