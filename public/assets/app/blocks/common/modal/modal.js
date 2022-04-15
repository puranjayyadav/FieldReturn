$(document).ready(function(){
  $(".modal__footer.btn-toolbar .btn").on('click',function(){
    $(this).closest('.modal').modal('hide');
  });
});
