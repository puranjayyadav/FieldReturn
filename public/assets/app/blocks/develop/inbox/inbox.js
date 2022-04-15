window.tinymce.init({
  selector: '.text-editor',
  plugins: 'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern help',
  toolbar: 'formatselect | bold italic strikethrough forecolor backcolor permanentpen | link image media | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat | addcomment',
  image_advtab: true,
  branding: false,
  content_css: [
    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    '//www.tiny.cloud/css/codepen.min.css'
  ],
  importcss_append: true,
  height: 400,
  template_cdate_format: '[CDATE: %m/%d/%Y : %H:%M:%S]',
  template_mdate_format: '[MDATE: %m/%d/%Y : %H:%M:%S]',
  image_caption: true,
  spellchecker_dialog: true,
  spellchecker_whitelist: ['Ephox', 'Moxiecode'],
  content_style: '.mce-annotation { background: #fff0b7; } .tc-active-annotation {background: #ffe168; color: black; }'
});

$('.mailhide').hide();
$('.composehide').hide();
$('.inbox__email-reply div').hide();


$('.inbox__mailbox-list-btn, .inbox__email-reply-btn-full').on('click', function () {
  $('.tablehide').hide();
  $('.mailhide').hide();
  $('.composehide').show();
});

$('.inbox__list-button, .inbox__email-back').on('click', function () {
  $('.tablehide').show();
  $('.mailhide').hide();
  $('.composehide').hide();
  if ($(this).hasClass('inbox__label')) {
    $('.inbox__label.active').removeClass('active');
    $(this).addClass('active');
  } else {
    $('.inbox__list-button > .active').removeClass('active');
    $(this).find('div').addClass('active');
  }
});

$('.inbox__email-list-item td:not(:first-child)').on('click', function () {
  $('.tablehide').hide();
  $('.mailhide').show();
  $('.composehide').hide();
});

$(".inbox__email-reply-textarea ").on('click', function(){
  $('.inbox__email-reply-placeholder').hide();
  $(this).parent().find('div').show();
});

$(".inbox__content button[type='submit']").on('click', function(){
  alert(window.tinymce.activeEditor.getContent())
});

$("input[name='checkAll']").on('click', function(event) {
  const checkboxes = document.getElementsByName('checkMail');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = event.target.checked;
  }
});

const mailWrap = $('.inbox');
mailWrap.on('click', function() {
  if(mailWrap.hasClass('inbox--show-mailboxes')) mailWrap.removeClass('inbox--show-mailboxes')
})

$(".inbox .inbox__topbar-button").on('click', function(e) {
  mailWrap.addClass('inbox--show-mailboxes');
  e.stopPropagation();
})

