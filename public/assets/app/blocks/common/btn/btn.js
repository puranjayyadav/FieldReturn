$(document).ready(() => {
  const $expand = $('.expand');
  const cExpand = 'expand--load';

  // for expand button
  $expand.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass(cExpand);
  });
});
