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
import {
  getLastSearchedItem,
  getSearchList,
  removeLastSearchedItem,
  resetSearchList,
  saveLastSearchedItem,
  saveSearchList,
} from '../services/storageService.js';
import { updateRecentlySearchPanel } from '../pages/currentWeatherDetailsComponent.js';
import {
  populateWeatherDetails,
  populateWeatherForecastDetails,
} from '../pages/currentWeatherDetailsComponent.js';

let cityName;
let longitude;
let latitude;

export const createSearchPage = async (geoResult) => {
  cityName = geoResult.city;
  longitude = geoResult.longitude;
  latitude = geoResult.latitude;

  resetSearchList();
  removeLastSearchedItem();

  createHeaderComponent();
  createSearchComponent(searchResultCallback);
  createBackgroundVideoComponent();
  createCurrentWeatherComponent();
  createCurrentWeatherDetailsComponent();
  createForecastWeatherComponent();
  await setCurrentWeather();
  await setForecastWeather();
  // updateRecentlySearchPanel(restoreOldSearch);
};

const searchResultCallback = async ({ city, lon, lat }) => {
  cityName = city;
  longitude = lon;
  latitude = lat;

  cacheSearchResult();
  const currentWeather = await setCurrentWeather();
  const forecast = await setForecastWeather();
  updateSearchCache(currentWeather, forecast);
  updateRecentlySearchPanel(restoreOldSearch);
};

const forecastChangedCallback = (forecast, city) => {
  populateCurrentWeatherIntervalComponent({
    cityName: cityName,
    weather: forecast,
    showDailyForecastCallback: () => {
      setCurrentWeather({
        cityName: cityName,
        latitude: longitude,
        longitude: latitude,
      });
    },
  });
  populateWeatherForecastDetails(forecast, city);
};

const setCurrentWeather = async () => {
  const currentWeather = await getCurrentWeather(longitude, latitude);
  populateCurrentWeatherComponent({
    cityName: cityName,
    weather: currentWeather,
  });
  populateWeatherDetails(currentWeather);
  return currentWeather;
};

const setForecastWeather = async () => {
  const forecasts = await getWeatherForecast(longitude, latitude);
  populateForecastContainer({
    forecasts: forecasts,
    forecastChangedCallback: forecastChangedCallback,
  });
  return forecasts;
};

const cacheSearchResult = () => {
  const SEARCH_CACHE_LIMIT = 5;

  const searchList = getSearchList();
  const lastSearchedItem = getLastSearchedItem();

  const newList = searchList
    .filter((item) => item.cityName != cityName)
    .filter((item) => item.cityName != lastSearchedItem?.cityName);

  if (lastSearchedItem) {
    newList.push(lastSearchedItem);
  }

  while (newList.length > SEARCH_CACHE_LIMIT) {
    newList.shift();
  }

  saveSearchList(newList);
  saveLastSearchedItem({
    cityName: cityName,
    longitude: longitude,
    latitude: latitude,
  });
};

const updateSearchCache = (currentWeather, forecast) => {
  const lastSearchedItem = getLastSearchedItem();
  lastSearchedItem['currentWeather'] = currentWeather;
  lastSearchedItem['forecast'] = forecast;
  saveLastSearchedItem(lastSearchedItem);
};

const restoreOldSearch = (search) => {
  cityName = search.cityName;
  longitude = search.longitude;
  latitude = search.latitude;

  cacheSearchResult();
  updateSearchCache(search.currentWeather, search.forecast);
  populateCurrentWeatherComponent({
    cityName: search.cityName,
    weather: search.currentWeather,
  });
  populateForecastContainer({
    forecasts: search.forecast,
    forecastChangedCallback: forecastChangedCallback,
  });
  updateRecentlySearchPanel(restoreOldSearch);
};
