import { createCurrentWeatherDetailsElement } from '../views/currentWeatherDetailsView.js';

export const createCurrentWeatherDetailsComponent = () => {
  const userInterface = document.getElementById('user-interface');
  userInterface.appendChild(createCurrentWeatherDetailsElement());
};
