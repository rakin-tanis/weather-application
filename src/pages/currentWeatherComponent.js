import { createCurrentWeatherContainer } from '../views/currentWeatherView';
import { getCurrentWeather } from '../services/apiService';
import dateFormat from 'dateformat';
import {
  CURRENT_TEMPERATURE_ID,
  CURRENT_RAIN_ID,
  CURRENT_HUMIDITY_ID,
  CURRENT_WIND_ID,
  CURRENT_CITY_ID,
  CURRENT_DATE_ID,
  CURRENT_DESCRIPTION_ID,
  CURRENT_WEATHER_ICON_ID,
} from '../constants.js';
import { env } from '../env.js';

export const createCurrentWeatherComponent = async (geoResult) => {
  const userInterface = document.getElementById('user-interface');
  userInterface.appendChild(createCurrentWeatherContainer());

  populateCurrentWeatherComponent({
    city: geoResult.city,
    lon: geoResult.longitude,
    lat: geoResult.latitude,
  });
};

export const populateCurrentWeatherComponent = async ({ city, lon, lat }) => {
  const currentWeather = await getCurrentWeather(lon, lat);
  console.log(currentWeather);

  const temp = Math.floor(currentWeather.main.temp);
  const humidity = currentWeather.main.humidity;
  const wind = currentWeather.wind.speed;
  const description = currentWeather.weather[0].description;
  const date = dateFormat(new Date(), 'dddd HH:MM');
  const rain = 'rain';
  const icon = env.ICON_ENDPOINT + currentWeather.weather[0].icon + '@2x.png';

  document.getElementById(CURRENT_WEATHER_ICON_ID).src = icon;
  document.getElementById(CURRENT_TEMPERATURE_ID).innerText = temp;
  document.getElementById(
    CURRENT_HUMIDITY_ID
  ).innerText = `Humidity:${humidity}%`;
  document.getElementById(CURRENT_WIND_ID).innerText = `Wind:${wind}km/s`;
  document.getElementById(CURRENT_DESCRIPTION_ID).innerText = description;
  document.getElementById(CURRENT_DATE_ID).innerText = date;
  document.getElementById(CURRENT_CITY_ID).innerText = city;
  document.getElementById(CURRENT_RAIN_ID).innerText = `Rain:${rain}`;

  // setWeatherImage(3, 50);
};

const setWeatherImage = (index, radius = 74) => {
  const x = (index % 4) + 1;
  const y = parseInt(index / 4) + 1;

  const canvas = document.getElementById('canvas');
  canvas.width = radius * 2;
  canvas.heigh = radius * 2;
  const ctx = canvas.getContext('2d');
  const img = new Image();

  const H_GAP = 31;
  const V_GAP = 36;
  const SOURCE_WIDTH = 202;
  const SOURCE_HEIGHT = 202;

  img.onload = function () {
    ctx.beginPath();
    ctx.arc(radius, radius, radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    ctx.drawImage(
      img,
      (H_GAP + SOURCE_WIDTH) * (x - 1),
      (V_GAP + SOURCE_HEIGHT) * (y - 1),
      SOURCE_WIDTH,
      SOURCE_HEIGHT,
      0,
      0,
      radius * 2 + 2,
      radius * 2 + 2
    );
  };
  img.src = '../assets/weather_condition_icons.png';
};
