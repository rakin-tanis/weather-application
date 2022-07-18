import { FORECAST_CONTAINER_ID } from '../constants.js';
import { createForecastContainerView } from '../views/forecastContainerView.js';
import { getWeatherForecast } from '../services/apiService.js';
import { createForecastView } from '../views/forecastView.js';

export const createForecastWeatherContainer = async () => {
  const userInterface = document.getElementById('user-interface');
  userInterface.appendChild(createForecastContainerView());
};

export const populateForecastContainer = async ({
  city,
  latitude,
  longitude,
  forecasts,
  forecastChangedCallback,
}) => {
  const forecastContainer = document.getElementById(FORECAST_CONTAINER_ID);
  forecastContainer.innerHTML = ``;

  forecasts?.list?.forEach((forecast) => {
    const forecastCard = createForecastView(forecast);
    forecastContainer.appendChild(forecastCard);
    forecastCard.addEventListener('click', () => {
      forecastChangedCallback({
        city: city,
        latitude: longitude,
        longitude: latitude,
        forecast: forecast,
      });
    });
  });
};
