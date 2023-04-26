const xhr = new XMLHttpRequest();
let count = 0;

$(function() {
  barChart();
  barChartWithImg();
  lineChart();
  donutChart();
  pieChart();
  gaugeChart();
  radialLineChart();
  dumbbellPlotChart();
  mapBubble();
});

function barChart() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  // REQUEST TO SERVER API
  xhr.open('GET', '/api/v1/metallurgical');
  xhr.send();
  xhr.responseType = 'json';
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const serv = xhr.response.data.data;

      // Create a map to store the count of occurrences for each customer
      const customerMap = new Map();
      for (let i = 0; i < serv.length; i++) {
        const customer = serv[i].customer;
        if (customerMap.has(customer)) {
          // Increment count if customer already exists in the map
          customerMap.set(customer, customerMap.get(customer) + 1);
        } else {
          // Initialize count to 1 if customer does not exist in the map
          customerMap.set(customer, 1);
        }
      }

      // Create an array of objects to store the data for the chart
      const chartData = [];
      for (const [customer, count] of customerMap.entries()) {
        chartData.push({
          customer: customer,
          visits: count
        });
      }

      // Create chart instance
      const chart = am4core.create('barChart', am4charts.XYChart);
      chart.scrollbarX = new am4core.Scrollbar();

      // Create axes
      const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = 'customer';
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;
      categoryAxis.renderer.labels.template.horizontalCenter = 'right';
      categoryAxis.renderer.labels.template.verticalCenter = 'middle';
      categoryAxis.renderer.labels.template.rotation = 270;
      categoryAxis.tooltip.disabled = true;
      categoryAxis.renderer.minHeight = 110;
      categoryAxis.renderer.labels.template.fill = am4core.color('#9aa0ac');

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.minWidth = 50;
      valueAxis.renderer.labels.template.fill = am4core.color('#9aa0ac');

      // Create series
      const series = chart.series.push(new am4charts.ColumnSeries());
      series.sequencedInterpolation = true;
      series.dataFields.valueY = 'visits';
      series.dataFields.categoryX = 'customer';
      series.tooltipText = '[{categoryX}: bold]{valueY}[/]';
      series.columns.template.strokeWidth = 0;

      series.tooltip.pointerOrientation = 'vertical';

      series.columns.template.column.cornerRadiusTopLeft = 10;
      series.columns.template.column.cornerRadiusTopRight = 10;
      series.columns.template.column.fillOpacity = 0.8;

      // On hover, make corner radiuses bigger
      const hoverState = series.columns.template.column.states.create('hover');
      hoverState.properties.cornerRadiusTopLeft = 0;
      hoverState.properties.cornerRadiusTopRight = 0;
      hoverState.properties.fillOpacity = 1;

      series.columns.template.adapter.add('fill', (fill, target) => {
        return chart.colors.getIndex(target.dataItem.index);
      });

      // Set data for the chart
      chart.data = chartData;

      // Cursor
      chart.cursor = new am4charts.XYCursor();
    } else {
      console.log(`Error: ${xhr.status}`);
    }
  };
}
function barChartWithImg() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  // Create chart instance
  const chart = am4core.create('barImg', am4charts.XYChart);

  // Add data
  // Replace the static data with a dynamic data source, such as an API or JSON response from the server
  // You can use XMLHttpRequest (XHR) or any other method to make an API request and fetch the data
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/api/v1/metallurgical'); // Replace with the actual API URL
  xhr.onload = function() {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const serv = data.data.data;

      // Extract the FIP names and count the occurrences
      const fipCounts = {};
      for (let i = 0; i < serv.length; i++) {
        const fip = serv[i].FIP;
        if (fipCounts[fip]) {
          fipCounts[fip]++;
        } else {
          fipCounts[fip] = 1;
        }
      }

      // Convert the fipCounts object into an array of objects for chart data
      const chartData = Object.keys(fipCounts).map(fip => {
        return {
          name: fip,
          fipCount: fipCounts[fip],
          color: chart.colors.next()
        };
      });
      console.log(chartData);
      chart.data = chartData;

      // Create axes
      const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = 'name';
      categoryAxis.renderer.grid.template.disabled = true;
      categoryAxis.renderer.minGridDistance = 30;
      categoryAxis.renderer.inside = true;
      categoryAxis.renderer.labels.template.fill = am4core.color('#fff');
      categoryAxis.renderer.labels.template.fontSize = 14;

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.grid.template.strokeDasharray = '4,4';
      valueAxis.renderer.labels.template.disabled = true;
      valueAxis.min = 0;

      // Do not crop bullets
      chart.maskBullets = false;

      // Remove padding
      chart.paddingBottom = 0;

      // Create series for FIP count
      const seriesFIPCount = chart.series.push(new am4charts.ColumnSeries());
      seriesFIPCount.dataFields.valueY = 'fipCount';
      seriesFIPCount.dataFields.categoryX = 'name';
      seriesFIPCount.columns.template.propertyFields.fill = 'color';
      seriesFIPCount.columns.template.propertyFields.stroke = 'color';
      seriesFIPCount.columns.template.column.cornerRadiusTopLeft = 15;
      seriesFIPCount.columns.template.column.cornerRadiusTopRight = 15;
      seriesFIPCount.columns.template.tooltipText =
        '{categoryX}: [bold]{valueY}[/b] FIP Count';
    }
  };
  xhr.send();
}

function lineChart() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  const chart = am4core.create('lineChart', am4charts.XYChart);

  // Create a new XHR object
  const xhr = new XMLHttpRequest();

  // Open the XHR request
  xhr.open('GET', '/api/v1/metallurgical', true);

  // Define the onload callback function
  // Define the onload callback function
  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const exactData = data.data.data;

      // Create an empty object to store the frequency of objects by date
      const frequencyData = {};

      // Loop through each date in exactData
      for (const key in exactData) {
        if (exactData.hasOwnProperty(key)) {
          const { date } = exactData[key];
          const newDate = new Date(date);
          // Get the day and date using Date object methods
          const day = newDate.toLocaleString('en-US', { weekday: 'short' });
          const dateNum = newDate.getDate();
          const month = newDate.getMonth();
          const hours = newDate.getHours();
          const minutes = newDate.getMinutes();
          const years = newDate.getFullYear();
          const shortenedDateString = `${dateNum}-${month}-${years}`;

          // Check if the date is already present in frequencyData, if not, add it with a count of 1, otherwise increment the count by 1
          if (frequencyData.hasOwnProperty(shortenedDateString)) {
            frequencyData[shortenedDateString] += 1;
          } else {
            frequencyData[shortenedDateString] = 1;
          }
        }
      }

      // Create an array of objects with the required properties for the chart data
      const chartData = [];
      for (const key in frequencyData) {
        if (frequencyData.hasOwnProperty(key)) {
          const [dateNum, month, years] = key.split('-');
          const date = new Date(`${years}-${month}-${dateNum}`);
          const value = frequencyData[key];
          chartData.push({ date, value });
        }
      }

      // Set the chart data
      chart.data = chartData;
    }
  };

  // Send the XHR request
  xhr.send();

  // Add data

  // Create axes
  const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.renderer.labels.template.fill = am4core.color('#9aa0ac');
  const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.labels.template.fill = am4core.color('#9aa0ac');

  // Create series
  const series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.valueY = 'value';
  series.dataFields.dateX = 'date';
  series.tooltipText = '{value}';
  series.strokeWidth = 2;
  series.minBulletDistance = 15;

  // Drop-shaped tooltips
  series.tooltip.background.cornerRadius = 20;
  series.tooltip.background.strokeOpacity = 0;
  series.tooltip.pointerOrientation = 'vertical';
  series.tooltip.label.minWidth = 40;
  series.tooltip.label.minHeight = 40;
  series.tooltip.label.textAlign = 'middle';
  series.tooltip.label.textValign = 'middle';

  // Make bullets grow on hover
  const bullet = series.bullets.push(new am4charts.CircleBullet());
  bullet.circle.strokeWidth = 2;
  bullet.circle.radius = 4;
  bullet.circle.fill = am4core.color('#fff');

  const bullethover = bullet.states.create('hover');
  bullethover.properties.scale = 1.3;

  // Make a panning cursor
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.behavior = 'panXY';
  chart.cursor.xAxis = dateAxis;
  chart.cursor.snapToSeries = series;

  // Create vertical scrollbar and place it before the value axis
  chart.scrollbarY = new am4core.Scrollbar();
  chart.scrollbarY.parent = chart.leftAxesContainer;
  chart.scrollbarY.toBack();

  // Create a horizontal scrollbar with previe and place it underneath the date axis
  chart.scrollbarX = new am4charts.XYChartScrollbar();
  chart.scrollbarX.series.push(series);
  chart.scrollbarX.parent = chart.bottomAxesContainer;

  chart.events.on('ready', function() {
    dateAxis.zoom({ start: 0.9, end: 1 });
  });
}

function donutChart() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  // Create chart instance
  const chart = am4core.create('donutChart', am4charts.PieChart);

  // Create an XHR object
  const xhr = new XMLHttpRequest();

  // Configure and send the XHR request
  xhr.open('GET', '/api/v1/metallurgical'); // Replace with your API endpoint
  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const exactData = data.data.data;

      // Calculate country counts
      const countryCounts = {};
      exactData.forEach(obj => {
        if (countryCounts[obj.BDS]) {
          countryCounts[obj.BDS]++;
        } else {
          countryCounts[obj.BDS] = 1;
        }
      });

      // Convert country counts to an array of objects
      const chartData = Object.entries(countryCounts).map(
        ([country, count]) => ({
          country,
          count
        })
      );

      // Set inner radius
      chart.innerRadius = am4core.percent(50);

      // Add and configure Series
      const pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = 'count';
      pieSeries.dataFields.category = 'country';
      pieSeries.slices.template.stroke = am4core.color('#fff');
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;
      pieSeries.labels.template.fill = am4core.color('#9aa0ac');

      // Set chart data
      chart.data = chartData;
      pieSeries.data = chartData;

      // This creates initial animation
      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;

      // Display country counts
      //console.log(countryCounts);
    }
  };
  xhr.send();
}

function pieChart() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  // Create chart instance
  const chart = am4core.create('pieChart', am4charts.PieChart);

  // Add data
  chart.data = [
    {
      country: 'Lithuania',
      litres: 501.9
    },
    {
      country: 'Czech Republic',
      litres: 301.9
    },
    {
      country: 'Ireland',
      litres: 201.1
    },
    {
      country: 'Germany',
      litres: 165.8
    },
    {
      country: 'Australia',
      litres: 139.9
    },
    {
      country: 'Austria',
      litres: 128.3
    },
    {
      country: 'UK',
      litres: 99
    },
    {
      country: 'Belgium',
      litres: 60
    },
    {
      country: 'The Netherlands',
      litres: 50
    }
  ];

  // Add and configure Series
  const pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = 'litres';
  pieSeries.dataFields.category = 'country';
  pieSeries.slices.template.stroke = am4core.color('#fff');
  pieSeries.slices.template.strokeWidth = 2;
  pieSeries.slices.template.strokeOpacity = 1;
  pieSeries.labels.template.fill = am4core.color('#9aa0ac');

  // This creates initial animation
  pieSeries.hiddenState.properties.opacity = 1;
  pieSeries.hiddenState.properties.endAngle = -90;
  pieSeries.hiddenState.properties.startAngle = -90;
}

function gaugeChart() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  // Create chart instance
  const chart = am4core.create('gaugeChart', am4charts.RadarChart);

  // Add data
  chart.data = [
    {
      category: 'Research',
      value: 80,
      full: 100
    },
    {
      category: 'Marketing',
      value: 35,
      full: 100
    },
    {
      category: 'Distribution',
      value: 92,
      full: 100
    },
    {
      category: 'Human Resources',
      value: 68,
      full: 100
    }
  ];

  // Make chart not full circle
  chart.startAngle = -90;
  chart.endAngle = 180;
  chart.innerRadius = am4core.percent(20);

  // Set number format
  chart.numberFormatter.numberFormat = "#.#'%'";

  // Create axes
  const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = 'category';
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.grid.template.strokeOpacity = 0;
  categoryAxis.renderer.labels.template.horizontalCenter = 'right';
  categoryAxis.renderer.labels.template.fontWeight = 500;
  categoryAxis.renderer.labels.template.adapter.add('fill', function(
    fill,
    target
  ) {
    return target.dataItem.index >= 0
      ? chart.colors.getIndex(target.dataItem.index)
      : fill;
  });
  categoryAxis.renderer.minGridDistance = 10;

  const valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.grid.template.strokeOpacity = 0;
  valueAxis.min = 0;
  valueAxis.max = 100;
  valueAxis.strictMinMax = true;
  valueAxis.renderer.labels.template.fill = am4core.color('#9aa0ac');

  // Create series
  const series1 = chart.series.push(new am4charts.RadarColumnSeries());
  series1.dataFields.valueX = 'full';
  series1.dataFields.categoryY = 'category';
  series1.clustered = false;
  series1.columns.template.fill = new am4core.InterfaceColorSet().getFor(
    'alternativeBackground'
  );
  series1.columns.template.fillOpacity = 0.08;
  series1.columns.template.cornerRadiusTopLeft = 20;
  series1.columns.template.strokeWidth = 0;
  series1.columns.template.radarColumn.cornerRadius = 20;

  const series2 = chart.series.push(new am4charts.RadarColumnSeries());
  series2.dataFields.valueX = 'value';
  series2.dataFields.categoryY = 'category';
  series2.clustered = false;
  series2.columns.template.strokeWidth = 0;
  series2.columns.template.tooltipText = '{category}: [bold]{value}[/]';
  series2.columns.template.radarColumn.cornerRadius = 20;

  series2.columns.template.adapter.add('fill', function(fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
  });

  // Add cursor
  chart.cursor = new am4charts.RadarCursor();
}
function radialLineChart() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  /* Create chart instance */
  const chart = am4core.create('radialLineChart', am4charts.RadarChart);

  const data = [];
  let value1 = 500;
  let value2 = 600;

  for (let i = 0; i < 12; i++) {
    const date = new Date();
    date.setMonth(i, 1);
    value1 -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 50);
    value2 -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 50);
    data.push({ date: date, value1: value1, value2: value2 });
  }

  chart.data = data;

  /* Create axes */
  const categoryAxis = chart.xAxes.push(new am4charts.DateAxis());
  categoryAxis.renderer.labels.template.fill = am4core.color('#9aa0ac');

  const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.extraMin = 0.2;
  valueAxis.extraMax = 0.2;
  valueAxis.tooltip.disabled = true;
  valueAxis.renderer.labels.template.fill = am4core.color('#9aa0ac');

  /* Create and configure series */
  const series1 = chart.series.push(new am4charts.RadarSeries());
  series1.dataFields.valueY = 'value1';
  series1.dataFields.dateX = 'date';
  series1.strokeWidth = 3;
  series1.tooltipText = '{valueY}';
  series1.name = 'Series 2';
  series1.bullets.create(am4charts.CircleBullet);

  const series2 = chart.series.push(new am4charts.RadarSeries());
  series2.dataFields.valueY = 'value2';
  series2.dataFields.dateX = 'date';
  series2.strokeWidth = 3;
  series2.tooltipText = '{valueY}';
  series2.name = 'Series 2';
  series2.bullets.create(am4charts.CircleBullet);

  chart.scrollbarX = new am4core.Scrollbar();
  chart.scrollbarY = new am4core.Scrollbar();

  chart.cursor = new am4charts.RadarCursor();

  chart.legend = new am4charts.Legend();
}
function dumbbellPlotChart() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  const chart = am4core.create('dumbbellPlotChart', am4charts.XYChart);

  const data = [];
  let open = 100;
  let close = 120;

  const names = [
    'Raina',
    'Demarcus',
    'Carlo',
    'Jacinda',
    'Richie',
    'Antony',
    'Amada',
    'Idalia',
    'Janella',
    'Marla',
    'Curtis',
    'Shellie'
  ];

  for (let i = 0; i < names.length; i++) {
    open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
    close = open + Math.round(Math.random() * 10) + 3;
    data.push({ category: names[i], open: open, close: close });
  }

  chart.data = data;

  const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.ticks.template.disabled = true;
  categoryAxis.renderer.axisFills.template.disabled = true;
  categoryAxis.dataFields.category = 'category';
  categoryAxis.renderer.minGridDistance = 15;
  categoryAxis.renderer.grid.template.location = 0.5;
  categoryAxis.renderer.grid.template.strokeDasharray = '1,3';
  categoryAxis.renderer.labels.template.rotation = -90;
  categoryAxis.renderer.labels.template.horizontalCenter = 'left';
  categoryAxis.renderer.labels.template.dx = 17;
  categoryAxis.renderer.inside = true;
  categoryAxis.renderer.labels.template.fill = am4core.color('#9aa0ac');

  const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.tooltip.disabled = true;
  valueAxis.renderer.ticks.template.disabled = true;
  valueAxis.renderer.axisFills.template.disabled = true;
  valueAxis.renderer.labels.template.fill = am4core.color('#9aa0ac');

  const series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.categoryX = 'category';
  series.dataFields.openValueY = 'open';
  series.dataFields.valueY = 'close';
  series.tooltipText = 'open: {openValueY.value} close: {valueY.value}';
  series.sequencedInterpolation = true;
  series.fillOpacity = 0;
  series.strokeOpacity = 1;
  series.columns.template.width = 0.01;
  series.tooltip.pointerOrientation = 'horizontal';

  const openBullet = series.bullets.create(am4charts.CircleBullet);
  openBullet.locationY = 1;

  const closeBullet = series.bullets.create(am4charts.CircleBullet);

  closeBullet.fill = chart.colors.getIndex(4);
  closeBullet.stroke = closeBullet.fill;

  chart.cursor = new am4charts.XYCursor();

  chart.scrollbarX = new am4core.Scrollbar();
  chart.scrollbarY = new am4core.Scrollbar();
}

function mapBubble() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  // Create map instance
  const chart = am4core.create('mapBubble', am4maps.MapChart);

  const title = chart.titles.create();
  title.text =
    '[bold font-size: 20]Population of Countries in 2011[/]\nsource: Gapminder';
  title.textAlign = 'middle';

  const latlong = {
    IN: { latitude: 20, longitude: 77 },
    JP: { latitude: 36, longitude: 138 },
    AU: { latitude: -27, longitude: 133 },
    US: { latitude: 38, longitude: -97 },
    RU: { latitude: 60, longitude: 100 },
    BR: { latitude: -10, longitude: -55 },
    DZ: { latitude: 28, longitude: 3 }
  };

  const mapData = [
    {
      id: 'IN',
      name: 'India',
      value: 1241491960,
      color: chart.colors.getIndex(0)
    },
    {
      id: 'JP',
      name: 'Japan',
      value: 126497241,
      color: chart.colors.getIndex(0)
    },
    { id: 'AU', name: 'Australia', value: 22605732, color: '#8aabb0' },
    {
      id: 'US',
      name: 'United States',
      value: 313085380,
      color: chart.colors.getIndex(4)
    },
    {
      id: 'RU',
      name: 'Russia',
      value: 142835555,
      color: chart.colors.getIndex(1)
    },
    {
      id: 'BR',
      name: 'Brazil',
      value: 196655014,
      color: chart.colors.getIndex(3)
    },
    {
      id: 'DZ',
      name: 'Algeria',
      value: 35980193,
      color: chart.colors.getIndex(2)
    }
  ];

  // Add lat/long information to data
  for (let i = 0; i < mapData.length; i++) {
    mapData[i].latitude = latlong[mapData[i].id].latitude;
    mapData[i].longitude = latlong[mapData[i].id].longitude;
  }

  // Set map definition
  chart.geodata = am4geodata_worldLow;

  // Set projection
  chart.projection = new am4maps.projections.Miller();

  // Create map polygon series
  const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
  polygonSeries.exclude = ['AQ'];
  polygonSeries.useGeodata = true;

  const imageSeries = chart.series.push(new am4maps.MapImageSeries());
  imageSeries.data = mapData;
  imageSeries.dataFields.value = 'value';

  const imageTemplate = imageSeries.mapImages.template;
  imageTemplate.propertyFields.latitude = 'latitude';
  imageTemplate.propertyFields.longitude = 'longitude';
  imageTemplate.nonScaling = true;

  const circle = imageTemplate.createChild(am4core.Circle);
  circle.fillOpacity = 0.7;
  circle.propertyFields.fill = 'color';
  circle.tooltipText = '{name}: [bold]{value}[/]';

  imageSeries.heatRules.push({
    target: circle,
    property: 'radius',
    min: 4,
    max: 30,
    dataField: 'value'
  });
}
