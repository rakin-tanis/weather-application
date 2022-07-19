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
import {
  getCurrentWeather,
  getWeatherForecast,
  getGeo,
} from '../services/apiService.js';
import { createCurrentWeatherDetailsComponent } from './currentWeatherDetailsComponent.js';
import {
  getLastSearchedItem,
  getPermission,
  getSearchList,
  removeLastSearchedItem,
  resetSearchList,
  saveLastSearchedItem,
  saveSearchList,
  savePermission,
} from '../services/storageService.js';
import { updateRecentlySearchPanel } from '../pages/currentWeatherDetailsComponent.js';
import {
  populateWeatherDetails,
  populateWeatherForecastDetails,
} from '../pages/currentWeatherDetailsComponent.js';
import { askForPermission } from '../services/permissionService.js';
import { DEFAULT_CITY } from '../constants.js';

let { cityName, longitude, latitude } = DEFAULT_CITY;

export const createSearchPage = async () => {
  resetSearchList();
  removeLastSearchedItem();

  createHeaderComponent();
  createSearchComponent(searchResultCallback);
  createBackgroundVideoComponent();
  createCurrentWeatherComponent();
  createCurrentWeatherDetailsComponent();
  createForecastWeatherComponent();

  let off = 0;
  checkForPermission(off).then();

  await setCurrentWeather({ signal: { off } });
  await setForecastWeather({ signal: { off } });
  // updateRecentlySearchPanel(restoreOldSearch);
};

const searchResultCallback = async ({ city, lon, lat }) => {
  cityName = city;
  longitude = lon;
  latitude = lat;

  cacheSearchResult();
  const currentWeather = await setCurrentWeather({});
  const forecast = await setForecastWeather({});
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

const setCurrentWeather = async ({ signal }) => {
  const currentWeather = await getCurrentWeather(longitude, latitude);
  if (signal?.off) {
    return;
  }
  populateCurrentWeatherComponent({
    cityName: cityName,
    weather: currentWeather,
  });
  populateWeatherDetails(currentWeather);
  return currentWeather;
};

const setForecastWeather = async ({ signal }) => {
  const forecasts = await getWeatherForecast(longitude, latitude);
  if (signal?.off) {
    return;
  }
  populateForecastContainer({
    forecasts: forecasts,
    forecastChangedCallback: forecastChangedCallback,
  });
  return forecasts;
};

const cacheSearchResult = () => {
  if (!getPermission()) {
    return;
  }
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
  if (!getPermission()) {
    return;
  }
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

const checkForPermission = async (off) => {
  let isAccepted = getPermission();

  if (!isAccepted) {
    isAccepted = await requestForPermission();
  }

  if (!isAccepted) {
    return;
  }
  off = true;

  await getLocation();

  await setCurrentWeather({});
  await setForecastWeather({});
};

const requestForPermission = async () => {
  const isAccepted = await askForPermission();
  if (!isAccepted) {
    return;
  }
  savePermission(isAccepted);
  return isAccepted;
};

const getLocation = async () => {
  const geoResult = await getGeo();

  cityName = geoResult.city;
  longitude = geoResult.longitude;
  latitude = geoResult.latitude;
};
