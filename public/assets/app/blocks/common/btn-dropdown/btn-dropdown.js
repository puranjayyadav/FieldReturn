$(document).ready(function () {
  const cBtnDropdownShow = '.btn-dropdown.show';
  const $btnDropdown = $('.btn-dropdown');
  const $bntDropdownItem = $('.dropdown-item');
  const $btnDropdownBtn = $('.btn-dropdown > .btn');
  const $btnDropdownArrowBtn = $('.btn-dropdown > .btn-group > .btn:nth-child(2)');
  const sDropdownMenu = '.dropdown-menu';
  const cShow = 'show';

  // toggleClass
  const delShowClass = () => {
    const $btnDropdownShow = $(cBtnDropdownShow);
    if ($btnDropdownShow.length) {
      $btnDropdownShow.removeClass(cShow);
      $btnDropdownShow.find(sDropdownMenu).removeClass(cShow);
    }
  };

  // simple btnDropdown event
  $btnDropdownBtn.on('click', function () {
    delShowClass();
    $(this).parent().toggleClass(cShow);
    $(this).parent().find(sDropdownMenu).toggleClass(cShow);
  });

  // btnDropdown event with extra button
  $btnDropdownArrowBtn.on('click', function () {
    delShowClass();
    $(this).parent().parent().toggleClass(cShow);
    $(this).parent().parent().find(sDropdownMenu).toggleClass(cShow);
  });

  // close dropdown if click
  $bntDropdownItem.on('click', delShowClass);

  // need for close dropdown if click on page
  if($btnDropdown.length){
    $(document).on('click', e => {
      if ($(cBtnDropdownShow).length && !$(e.target).closest(cBtnDropdownShow).length) delShowClass();
    });
  }
});
