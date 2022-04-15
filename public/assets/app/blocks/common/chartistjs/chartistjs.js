$(document).ready(() => {
  const createSeries = (lengthSeries, length, maxValue, extra = i => ({i})) =>
    new Array(lengthSeries).fill(0)
      .map(
        (_, x) => ({
          name: `series-${x + 1}`,
          data: window.utils.createArrayValue(length, maxValue), ...extra(x)
        })
      );
  const charts = [
    {
      type: 'bar',
      name: 'charts1',
      data: {
        labels: window.utils.createLabels(10),
        series: createSeries(2, 10, 15),
      },
      options: {
        height: 500,
        onlyInteger: false,
        axisX: {
          scaleMinSpace: 1,
          onlyInteger: false
        },
      },
      draw: function (data) {
        if (data.series && data.series.name === charts[0].data.series[0].name) {
          data.element.attr({style: `stroke-width: 15px; stroke: ${window.colors.blue}`});
        }
      }
    },
    {
      type: 'line',
      name: 'charts2',
      data: window.utils.createArray(20).map(Math.random).reduce(function (data, rnd, index) {
        data.labels.push(index + 1);
        data.series.forEach(function (series) {
          series.push(Math.random() * 50)
        });
        return data;
      }, {
        labels: [],
        series: window.utils.createArray(4).map(() => [])
      }),
      options: {
        height: 300,
        showLine: true,
        axisX: {
          labelInterpolationFnc: (value, index) => index % 13 === 0 ? 'W' + value : null,
        }
      },
      draw: data => {
        if (data.type === 'line') {
          data.element.attr({
            style: `stroke: ${window.colors.blue}; stroke-width: 2px;`
          })
        }
        if (data.type === 'point') {
          data.element.attr({
            style: `stroke: ${window.colors.blue};`
          })
        }
      }
    },
    {
      type: 'line',
      name: 'charts3',
      data: window.utils.createArray(20).map(Math.random).reduce(function (data, rnd, index) {
        data.labels.push(index + 1);
        data.series.forEach(series => series.push(Math.random() * 100));
        return data;
      }, {
        labels: [],
        series: window.utils.createArray(4).map(function () {
          return []
        })
      }),
      options: {
        height: 300,
        showLine: false,
        axisX: {
          labelInterpolationFnc: function (value, index) {
            return index % 13 === 0 ? 'W' + value : null;
          }
        }
      },
      draw: data => {
        if (data.type === 'point') {
          const color = window.utils.randomRGB();
          const opacity = window.utils.randomOpacity();
          const width = window.utils.randomWidth();
          data.element.attr({
            style:
              `stroke: ${color}; opacity: ${opacity}; stroke-width: ${width}px;`
          })
        }
      }
    },
    {
      type: 'line',
      name: 'charts4',
      data: {
        // A labels array that can contain any sort of values
        labels: (new Array(16)).fill(0).map((_, index) => 1 + (index * 2 / 10)),
        // Our series array that contains series objects or in this case series data arrays
        series: createSeries(
          3,
          16,
          18,
          () => ({color: `rgb(${window.utils.randomInt()}, ${window.utils.randomInt()}, ${window.utils.randomInt()})`})),
      },
      options: {
        showPoint: false,
        height: 250,
        onlyInteger: false,
        axisX: {
          scaleMinSpace: 1,
          onlyInteger: false,

        },
      },
      draw: data => {
        if (data.type === 'line') {
          data.element.attr({
            style: `stroke-width: 2px; stroke: ${data.series.color}`,
          })
        }
      }
    },
    {
      type: 'line',
      name: 'charts5',
      data: window.utils.createArray(20).reduce((mdn, _, i) => {
        mdn.series.push(
          window.utils.createArray(100).map((_, j) => (((i / 10) + 1) * Math.sin((Math.PI * (i + j)) / 50)))
        );
        return mdn;
      }, {series: [], labels: window.utils.createArray(100).map((_, i) => i)}),
      options: {
        showPoint: false,
        height: 250,
        onlyInteger: false,
        axisX: {
          scaleMinSpace: 10,
          onlyInteger: false,
          labelInterpolationFnc: (value, index) => index % 10 === 0 ? value : null,
        },
      },
      draw: data => {
        if (data.type === 'line') {
          data.element.attr({
            style: `stroke-width: 2px; stroke: ${data.series.color}`,
          })
        }
      }
    },
    {
      type: 'bar',
      name: 'charts6',
      data: {
        labels: ['A', 'B', 'C'],
        series: createSeries(
          2,
          3,
          40,
          index => index === 0 ? ({color: window.colors.blue}) : ({color: window.colors.purple}),
        ),
      },
      options: {
        height: 250,
        onlyInteger: false,
        axisX: {
          scaleMinSpace: 1,
          onlyInteger: false
        },
        seriesBarDistance: 30,
      },
      draw: data => {
        if (data.series) {
          data.element.attr({
            style: `stroke-width: 25px; stroke: ${data.series.color}; fill: ${data.series.color};`
          });
        }
      }
    }
  ];

  if(window.location.href.indexOf('chartist_js') > -1) {
    charts.forEach(chart => {
      switch (chart.type) {
        case 'bar':
          new window.Chartist.Bar(`#${chart.name}`, chart.data, chart.options).on('draw', chart.draw);
          break;
        case 'line':
          new window.Chartist.Line(`#${chart.name}`, chart.data, chart.options).on('draw', chart.draw);
          break;
        default:
          new window.Chartist.Bar(`#${chart.name}`, chart.data, chart.options).on('draw', chart.draw);
          break;
      }
    });
  }
});
