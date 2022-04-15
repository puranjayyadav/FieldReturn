$(document).ready(function(){
  $(".collapse__title").on("click", function(){
    $(this).parent().toggleClass("closed");
    $(this).parent().toggleClass("opened");
  });
});
