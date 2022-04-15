const users = ['Peter Jackson', 'Lora Melbourn', 'Cat Mew', 'Liza Orly', 'Michael Bro'];

$(".chat1").show();
$(".chat2").hide();
$(".chat3").hide();
$(".chat4").hide();
$(".chat5").hide();

$('.chat__form').on("keypress", function(e) {
  if(e.which == 13) {
    e.preventDefault();
    return false;
  }
})

$('.chat__contacts-scroll button[type="button"]').on('click', function(){
  const name = $(this).find('.chat__contact-name').text();
  const number = users.indexOf(name)+1;
  $(".chat__dialog-messages-wrap").each((_, val) => {
    if($(val).hasClass(`chat${number}`)){
      $(val).show();
    } else {
      $(val).hide();
    }
  });
});

const chat = $('.chat');
const list = $('.chat__contact-list')
$('#chat-mobile-button').on('click', function(e) {
  chat.toggleClass('chat--open');
  list.toggleClass('chat__contact-list--open');
  e.stopPropagation();
})

$('.chat__dialog').on('click', function() {
  if (chat.hasClass('chat--open')) {
    chat.removeClass('chat--open');
    list.removeClass('chat__contact-list--open');
  }
})

$('.chat__contact').on('click', function(e) {
  chat.removeClass('chat--open');
  list.removeClass('chat__contact-list--open');
})