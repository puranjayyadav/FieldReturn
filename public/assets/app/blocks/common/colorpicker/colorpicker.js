$(document).ready(function () {
  window.onChangeColor = (t) => {
    $(t).parent().parent().find('span').text(t.value);
    $(t).parent().attr('style', `background-color: ${t.value}`)
  };


  window.pick = {};
  const createPickr = (el = '.colorpicker', theme = {}) =>
    window.Pickr.create({
      el,
      useAsButton: true,
      swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
      ],
      ...theme,
      components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
          hex: true,
          rgba: true,
          hsla: true,
          hsva: true,
          cmyk: true,
          input: true,
          clear: true,
          save: true
        }
      }
    }).on('save', (...args) => {
      const colorHex = args[0].toHEXA();
      const colorRGB = args[0].toRGBA();
      if ($(args[1]._root.button).find('p').length) {
        $(args[1]._root.button).find('p').text(['#', ...colorHex].join(''));
        $(args[1]._root.button).find('.color-picker__color-view').attr('style', `background-color: rgba(${colorRGB[0]}, ${colorRGB[1]}, ${colorRGB[2]}, ${colorRGB[3]})`);
      }
    }).on('change', (...args) => {
      const colorHex = args[0].toHEXA();
      const colorRGB = args[0].toRGBA();
      if ($(args[1]._root.button).find('p').length) {
        $(args[1]._root.button).find('p').text(['#', ...colorHex].join(''));
        $(args[1]._root.button)
          .find('.color-picker__color-view')
          .attr('style', `background-color: rgba(${colorRGB[0]}, ${colorRGB[1]}, ${colorRGB[2]}, ${colorRGB[3]})`);
      }
    });
  window.pick.full = createPickr();
  window.pick.nano = createPickr('#nano-pickr-root', {theme: 'nano'});

  $('.full-pickr').on('click', () => window.pick.full.show());
  $('.nano-pickr').on('click', () => window.pick.nano.show());

  $('#standard-pickr').on('click', function (e) {
    e.preventDefault();
    $(this).find("input[type='color']").trigger('click');
  });

  $("#standard-pickr input[type='color']").on('click', e => e.stopPropagation());
});



