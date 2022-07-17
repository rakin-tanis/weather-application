import {
  createCurrentWeatherComponent,
  populateCurrentWeatherComponent,
} from '../pages/currentWeatherComponent.js';
import { createForecastWeatherContainer } from '../pages/forecastWeatherComponent.js';
import { populateForecastContainer } from '../pages/forecastWeatherComponent.js';
import { image } from '../assets/weather_condition_icons.png';
import { createSearchComponent } from './searchComponent.js';
import { createBackgroundVideoComponent } from './backgroundVideoComponent.js';
import { createHeaderComponent } from './headerPage.js';

export const createSearchPage = async (geoResult) => {
  createHeaderComponent();
  createSearchComponent(searchCallback);
  createBackgroundVideoComponent();
  await createCurrentWeatherComponent(geoResult);
  await createForecastWeatherContainer(geoResult);
};

const searchCallback = async (value) => {
  console.log(value);
  populateCurrentWeatherComponent({
    city: value.name,
    lon: value.latitude,
    lat: value.longitude,
  });
  populateForecastContainer({ lon: value.latitude, lat: value.longitude });
};
