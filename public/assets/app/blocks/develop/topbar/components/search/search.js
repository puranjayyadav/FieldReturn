$('.topbar__search-btn').on('click', function (e){
  e.preventDefault();
  $(".topbar__search-field").toggleClass("topbar__search-field--open")
});
