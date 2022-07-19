import { toHtmlElement } from '../utils/util';
import {
  RECENTLY_SEARCHED_ITEMS_ID,
  RECENTLY_SEARCHED_ID,
  RECENTLY_SEARCHED_ITEMS_TITLE_ID,
  DETAILS_PRESSURE_ID,
  DETAILS_CLOUDINESS_ID,
  DETAILS_MIN_TEMP_ID,
  DETAILS_MAX_TEMP_ID,
  DETAILS_WIND_DIRECTION_ID,
  DETAILS_VISIBILITY_ID,
  DETAILS_GUST_ID,
  DETAILS_SUNRISE_ID,
  DETAILS_SUNSET_ID,
} from '../constants';

export const createCurrentWeatherDetailsElement = () => {
  const htmlStr = String.raw`
        <div class="container d-flex justify-content-center" style="margin-top: 4px; height:120px">

          <div class="container pe-0 tw-73">
            <div class="container d-flex justify-content-start pe-0" style="height:100%">
              <div class="container d-flex flex-row justify-content-between align-items-center">
                <div class="d-flex flex-column justify-content-center" style="min-width: 140px;">
                  <div class="container d-flex justify-content-start">
                    <span class="weatherProperty">Max/Min Temp:&nbsp;</span>
                    <span class="weatherValue" id="${DETAILS_MAX_TEMP_ID}"></span>
                    <span class="weatherValueMeasureUnit">°C/</span>
                    <span class="weatherValue" id="${DETAILS_MIN_TEMP_ID}"></span>
                    <span class="weatherValueMeasureUnit">°C</span>
                  </div>
                  <div class="container d-flex justify-content-start">
                    <span class="weatherProperty">Pressure:&nbsp;</span>
                    <span class="weatherValue" id="${DETAILS_PRESSURE_ID}"></span>
                    <span class="weatherValueMeasureUnit">hPa</span>
                  </div>
                  <div class="container d-flex justify-content-start">
                    <span class="weatherProperty">Cloudiness:&nbsp;</span>
                    <span class="weatherValue" id="${DETAILS_CLOUDINESS_ID}"></span>
                    <span class="weatherValueMeasureUnit">%</span>
                  </div>
                  <div class="container d-flex justify-content-start">
                    <span class="weatherProperty">Visibility:&nbsp;</span>
                    <span class="weatherValue" id="${DETAILS_VISIBILITY_ID}"></span>
                    <span class="weatherValueMeasureUnit">m</span>
                  </div>
                </div>
                <div class="d-flex flex-column justify-content-center" style="min-width: 140px;">
                  <div class="container d-flex justify-content-start">
                    <span class="weatherProperty">Wind Direction:&nbsp;</span>
                    <span class="weatherValue" id="${DETAILS_WIND_DIRECTION_ID}"></span>
                    <span class="weatherValueMeasureUnit">°</span>
                  </div>
                  <div class="container d-flex justify-content-start">
                    <span class="weatherProperty">Wind Gust:&nbsp;</span>
                    <span class="weatherValue" id="${DETAILS_GUST_ID}"></span>
                    <span class="weatherValueMeasureUnit">meter/sec</span>
                  </div>
                  <div class="container d-flex justify-content-start">
                    <span class="weatherProperty">Sunrise:&nbsp;</span>
                    <span class="weatherValue" id="${DETAILS_SUNRISE_ID}"></span>
                  </div>
                  <div class="container d-flex justify-content-start">
                    <span class="weatherProperty">Sunset:&nbsp;</span>
                    <span class="weatherValue" id="${DETAILS_SUNSET_ID}"></span>
                  </div>
                </div>
              </div>

              <div class="container d-flex justify-content-end pe-0">
                <div class="d-flex  flex-column justify-content-end" style="width:fit-content;">
                  <div id="${RECENTLY_SEARCHED_ITEMS_TITLE_ID}" class="border-bottom border-secondary mx-3" style="display:none; font-size: 0.7rem; color: dimgray; font-weight:bold; height: fit-content;">
                    Recently searched ...
                  </div>
                  <div id="${RECENTLY_SEARCHED_ITEMS_ID}" class="container d-flex flex-row justify-content-end align-items-end" style="height: fit-content;">
                  
                  </div>
                </div>
              </div>
            <div>
          </div>
        </div>
    `;

  return toHtmlElement(htmlStr);
};

export const createRecentlySearchedItem = (item) => {
  const src =
    process.env.ICON_ENDPOINT + item.currentWeather.weather[0].icon + '@2x.png';
  const temp = Math.floor(item.currentWeather.main.temp);
  const htmlStr = String.raw`
        <div id="${RECENTLY_SEARCHED_ID}_${item.cityName}" class="recentlySearchedItem d-flex flex-column align-items-center justify-content-center p-1 me-1 my-1 border border-secondary tw-43">
          <div>
            <img src="${src}" alt="weather icon" style="object-fit: contain; max-width:24px"/>
            <span style="font-size:0.9rem">${temp}°C</span>
          </div>
          <span style="font-size:0.7rem">${item.cityName}</span>
        </div>
    `;

  return toHtmlElement(htmlStr);
};

const response = {
  coord: { lon: 7.1384, lat: 52.9497 },
  weather: [
    { id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' },
  ],
  base: 'stations',
  main: {
    temp: 31.52,
    feels_like: 32.29,
    temp_min: 29.96,
    temp_max: 32.72,
    pressure: 1017,
    humidity: 44,
  },
  visibility: 10000,
  wind: { speed: 1.79, deg: 135, gust: 4.02 },
  clouds: { all: 19 },
  dt: 1658223668,
  sys: {
    type: 2,
    id: 2002913,
    country: 'DE',
    sunrise: 1658201363,
    sunset: 1658259941,
  },
  timezone: 7200,
  id: 3208427,
  name: 'Hasselbrock',
  cod: 200,
};

const forecast = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1658232000,
      main: {
        temp: 24.86,
        feels_like: 25.62,
        temp_min: 24.86,
        temp_max: 24.88,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1010,
        humidity: 85,
        temp_kf: -0.02,
      },
      weather: [
        { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' },
      ],
      clouds: { all: 70 },
      wind: { speed: 12.17, deg: 221, gust: 16.74 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-07-19 12:00:00',
    },
    {
      dt: 1658242800,
      main: {
        temp: 24.82,
        feels_like: 25.58,
        temp_min: 24.8,
        temp_max: 24.82,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1010,
        humidity: 85,
        temp_kf: 0.02,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: { all: 43 },
      wind: { speed: 12.68, deg: 226, gust: 17.99 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-07-19 15:00:00',
    },
    {
      dt: 1658253600,
      main: {
        temp: 24.79,
        feels_like: 25.54,
        temp_min: 24.79,
        temp_max: 24.79,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' },
      ],
      clouds: { all: 55 },
      wind: { speed: 12.9, deg: 218, gust: 18.73 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-07-19 18:00:00',
    },
    {
      dt: 1658264400,
      main: {
        temp: 24.75,
        feels_like: 25.5,
        temp_min: 24.75,
        temp_max: 24.75,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' },
      ],
      clouds: { all: 82 },
      wind: { speed: 12.19, deg: 210, gust: 17.59 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-07-19 21:00:00',
    },
    {
      dt: 1658275200,
      main: {
        temp: 24.65,
        feels_like: 25.42,
        temp_min: 24.65,
        temp_max: 24.65,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1010,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' },
      ],
      clouds: { all: 82 },
      wind: { speed: 12.91, deg: 206, gust: 18.22 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-07-20 00:00:00',
    },
    {
      dt: 1658286000,
      main: {
        temp: 24.75,
        feels_like: 25.53,
        temp_min: 24.75,
        temp_max: 24.75,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: { all: 46 },
      wind: { speed: 12.41, deg: 213, gust: 18.09 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-07-20 03:00:00',
    },
    {
      dt: 1658296800,
      main: {
        temp: 24.74,
        feels_like: 25.54,
        temp_min: 24.74,
        temp_max: 24.74,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1013,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' },
      ],
      clouds: { all: 54 },
      wind: { speed: 11.89, deg: 224, gust: 17.15 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-07-20 06:00:00',
    },
    {
      dt: 1658307600,
      main: {
        temp: 24.83,
        feels_like: 25.61,
        temp_min: 24.83,
        temp_max: 24.83,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1012,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: { all: 35 },
      wind: { speed: 12.06, deg: 231, gust: 16.54 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-07-20 09:00:00',
    },
    {
      dt: 1658318400,
      main: {
        temp: 24.83,
        feels_like: 25.61,
        temp_min: 24.83,
        temp_max: 24.83,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1010,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' },
      ],
      clouds: { all: 54 },
      wind: { speed: 11.26, deg: 233, gust: 16.08 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-07-20 12:00:00',
    },
    {
      dt: 1658329200,
      main: {
        temp: 24.75,
        feels_like: 25.55,
        temp_min: 24.75,
        temp_max: 24.75,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: { all: 91 },
      wind: { speed: 11.25, deg: 227, gust: 16.25 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-07-20 15:00:00',
    },
    {
      dt: 1658340000,
      main: {
        temp: 24.65,
        feels_like: 25.44,
        temp_min: 24.65,
        temp_max: 24.65,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1012,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: { all: 88 },
      wind: { speed: 11.6, deg: 207, gust: 16.93 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-07-20 18:00:00',
    },
    {
      dt: 1658350800,
      main: {
        temp: 24.75,
        feels_like: 25.5,
        temp_min: 24.75,
        temp_max: 24.75,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 11.41, deg: 207, gust: 16.94 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-07-20 21:00:00',
    },
    {
      dt: 1658361600,
      main: {
        temp: 24.69,
        feels_like: 25.43,
        temp_min: 24.69,
        temp_max: 24.69,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1010,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: { all: 99 },
      wind: { speed: 12.13, deg: 217, gust: 17.67 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-07-21 00:00:00',
    },
    {
      dt: 1658372400,
      main: {
        temp: 24.74,
        feels_like: 25.52,
        temp_min: 24.74,
        temp_max: 24.74,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: { all: 94 },
      wind: { speed: 10.96, deg: 219, gust: 16.26 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-07-21 03:00:00',
    },
    {
      dt: 1658383200,
      main: {
        temp: 24.79,
        feels_like: 25.6,
        temp_min: 24.79,
        temp_max: 24.79,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1013,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: { all: 97 },
      wind: { speed: 10.54, deg: 228, gust: 14.74 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-07-21 06:00:00',
    },
    {
      dt: 1658394000,
      main: {
        temp: 24.83,
        feels_like: 25.64,
        temp_min: 24.83,
        temp_max: 24.83,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: { all: 98 },
      wind: { speed: 10.14, deg: 231, gust: 14.47 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-07-21 09:00:00',
    },
    {
      dt: 1658404800,
      main: {
        temp: 24.83,
        feels_like: 25.61,
        temp_min: 24.83,
        temp_max: 24.83,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1010,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: { all: 94 },
      wind: { speed: 10.3, deg: 231, gust: 14.52 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-07-21 12:00:00',
    },
    {
      dt: 1658415600,
      main: {
        temp: 24.78,
        feels_like: 25.56,
        temp_min: 24.78,
        temp_max: 24.78,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' },
      ],
      clouds: { all: 84 },
      wind: { speed: 9.78, deg: 224, gust: 14.29 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-07-21 15:00:00',
    },
    {
      dt: 1658426400,
      main: {
        temp: 24.74,
        feels_like: 25.52,
        temp_min: 24.74,
        temp_max: 24.74,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1012,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' },
      ],
      clouds: { all: 79 },
      wind: { speed: 10.69, deg: 212, gust: 15.48 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-07-21 18:00:00',
    },
    {
      dt: 1658437200,
      main: {
        temp: 24.62,
        feels_like: 25.41,
        temp_min: 24.62,
        temp_max: 24.62,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1012,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' },
      ],
      clouds: { all: 62 },
      wind: { speed: 10.81, deg: 220, gust: 15.73 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-07-21 21:00:00',
    },
    {
      dt: 1658448000,
      main: {
        temp: 24.65,
        feels_like: 25.44,
        temp_min: 24.65,
        temp_max: 24.65,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' },
      ],
      clouds: { all: 76 },
      wind: { speed: 10.81, deg: 216, gust: 15.79 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-07-22 00:00:00',
    },
    {
      dt: 1658458800,
      main: {
        temp: 24.69,
        feels_like: 25.49,
        temp_min: 24.69,
        temp_max: 24.69,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1012,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 10.45, deg: 211, gust: 15.31 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-07-22 03:00:00',
    },
    {
      dt: 1658469600,
      main: {
        temp: 24.76,
        feels_like: 25.56,
        temp_min: 24.76,
        temp_max: 24.76,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1014,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 9.02, deg: 220, gust: 13.73 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-07-22 06:00:00',
    },
    {
      dt: 1658480400,
      main: {
        temp: 24.73,
        feels_like: 25.56,
        temp_min: 24.73,
        temp_max: 24.73,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1012,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 10.43, deg: 223, gust: 15.05 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-07-22 09:00:00',
    },
    {
      dt: 1658491200,
      main: {
        temp: 24.75,
        feels_like: 25.58,
        temp_min: 24.75,
        temp_max: 24.75,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1010,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 10.44, deg: 224, gust: 15.32 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-07-22 12:00:00',
    },
    {
      dt: 1658502000,
      main: {
        temp: 24.78,
        feels_like: 25.61,
        temp_min: 24.78,
        temp_max: 24.78,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 10, deg: 220, gust: 14.78 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-07-22 15:00:00',
    },
    {
      dt: 1658512800,
      main: {
        temp: 24.8,
        feels_like: 25.63,
        temp_min: 24.8,
        temp_max: 24.8,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1012,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: { all: 85 },
      wind: { speed: 10.39, deg: 206, gust: 15.4 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-07-22 18:00:00',
    },
    {
      dt: 1658523600,
      main: {
        temp: 24.65,
        feels_like: 25.49,
        temp_min: 24.65,
        temp_max: 24.65,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: { all: 34 },
      wind: { speed: 10.83, deg: 211, gust: 15.97 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-07-22 21:00:00',
    },
    {
      dt: 1658534400,
      main: {
        temp: 24.62,
        feels_like: 25.44,
        temp_min: 24.62,
        temp_max: 24.62,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1010,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' },
      ],
      clouds: { all: 66 },
      wind: { speed: 10.88, deg: 215, gust: 15.99 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-07-23 00:00:00',
    },
    {
      dt: 1658545200,
      main: {
        temp: 24.68,
        feels_like: 25.5,
        temp_min: 24.68,
        temp_max: 24.68,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1012,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: { all: 89 },
      wind: { speed: 11.03, deg: 212, gust: 16.22 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-07-23 03:00:00',
    },
    {
      dt: 1658556000,
      main: {
        temp: 24.76,
        feels_like: 25.59,
        temp_min: 24.76,
        temp_max: 24.76,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1013,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' },
      ],
      clouds: { all: 57 },
      wind: { speed: 10.93, deg: 218, gust: 16.25 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-07-23 06:00:00',
    },
    {
      dt: 1658566800,
      main: {
        temp: 24.88,
        feels_like: 25.7,
        temp_min: 24.88,
        temp_max: 24.88,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      clouds: { all: 3 },
      wind: { speed: 11.37, deg: 218, gust: 16.84 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-07-23 09:00:00',
    },
    {
      dt: 1658577600,
      main: {
        temp: 24.87,
        feels_like: 25.66,
        temp_min: 24.87,
        temp_max: 24.87,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1010,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      clouds: { all: 3 },
      wind: { speed: 10.89, deg: 222, gust: 15.97 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-07-23 12:00:00',
    },
    {
      dt: 1658588400,
      main: {
        temp: 24.84,
        feels_like: 25.65,
        temp_min: 24.84,
        temp_max: 24.84,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1010,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' },
      ],
      clouds: { all: 6 },
      wind: { speed: 10.97, deg: 219, gust: 15.78 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-07-23 15:00:00',
    },
    {
      dt: 1658599200,
      main: {
        temp: 24.83,
        feels_like: 25.64,
        temp_min: 24.83,
        temp_max: 24.83,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        { id: 801, main: 'Clouds', description: 'few clouds', icon: '02n' },
      ],
      clouds: { all: 16 },
      wind: { speed: 11.17, deg: 205, gust: 16.58 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-07-23 18:00:00',
    },
    {
      dt: 1658610000,
      main: {
        temp: 24.74,
        feels_like: 25.54,
        temp_min: 24.74,
        temp_max: 24.74,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1010,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: { all: 40 },
      wind: { speed: 11.97, deg: 206, gust: 17.3 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-07-23 21:00:00',
    },
    {
      dt: 1658620800,
      main: {
        temp: 24.67,
        feels_like: 25.44,
        temp_min: 24.67,
        temp_max: 24.67,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1009,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        { id: 801, main: 'Clouds', description: 'few clouds', icon: '02n' },
      ],
      clouds: { all: 22 },
      wind: { speed: 11.93, deg: 208, gust: 17.69 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-07-24 00:00:00',
    },
    {
      dt: 1658631600,
      main: {
        temp: 24.68,
        feels_like: 25.48,
        temp_min: 24.68,
        temp_max: 24.68,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      clouds: { all: 4 },
      wind: { speed: 11.69, deg: 215, gust: 17.11 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-07-24 03:00:00',
    },
    {
      dt: 1658642400,
      main: {
        temp: 24.83,
        feels_like: 25.61,
        temp_min: 24.83,
        temp_max: 24.83,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1013,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      clouds: { all: 4 },
      wind: { speed: 10.59, deg: 221, gust: 15.11 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-07-24 06:00:00',
    },
    {
      dt: 1658653200,
      main: {
        temp: 24.87,
        feels_like: 25.66,
        temp_min: 24.87,
        temp_max: 24.87,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1011,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      clouds: { all: 2 },
      wind: { speed: 11.05, deg: 223, gust: 16.06 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-07-24 09:00:00',
    },
  ],
  city: {
    id: 0,
    name: '',
    coord: { lat: 7.1384, lon: 52.9497 },
    country: '',
    population: 0,
    timezone: 14400,
    sunrise: 1658197184,
    sunset: 1658242129,
  },
};
