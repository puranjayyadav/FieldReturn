$(function () {
  const getCoords = elem => elem.getBoundingClientRect();

  function Handle({value, max, elem, tooltip}) {
    this.value = value;
    this.valuePercent = value / max * 100;
    this.valuePartMax = value / max;
    this.elem = elem;
    this.tooltip = tooltip;
    tooltip.text(this.value);
    this.setCoords = () => this.coords = getCoords(elem[0]);
    this.getLeft = () => this.elem[0].style.left.replace('%', '');
    this.getCoordsLeft = () => getCoords(elem[0]).left;
  }

  window.RangeSlider = function (selector, settings) {
    const root = $(selector);
    if(!Object.keys(root).length){
      return {
        init: () => {},
      };
    }
    const handlers = {
      root: {
        elem: root,
        width: root.width(),
        coords: getCoords(root[0]),
      },
      one: new Handle({
        value: settings.value,
        max: settings.max,
        elem: $("<div/>").addClass("rc-slider-handle").attr("style", `left: ${settings.value / settings.max * 100}%;`)
          .attr('aria-valuemin', settings.min).attr('aria-valuenow', settings.value).attr('aria-valuemax', settings.max).on('dragstart', () => {
          }),
        tooltip: $("<div/>").addClass("rc-slider-tooltip-inner").attr('style', "position: absolute; bottom: 25px; left: -5px;text-align: center;").on('dragstart', () => {}).text(settings.value),
      })
    };
    const sliderTrack = $("<div/>").addClass("rc-slider-track").width(`${settings.value / settings.max * 100}%`).on('dragstart', () => {});
    const marks = $("<div/>").addClass("rc-slider-mark");
    root
      .append($("<div/>").addClass("slider__min").append($('<p>').text(settings.min)).on('dragstart', () => {
      }))
      .append($("<div/>").addClass("slider__max").append($('<p>').text(settings.max)).on('dragstart', () => {
      }))
      .append($("<div/>").addClass(`rc-slider ${settings.marks ? 'rc-slider-with-marks' : ''}`).on('dragstart', () => {
        })
          .append($("<div/>").addClass("rc-slider-rail").on('dragstart', () => {
          }))
          .append(sliderTrack)
          .append($("<div/>").addClass("rc-slider-step").on('dragstart', () => {
          }))
          .append(handlers.one.elem
            .append($("<div/>").addClass("rc-slider-tooltip-content").on('dragstart', () => {
            })
              .append($("<div/>").addClass("rc-slider-tooltip-arrow").on('dragstart', () => {
              }))
              .append(handlers.one.tooltip)))
          .append(marks.on('dragstart', () => {
          }))
      );
    if (settings.marksItems) {
      settings.marksItems.forEach((val) => {
        marks.append($(`<span class="rc-slider-mark-text rc-slider-mark-text-active" style="left: ${val.left}%; transform: translateX(-50%);">${val.val}</span>`));
      })
    }
    const onEnd = () => document.onmousemove = null;
    const onEndTouch = () => document.ontouchmove = null;
    return {
      root,
      init: function () {
        document.onmouseup = () => document.onmousemove = null;
        document.ontouchend = () => document.ontouchmove = null;
        handlers.one.elem.on('onmouseup', onEnd);
        handlers.one.elem.on('ontouchend', onEndTouch);
        handlers.one.elem.on('dragstart', () => {});
        handlers.one.elem.on("mousedown", function () {
          handlers.one.elem[0].style.zIndex = 20;
          handlers.one.elem[0].onmousedown = null;

          function moveAt(e) {
            const result = e.pageX - handlers.root.coords.left;
            if (result < 0) {
              handlers.one.elem[0].style.left = "0px";
            } else if (result > handlers.root.width) {
              handlers.one.elem[0].style.left = `${handlers.root.width}px`;
            } else {
              handlers.one.elem[0].style.left = `${result}px`;
            }
            let width = Math.round(result / handlers.root.width * 100);
            if (result < 0) {
              width = 0;
            } else if (result > handlers.root.width) {
              width = 100;
            }
            handlers.one.elem.attr('aria-valuenow', Math.round(width / 100 * settings.max));
            sliderTrack.width(`${width}%`);
            handlers.one.tooltip.text(Math.round(width / 100 * settings.max));
          }

          document.onmousemove = function (e) {
            moveAt(e);
          };
        });
        handlers.one.elem.on("touchstart", function () {
          handlers.one.elem[0].style.zIndex = 20;
          handlers.one.elem[0].ontouchstart = null;

          function moveAt(e) {
            const result = e.touches[0].pageX - handlers.root.coords.left;
            if (result < 0) {
              handlers.one.elem[0].style.left = "0px";
            } else if (result > handlers.root.width) {
              handlers.one.elem[0].style.left = `${handlers.root.width}px`;
            } else {
              handlers.one.elem[0].style.left = `${result}px`;
            }
            let width = Math.round(result / handlers.root.width * 100);
            if (result < 0) {
              width = 0;
            } else if (result > handlers.root.width) {
              width = 100;
            }
            handlers.one.elem.attr('aria-valuenow', Math.round(width / 100 * settings.max));
            sliderTrack.width(`${width}%`);
            handlers.one.tooltip.text(Math.round(width / 100 * settings.max));
          }

          document.ontouchmove = function (e) {
            moveAt(e);
          };
        });
      },

    };
  };

  window.DoubleRangeSlider = function (selector, settings) {
    const root = $(selector);
    if(!Object.keys(root).length){
      return {
        init: () => {},
      };
    }
    const handlers = {
      root: {
        elem: root,
        width: root.width(),
        coords: getCoords(root[0]),
      },
      one: new Handle({
        value: settings.value1,
        max: settings.max,
        elem: $("<div/>").addClass("rc-slider-handle").addClass("rc-slider-handle-1").attr("style", `left: ${settings.value1 / settings.max * 100}%;`)
          .attr('aria-valuemin', settings.min).attr('aria-valuenow', settings.value1).attr('aria-valuemax', settings.max).on('dragstart', () => {
          }),
        tooltip: $("<div/>").addClass("rc-slider-tooltip-inner").attr('style', "position: absolute; bottom: 25px; left: -5px;text-align: center;"),
      }),
      two: new Handle({
        value: settings.value2,
        max: settings.max,
        elem: $("<div/>").addClass("rc-slider-handle").addClass("rc-slider-handle-2").attr("style", `left: ${settings.value2 / settings.max * 100}%;`)
          .attr('aria-valuemin', settings.min).attr('aria-valuenow', settings.value2).attr('aria-valuemax', settings.max).on('dragstart', () => {
          }),
        tooltip: $("<div/>").addClass("rc-slider-tooltip-inner").attr('style', "position: absolute; bottom: 25px; left: -5px;text-align: center;"),
      })
    };
    const sliderTrack = $("<div/>")
      .addClass("rc-slider-track")
      .addClass("rc-slider-track-1")
      .attr("style", `left: ${handlers.one.valuePercent}%;`)
      .width(`${handlers.two.valuePercent - handlers.one.valuePercent}%`);
    root
      .append($("<div/>").addClass("slider__min").append($('<p>').text(settings.min)))
      .append($("<div/>").addClass("slider__max").append($('<p>').text(settings.max)))
      .append($("<div/>").addClass("rc-slider")
        .append($("<div/>").addClass("rc-slider-rail"))
        .append(sliderTrack)
        .append($("<div/>").addClass("rc-slider-step"))
        .append(handlers.one.elem
          .append($("<div/>").addClass("rc-slider-tooltip-content")
            .append($("<div/>").addClass("rc-slider-tooltip-arrow"))
            .append(handlers.one.tooltip)))
        .append(handlers.two.elem
          .append($("<div/>").addClass("rc-slider-tooltip-content")
            .append($("<div/>").addClass("rc-slider-tooltip-arrow"))
            .append(handlers.two.tooltip)))
        .append($("<div/>").addClass("rc-slider-mark"))
      );

    const onEnd = () => document.onmousemove = null;
    const onEndTouch = () => document.ontouchmove = null;

    const mouseDown = function (e) {
      let main = $(e.target);
      if(!main.hasClass('rc-slider-handle')){
        main = main.parent().parent();
      }
      document.onmousemove = null;
      document.ontouchmove = null;
      main[0].style.zIndex = 20;
      main[0].onmousedown = null;
      main[0].ontouchstart = null;

      handlers.one.setCoords(getCoords(handlers.one.elem[0]));
      handlers.two.setCoords(getCoords(handlers.one.elem[0]));

      function move(e) {
        const result = e.pageX - handlers.root.coords.left;
        let leftOffset;
        if (result < 0) {
          leftOffset = 0;
        } else if (result > handlers.root.width) {
          leftOffset = 100;
        } else {
          leftOffset = result / handlers.root.width * 100;
        }
        const isFirst = main.hasClass('rc-slider-handle-1');
        let res;
        if (isFirst ? leftOffset <= handlers.two.getLeft() : leftOffset >= handlers.one.getLeft()) {
          res = Math.round(leftOffset / 100 * settings.max)
        } else {
          res = handlers[isFirst ? 'two' : 'one'].elem.attr('aria-valuenow');
        }
        main[0].style.left = `${res}%`;
        main.attr('aria-valuenow', res);
        handlers[isFirst ? 'one' : 'two'].tooltip.text(res);
        handlers[isFirst ? 'one' : 'two'].value = res;
        sliderTrack.attr('style', `left: ${handlers.one.value}%; width: ${(handlers.two.getCoordsLeft() - handlers.one.getCoordsLeft())}px`);
      }
      function moveTocuh(e) {
        const result = e.touches[0].pageX - handlers.root.coords.left;
        let leftOffset;
        if (result < 0) {
          leftOffset = 0;
        } else if (result > handlers.root.width) {
          leftOffset = 100;
        } else {
          leftOffset = result / handlers.root.width * 100;
        }
        const isFirst = main.hasClass('rc-slider-handle-1');
        let res;
        if (isFirst ? leftOffset <= handlers.two.getLeft() : leftOffset >= handlers.one.getLeft()) {
          res = Math.round(leftOffset / 100 * settings.max)
        } else {
          res = handlers[isFirst ? 'two' : 'one'].elem.attr('aria-valuenow');
        }
        main[0].style.left = `${res}%`;
        main.attr('aria-valuenow', res);
        handlers[isFirst ? 'one' : 'two'].tooltip.text(res);
        handlers[isFirst ? 'one' : 'two'].value = res;
        sliderTrack.attr('style', `left: ${handlers.one.value}%; width: ${(handlers.two.getCoordsLeft() - handlers.one.getCoordsLeft())}px`);
      }
      document.onmousemove = function (e) { move(e); };
      document.ontouchmove = function (e) { moveTocuh(e); };
    };

    return {
      root,
      init: function () {
        document.onmouseup = () => document.onmousemove = null;
        handlers.one.elem.on('mouseup', onEnd);
        handlers.one.elem.on('dragstart', () => {});
        handlers.one.elem.on("mousedown", mouseDown);
        handlers.two.elem.on('mouseup', onEnd);
        handlers.two.elem.on('dragstart', () => {});
        handlers.two.elem.on("mousedown", mouseDown);
        handlers.one.elem.on('touchend', onEndTouch);
        handlers.one.elem.on('dragstart', () => {});
        handlers.one.elem.on("touchstart", mouseDown);
        handlers.two.elem.on('touchend', onEndTouch);
        handlers.two.elem.on('dragstart', () => {});
        handlers.two.elem.on("touchstart", mouseDown);
      },

    };
  };

}());

