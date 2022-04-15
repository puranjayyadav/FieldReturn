$(document).ready(function(){
  if (document.getElementById('project-summary__chart1')) {
    const data01 = [
      {name: 'Minor Bugs', value: 150, color: '#4ce1b6'},
      {name: 'Resolved Bugs', value: 75, color: '#70bbfd'},
      {name: 'Critical Bugs', value: 75, color: '#ff4861'},
    ];
    const myChart = window.echarts.init(document.getElementById('project-summary__chart1'));
    // specify chart configuration item and data
    const option = {
      title: {
        text: ''
      },
      legend: {
        data: data01.map(x => x.name),
        orient: 'vertical',
        x: 'right',
        y: 'bottom',
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
          radius: ['40%', '55%'],
          data: data01,
          label: {
            normal: {
              formatter: '{c}',
            }
          },
          itemStyle:{
            normal: {
              color: function(params) {
                return params.data.color;
              }
            }
          }
        }
      ]
    };
    myChart.setOption(option);
  }
  if (document.getElementById('project-summary__chart2')) {
    const data01 = [
      {name: 'New Tasks', value: 40, color: '#4ce1b6'},
      {name: 'Done Tasks', value: 175, color: '#70bbfd'},
      {name: 'High Priority Tasks', value: 70, color: '#ff4861'},
    ];
    const myChart = window.echarts.init(document.getElementById('project-summary__chart2'));
    // specify chart configuration item and data
    const option = {
      title: {
        text: ''
      },
      legend: {
        orient: 'vertical',
        x: 'right',
        y: 'bottom',
        data: data01.map(x => x.name)
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
          radius: ['40%', '55%'],
          data: data01,
          label: {
            normal: {
              formatter: '{c}',
            }
          },
          itemStyle: {
            normal: {
              color: function (params) {
                return params.data.color;
              }
            }
          }
        }
      ]
    };
    myChart.setOption(option);
  }
});
