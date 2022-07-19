import { getSearchList } from '../services/storageService.js';
import {
  createCurrentWeatherDetailsElement,
  createRecentlySearchedItem,
} from '../views/currentWeatherDetailsView.js';
import {
  DETAILS_CLOUDINESS_ID,
  DETAILS_GUST_ID,
  DETAILS_MAX_TEMP_ID,
  DETAILS_MIN_TEMP_ID,
  DETAILS_PRESSURE_ID,
  DETAILS_SUNRISE_ID,
  DETAILS_SUNSET_ID,
  DETAILS_VISIBILITY_ID,
  DETAILS_WIND_DIRECTION_ID,
  RECENTLY_SEARCHED_ID,
  RECENTLY_SEARCHED_ITEMS_ID,
  RECENTLY_SEARCHED_ITEMS_TITLE_ID,
} from '../constants';
import dateFormat from 'dateformat';

export const createCurrentWeatherDetailsComponent = () => {
  const userInterface = document.getElementById('user-interface');
  userInterface.appendChild(createCurrentWeatherDetailsElement());
};

export const updateRecentlySearchPanel = (callback) => {
  const searchList = getSearchList();
  searchList.reverse();

  const recentlySearchedContainer = document.getElementById(
    RECENTLY_SEARCHED_ITEMS_ID
  );
  const recentlySearchedItemsTitle = document.getElementById(
    RECENTLY_SEARCHED_ITEMS_TITLE_ID
  );
  if (searchList.length > 0) {
    recentlySearchedItemsTitle.style.display = 'block';
  } else {
    recentlySearchedItemsTitle.style.display = 'none';
  }

  recentlySearchedContainer.innerHTML = ``;
  searchList.forEach((item) => {
    recentlySearchedContainer.appendChild(createRecentlySearchedItem(item));

    document
      .getElementById(RECENTLY_SEARCHED_ID + '_' + item.cityName)
      .addEventListener('click', () => {
        callback(item);
      });
  });
};

export const populateWeatherDetails = (weather) => {
  document.getElementById(DETAILS_MAX_TEMP_ID).innerText = Math.floor(
    weather.main.temp_max
  );
  document.getElementById(DETAILS_MIN_TEMP_ID).innerText = Math.floor(
    weather.main.temp_min
  );
  document.getElementById(DETAILS_PRESSURE_ID).innerText =
    weather.main.pressure;
  document.getElementById(DETAILS_CLOUDINESS_ID).innerText = weather.clouds.all;
  document.getElementById(DETAILS_WIND_DIRECTION_ID).innerText =
    weather.wind.deg;
  document.getElementById(DETAILS_VISIBILITY_ID).innerText = weather.visibility;
  document.getElementById(DETAILS_GUST_ID).innerText = weather.wind.gust || 0;
  document.getElementById(DETAILS_SUNRISE_ID).innerText = dateFormat(
    weather.sys.sunrise,
    'HH:MM:ss'
  );
  document.getElementById(DETAILS_SUNSET_ID).innerText = dateFormat(
    weather.sys.sunset,
    'HH:MM:ss'
  );
};

export const populateWeatherForecastDetails = (forecast, city) => {
  document.getElementById(DETAILS_MAX_TEMP_ID).innerText = Math.floor(
    forecast.main.temp_max
  );
  document.getElementById(DETAILS_MIN_TEMP_ID).innerText = Math.floor(
    forecast.main.temp_min
  );
  document.getElementById(DETAILS_PRESSURE_ID).innerText =
    forecast.main.pressure;
  document.getElementById(DETAILS_CLOUDINESS_ID).innerText =
    forecast.clouds.all;
  document.getElementById(DETAILS_WIND_DIRECTION_ID).innerText =
    forecast.wind.deg;
  document.getElementById(DETAILS_VISIBILITY_ID).innerText =
    forecast.visibility;
  document.getElementById(DETAILS_GUST_ID).innerText = forecast.wind.gust || 0;
  document.getElementById(DETAILS_SUNRISE_ID).innerText = dateFormat(
    city.sunrise,
    'HH:MM:ss'
  );
  document.getElementById(DETAILS_SUNSET_ID).innerText = dateFormat(
    city.sunset,
    'HH:MM:ss'
  );
};
