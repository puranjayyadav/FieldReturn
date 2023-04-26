const path = require('path');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const xss = require('xss-clean');
const cors = require('cors');
const csp = require('express-csp');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const pumpRouter = require('./routes/fieldRoutes');
const viewRouter = require('./routes/viewRoutes');
const userRouter = require('./routes/userRoutes');
const conclusionRouter = require('./routes/conclusionRoutes');
const metalRouter = require('./routes/metallurgicalRoutes');

const app = express();

// SETTING THE VIEW ENGINE TO PUG
app.set('view engine', 'pug');

// SERVING STATIC FILES

app.set('views', path.join(__dirname, 'views/otika'));
app.use(express.static(path.join(__dirname, 'public')));

// 1) MIDDLEWARES
app.use(helmet());
csp.extend(app, {
  policy: {
    directives: {
      'default-src': ['self'],
      'style-src': ['self', 'unsafe-inline', 'https:'],
      'font-src': ['self', 'https://fonts.gstatic.com'],
      'script-src': [
        'self',
        'unsafe-inline',
        'unsafe-eval',
        'data',
        'blob',
        'https://js.stripe.com',
        'https://*.mapbox.com',
        'https://*.cloudflare.com/',
        'https://bundle.js:8828',
        'ws://localhost:56558/'
      ],
      'worker-src': [
        'self',
        'unsafe-inline',
        'data:',
        'blob:',
        'https://*.stripe.com',
        'https://*.mapbox.com',
        'https://*.cloudflare.com/',
        'https://bundle.js:*',
        'ws://localhost:*/'
      ],
      'frame-src': [
        'self',
        'unsafe-inline',
        'data:',
        'blob:',
        'https://*.stripe.com',
        'https://*.mapbox.com',
        'https://*.cloudflare.com/',
        'https://bundle.js:*',
        'ws://localhost:*/'
      ],
      'img-src': [
        'self',
        'unsafe-inline',
        'data:',
        'blob:',
        'https://*.stripe.com',
        'https://*.mapbox.com',
        'https://*.cloudflare.com/',
        'https://bundle.js:*',
        'ws://localhost:*/'
      ],
      'connect-src': [
        'self',
        'unsafe-inline',
        'data:',
        'blob:',

        'https://*.stripe.com',
        'https://*.mapbox.com',
        'https://*.cloudflare.com/',
        'https://bundle.js:*',
        'ws://localhost:*/'
      ]
    }
  }
});
// Further HELMET configuration for Security Policy (CSP)

// install express-csp and add the below in app.js

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//RATE LIMITING BECAUSE OF SECURITY RESASONS

//APPLYING THE LIMITER TO THE /API ROUTE OF THE APP SO THAT EVERY ROUTE GOES THROUGHT THIS SECURITY MEASURE

//BODY PARSER , READING DATA FROM BODY INTO REQ.BODY
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());
//Data sanitization so that user cannot input malicious code
app.use(mongoSanitize());

// Used to convert HTML to HTML symbol to prevent XSS Attacks
app.use(xss());

//HTTP paramter pollution
app.use(hpp());
app.use(compression());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  next();
});

// 3) ROUTES
app.use('/', viewRouter);
//app.use('/api/v1/pump', pumpRouter);
app.use('/api/v1/metallurgical', metalRouter);
app.use('/api/v1/metallurgical/:slug', metalRouter);
app.use('/api/v1/users', userRouter);
//app.use('/api/v1/conclusion', conclusionRouter);

app.all('*', (req, res, next) => {
  // res.status(404).json({
  //   status:'fail',
  //   message:`Cant find ${req.originalUrl} on this server`
  // });

  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
