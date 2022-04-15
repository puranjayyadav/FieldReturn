// Export

module.exports = {
  use: {
    templates: '.pug',
    scripts: '.js',
    styles: '.scss'
  },
  levels: {
    common: 1,
    develop: 2
  },
  build: {
    imagemin: ['png', 'jpg'],
    sourcemaps: ['js', 'css'],
    autoprefixer: ['last 3 versions', 'ie 10', 'ie 11'],
    pugMap: 'app/blocks/map.pug',
    globalStyles: ['app/styles/variables.scss'],
    HTMLRoot: '/'
  },

  favicons: {
    android: false,
    appleIcon: false,
    appleStartup: false,
    coast: false,
    favicons: true,
    firefox: false,
    windows: false
  },

  addContent: {}
};
