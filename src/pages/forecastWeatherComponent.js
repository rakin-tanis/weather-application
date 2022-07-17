import { FORECAST_CONTAINER_ID } from '../constants.js';
import { createForecastContainerView } from '../views/forecastContainerView.js';
import { getWeatherForecast } from '../services/apiService.js';
import { createForecastView } from '../views/forecastView.js';

export const createForecastWeatherContainer = async (geoResult) => {
  const userInterface = document.getElementById('user-interface');
  userInterface.appendChild(createForecastContainerView());

  populateForecastContainer({
    lon: geoResult.longitude,
    lat: geoResult.latitude,
  });
};

export const populateForecastContainer = async ({ lon, lat }) => {
  const forecasts = await getWeatherForecast(lon, lat);

  const forecastContainer = document.getElementById(FORECAST_CONTAINER_ID);
  forecastContainer.innerHTML = ``;

  forecasts?.list?.forEach((forecast) => {
    forecastContainer.appendChild(createForecastView(forecast));
  });
};
