$(document).ready(() => {
  const colors = {
    blue: '#36A2EB',
    red: '#FF6384',
    yellow: '#FFCE56',
    green: '#4BC0C0',
    grey: '#E7E9ED',
    violet: '#c88ffa',
    scale: 'rgb(204, 204, 204)',
  };
  const options = {
    legend: {
      position: 'bottom',
    },
    scale: {
      gridLines: {
        color: colors.scale,
        borderDash: [3, 3],
      },
      ticks: {
        fontColor: colors.scale,
      },
    },
  };
  if (document.getElementById('point-sizes')) {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Blue',
          fill: false,
          lineTension: 0.3,
          backgroundColor: colors.blue,
          borderColor: colors.blue,
          borderWidth: 1,
          borderDash: [5, 3],
          pointBackgroundColor: colors.blue,
          pointHoverRadius: 3,
          pointHoverBorderWidth: 1,
          pointRadius: 2,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56],
        },
        {
          label: 'Red',
          fill: false,
          lineTension: 0.3,
          backgroundColor: colors.red,
          borderColor: colors.red,
          borderWidth: 1,
          borderDash: [3, 3],
          pointBackgroundColor: colors.red,
          pointHoverRadius: 2,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [5, 7, 54, 32, 87],
        },
        {
          label: 'Yellow',
          fill: false,
          lineTension: 0.3,
          backgroundColor: colors.yellow,
          borderColor: colors.yellow,
          borderWidth: 1,
          pointBackgroundColor: colors.yellow,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          pointHitRadius: 10,
          data: [25, 54, 2, 48, 78],
        },
        {
          label: 'Green',
          fill: false,
          lineTension: 0.3,
          backgroundColor: colors.green,
          borderColor: colors.green,
          borderWidth: 1,
          pointBackgroundColor: colors.green,
          pointHoverRadius: 6,
          pointHoverBorderWidth: 1,
          pointRadius: 5,
          pointHitRadius: 10,
          data: [52, 47, 45, 4, 58],
        },
      ],
    };

    const options = {
      legend: {
        position: 'bottom',
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              color: colors.scale,
              borderDash: [3, 3],
            },
            ticks: {
              fontColor: colors.scale,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              color: colors.scale,
              borderDash: [3, 3],
            },
            ticks: {
              fontColor: colors.scale,
            },
          },
        ],
      },
    };
    new window.Chart(document.getElementById('point-sizes'), {
      type: 'line',
      data,
      options,
    });
  }

  if (document.getElementById('random-animated-line')) {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First Dataset',
          fill: false,
          lineTension: 0.3,
          backgroundColor: colors.blue,
          borderColor: colors.blue,
          borderWidth: 2,
          pointBackgroundColor: colors.blue,
          pointHoverRadius: 3,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'My Second Dataset',
          fill: false,
          lineTension: 0.3,
          backgroundColor: colors.red,
          borderColor: colors.red,
          borderWidth: 2,
          pointBackgroundColor: colors.red,
          pointHoverRadius: 3,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [5, 7, 54, 32, 87, 45, 25],
        },
      ],
    };

    const options = {
      scales: {
        xAxes: [
          {
            gridLines: {
              color: colors.scale,
              borderDash: [3, 3],
            },
            ticks: {
              fontColor: colors.scale,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              color: colors.scale,
              borderDash: [3, 3],
            },
            ticks: {
              fontColor: colors.scale,
            },
          },
        ],
      },
    };
    window.window.ChartRandomAnimatedLine = new window.Chart(document.getElementById('random-animated-line'), {
      type: 'line',
      data,
      options,
    });
    setInterval(() => {
      const oldDataSet = window.window.ChartRandomAnimatedLine.data.datasets[0];
      const newData = [];

      for (let x = 0; x < window.window.ChartRandomAnimatedLine.data.labels.length; x += 1) {
        newData.push(Math.floor(Math.random() * 100));
      }

      const newDataSet = {
        ...oldDataSet,
      };

      newDataSet.data = newData;

      const oldDataSet2 = window.window.ChartRandomAnimatedLine.data.datasets[1];
      const newData2 = [];

      for (let x = 0; x < window.window.ChartRandomAnimatedLine.data.labels.length; x += 1) {
        newData2.push(Math.floor(Math.random() * 100));
      }

      const newDataSet2 = {
        ...oldDataSet2,
      };

      newDataSet2.data = newData2;

      window.window.ChartRandomAnimatedLine.data = {
        datasets: [newDataSet, newDataSet2],
        labels: window.window.ChartRandomAnimatedLine.data.labels,
      };
      window.window.ChartRandomAnimatedLine.update();
    }, 4000);
  }

  if (document.getElementById('random-animated-bars')) {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: colors.red,
          borderColor: colors.red,
          borderWidth: 1,
          hoverBackgroundColor: colors.red,
          hoverBorderColor: colors.red,
          data: [65, 59, 80, 81, 56, 55, 45],
        },
      ],
    };

    const options = {
      legend: {
        position: 'bottom',
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              color: colors.scale,
              borderDash: [3, 3],
            },
            ticks: {
              fontColor: colors.scale,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              color: colors.scale,
              borderDash: [3, 3],
            },
            ticks: {
              fontColor: colors.scale,
            },
          },
        ],
      },
    };
    window.window.ChartRandomAnimatedBars = new window.Chart(document.getElementById('random-animated-bars'), {
      type: 'bar',
      data,
      options,
    });
    setInterval(() => {
      const oldDataSet = window.window.ChartRandomAnimatedBars.data.datasets[0];
      const newData = [];

      for (let x = 0; x < window.window.ChartRandomAnimatedBars.data.labels.length; x += 1) {
        newData.push(Math.floor(Math.random() * 100));
      }

      const newDataSet = {
        ...oldDataSet,
      };

      newDataSet.data = newData;

      window.window.ChartRandomAnimatedBars.data = {
        datasets: [newDataSet],
        labels: window.window.ChartRandomAnimatedBars.data.labels,
      };
      window.window.ChartRandomAnimatedBars.update();
    }, 4000);
  }

  if (document.getElementById('polar-area')) {
    const data = {
      datasets: [{
        data: [11, 16, 7, 3, 14],
        backgroundColor: [colors.red, colors.green, colors.yellow, colors.grey, colors.blue],
        label: 'My dataset',
        borderColor: 'rgba(255,255,255,0.54)',
      }],
      labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    };
    new window.Chart(document.getElementById('polar-area'), {
      type: 'polarArea',
      data,
      options,
    });
  }

  if (document.getElementById('dynamically-refreshed-doughnut')) {
    const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

    const getState = () => ({
      labels: [
        'Red',
        'Blue',
        'Yellow',
      ],
      datasets: [{
        data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
        backgroundColor: [
          colors.red,
          colors.blue,
          colors.yellow,
        ],
        hoverBackgroundColor: [
          colors.red,
          colors.blue,
          colors.yellow,
        ],
        borderColor: 'rgba(255,255,255,0.54)',
      }],
    });

    const DynamicallyRefreshedDoughnut = new window.Chart(document.getElementById('dynamically-refreshed-doughnut'), {
      type: 'doughnut',
      data: getState(),
    });
    setInterval(() => {
      DynamicallyRefreshedDoughnut.data = getState();
      DynamicallyRefreshedDoughnut.update();
    }, 4000);
  }

  if (document.getElementById('legend-handlers')) {
    const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow',
      ],
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
          colors.red,
          colors.blue,
          colors.yellow,
        ],
        hoverBackgroundColor: [
          colors.red,
          colors.blue,
          colors.yellow,
        ],
        borderColor: 'rgba(255,255,255,0.54)',
      }],
    };

    new window.Chart(document.getElementById('legend-handlers'), {
      type: 'pie',
      data,
      options: {
        legend: {
          onClick: (e, item) => alert(`Item with text ${item.text} and index ${item.index} clicked`),
        },
      }
    });
  }

  if (document.getElementById('online-marketing-dashboard-visits')) {
    const numbers = [
      { name: 'Page A', uv: 4000 },
      { name: 'Page B', uv: 3000 },
      { name: 'Page C', uv: 2000 },
      { name: 'Page D', uv: 2780 },
      { name: 'Page E', uv: 1890 },
      { name: 'Page F', uv: 2390 },
      { name: 'Page G', uv: 3490 },
      { name: 'Page H', uv: 2000 },
      { name: 'Page I', uv: 2780 },
      { name: 'Page J', uv: 1890 },
    ];
    const labels = numbers.map(x => x.name);
    const values = numbers.map(x => x.uv);
    const data = {
      labels,
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: colors.red,
          borderColor: colors.red,
          borderWidth: 1,
          hoverBackgroundColor: colors.red,
          hoverBorderColor: colors.red,
          data: values,
        },
      ],
    };

    const options = {
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
      events: ['click'],
      scales: {
        xAxes: [
          {
            gridLines: false,
            ticks: {
              display: false
            }
          },
        ],
        yAxes: [
          {
            gridLines: false,
            ticks: {
              display: false,
              suggestedMin: 500,
              suggestedMax: 3000
            }
          },
        ],
      },
    };
    window.window.ChartDashboardDefaultVisits = new window.Chart(document.getElementById('online-marketing-dashboard-visits'), {
      type: 'bar',
      data,
      options,
    });



    $(".dashboard__total-stat").eq(0).text(values[0]);

    $("#online-marketing-dashboard-visits").on('click', (e) => {
      const activePoints = window.window.ChartDashboardDefaultVisits.getElementsAtEvent(e);
      $(".dashboard__total-stat").eq(0).text(values[activePoints[0]._index]);
      activePoints[0]._view.backgroundColor = '#4ce1b6';
      activePoints[0]._view.borderColor = '#4ce1b6';
    })
  }

  if (document.getElementById('online-marketing-dashboard-views')) {
    const numbers = [
      { name: 'Page A', uv: 2400 },
      { name: 'Page B', uv: 2210 },
      { name: 'Page C', uv: 2290 },
      { name: 'Page D', uv: 2000 },
      { name: 'Page E', uv: 2181 },
      { name: 'Page F', uv: 2500 },
      { name: 'Page G', uv: 2100 },
      { name: 'Page H', uv: 2290 },
      { name: 'Page I', uv: 2000 },
      { name: 'Page J', uv: 2181 },
    ];
    const labels = numbers.map(x => x.name);
    const values = numbers.map(x => x.uv);
    const data = {
      labels,
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: colors.blue,
          borderColor: colors.blue,
          borderWidth: 1,
          hoverBackgroundColor: colors.blue,
          hoverBorderColor: colors.blue,
          data: values,
        },
      ],
    };

    const options = {
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
      events: ['click'],
      scales: {
        xAxes: [
          {
            gridLines: false,
            ticks: {
              display: false
            }
          },
        ],
        yAxes: [
          {
            gridLines: false,
            ticks: {
              display: false,
              suggestedMin: 1000,
              suggestedMax: 3000
            },

          },
        ],
      },
    };
    window.chartDashboardDefaultViews = new Chart(document.getElementById('online-marketing-dashboard-views'), {
      type: 'bar',
      data,
      options,
    });



    $(".dashboard__total-stat").eq(1).text(values[0]);

    $("#online-marketing-dashboard-views").on('click', (e) => {
      const activePoints = window.chartDashboardDefaultViews.getElementsAtEvent(e);
      $(".dashboard__total-stat").eq(1).text(values[activePoints[0]._index]);
      activePoints[0]._view.backgroundColor = '#4ce1b6';
      activePoints[0]._view.borderColor = '#4ce1b6';
    })
  }

  if (document.getElementById('online-marketing-dashboard-new-users')) {
    const numbers = [
      { name: 'Page A', uv: 255 },
      { name: 'Page B', uv: 452 },
      { name: 'Page C', uv: 154 },
      { name: 'Page D', uv: 85 },
      { name: 'Page E', uv: 545 },
      { name: 'Page F', uv: 438 },
      { name: 'Page G', uv: 523 },
      { name: 'Page H', uv: 226 },
      { name: 'Page I', uv: 112 },
      { name: 'Page J', uv: 101 },
    ];
    const labels = numbers.map(x => x.name);
    const values = numbers.map(x => x.uv);
    const data = {
      labels,
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: colors.violet,
          borderColor: colors.violet,
          borderWidth: 1,
          hoverBackgroundColor: colors.violet,
          hoverBorderColor: colors.violet,
          data: values,
        },
      ],
    };

    const options = {
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
      events: ['click'],
      scales: {
        xAxes: [
          {
            gridLines: false,
            ticks: {
              display: false
            }
          },
        ],
        yAxes: [
          {
            gridLines: false,
            ticks: {
              display: false,
              suggestedMin: 0,
              suggestedMax: 800,
            },

          },
        ],
      },
    };
    window.chartDashboardDefaultViews = new Chart(document.getElementById('online-marketing-dashboard-new-users'), {
      type: 'bar',
      data,
      options,
    });



    $(".dashboard__total-stat").eq(2).text(values[0]);

    $("#online-marketing-dashboard-new-users").on('click', (e) => {
      const activePoints = window.chartDashboardDefaultViews.getElementsAtEvent(e);
      $(".dashboard__total-stat").eq(2).text(values[activePoints[0]._index]);
      activePoints[0]._view.backgroundColor = '#4ce1b6';
      activePoints[0]._view.borderColor = '#4ce1b6';
    })
  }


  if (document.getElementById('online-marketing-dashboard-bonuce-rate')) {
    const numbers = [
      { name: 'Page A', uv: 25 },
      { name: 'Page B', uv: 30 },
      { name: 'Page C', uv: 55 },
      { name: 'Page D', uv: 42 },
      { name: 'Page E', uv: 85 },
      { name: 'Page F', uv: 45 },
      { name: 'Page G', uv: 21 },
      { name: 'Page H', uv: 56 },
      { name: 'Page I', uv: 68 },
      { name: 'Page J', uv: 32 },
    ];
    const labels = numbers.map(x => x.name);
    const values = numbers.map(x => x.uv);
    const data = {
      labels,
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: colors.yellow,
          borderColor: colors.yellow,
          borderWidth: 1,
          hoverBackgroundColor: colors.yellow,
          hoverBorderColor: colors.yellow,
          data: values,

        },
      ],
    };

    const options = {
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
      events: ['click'],
      scales: {
        xAxes: [
          {
            gridLines: false,
            ticks: {
              display: false,
            }
          },
        ],
        yAxes: [
          {
            gridLines: false,
            ticks: {
              display: false,
              suggestedMin: 0,
              suggestedMax: 100,
            },

          },
        ],
      },
    };
    window.chartDashboardDefaultViews = new Chart(document.getElementById('online-marketing-dashboard-bonuce-rate'), {
      type: 'bar',
      data,
      options,
    });



    $(".dashboard__total-stat").eq(3).text(values[0] + '%');

    $("#online-marketing-dashboard-bonuce-rate").on('click', (e) => {
      const activePoints = window.chartDashboardDefaultViews.getElementsAtEvent(e);
      $(".dashboard__total-stat").eq(3).text(values[activePoints[0]._index] + '%');
      activePoints[0]._view.backgroundColor = '#4ce1b6';
      activePoints[0]._view.borderColor = '#4ce1b6';
    })
  }

  if (document.getElementById('e-commerce-dashboard-total-profit')) {
    const numbers = [
      { name: 'Page A', uv: 2400 },
      { name: 'Page B', uv: 2210 },
      { name: 'Page C', uv: 2290 },
      { name: 'Page D', uv: 2000 },
      { name: 'Page E', uv: 2181 },
      { name: 'Page F', uv: 2500 },
      { name: 'Page G', uv: 2100 },
      { name: 'Page H', uv: 2290 },
      { name: 'Page I', uv: 2000 },
      { name: 'Page J', uv: 2181 },
    ];
    const labels = numbers.map(x => x.name);
    const values = numbers.map(x => x.uv);
    const data = {
      labels,
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: colors.blue,
          borderColor: colors.blue,
          borderWidth: 1,
          hoverBackgroundColor: colors.blue,
          hoverBorderColor: colors.blue,
          data: values,
        },
      ],
    };

    const options = {
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
      events: ['click'],
      scales: {
        xAxes: [
          {
            gridLines: false,
            ticks: {
              display: false
            }
          },
        ],
        yAxes: [
          {
            gridLines: false,
            ticks: {
              display: false,
              suggestedMin: 1000,
              suggestedMax: 3000
            },

          },
        ],
      },
    };
    window.chartDashboardDefaultViews = new Chart(document.getElementById('e-commerce-dashboard-total-profit'), {
      type: 'bar',
      data,
      options,
    });



    $(".dashboard__total-stat").eq(1).text('$' + values[0]);

    $("#e-commerce-dashboard-total-profit").on('click', (e) => {
      const activePoints = window.chartDashboardDefaultViews.getElementsAtEvent(e);
      $(".dashboard__total-stat").eq(1).text('$' + values[activePoints[0]._index]);
      activePoints[0]._view.backgroundColor = '#4ce1b6';
      activePoints[0]._view.borderColor = '#4ce1b6';
    })
  }

  if (document.getElementById('e-commerce-dashboard-subscriptions')) {
    const numbers = [
      { name: 'Page A', uv: 561 },
      { name: 'Page B', uv: 452 },
      { name: 'Page C', uv: 154 },
      { name: 'Page D', uv: 256 },
      { name: 'Page E', uv: 545 },
      { name: 'Page F', uv: 438 },
      { name: 'Page G', uv: 528 },
      { name: 'Page H', uv: 226 },
      { name: 'Page I', uv: 548 },
      { name: 'Page J', uv: 354 },
    ];
    const labels = numbers.map(x => x.name);
    const values = numbers.map(x => x.uv);
    const data = {
      labels,
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: colors.yellow,
          borderColor: colors.yellow,
          borderWidth: 1,
          hoverBackgroundColor: colors.yellow,
          hoverBorderColor: colors.yellow,
          data: values,

        },
      ],
    };

    const options = {
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
      events: ['click'],
      scales: {
        xAxes: [
          {
            gridLines: false,
            ticks: {
              display: false,
            }
          },
        ],
        yAxes: [
          {
            gridLines: false,
            ticks: {
              display: false,
              suggestedMin: 0,
              suggestedMax: 100,
            },

          },
        ],
      },
    };
    window.chartDashboardDefaultViews = new Chart(document.getElementById('e-commerce-dashboard-subscriptions'), {
      type: 'bar',
      data,
      options,
    });



    $(".dashboard__total-stat").eq(3).text(values[0]);

    $("#e-commerce-dashboard-subscriptions").on('click', (e) => {
      const activePoints = window.chartDashboardDefaultViews.getElementsAtEvent(e);
      $(".dashboard__total-stat").eq(3).text(values[activePoints[0]._index]);
      activePoints[0]._view.backgroundColor = '#4ce1b6';
      activePoints[0]._view.borderColor = '#4ce1b6';
    })
  }


  if (document.getElementById('online-marketing-dashboard-bonuse')) {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Blue',
          fill: false,
          lineTension: 0.3,
          backgroundColor: colors.blue,
          borderColor: colors.blue,
          borderWidth: 1,
          borderDash: [5, 3],
          pointBackgroundColor: colors.blue,
          pointHoverRadius: 3,
          pointHoverBorderWidth: 1,
          pointRadius: 2,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'Red',
          fill: false,
          lineTension: 0.3,
          backgroundColor: colors.red,
          borderColor: colors.red,
          borderWidth: 1,
          borderDash: [3, 3],
          pointBackgroundColor: colors.red,
          pointHoverRadius: 2,
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [5, 7, 54, 32, 87, 45, 25],
        },
        {
          label: 'Yellow',
          fill: false,
          lineTension: 0.3,
          backgroundColor: colors.yellow,
          borderColor: colors.yellow,
          borderWidth: 1,
          pointBackgroundColor: colors.yellow,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          pointHitRadius: 10,
          data: [25, 54, 2, 48, 78, 54, 35],
        },
        {
          label: 'Green',
          fill: false,
          lineTension: 0.3,
          backgroundColor: colors.green,
          borderColor: colors.green,
          borderWidth: 1,
          pointBackgroundColor: colors.green,
          pointHoverRadius: 6,
          pointHoverBorderWidth: 1,
          pointRadius: 5,
          pointHitRadius: 10,
          data: [52, 47, 45, 4, 58, 7, 45],
        },
      ],
    };

    const options = {
      legend: {
        position: 'bottom',
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              color: colors.scale,
              borderDash: [3, 3],
            },
            ticks: {
              fontColor: colors.scale,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              color: colors.scale,
              borderDash: [3, 3],
            },
            ticks: {
              fontColor: colors.scale,
            },
          },
        ],
      },
    };

    new window.Chart(document.getElementById('online-marketing-dashboard-bonuse'), {
      type: 'line',
      data,
      options,
    });
  }

  if (document.getElementById('online-marketing-dashboard-analytics')) {
    const data = {
      labels: ["Mon", "Tue", "Wed",   "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          backgroundColor: utils.transparentize(colors.blue, 0.8),
          borderColor: colors.blue,
          data: [590, 868, 1397, 1480, 1520, 1520, 1400],
          label: 'Site A',
          borderWidth: 1,
          pointRadius: 0,
        },
        {
          backgroundColor: utils.transparentize(colors.green, 0.8),
          borderColor: colors.green,
          data: [1400, 1506, 989, 1228, 1100, 1100, 1700],
          label: 'Site B',
          borderWidth: 1,
          pointRadius: 0,
        },
      ]
    };

    const options = {
      maintainAspectRatio: false,
      legend: {
        position: 'bottom',
      },
      tooltips: {
        mode: 'nearest'
      },
      scales: {
        xAxes: [
          {
            ticks: {
              fontSize: 11,
            }
          },
        ],
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 1800,
              stepSize: 450,
            },
          },
        ],
      },
    };

    new window.Chart.Line(document.getElementById('online-marketing-dashboard-analytics'), {
      data,
      options,
    });
  }
});
