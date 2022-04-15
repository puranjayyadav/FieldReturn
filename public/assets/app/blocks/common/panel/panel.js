window.loading = function(self) {
  const object = $(self).parent();
  object.prepend('<div class="panel__refresh"><svg class="mdi-icon " width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12,4V2C6.48,2 2,6.48 2,12H4C4,7.58 7.58,4 12,4Z"></path></svg></div>');
  setTimeout(() => object.find('.panel__refresh').remove(), 5000);
};
