$(document).ready(function(){
  $(".order_list-select").chosen().change(function(){
    $('#my-table').DataTable().page.len( parseInt($(this).val(), 10)).draw();
  });
});
