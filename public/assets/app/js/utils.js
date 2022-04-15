window.utils = {
  randomInt: () => Math.floor(Math.random() * (+255 - +0)) + +0,
  randomRGB: function () {
    return `rgb(${this.randomInt()}, ${this.randomInt()}, ${this.randomInt()})`;
  },
  createArray: n => new Array(n).fill(0),
  createArrayValue: function (length, maxValue) {
    return this.createArray(length).map(() => Math.random() * maxValue);
  },
  createLabels: function (length, prefix='', transform = index => index){
    return this.createArray(length).map((_, index) => `${prefix}${transform(index)}`)
  },
  randomOpacity: () => (Math.random() * (+100 - +50) + +50)/100,
  randomWidth: () => Math.floor(Math.random() * (+30 - +1)) + +1,
  transparentize: function(color, opacity) {
    var alpha = opacity === undefined ? 0.5 : 1 - opacity;
    return Color(color).alpha(alpha).rgbString();
  },
  responsiveChart: (chart) => {
    $(window).on('resize', function(){
      chart.resize();
    });
    $('.topbar__button').on('click', function(){
      if($(document).width()>576){
        setTimeout(() => chart.resize(), 120)
      }

    });
  }
};

window.colors = {
  blue: 'rgb(112, 187, 253)',
  purple: 'rgb(200, 143, 250)',
};

