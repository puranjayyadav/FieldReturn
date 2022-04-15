let TimePicker = function(selector, pm = false) {
  const root = $(selector);
  let input = root.find('input');
  let dropdown =  root.find('.dropdown-menu');
  let hours = root.find('.rc-time-picker-panel-select.hour .dropdown-item');
  let minutes = root.find('.rc-time-picker-panel-select.minute .dropdown-item');
  hours.removeClass('active');
  minutes.removeClass('active');
  if(pm) {
    root.find('.rc-time-picker-panel-select.pm .dropdown-item').removeClass('active');
  }
  const setTime = (h, m, am) => {
    const hour = h || root.find('.rc-time-picker-panel-select.hour .dropdown-item.active').text();
    const minute = m || root.find('.rc-time-picker-panel-select.minute .dropdown-item.active').text();
    if (pm) {
      if (am) {
        input.val(`${hour}:${minute} ${am}`)
      } else {
        const pm = root.find('.rc-time-picker-panel-select.pm .dropdown-item.active').text();
        input.val(`${hour}:${minute} ${pm}`)
      }

    } else {
      input.val(`${hour}:${minute}`)
    }
  };
  const onClick = () => {
    dropdown.toggleClass('show');
    root.toggleClass('show');
    const value = input.val();
    if(value!=='') {
      if(pm) {
        let values = value.split(':');
        let hour = values[0];
        let minute = values[1].split(' ')[0];
        let pm = values[1].split(' ')[1];
        hours.eq(parseInt(hour, 10)).addClass('active');
        minutes.eq(parseInt(minute, 10)).addClass('active');
        setTime(values[0], minute, pm);
      } else {
        let values = value.split(':');
        hours.eq(parseInt(values[0], 10)).addClass('active');
        minutes.eq(parseInt(values[1], 10)).addClass('active');
        setTime(values[0], values[1])
      }
    } else {
      hours.eq(0).addClass('active');
      minutes.eq(0).addClass('active');
      if(pm) {
        root.find('.rc-time-picker-panel-select.pm .dropdown-item').eq(0).addClass('active');
      }
      setTime();
    }
  };
  input.on("click", onClick);

  hours.on('click', function(e){
    e.preventDefault();
    root.find('.rc-time-picker-panel-select.hour .dropdown-item.active').removeClass('active');
    $(this).toggleClass('active');
    setTime();
  });

  minutes.on('click', function(e){
    e.preventDefault();
    root.find('.rc-time-picker-panel-select.minute .dropdown-item.active').removeClass('active');
    $(this).toggleClass('active');
    setTime();
  });

  root.find('.rc-time-picker-panel-select.pm .dropdown-item').on('click', function(e){
    e.preventDefault();
    root.find('.rc-time-picker-panel-select.pm .dropdown-item.active').removeClass('active');
    $(this).toggleClass('active');
    setTime();
  });

  $(".rc-time-picker-clear").on('click', function(){
    input.val('');
  });
  return {
    root,
    input,
    dropdown,
    hours,
    minutes,
    onClick
  }
};

$(document).ready(function() {
   $(document).on("click", function (e) {
    const timepicker = $('.timepicker.show');
    const { target } = e;
    if(timepicker.length){
      if (!$(target).parents('.timepicker.show').length && !$(target).hasClass('timepicker-button') && !$(target).parent().hasClass('timepicker-button')) {
        if (timepicker.hasClass('show')) {
          timepicker.removeClass('show');
          const hours = timepicker.find('.rc-time-picker-panel-select.hour .dropdown-item');
          const minutes = timepicker.find('.rc-time-picker-panel-select.minute .dropdown-item');
          hours.removeClass('active');
          minutes.removeClass('active');
          timepicker.find('.dropdown-menu').removeClass('show');
        }
      }
    }
  });
  $(document).ready(()=>window.Scrollbar.initAll());
  window.firstpicker = TimePicker('#first-timepicker');
  window.secondpicker = TimePicker('#second-timepicker', true);

  window.firstpicker.root.parent().find('.timepicker-button').on('click', function(){
    window.firstpicker.onClick();
    $(this).toggleClass('active');
  });
  window.secondpicker.root.parent().find('.timepicker-button').on('click', function(){
    window.secondpicker.onClick();
    $(this).toggleClass('active');
  });
});
