import {
  createCurrentWeatherComponent,
  populateCurrentWeatherComponent,
  populateCurrentWeatherIntervalComponent,
} from '../pages/currentWeatherComponent.js';
import { createForecastWeatherContainer } from '../pages/forecastWeatherComponent.js';
import { populateForecastContainer } from '../pages/forecastWeatherComponent.js';
import { createSearchComponent } from './searchComponent.js';
import { createBackgroundVideoComponent } from './backgroundVideoComponent.js';
import { createHeaderComponent } from './headerPage.js';
import { getCurrentWeather } from '../services/apiService';
import { getWeatherForecast } from '../services/apiService.js';

export const createSearchPage = async (geoResult) => {
  createHeaderComponent();
  createSearchComponent(populateWeather);
  createBackgroundVideoComponent();
  createCurrentWeatherComponent();
  setCurrentWeather({
    cityName: geoResult.city,
    latitude: geoResult.longitude,
    longitude: geoResult.latitude,
  }).then();
  createForecastWeatherContainer();
  setForecastWeather({
    cityName: geoResult.city,
    latitude: geoResult.longitude,
    longitude: geoResult.latitude,
  }).then();
};

const populateWeather = async ({ cityName, longitude, latitude }) => {
  setCurrentWeather({
    cityName: cityName,
    latitude: longitude,
    longitude: latitude,
  }).then();
  setForecastWeather({
    cityName: cityName,
    latitude: longitude,
    longitude: latitude,
  }).then();
};

const forecastChangedCallback = ({ city, latitude, longitude, forecast }) => {
  populateCurrentWeatherIntervalComponent({
    city: city,
    weather: forecast,
    showDailyForecastCallback: () => setCurrentWeather({
      cityName: city,
      latitude: longitude,
      longitude: latitude,
    }),
  });
};

const setCurrentWeather = async ({ cityName, longitude, latitude }) => {
  const currentWeather = await getCurrentWeather(longitude, latitude);
  populateCurrentWeatherComponent({
    city: cityName,
    weather: currentWeather,
  });
};

const setForecastWeather = async ({ cityName, longitude, latitude }) => {
  const forecasts = await getWeatherForecast(longitude, latitude);
  populateForecastContainer({
    city: cityName,
    latitude: longitude,
    longitude: latitude,
    forecasts: forecasts,
    forecastChangedCallback: forecastChangedCallback,
  });
};
