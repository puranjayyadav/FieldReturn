module.exports = {
  modules: [
    {
      from: "app/js/",
      inject: [ 'utils.js', 'theme.js', 'jquery.sticky.js' ],
    },
    {
      from: "node_modules/smooth-scrollbar/dist/",
      import: [ 'smooth-scrollbar.js' ],
    },
    {
      from: "node_modules/chosen-js/",
      import: [ 'chosen.jquery.min.js' ],
    },
    {
      from: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/',
      inject: [ 'popper.min.js' ],
    },
    {
      from: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/',
      inject: [ 'bootstrap.min.js' ],
    },
    {
      from: '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/',
      inject: [ 'slick.min.js' ],
    },
    {
      from: "app/blocks/common/slider/",
      inject: [ 'slider.js' ],
    },
    {
      from: "https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.5.1/",
      inject: [ 'dropzone.js' ],
    },
    {
      from: "app/js/jquery-ui-1.12.1.custom",
      inject: [ 'jquery-ui.min.js' ],
    },
    {
      from: "https://unpkg.com/@fullcalendar/core@4.2.0/",
      inject: [ 'main.min.js' ],
    },
    {
      from: "https://unpkg.com/@fullcalendar/daygrid@4.2.0/",
      inject: [ 'main.min.js' ],
    },
    {
      from: "https://unpkg.com/@fullcalendar/timegrid@4.2.0/",
      inject: [ 'main.min.js' ],
    },
    {
      from: "https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/",
      inject: [ 'pickr.es5.min.js' ],
    },
    {
      from: "https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/",
      inject: [ 'jquery.mask.min.js' ],
    },
    {
      from: "https://maps.googleapis.com/maps-api-v3/api/js/37/5/intl/ru_ALL/",
      inject: [ 'map.js' ],
    },
    {
      from: "https://cdn.jsdelivr.net/npm/google-maps-infobox@2.0.0/",
      inject: [ 'infobox-lib.js' ],
    },
    {
      from: "https://code.highcharts.com/maps/",
      inject: [ 'highmaps.js' ],
    },
    {
      from: "https://cdnjs.cloudflare.com/ajax/libs/echarts/4.2.1/",
      inject: [ 'echarts.min.js' ],
    },
    {
      from: "http://code.highcharts.com/maps/modules/",
      inject: [ 'map.js' ],
    },
    {
      from: "http://code.highcharts.com/mapdata/custom/",
      inject: [ 'world.js' ],
    },
    {
      from: "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/",
      inject: [ 'Chart.min.js' ],
    },
    {
      from: "https://cdnjs.cloudflare.com/ajax/libs/chartist/0.11.1/",
      inject: [ 'chartist.min.js' ],
    },
    {
      from: "https://cdnjs.cloudflare.com/ajax/libs/jquery-ui-timepicker-addon/1.6.3/",
      inject: [ 'jquery-ui-timepicker-addon.min.js' ],
    },
    {
      from: "https://cdn.datatables.net/1.10.19/js/",
      inject: [ 'jquery.dataTables.min.js' ],
    },
    {
      from: "https://cdnjs.cloudflare.com/ajax/libs/Dynatable/0.3.1/",
      inject: [ 'jquery.dynatable.js' ],
    },
    {
      from: "https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/",
      inject: [ 'jquery.magnific-popup.min.js' ],
    },
    {
      from: "app/blocks/common/tooltip/",
      inject: [ 'tooltip.scss' ],
    },
    {
      from: "app/blocks/common/slider/",
      inject: [ 'slider.scss' ],
    },{
      from: "app/blocks/common/material/",
      inject: [ 'material.scss' ],
    },
    {
      from: "app/styles/",
      import: [ 'typography.scss' ],
    },{
      from: "app/styles/",
      import: [ 'layout.scss' ],
    },{
      from: "app/styles/",
      import: [ 'scaffolding.scss' ],
    },{
      from: "app/styles/",
      import: [ 'customizer.scss' ],
    },
  ]
};
