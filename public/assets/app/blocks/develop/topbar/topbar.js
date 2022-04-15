$('.topbar__button').on('click', function(){
  if($(document).width()>576){
    $('.sidebar').toggleClass('sidebar--collapse');
  }
  else{
    $('.sidebar').toggleClass('sidebar--show');
  }
  $('.layout').toggleClass('layout--collapse')
});

$('.topbar__search-btn').on('click', function (e){
  e.preventDefault();
  $(".topbar__search-field").toggleClass("topbar__search-field--open")
});

