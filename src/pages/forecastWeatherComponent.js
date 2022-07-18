import { FORECAST_CONTAINER_ID } from '../constants.js';
import { createForecastContainerView } from '../views/forecastContainerView.js';
import { createForecastView } from '../views/forecastView.js';

export const createForecastWeatherComponent = async () => {
  const userInterface = document.getElementById('user-interface');
  userInterface.appendChild(createForecastContainerView());
};

export const populateForecastContainer = async ({
  forecasts,
  forecastChangedCallback,
}) => {
  const forecastContainer = document.getElementById(FORECAST_CONTAINER_ID);
  forecastContainer.innerHTML = ``;

  forecasts?.list?.forEach((forecast) => {
    const forecastCard = createForecastView(forecast);
    forecastContainer.appendChild(forecastCard);
    forecastCard.addEventListener('click', () => {
      forecastChangedCallback(forecast);
    });
  });
};
