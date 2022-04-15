// PAGE "Charts"
$(document).ready(function () {
  let theme = localStorage['theme'] == 'light' ? 'light' : 'dark';
  const colors = {
    dark: {
      green: '#4ce1b6',
      blue: '#70bbfd',
      darkBlue: '#48b5ff',
      lightBlue: 'rgb(126, 219, 255)',
      yellow: '#f6da6e',
      red: 'rgb(255, 72, 97)',
      limon: '#b8e986',
      gray: '#eeeeee',
      colorLabel: '#ddd',
      splitLine: '#333'
    },

    light: {
      green: '#4ce1b6',
      blue: '#70bbfd',
      darkBlue: '#48b5ff',
      lightBlue: 'rgb(126, 219, 255)',
      yellow: '#f6da6e',
      red: 'rgb(255, 72, 97)',
      limon: '#b8e986',
      gray: '#eeeeee',
      colorLabel: '#646777',
      splitLine: '#efefef'
    }
  };
  if (document.getElementById('d31')) {
    const myChart = window.echarts.init(document.getElementById('d31'));

    // specify chart configuration item and data
    const option = {
      grid: { show: false },
      title: {
        text: ''
      },
      textStyle: {
        color: '#999',
        fontSize: '13px',
        lineHeight: '1.6'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['pv', 'uv', 'amt'],
        textStyle: {
          color: colors[theme].colorLabel,
        },
      },
      xAxis: {
        axisLine: {
          show: false,
        },
        data: ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F", "Page G"],
        showGrid: false,
      },
      type: 'line',
      yAxis: {
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false
        },
      },
      series: [
        {
          itemStyle: {
            color: colors[theme].green,
          },
          type: 'line',
          name: 'pv',
          data: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
          smooth: true,
        },
        {
          itemStyle: {
            color: colors[theme].blue,
          },
          type: 'line',
          name: 'uv',
          data: [2400, 3000, 2000, 2780, 1890, 2390, 3490],
          smooth: true,
        },
        {
          itemStyle: {
            color: colors[theme].yellow,
          },
          type: 'line',
          name: 'amt',
          data: [4000, 2210, 2290, 2000, 2181, 2500, 2100],
          smooth: true,
        },
      ]
    };
    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }
  if (document.getElementById('d32')) {
    const myChart = window.echarts.init(document.getElementById('d32'));
    const option = {
      grid: { show: false },
      title: {
        text: ''
      },
      textStyle: {
        color: '#999',
        fontSize: '13px',
        lineHeight: '1.6'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['pv', 'uv', 'amt'],
        textStyle: {
          color: colors[theme].colorLabel,
        },
      },
      xAxis: {
        axisLine: {
          show: false,
        },
        data: ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F", "Page G"],
        showGrid: false,
      },
      type: 'line',
      yAxis: {
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false
        },
      },
      series: [
        {
          itemStyle: {
            color: colors[theme].green,
          },
          type: 'line',
          name: 'pv',
          data: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
          smooth: true,
          lineStyle: {
            type: 'dashed',
          }
        },
        {
          itemStyle: {
            color: colors[theme].blue,
          },
          type: 'line',
          name: 'uv',
          data: [2400, 3000, 2000, 2780, 1890, 2390, 3490],
          smooth: true,
          lineStyle: {
            type: 'dashed',
          }
        },
        {
          itemStyle: {
            color: colors[theme].yellow,
          },
          type: 'line',
          name: 'amt',
          data: [4000, 2210, 2290, 2000, 2181, 2500, 2100],

          smooth: true,
          lineStyle: {
            type: 'dashed',
          }
        },
      ]
    };
    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }
  if (document.getElementById('d33')) {
    const myChart = window.echarts.init(document.getElementById('d33'));

    // specify chart configuration item and data
    const option = {
      grid: { show: false },
      title: {
        text: ''
      },
      textStyle: {
        color: '#999',
        fontSize: '13px',
        lineHeight: '1.6'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['pv', 'uv', 'amt'],
        textStyle: {
          color: colors[theme].colorLabel,
        },
      },
      xAxis: {
        axisLine: {
          show: false,
        },
        data: ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F", "Page G"],
        showGrid: false,
      },
      type: 'line',
      yAxis: {
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false
        },
      },
      series: [
        {
          itemStyle: {
            color: colors[theme].green,
          },
          type: 'line',
          name: 'pv',
          data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
          smooth: true,
          areaStyle: {}
        },
      ]
    };

    // use configuration item and data specified to show chart
    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }
  if (document.getElementById('d34')) {
    const data = [
      {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
      },
      {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
      },
      {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
      },
      {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
      },
      {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
      },
      {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
      },
      {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
      },
    ];
    const myChart = window.echarts.init(document.getElementById('d34'));

    const option = {
      grid: { show: false },
      title: {
        text: ''
      },
      textStyle: {
        color: '#999',
        fontSize: '13px',
        lineHeight: '1.6'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['pv', 'uv', 'amt'],
        textStyle: {
          color: colors[theme].colorLabel,
        },
      },
      xAxis: {
        axisLine: {
          show: false,
        },
        data: data.map(x => x.name),
        showGrid: false,
      },
      type: 'line',
      yAxis: {
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false
        },
      },
      series: [
        {
          itemStyle: {
            color: colors[theme].green,
          },
          type: 'line',
          name: 'pv',
          data: data.map(x => x.pv),
          smooth: true,
          stack: 'stackOne',
          areaStyle: {}
        },
        {
          itemStyle: {
            color: colors[theme].blue,
          },
          type: 'line',
          name: 'uv',
          data: data.map(x => x.uv),
          smooth: true,
          areaStyle: {},
          stack: 'stackTwo',
        },
        {
          itemStyle: {
            color: colors[theme].yellow,
          },
          type: 'line',
          name: 'amt',
          data: data.map(x => x.amt),
          stack: 'stackThree',
          smooth: true,
          areaStyle: {}
        },
      ]
    };

    // use configuration item and data specified to show chart
    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }
  if (document.getElementById('d35')) {
    const data01 = [
      { x: 100, y: 200, z: 200 },
      { x: 120, y: 100, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 },
    ];

    const data02 = [
      { x: 300, y: 300, z: 200 },
      { x: 400, y: 500, z: 260 },
      { x: 200, y: 700, z: 400 },
      { x: 340, y: 350, z: 280 },
      { x: 560, y: 500, z: 500 },
      { x: 230, y: 780, z: 200 },
      { x: 500, y: 400, z: 200 },
      { x: 300, y: 500, z: 260 },
      { x: 240, y: 300, z: 400 },
      { x: 320, y: 550, z: 280 },
      { x: 500, y: 400, z: 500 },
      { x: 420, y: 280, z: 200 },
    ];
    const myChart = window.echarts.init(document.getElementById('d35'));
    // specify chart configuration item and data
    const option = {
      grid: { show: false },
      title: {
        text: ''
      },
      textStyle: {
        color: '#999',
        fontSize: '13px',
        lineHeight: '1.6'
      },
      tooltip: {
        formatter: function (params) {
          return `stature: ${params.name} <br/> weight: ${params.data}`
        }
      },
      xAxis: {
        axisLine: {
          show: false,
        },
        showGrid: false,
        data: [...data01, ...data02].map(x => x.x).sort((a, b) => a > b ? 1 : -1).map(x => `${x}cm`),
      },
      yAxis: [{
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false
        },
        data: data01.map(x => x.y).sort((a, b) => a > b ? 1 : -1).map(x => `${x}kg`),
      },
      {
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false
        },
        data: data02.map(x => x.y).sort((a, b) => a > b ? 1 : -1).map(x => `${x}kg`),
      },
      ],
      series: [
        {
          symbolSize: 20,
          data: data01.map(x => `${x.y}kg`),
          type: 'scatter',
          itemStyle: {
            color: colors[theme].blue,
          },
        },
        {
          itemStyle: {
            color: colors[theme].yellow,
          },
          symbolSize: 20,
          data: data02.map(x => `${x.y}kg`),
          type: 'scatter',
        },
      ]
    };

    // use configuration item and data specified to show chart
    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }
  if (document.getElementById('d36')) {
    const data = [
      {
        name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8',
      },
      {
        name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed',
      },
      {
        name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1',
      },
      {
        name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d',
      },
      {
        name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c',
      },
      {
        name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57',
      },
      {
        name: 'unknown', uv: 6.67, pv: 4800, fill: '#ffc658',
      },
    ];
    const myChart = window.echarts.init(document.getElementById('d36'));
    // specify chart configuration item and data
    const option = {
      title: {
        text: ''
      },
      legend: {
        type: 'scroll',
        data: data.map(x => x.name),
        textStyle: {
          color: colors[theme].colorLabel,
        },
      },
      textStyle: {
        color: '#999',
        fontSize: '13px',
        lineHeight: '1.6'
      },
      tooltip: {},
      angleAxis: {},
      polar: {},
      radiusAxis: {
        z: 10,
        type: 'category',
        data: data.map(x => x.name),
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        }
      },
      series: data.map(item => ({
        barGap: '-90%',
        data: [
          ...data.map(x => x.name === item.name ? x.uv : null),
        ],
        type: 'bar',
        coordinateSystem: 'polar',
        itemStyle: {
          color: item.fill,
        },
        name: item.name,
        stack: item.name,
      })),
    };

    // use configuration item and data specified to show chart
    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }
  if (document.getElementById('d37')) {
    const data = [
      {
        subject: 'Math', A: 120, B: 110, fullMark: 150,
      },
      {
        subject: 'Chinese', A: 98, B: 130, fullMark: 150,
      },
      {
        subject: 'English', A: 86, B: 130, fullMark: 150,
      },
      {
        subject: 'Geography', A: 99, B: 100, fullMark: 150,
      },
      {
        subject: 'Physics', A: 85, B: 90, fullMark: 150,
      },
      {
        subject: 'History', A: 65, B: 85, fullMark: 150,
      },
    ];
    const myChart = window.echarts.init(document.getElementById('d37'));
    // specify chart configuration item and data
    const option = {
      title: {
        text: ''
      },
      textStyle: {
        color: '#999',
        fontSize: '13px',
        lineHeight: '1.6'
      },
      tooltip: {},
      radar: {
        indicator: data.map(x => ({ name: x.subject, max: x.fullMark }))
      },
      series: [{
        type: 'radar',
        itemStyle: {

          normal: {
            color: colors[theme].blue,
            areaStyle: {
              type: 'default'
            }
          }
        },
        data: [
          {
            value: data.map(x => x.A),
            name: 'Mike'
          },
        ]
      }]
    };

    // use configuration item and data specified to show chart
    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }
  if (document.getElementById('d38')) {
    const data01 = [
      { name: 'Group A', value: 400 },
      { name: 'Group B', value: 300 },
      { name: 'Group C', value: 300 },
      { name: 'Group D', value: 200 },
    ];

    const data02 = [
      { name: 'A1', value: 100 },
      { name: 'A2', value: 300 },
      { name: 'B1', value: 100 },
      { name: 'B2', value: 80 },
      { name: 'B3', value: 40 },
      { name: 'B4', value: 30 },
      { name: 'B5', value: 50 },
      { name: 'C1', value: 100 },
      { name: 'C2', value: 200 },
      { name: 'D1', value: 150 },
      { name: 'D2', value: 50 },
    ];
    const myChart = window.echarts.init(document.getElementById('d38'));
    // specify chart configuration item and data
    const option = {
      title: {
        text: ''
      },
      textStyle: {
        color: '#999',
        fontSize: '13px',
        lineHeight: '1.6'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
      },
      series: [
        {
          name: false,
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '30%'],
          label: {
            show: false,
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: data01,
          itemStyle: {
            color: colors[theme].blue,
          },
        },
        {
          name: false,
          type: 'pie',
          radius: ['40%', '55%'],
          data: data02,
          label: {
            normal: {
              formatter: '{c}',
            }
          },
          itemStyle: {
            color: colors[theme].green,
          },
        }
      ]
    };
    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  // PAGE "Online Marketing Dashboard"
  if (document.getElementById('d3online-marketing-dashboard-analytics')) {
    const myChart = window.echarts.init(document.getElementById('d3online-marketing-dashboard-analytics'));

    // specify chart configuration item and data
    const option = {
      grid: {
        show: false,
        left: 60,
        right: 10,
      },
      min: 0,
      max: 1800,
      interval: 450,
      title: {
        text: ''
      },
      textStyle: {
        color: '#999',
        fontSize: '11px',
        lineHeight: '1.3'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        y: 'bottom',
        data: ['Site A', 'Site B'],
        textStyle: {
          color: colors[theme].colorLabel,
        },
      },
      xAxis: {
        axisLine: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: colors[theme].splitLine,
          },
        },
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        showGrid: false,
        boundaryGap: false,
        axisTick: {
          show: false,
        },
      },
      type: 'line',
      yAxis: {
        axisLine: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: colors[theme].splitLine,
          }
        },
        axisTick: {
          show: false,
        },
      },
      series: [
        {
          itemStyle: {
            color: colors[theme].green,
          },
          type: 'line',
          name: 'Site A',
          data: [590, 868, 1397, 1480, 1520, 1520, 1400],
          smooth: true,
          showSymbol: false,
          areaStyle: {
            normal: {
              opacity: 0.2,
            }
          },
        },
        {
          itemStyle: {
            color: colors[theme].blue,
          },
          type: 'line',
          name: 'Site B',
          data: [1400, 1506, 989, 1228, 1100, 1100, 1700],
          smooth: true,
          showSymbol: false,
          areaStyle: {
            normal: {
              opacity: 0.2,
            }
          }
        },
      ]
    };

    // use configuration item and data specified to show chart
    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  if (document.getElementById('d3online-marketing-dashboard-bonuse')) {
    const myChart = window.echarts.init(document.getElementById('d3online-marketing-dashboard-bonuse'));

    // specify chart configuration item and data
    const option = {
      grid: {
        show: false,
        left: 40,
        top: 10,
        right: 15,
      },
      legend: {
        show: false,
      },
      textStyle: {
        color: '#999',
        fontSize: '11px',
        lineHeight: '1.3'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: ['12.03', '13.03', '14.03', '15.03', '16.03', '17.03', '18.03', '19.03', '20.03'],
        boundaryGap: false,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        showGrid: false,
      },
      type: 'line',
      yAxis: {
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false,
        },
      },
      series: [
        {
          itemStyle: {
            color: colors[theme].green,
          },
          type: 'line',
          name: 'uv',
          data: [4000, 3000, 2000, 2780, 1890, 2390, 3490, 3490, 3490],
          smooth: true,
          showSymbol: false,
          lineStyle: {
            width: 1,
          },
          areaStyle: {
            normal: {
              opacity: 0.2,
            }
          },
        },
      ]
    };

    // use configuration item and data specified to show chart
    myChart.setOption(option);
    utils.responsiveChart(myChart);

  }

  if (document.getElementById('d3online-marketing-dashboard-visitor')) {
    const myChart = window.echarts.init(document.getElementById('d3online-marketing-dashboard-visitor'));

    // specify chart configuration item and data
    const option = {
      legend: {
        icon: 'circle',
        x: 'center',
        y: 'bottom',
        top:'85%',
        data: ['Chrome', 'Safari', 'Mozilla', 'IE'],
      },
      tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
      },
      series: [
        {
          type: 'pie',
          radius: ['45%', '60%'],
          hoverAnimation: false,
          avoidLabelverlap: false,
          label: {
            normal: {
              show: false,
            },
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {
              value: 12934,
              name: 'Chrome',
              itemStyle: {
                color: colors[theme].green
              }
            },
            {
              value: 9934,
              name: 'Safari',
              itemStyle: {
                color: colors[theme].blue
              }
            },
            {
              value: 20432,
              name: 'Mozilla',
              itemStyle: {
                color: colors[theme].yellow
              }
            },
            {
              value: 15432,
              name: 'IE',
              itemStyle: {
                color: colors[theme].red
              }
            },
          ],

        }
      ],
    };
    // use configuration item and data specified to show chart
    myChart.setOption(option);
    utils.responsiveChart(myChart);

  }



  // PAGE "E-commerce Dashboard"

  if (document.getElementById('d3e-commerce-top-selling')) {
    const myChart = window.echarts.init(document.getElementById('d3e-commerce-top-selling'));

    // specify chart configuration item and data
    const option = {
      legend: {
        orient: 'vertical',
        icon: 'circle',
        x: 'left',
        y: 'bottom',
        data: ['Sony Xperia Z', 'Xiaomi Mi 6', 'Apple iPhone 7 Plus', 'Apple iPhone 6 Plus']
      },
      tooltip: {
        trigger: 'item',
        position: 'bottom',
      },
      series: [
        {
          type: 'pie',
          radius: ['60%', '75%'],
          hoverAnimation: false,
          avoidLabelverlap: false,
          label: {
            normal: {
              show: false,
            },
          },
          labelLine: {
            normal: {
              show: true
            }
          },
          data: [
            {
              value: 12934,
              name: 'Sony Xperia Z',
              itemStyle: {
                color: colors[theme].green
              }
            },
            {
              value: 9934,
              name: 'Xiaomi Mi 6',
              itemStyle: {
                color: colors[theme].blue
              }
            },
            {
              value: 20432,
              name: 'Apple iPhone 7 Plus',
              itemStyle: {
                color: colors[theme].yellow
              }
            },
            {
              value: 15432,
              name: 'Apple iPhone 6 Plus',
              itemStyle: {
                color: colors[theme].red
              }
            },
          ],

        }
      ],
    };
    // use configuration item and data specified to show chart
    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  if (document.getElementById('d3online-marketing-dashboard-budget')) {
    const myChart = echarts.init(document.getElementById('d3online-marketing-dashboard-budget'));
    const option = {
      tooltip: {
        show: false,
      },
      legend: {
        show: false
      },
      series: [
        {
          name: 'calories',
          type: 'pie',
          radius: ['85%', '100%'],
          center: ['50%', '50%'],
          hoverAnimation: false,
          startAngle: 0,
          endAngle: 360,
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {
              value: 100,
              itemStyle: {
                color: colors[theme].gray,
              }
            },
            {
              value: 100,
              itemStyle: {
                color: colors[theme].green,
              }
            },
          ]
        }
      ]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  if (document.getElementById('d3e-commerce-dashboard-sales-statistic-bar')) {
    const myChart = echarts.init(document.getElementById('d3e-commerce-dashboard-sales-statistic-bar'));

    const dataYearly = [
      { name: 'Jan', uv: 4000 },
      { name: 'Feb', uv: 3000 },
      { name: 'Mar', uv: 2000 },
      { name: 'Apr', uv: 2780 },
      { name: 'May', uv: 1890 },
      { name: 'June', uv: 2390 },
      { name: 'July', uv: 3490 },
      { name: 'Aug', uv: 2000 },
      { name: 'Sep', uv: 2780 },
      { name: 'Oct', uv: 1890 },
      { name: 'Nov', uv: 3578 },
      { name: 'Dec', uv: 2378 },
    ];

    const dataMontly = [
      { name: '01.02', uv: 3654 },
      { name: '02.02', uv: 2578 },
      { name: '03.02', uv: 2000 },
      { name: '04.02', uv: 4383 },
      { name: '05.02', uv: 1890 },
      { name: '06.02', uv: 2390 },
      { name: '07.02', uv: 3490 },
      { name: '08.02', uv: 2000 },
      { name: '09.02', uv: 2780 },
      { name: '10.02', uv: 1890 },
      { name: '11.02', uv: 3578 },
      { name: '12.02', uv: 3644 },
      { name: '13.02', uv: 4000 },
      { name: '14.02', uv: 3000 },
      { name: '15.02', uv: 2000 },
      { name: '16.02', uv: 2780 },
      { name: '17.02', uv: 1890 },
      { name: '18.02', uv: 2390 },
      { name: '19.02', uv: 3490 },
      { name: '20.02', uv: 2000 },
      { name: '21.02', uv: 2780 },
      { name: '22.02', uv: 1890 },
      { name: '23.02', uv: 3578 },
      { name: '24.02', uv: 2390 },
      { name: '25.02', uv: 3578 },
      { name: '26.02', uv: 1890 },
      { name: '27.02', uv: 4000 },
      { name: '28.02', uv: 2378 },
    ];

    let activeData = dataYearly;
    const option = {
      textStyle: {
        color: "#999"
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: activeData.map(x => x.name),
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          }
        }
      ],
      series: [
        {
          type: 'bar',
          barWidth: '60%',
          data: activeData.map(x => x.uv),
          color: colors[theme].red,
        }
      ]
    };
    $('.toggle-btn__input-label').click(function () {

      if (activeData == dataYearly) {
        activeData = dataMontly;
        myChart.setOption({
          xAxis: [
            {
              data: activeData.map(x => x.name),
            }
          ],
          series: [{
            data: activeData.map(x => x.uv),
            color: colors[theme].green,
          }],
        })
      } else {
        activeData = dataYearly;
        myChart.setOption({
          xAxis: [
            {
              data: activeData.map(x => x.name),
            }
          ],
          series: [{
            data: activeData.map(x => x.uv),
            color: colors[theme].red,
          }],
        })
      }
    })
    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  if (document.getElementById('d3online-marketing-dashboard-sales-statistic-1')) {
    const myChart = echarts.init(document.getElementById('d3online-marketing-dashboard-sales-statistic-1'));
    const option = {
      tooltip: {
        show: false,
      },
      legend: {
        show: false
      },
      series: [
        {
          name: 'calories',
          type: 'pie',
          radius: ['90%', '100%'],
          center: ['50%', '50%'],
          hoverAnimation: false,
          startAngle: 0,
          endAngle: 360,
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {
              value: 80,
              itemStyle: {
                color: colors[theme].gray,
              }
            },
            {
              value: 300,
              itemStyle: {
                color: colors[theme].green,
              }
            },
          ]
        }
      ]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
    utils.responsiveChart(myChart);
  }



  if (document.getElementById('d3online-marketing-dashboard-sales-statistic-2')) {
    const myChart = echarts.init(document.getElementById('d3online-marketing-dashboard-sales-statistic-2'));
    const option = {
      tooltip: {
        show: false,
      },
      legend: {
        show: false
      },
      series: [
        {
          name: 'calories',
          type: 'pie',
          radius: ['90%', '100%'],
          center: ['50%', '50%'],
          hoverAnimation: false,
          startAngle: 0,
          endAngle: 360,
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {
              value: 100,
              itemStyle: {
                color: colors[theme].gray,
              }
            },
            {
              value: 100,
              itemStyle: {
                color: colors[theme].red,
              }
            },
          ]
        }
      ]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  if (document.getElementById('d3online-marketing-dashboard-visits')) {
    const myChart = echarts.init(document.getElementById('d3online-marketing-dashboard-visits'));
    const option = {
      color: colors[theme].red,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
      },
      xAxis: [
        {
          show: false,
          type: 'category',
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          show: false,
          type: 'value'
        }
      ],
      series: [
        {
          type: 'bar',
          barWidth: '60%',
          data: [4000, 3000, 2000, 2780, 1890, 2390, 3490, 2000, 2780, 1890]
        }
      ]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }


  // PAGE "dashboard mobile"

  if (document.getElementById('d3app-dashboard-title-clicks')) {
    const myChart = window.echarts.init(document.getElementById('d3app-dashboard-title-clicks'));
    var seriesLabel = {
      normal: {
        show: false,
      }
    }
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      textStyle: {
        color: '#999',
        fontSize: '13px',
        lineHeight: '1.6'
      },
      color: [colors[theme].darkBlue, colors[theme].lightBlue],
      grid: {
        left: 70,
        top: 0,
      },
      xAxis: {
        type: 'value',
        show: false,
      },
      yAxis: {
        type: 'category',
        inverse: true,
        axisLine: {
          lineStyle: {
            width: 0,
          },
        },
        axisTick: {
          show: false,
        },
        data: ['News', 'Video', 'Messages', 'Photos', 'Weather'],
        axisLabel: {
          margin: 10,
          rich: {
            News: {
              lineHeight: 20,
              align: 'center'
            },
            Video: {
              height: 20,
              align: 'center',
            },
            Messages: {
              height: 20,
              align: 'center',
            },
            Photos: {
              height: 20,
              align: 'center',
            },
            Weather: {
              height: 20,
              align: 'center',
            }
          }
        }
      },
      series: [
        {
          name: 'uv',
          type: 'bar',
          data: [4000, 3000, 2000, 2780, 1890],
          label: seriesLabel,
          barCategoryGap: '60%',
          markPoint: {
            symbolSize: 1,
            symbolOffset: [0, '30%'],
            label: {
            },
          }
        },
        {
          name: 'pv',
          barGap: 0,
          type: 'bar',
          label: seriesLabel,
          data: [2400, 1398, 9800, 3908, 4800]
        },
      ]
    }

    myChart.setOption(option);
    utils.responsiveChart(myChart);

  }
  if (document.getElementById('d3app-dashboard-weekly-stat1')) {
    const myChart = window.echarts.init(document.getElementById('d3app-dashboard-weekly-stat1'));
    const option = {
      tooltip: {
        show: false,
      },
      legend: {
        show: false,
        orient: 'vertical',
        x: 'left',
        data: ['75%']
      },
      series: [
        {
          name: '75%',
          type: 'pie',
          radius: ['90%', '100%'],
          center: ['50%', '20%'],
          hoverAnimation: false,
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: true,
              position: 'center',
              textStyle: {
                fontSize: 25,
              },
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {
              value: 78,
              name: '78%',
              itemStyle: {
                color: colors[theme].limon
              },
            },
            {
              value: 22,
              itemStyle: {
                color: colors[theme].gray,
              }
            },
          ]
        }
      ]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }
  if (document.getElementById('d3app-dashboard-weekly-stat2')) {
    const myChart = window.echarts.init(document.getElementById('d3app-dashboard-weekly-stat2'));
    const option = {
      tooltip: {
        show: false,
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      hoverAnimation: false,
      legend: {
        show: false,
        orient: 'vertical',
        x: 'left',
        data: ['25%'],
      },
      series: [
        {
          name: '25%',
          type: 'pie',
          radius: ['90%', '100%'],
          center: ['50%', '20%'],
          avoidLabelOverlap: false,
          hoverAnimation: false,
          clockwise: false,
          label: {
            normal: {
              show: true,
              position: 'center',
              textStyle: {
                fontSize: 25,
              },
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {
              value: 25,
              name: '25%',
              itemStyle: {
                color: colors[theme].red,
              }
            },
            {
              value: 75,
              name: '',
              itemStyle: {
                color: colors[theme].gray,
              }
            },
          ]
        }
      ]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }
  if (document.getElementById('d3dashboard-mobile-current-users')) {
    const myChart = window.echarts.init(document.getElementById('d3dashboard-mobile-current-users'));
    const option = {
      tooltip: {
        show: false,
      },
      legend: {
        show: false
      },
      series: [
        {
          name: 'nameOne',
          type: 'pie',
          radius: ['130%', '160%'],
          center: ['50%', '100%'],
          hoverAnimation: false,
          startAngle: 180,
          endAngle: 360,
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {
              value: 56,
              name: 'nameTwo',
              itemStyle: {
                color: colors[theme].limon,
              }
            },
            {
              value: 100,
              name: 'nameThree',
              itemStyle: {
                color: colors[theme].gray,
              }
            },
          ]
        }
      ]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  if (document.getElementById('d3dashboard-mobile-active-users')) {
    const myChart = window.echarts.init(document.getElementById('d3dashboard-mobile-active-users'));

    const getRandomArbitrary = (minValue, maxValue) => {
      const ratio = (maxValue - minValue) + minValue;
      return Math.random() * ratio;
    };

    const generateRandomData = (dataLength, minDeviationValue, maxDeviationValue, minRange, maxRange) => {
      const rangeFactor = (maxRange - minRange) / dataLength;

      return Array.from({ length: dataLength }, (v, k) => (
        {
          name: k,
          point: (k * rangeFactor) + getRandomArbitrary(minDeviationValue, maxDeviationValue),
          amt: 2000,
        }));
    }

    const data = generateRandomData(100, -2000, 2000, 300, 6000);
    const option = {
      grid: {
        left: 25,
        top: 20,
        right: 0,
        bottom: 10
      },
      textStyle: {
        color: '#999'
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        show: false,
        lineStyle: {
          color: colors[theme].gray,
        },
        data: data.map(x => x.name),
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 8000,
        interval: 2000,
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          formatter: function (value) {
            return value / 1000 + 'k'
          }
        }
      },
      series: [{
        type: 'line',
        data: data.map(x => x.point),
        color: colors[theme].limon,
        showSymbol: false,
      }]
    };


    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  // PAGE "Fitness Dashboard"

  if (document.getElementById('d3fitness-dashboard-activity')) {
    const myChart = window.echarts.init(document.getElementById('d3fitness-dashboard-activity'));

    // specify chart configuration item and data
    const option = {
      tooltip: {
        show: true,
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        icon: 'circle',
        x: 'left',
        y: 'bottom',
        data: ['Cycling', 'Walking', 'Run', 'Swimming'],
        padding: 0
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '49%'],
          hoverAnimation: false,
          avoidLabelverlap: false,
          data: [
            {
              value: 10,
              name: 'Walking',
              itemStyle: {
                color: colors[theme].green
              }
            },
            {
              value: 37,
              name: 'Cycling',
              itemStyle: {
                color: colors[theme].blue
              }
            },
            {
              value: 21,
              name: 'Swimming',
              itemStyle: {
                color: colors[theme].yellow
              }
            },
            {
              value: 32,
              name: 'Run',
              itemStyle: {
                color: colors[theme].red
              }
            },
          ],

        }
      ],
    };
    // use configuration item and data specified to show chart
    myChart.setOption(option);
    utils.responsiveChart(myChart);

  }


  if (document.getElementById('d3fitness-dashboard-fat-burning')) {
    const myChart = window.echarts.init(document.getElementById('d3fitness-dashboard-fat-burning'));
    const option = {
      grid: {
        top: 15,
        left: 40,
        right: 10,
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        show: false,
        boundaryGap: false,
        data: [0, 1, 2, 3, 4, 5, 6, 7],
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: false
        },
        axisLabel: {

        },
        axisLine: {
          lineStyle: {
            width: 0,
          },
        },
        axisTick: {
          show: false,
        },
      },
      series: [{
        name: 'uv',
        data: [56, 42, 54, 43, 45, 41, 50, 58],
        type: 'line',
        lineStyle: {
          color: colors[theme].red,
        },
        areaStyle: {
          color: new window.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#fee7e9'
          }, {
            offset: 1,
            color: '#fef7f7'
          }])
        },
        smooth: true,
      }]
    }
    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  if (document.getElementById('d3fitness-dashboard-heartrate')) {
    const myChart = echarts.init(document.getElementById('d3fitness-dashboard-heartrate'));
    const option = {
      tooltip: {
        show: false,
      },
      legend: {
        show: false
      },
      series: [
        {
          name: 'heartrate',
          type: 'pie',
          radius: ['90%', '100%'],
          center: ['50%', '50%'],
          hoverAnimation: false,
          startAngle: 240,
          endAngle: 360,
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {
              value: 200,
              itemStyle: {
                color: colors[theme].red,
              }
            },
            {
              value: 100,
              itemStyle: {
                color: colors[theme].gray,
              }
            },
          ]
        }
      ]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }
  if (document.getElementById('d3fitness-dashboard-calories')) {
    const myChart = echarts.init(document.getElementById('d3fitness-dashboard-calories'));
    const option = {
      tooltip: {
        show: false,
      },
      legend: {
        show: false
      },
      series: [
        {
          name: 'calories',
          type: 'pie',
          radius: ['90%', '100%'],
          center: ['50%', '50%'],
          hoverAnimation: false,
          startAngle: 260,
          endAngle: 360,
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {
              value: 240,
              itemStyle: {
                color: colors[theme].yellow,
              }
            },
            {
              value: 100,
              itemStyle: {
                color: colors[theme].gray,
              }
            },
          ]
        }
      ]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  if (document.getElementById('d3fitness-dashboard-steps')) {
    const myChart = echarts.init(document.getElementById('d3fitness-dashboard-steps'));
    const option = {
      tooltip: {
        show: false,
      },
      legend: {
        show: false
      },
      series: [
        {
          name: 'calories',
          type: 'pie',
          radius: ['90%', '100%'],
          center: ['50%', '50%'],
          hoverAnimation: false,
          startAngle: 210,
          endAngle: 360,
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {
              value: 160,
              itemStyle: {
                color: colors[theme].green,
              }
            },
            {
              value: 100,
              itemStyle: {
                color: colors[theme].gray,
              }
            },
          ]
        }
      ]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }
  if (document.getElementById('d3fitness-dashboard-distance')) {
    const myChart = echarts.init(document.getElementById('d3fitness-dashboard-distance'));
    const option = {
      tooltip: {
        show: false,
      },
      legend: {
        show: false
      },
      series: [
        {
          name: 'calories',
          type: 'pie',
          radius: ['90%', '100%'],
          center: ['50%', '50%'],
          hoverAnimation: false,
          startAngle: 0,
          endAngle: 360,
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {
              value: 500,
              itemStyle: {
                color: colors[theme].blue,
              }
            },
            {
              value: 50,
              itemStyle: {
                color: colors[theme].gray,
              }
            },
          ]
        }
      ]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  // PAGE 'Booking Dashboard'
  if (document.getElementById('d3booking-dashboard-reservation')) {
    const myChart = echarts.init(document.getElementById('d3booking-dashboard-reservation'));
    const option = {
      legend: {
        orient: 'vertical',
        icon: 'circle',
        x: 'left',
        data: ['Completed', 'Online check-in', 'Remain']
      },
      series: [
        {

          type: 'pie',
          radius: ['45%', '60%'],
          hoverAnimation: false,
          avoidLabelverlap: false,
          startAngle: 180,
          endAngle: 360,
          label: {
            normal: {
              show: false
            }
          },
          data: [
            {
              value: 2500,
              name: 'Completed',
              itemStyle: {
                color: colors[theme].green
              }
            },
            {
              value: 2500,
              name: 'Online check-in',
              itemStyle: {
                color: colors[theme].limon
              }
            },
            {
              value: 5000,
              name: 'Remain',
              itemStyle: {
                color: colors[theme].gray
              }
            },
          ],

        }
      ],
    };
    // use configuration item and data specified to show chart

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  if (document.getElementById('d3booking-dashboard-weekly-stat-1')) {
    const myChart = echarts.init(document.getElementById('d3booking-dashboard-weekly-stat-1'));
    const option = {
      legend: {
        show: false,
      },
      series: [
        {

          type: 'pie',
          radius: ['93%', '100%'],
          hoverAnimation: false,
          avoidLabelverlap: false,
          startAngle: 280,
          endAngle: 360,
          label: {
            normal: {
              show: false
            }
          },
          data: [
            {
              value: 78,
              name: 'Online check-in',
              itemStyle: {
                color: colors[theme].limon
              }
            },
            {
              value: 22,
              name: 'Remain',
              itemStyle: {
                color: colors[theme].gray
              }
            },
          ],

        }
      ],
    };
    // use configuration item and data specified to show chart

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }
  if (document.getElementById('d3booking-dashboard-weekly-stat-2')) {
    const myChart = echarts.init(document.getElementById('d3booking-dashboard-weekly-stat-2'));
    const option = {
      legend: {
        show: false,
      },
      series: [
        {

          type: 'pie',
          radius: ['93%', '100%'],
          hoverAnimation: false,
          avoidLabelverlap: false,
          startAngle: 90,
          endAngle: 360,
          label: {
            normal: {
              show: false
            }
          },
          data: [
            {
              value: 25,
              name: 'Online check-in',
              itemStyle: {
                color: colors[theme].red
              }
            },
            {
              value: 75,
              name: 'Remain',
              itemStyle: {
                color: colors[theme].gray
              }
            },
          ],

        }
      ],
    };
    // use configuration item and data specified to show chart

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  if (document.getElementById('d3booking-dashboard-occupancy')) {
    const myChart = echarts.init(document.getElementById('d3booking-dashboard-occupancy'));
    const option = {
      tooltip: {
        trigger: 'axis',
      },
      textStyle: {
        color: '#999',
      },
      grid: {
        left: 50,
        right: 0,
        top: 10,
      },
      legend: {
        show: false
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon 10/07', 'Tue 11/07', 'Wed 12/07', 'Thu 13/07', 'Fri 14/07', 'Sat 15/07', 'Sun 16/07'],
          axisLine: {
            lineStyle: {
              width: 0,
            },
          },
          axisTick: {
            show: false,
          },
        }
      ],
      yAxis: [
        {
          type: 'value',
          min: 0,
          max: 100,
          interval: 25,
          axisLine: {
            lineStyle: {
              width: 0,
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            formatter: '{value} ml'
          }
        },
      ],
      series: [
        {
          name: 'Stay overs',
          type: 'bar',
          data: [90, 85, 47, 80, 55, 99, 85],
          color: colors[theme].gray,
          barCategoryGap: 75,
        },
        {
          name: 'Arivals',
          type: 'line',
          color: colors[theme].blue,
          data: [10, 65, 45, 45, 15, 40, 26]
        },
        {
          name: 'nameFour',
          type: 'line',
          color: colors[theme].limon,
          data: [75, 23, 26, 25, 35, 30, 48]
        }
      ]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }


  // "Finance" Dashboard

  if (document.getElementById('d3finance-dashboard-course-1')) {
    const myChart = echarts.init(document.getElementById('d3finance-dashboard-course-1'));
    const option = {
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          params = params[0];
          return '$' + params.data;
        },
        position: function (point, params, dom, rect, size) {
          // fixed at top
          return [point[0], point[1]];
        },
        backgroundColor: 'transparent',
        textStyle: {
          color: '#333'
        }
      },
      grid: {
        left: 0,
        top: 10,
        right: 0,
        bottom: 5,
      },
      xAxis: {
        type: 'category',
        show: false,
        data: [1, 2, 3, 4, 5, 6, 7],
        axisPointer: {
          animation: false
        },
      },
      yAxis: {
        type: 'value',
        show: false,
        min: 0,
        max: 115,
      },
      series: [{
        data: [70.23, 80.5, 38.45, 89.2, 105.61, 98.6, 115],
        type: 'line',
        color: colors[theme].green,
        showSymbol: false,
        smooth: true,
        areaStyle: {
          opacity: 0.2,
        },
      }]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  if (document.getElementById('d3finance-dashboard-course-2')) {
    const myChart = echarts.init(document.getElementById('d3finance-dashboard-course-2'));
    const option = {
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          params = params[0];
          return '$' + params.data;
        },
        position: function (point, params, dom, rect, size) {
          // fixed at top
          return [point[0], point[1]];
        },
        backgroundColor: 'transparent',
        textStyle: {
          color: '#333'
        }
      },
      grid: {
        left: 0,
        top: 10,
        right: 0,
        bottom: 5,
      },
      xAxis: {
        type: 'category',
        show: false,
        data: [1, 2, 3, 4, 5, 6, 7],
        axisPointer: {
          animation: false
        },
      },
      yAxis: {
        type: 'value',
        show: false,
        min: 0,
        max: 115,
      },
      series: [{
        data: [70.23, 80.5, 38.45, 89.2, 105.61, 98.6, 115],
        type: 'line',
        color: colors[theme].red,
        showSymbol: false,
        smooth: true,
        areaStyle: {
          opacity: 0.2,
        },
      }]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  if (document.getElementById('d3finance-dashboard-course-3')) {
    const myChart = echarts.init(document.getElementById('d3finance-dashboard-course-3'));
    const option = {
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          params = params[0];
          return '$' + params.data;
        },
        position: function (point, params, dom, rect, size) {
          // fixed at top
          return [point[0], point[1]];
        },
        backgroundColor: 'transparent',
        textStyle: {
          color: '#333'
        }
      },
      grid: {
        left: 0,
        top: 10,
        right: 0,
        bottom: 5,
      },
      xAxis: {
        type: 'category',
        show: false,
        data: [1, 2, 3, 4, 5, 6, 7],
        axisPointer: {
          animation: false
        },
      },
      yAxis: {
        type: 'value',
        show: false,
        min: 0,
        max: 115,
      },
      series: [{
        data: [70.23, 80.5, 38.45, 89.2, 105.61, 98.6, 115],
        type: 'line',
        color: colors[theme].blue,
        showSymbol: false,
        smooth: true,
        areaStyle: {
          opacity: 0.2,
        },
      }]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }


  if (document.getElementById('d3finance-dashboard-course-4')) {
    const myChart = echarts.init(document.getElementById('d3finance-dashboard-course-4'));
    const option = {
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          params = params[0];
          return '$' + params.data;
        },
        position: function (point, params, dom, rect, size) {
          // fixed at top
          return [point[0], point[1]];
        },
        backgroundColor: 'transparent',
        textStyle: {
          color: '#333'
        }
      },
      grid: {
        left: 0,
        top: 10,
        right: 0,
        bottom: 5,
      },
      xAxis: {
        type: 'category',
        show: false,
        data: [1, 2, 3, 4, 5, 6, 7],
        axisPointer: {
          animation: false
        },
      },
      yAxis: {
        type: 'value',
        show: false,
        min: 0,
        max: 115,
      },
      series: [{
        data: [70.23, 80.5, 38.45, 89.2, 105.61, 98.6, 115],
        type: 'line',
        showSymbol: false,
        color: '#c39fdf',
        smooth: true,
        areaStyle: {
          opacity: 0.2,
        },
      }]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  if (document.getElementById('d3finance-dashboard-today')) {
    const myChart = window.echarts.init(document.getElementById('d3finance-dashboard-today'));

    // specify chart configuration item and data
    const option = {
      tooltip: {
        formatter: function (params) {
          return `${params.name} : $${params.data.value} .00`
        }
      },
      legend: {
        orient: 'vertical',
        icon: 'circle',
        x: 'left',
        y: 'bottom',
        data: ['Bitcoin', 'Ethereum', 'Bitcoin Cash', 'Ripple']
      },
      grid: {
        top: 0,
      },
      series: [
        {
          type: 'pie',
          radius: ['45%', '60%'],
          hoverAnimation: false,
          avoidLabelverlap: false,
          label: {
            formatter: '${c}.00',
          },
          data: [
            {
              value: 20432.00,
              name: 'Bitcoin',
              itemStyle: {
                color: colors[theme].green
              },
            },
            {
              value: 9934,
              name: 'Ethereum',
              itemStyle: {
                color: colors[theme].blue
              }
            },
            {
              value: 20432,
              name: 'Bitcoin Cash',
              itemStyle: {
                color: colors[theme].yellow
              }
            },
            {
              value: 15432,
              name: 'Ripple',
              itemStyle: {
                color: colors[theme].red
              }
            },
          ],

        }
      ],
    };
    // use configuration item and data specified to show chart
    myChart.setOption(option);
    utils.responsiveChart(myChart);

  }


  if (document.getElementById('d3finance-dashboard-btc-eth')) {
    const myChart = window.echarts.init(document.getElementById('d3finance-dashboard-btc-eth'));
    const data = [{ name: '25.04', btc: 59, eth: 140 },
    { name: '26.04', btc: 86, eth: 150 },
    { name: '27.04', btc: 139, eth: 98 },
    { name: '28.04', btc: 148, eth: 122 },
    { name: '29.04', btc: 152, eth: 110 },
    { name: '30.04', btc: 152, eth: 110 },
    { name: '1.05', btc: 140, eth: 170 },
    { name: '2.05', btc: 59, eth: 140 },
    { name: '3.05', btc: 86, eth: 150 },
    { name: '4.05', btc: 139, eth: 98 },
    { name: '5.05', btc: 50, eth: 122 },
    { name: '6.05', btc: 85, eth: 75 },
    { name: '7.05', btc: 152, eth: 90 },
    { name: '8.05', btc: 140, eth: 170 }];
    // specify chart configuration item and data
    const option = {
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#fff',
        textStyle: {
          color: '#333'
        }
      },
      legend: {
        show: true,
        bottom: 0,
        textStyle: {
          fontSize: 10,
        }
      },
      textStyle: {
        color: '#999',
        opacity: 0.6,
        fontSize: '10px',
        fontWeight: 200,
      },
      grid: {
        left: 30,
        top: 10,
        right: 10,
      },
      xAxis: {
        type: 'category',
        min: '26.04',
        max: '8.05',
        boundaryGap: false,
        data: data.map(x => x.name),
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      dataZoom: [
        {
          bottom: 25,
          type: 'slider',
          xAxisIndex: 0,
          height: 10,
          filterMode: 'none',
          dataBackground: {
            areaStyle: {
              opacity: 0
            },
            lineStyle: {
              width: 0,
            }
          }
        },

      ],
      series: [{
        data: data.map(x => x.btc),
        type: 'line',
        name: 'BTC',
        smooth: true,
        showSymbol: false,
        color: colors[theme].blue,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          opacity: 0.2,
        },
      },
      {
        data: data.map(x => x.eth),
        type: 'line',
        name: 'ETH',
        smooth: true,
        showSymbol: false,
        color: colors[theme].green,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          opacity: 0.2,
        },
      }
      ]
    };
    // use configuration item and data specified to show chart
    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  if (document.getElementById('d3finance-dashboard-top-10--1')) {
    const myChart = echarts.init(document.getElementById('d3finance-dashboard-top-10--1'));
    const option = {
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          params = params[0];
          return '$' + params.data;
        },
        position: function (point, params, dom, rect, size) {
          return [point[0] - 50, point[1]];
        },
        backgroundColor: 'transparent',
        textStyle: {
          color: '#333'
        }
      },
      grid: {
        left: 0,
        top: 10,
        right: 0,
        bottom: 5,
      },
      xAxis: {
        type: 'category',
        show: false,
        data: [1, 2, 3, 4, 5, 6, 7],
        axisPointer: {
          animation: false
        },
      },
      yAxis: {
        type: 'value',
        show: false,
        min: 0,
        max: 115,
      },
      series: [{
        data: [70.23, 25.5, 78.45, 45.2, 56.61, 110.6, 115],
        type: 'line',
        showSymbol: false,
        color: colors[theme].green,
        smooth: true,
        areaStyle: {
          opacity: 0.2,
        },
      }]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  if (document.getElementById('d3finance-dashboard-top-10--2')) {
    const myChart = echarts.init(document.getElementById('d3finance-dashboard-top-10--2'));
    const option = {
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          params = params[0];
          return '$' + params.data;
        },
        position: function (point, params, dom, rect, size) {
          return [point[0] - 50, point[1]];
        },
        backgroundColor: 'transparent',
        textStyle: {
          color: '#333'
        }
      },
      grid: {
        left: 0,
        top: 10,
        right: 0,
        bottom: 5,
      },
      xAxis: {
        type: 'category',
        show: false,
        data: [1, 2, 3, 4, 5, 6, 7],
        axisPointer: {
          animation: false
        },
      },
      yAxis: {
        type: 'value',
        show: false,
        min: 0,
        max: 115,
      },
      series: [{
        data: [54.23, 72.5, 78.45, 35.2, 78.61, 45.6, 115],
        type: 'line',
        showSymbol: false,
        color: colors[theme].green,
        smooth: true,
        areaStyle: {
          opacity: 0.2,
        },
      }]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  if (document.getElementById('d3finance-dashboard-top-10--3')) {
    const myChart = echarts.init(document.getElementById('d3finance-dashboard-top-10--3'));
    const option = {
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          params = params[0];
          return '$' + params.data;
        },
        position: function (point, params, dom, rect, size) {
          return [point[0] - 50, point[1]];
        },
        backgroundColor: 'transparent',
        textStyle: {
          color: '#333'
        }
      },
      grid: {
        left: 0,
        top: 10,
        right: 0,
        bottom: 5,
      },
      xAxis: {
        type: 'category',
        show: false,
        data: [1, 2, 3, 4, 5, 6, 7],
        axisPointer: {
          animation: false
        },
      },
      yAxis: {
        type: 'value',
        show: false,
        min: 0,
        max: 115,
      },
      series: [{
        data: [23.23, 55.5, 78.45, 64.2, 56.61, 90.6, 115],
        type: 'line',
        showSymbol: false,
        color: colors[theme].green,
        smooth: true,
        areaStyle: {
          opacity: 0.2,
        },
      }]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  if (document.getElementById('d3finance-dashboard-top-10--4')) {
    const myChart = echarts.init(document.getElementById('d3finance-dashboard-top-10--4'));
    const option = {
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          params = params[0];
          return '$' + params.data;
        },
        position: function (point, params, dom, rect, size) {
          return [point[0] - 50, point[1]];
        },
        backgroundColor: 'transparent',
        textStyle: {
          color: '#333'
        }
      },
      grid: {
        left: 0,
        top: 10,
        right: 0,
        bottom: 5,
      },
      xAxis: {
        type: 'category',
        show: false,
        data: [1, 2, 3, 4, 5, 6, 7],
        axisPointer: {
          animation: false
        },
      },
      yAxis: {
        type: 'value',
        show: false,
        min: 0,
        max: 115,
      },
      series: [{
        data: [89.23, 44.5, 38.45, 77.2, 56.61, 23.6, 115],
        type: 'line',
        showSymbol: false,
        color: colors[theme].green,
        smooth: true,
        areaStyle: {
          opacity: 0.2,
        },
      }]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  if (document.getElementById('d3finance-dashboard-top-10--5')) {
    const myChart = echarts.init(document.getElementById('d3finance-dashboard-top-10--5'));
    const option = {
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          params = params[0];
          return '$' + params.data;
        },
        position: function (point, params, dom, rect, size) {
          // fixed at top
          return [point[0] - 50, point[1]];
        },
        backgroundColor: 'transparent',
        textStyle: {
          color: '#333'
        }
      },
      grid: {
        left: 0,
        top: 10,
        right: 0,
        bottom: 5,
      },
      xAxis: {
        type: 'category',
        show: false,
        data: [1, 2, 3, 4, 5, 6, 7],
        axisPointer: {
          animation: false
        },
      },
      yAxis: {
        type: 'value',
        show: false,
        min: 0,
        max: 115,
      },
      series: [{
        data: [88.23, 42.5, 78.45, 54.2, 56.61, 77.6, 114],
        type: 'line',
        showSymbol: false,
        color: colors[theme].green,
        smooth: true,
        areaStyle: {
          opacity: 0.2,
        },
      }]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  if (document.getElementById('d3finance-dashboard-top-10--6')) {
    const myChart = echarts.init(document.getElementById('d3finance-dashboard-top-10--6'));
    const option = {
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          params = params[0];
          return '$' + params.data;
        },
        position: function (point, params, dom, rect, size) {
          return [point[0] - 50, point[1]];
        },
        backgroundColor: 'transparent',
        textStyle: {
          color: '#333'
        }
      },
      grid: {
        left: 0,
        top: 10,
        right: 0,
        bottom: 5,
      },
      xAxis: {
        type: 'category',
        show: false,
        data: [1, 2, 3, 4, 5, 6, 7],
        axisPointer: {
          animation: false
        },
      },
      yAxis: {
        type: 'value',
        show: false,
        min: 0,
        max: 115,
      },
      series: [{
        data: [57.23, 25.5, 42.45, 45.2, 30.61, 50.6, 115],
        type: 'line',
        showSymbol: false,
        color: colors[theme].green,
        smooth: true,
        areaStyle: {
          opacity: 0.2,
        },
      }]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  if (document.getElementById('d3finance-dashboard-top-10--7')) {
    const myChart = echarts.init(document.getElementById('d3finance-dashboard-top-10--7'));
    const option = {
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          params = params[0];
          return '$' + params.data;
        },
        position: function (point, params, dom, rect, size) {
          return [point[0] - 50, point[1]];
        },
        backgroundColor: 'transparent',
        textStyle: {
          color: '#333'
        }
      },
      grid: {
        left: 0,
        top: 10,
        right: 0,
        bottom: 5,
      },
      xAxis: {
        type: 'category',
        show: false,
        data: [1, 2, 3, 4, 5, 6, 7],
        axisPointer: {
          animation: false
        },
      },
      yAxis: {
        type: 'value',
        show: false,
        min: 0,
        max: 115,
      },
      series: [{
        data: [57.23, 55.5, 60.45, 89.2, 13.61, 50.6, 115],
        type: 'line',
        showSymbol: false,
        color: colors[theme].green,
        smooth: true,
        areaStyle: {
          opacity: 0.2,
        },
      }]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  if (document.getElementById('d3finance-dashboard-top-10--8')) {
    const myChart = echarts.init(document.getElementById('d3finance-dashboard-top-10--8'));
    const option = {
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          params = params[0];
          return '$' + params.data;
        },
        position: function (point, params, dom, rect, size) {
          return [point[0] - 50, point[1]];
        },
        backgroundColor: 'transparent',
        textStyle: {
          color: '#333'
        }
      },
      grid: {
        left: 0,
        top: 10,
        right: 0,
        bottom: 5,
      },
      xAxis: {
        type: 'category',
        show: false,
        data: [1, 2, 3, 4, 5, 6, 7],
        axisPointer: {
          animation: false
        },
      },
      yAxis: {
        type: 'value',
        show: false,
        min: 0,
        max: 115,
      },
      series: [{
        data: [57.23, 25.5, 60.45, 35.2, 30.61, 70.6, 115],
        type: 'line',
        showSymbol: false,
        color: colors[theme].green,
        smooth: true,
        areaStyle: {
          opacity: 0.2,
        },
      }]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  if (document.getElementById('d3finance-dashboard-top-10--9')) {
    const myChart = echarts.init(document.getElementById('d3finance-dashboard-top-10--9'));
    const option = {
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          params = params[0];
          return '$' + params.data;
        },
        position: function (point, params, dom, rect, size) {
          return [point[0] - 50, point[1]];
        },
        backgroundColor: 'transparent',
        textStyle: {
          color: '#333'
        }
      },
      grid: {
        left: 0,
        top: 10,
        right: 0,
        bottom: 5,
      },
      xAxis: {
        type: 'category',
        show: false,
        data: [1, 2, 3, 4, 5, 6, 7],
        axisPointer: {
          animation: false
        },
      },
      yAxis: {
        type: 'value',
        show: false,
        min: 0,
        max: 115,
      },
      series: [{
        data: [33.23, 25.5, 55.45, 87.2, 30.61, 51.6, 114],
        type: 'line',
        showSymbol: false,
        color: colors[theme].green,
        smooth: true,
        areaStyle: {
          opacity: 0.2,
        },
      }]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }

  if (document.getElementById('d3finance-dashboard-top-10--10')) {
    const myChart = echarts.init(document.getElementById('d3finance-dashboard-top-10--10'));
    const option = {
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          params = params[0];
          return '$' + params.data;
        },
        position: function (point, params, dom, rect, size) {
          return [point[0] - 50, point[1]];
        },
        backgroundColor: 'transparent',
        textStyle: {
          color: '#333'
        }
      },
      grid: {
        left: 0,
        top: 10,
        right: 0,
        bottom: 5,
      },
      xAxis: {
        type: 'category',
        show: false,
        data: [1, 2, 3, 4, 5, 6, 7],
        axisPointer: {
          animation: false
        },
      },
      yAxis: {
        type: 'value',
        show: false,
        min: 0,
        max: 115,
      },
      series: [{
        data: [31.23, 86.5, 42.45, 25.2, 30.61, 65.6, 115],
        type: 'line',
        showSymbol: false,
        color: colors[theme].green,
        smooth: true,
        areaStyle: {
          opacity: 0.2,
        },
      }]
    };

    myChart.setOption(option);
    utils.responsiveChart(myChart);
  }
});
