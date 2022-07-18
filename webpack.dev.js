const { merge } = require('webpack-merge');
const { EnvironmentPlugin } = require('webpack');
const commonConfig = require('./webpack.config.js');

const devConfig = {
  mode: 'development',
  plugins: [
    new EnvironmentPlugin({
      GEO_ENDPOINT: 'https://get.geojs.io/v1/ip/geo.json',
      CITY_SEARCH_ENDPOINT: 'https://geocoding-api.open-meteo.com/v1/search',
      OPEN_WEATHER_API_KEY: '55721e332b9b2983fe3fd1a212ced447',
      CURRENT_WEATHER_ENDPOINT:
        'https://api.openweathermap.org/data/2.5/weather',
      CURRENT_AND_FORECAST_WEATHER_ENDPOINT:
        'http://api.openweathermap.org/data/2.5/forecast',
      ICON_ENDPOINT: 'http://openweathermap.org/img/wn/',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
