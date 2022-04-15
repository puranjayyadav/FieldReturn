let wrapp = $('.theme')
if (!localStorage['theme']) {
  localStorage.setItem('theme', 'light');
}
if (localStorage['theme'] == 'light') {
  wrapp.removeClass('theme-dark theme-light').addClass('theme-light')
} else {
  wrapp.removeClass('theme-dark theme-light').addClass('theme-dark')
}
$('#theme-dark, #theme-light').click(function (e) {
  e.preventDefault();
  if($(this).attr('id') === 'theme-dark') {
    localStorage['theme'] = 'dark'
  } else {
    localStorage['theme'] = 'light'
  }
  wrapp.removeClass('theme-dark theme-light').addClass($(this).attr('id'));
})
