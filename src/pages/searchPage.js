import {
  createCurrentWeatherComponent,
  populateCurrentWeatherComponent,
  populateCurrentWeatherIntervalComponent,
} from '../pages/currentWeatherComponent.js';
import { createForecastWeatherComponent } from '../pages/forecastWeatherComponent.js';
import { populateForecastContainer } from '../pages/forecastWeatherComponent.js';
import { createSearchComponent } from './searchComponent.js';
import { createBackgroundVideoComponent } from './backgroundVideoComponent.js';
import { createHeaderComponent } from './headerComponent.js';
import { getCurrentWeather } from '../services/apiService';
import { getWeatherForecast } from '../services/apiService.js';
import { createCurrentWeatherDetailsComponent } from './currentWeatherDetailsComponent.js';

let cityName;
let longitude;
let latitude;

export const createSearchPage = (geoResult) => {
  cityName = geoResult.city;
  longitude = geoResult.longitude;
  latitude = geoResult.latitude;

  createHeaderComponent();
  createSearchComponent(searchResultCallback);
  createBackgroundVideoComponent();
  createCurrentWeatherComponent();
  createCurrentWeatherDetailsComponent();
  createForecastWeatherComponent();
  Promise.all([setCurrentWeather(), setForecastWeather()]).then();
};

const searchResultCallback = async ({ city, lon, lat }) => {
  cityName = city;
  longitude = lon;
  latitude = lat;

  setCurrentWeather().then();
  setForecastWeather().then();
};

const forecastChangedCallback = (forecast) => {
  console.log('forecastChangedCallback', cityName);
  populateCurrentWeatherIntervalComponent({
    cityName: cityName,
    weather: forecast,
    showDailyForecastCallback: () => {
      console.log('showDailyForecastCallback', cityName);
      setCurrentWeather({
        cityName: cityName,
        latitude: longitude,
        longitude: latitude,
      });
    },
  });
};

const setCurrentWeather = async () => {
  const currentWeather = await getCurrentWeather(longitude, latitude);
  populateCurrentWeatherComponent({
    cityName: cityName,
    weather: currentWeather,
  });
};

const setForecastWeather = async () => {
  const forecasts = await getWeatherForecast(longitude, latitude);
  populateForecastContainer({
    forecasts: forecasts,
    forecastChangedCallback: forecastChangedCallback,
  });
};
