import { createCurrentWeatherContainer } from '../views/currentWeatherView';
import dateFormat from 'dateformat';
import {
  CURRENT_TEMPERATURE_ID,
  CURRENT_HUMIDITY_ID,
  CURRENT_WIND_ID,
  CURRENT_CITY_ID,
  CURRENT_DATE_ID,
  CURRENT_DESCRIPTION_ID,
  CURRENT_WEATHER_ICON_ID,
  CURRENT_FEELS_LIKE_ID,
  DAILY_FORECAST_LINK_ID,
} from '../constants.js';

import { addHours, capitalize } from '../utils/util.js';
import { changeBackgroundVideo } from './backgroundVideoComponent';

export const createCurrentWeatherComponent = () => {
  const userInterface = document.getElementById('user-interface');
  userInterface.appendChild(createCurrentWeatherContainer());
};

export const populateCurrentWeatherComponent = ({ cityName, weather }) => {
  const temp = Math.floor(weather.main.temp);
  const humidity = weather.main.humidity;
  const wind = weather.wind.speed;
  const feelsLike = Math.floor(weather.main.feels_like);
  const description = capitalize(weather.weather[0].description);
  const date = dateFormat(new Date(), 'dddd HH:MM');
  const icon = process.env.ICON_ENDPOINT + weather.weather[0].icon + '@2x.png';

  changeBackgroundVideo(weather.weather[0].icon);

  document.getElementById(CURRENT_WEATHER_ICON_ID).src = icon;
  document.getElementById(CURRENT_TEMPERATURE_ID).innerText = temp;
  document.getElementById(CURRENT_HUMIDITY_ID).innerText = humidity;
  document.getElementById(CURRENT_WIND_ID).innerText = wind;
  document.getElementById(CURRENT_FEELS_LIKE_ID).innerText = feelsLike;
  document.getElementById(CURRENT_DESCRIPTION_ID).innerText = description;
  document.getElementById(CURRENT_DATE_ID).innerText = date;
  document.getElementById(CURRENT_CITY_ID).innerText = cityName;
  document.getElementById(DAILY_FORECAST_LINK_ID).style = 'display: none';
};

export const populateCurrentWeatherIntervalComponent = ({
  cityName,
  weather,
  showDailyForecastCallback,
}) => {
  const temp = Math.floor(weather.main.temp);
  const humidity = weather.main.humidity;
  const wind = weather.wind.speed;
  const feelsLike = Math.floor(weather.main.feels_like);
  const description = capitalize(weather.weather[0].description);
  const date = new Date(weather.dt_txt);
  const dateStr =
    dateFormat(date, 'dddd HH:MM') +
    ' - ' +
    dateFormat(addHours(3, date), 'HH:MM');
  const icon = process.env.ICON_ENDPOINT + weather.weather[0].icon + '@2x.png';

  changeBackgroundVideo(weather.weather[0].icon);

  document.getElementById(CURRENT_WEATHER_ICON_ID).src = icon;
  document.getElementById(CURRENT_TEMPERATURE_ID).innerText = temp;
  document.getElementById(CURRENT_HUMIDITY_ID).innerText = humidity;
  document.getElementById(CURRENT_WIND_ID).innerText = wind;
  document.getElementById(CURRENT_FEELS_LIKE_ID).innerText = feelsLike;
  document.getElementById(CURRENT_DESCRIPTION_ID).innerText = description;
  document.getElementById(CURRENT_DATE_ID).innerText = dateStr;
  document.getElementById(CURRENT_CITY_ID).innerText = cityName;
  document.getElementById(DAILY_FORECAST_LINK_ID).style = 'display: block';
  document
    .getElementById(DAILY_FORECAST_LINK_ID)
    .addEventListener('click', showDailyForecastCallback);
};
