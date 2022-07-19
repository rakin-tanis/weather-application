import { toHtmlElement } from '../utils/util.js';
import {
  CURRENT_TEMPERATURE_ID,
  CURRENT_RAIN_ID,
  CURRENT_HUMIDITY_ID,
  CURRENT_WIND_ID,
  CURRENT_CITY_ID,
  CURRENT_DATE_ID,
  CURRENT_DESCRIPTION_ID,
  CURRENT_WEATHER_ICON_ID,
  CURRENT_FEELS_LIKE_ID,
  DAILY_FORECAST_LINK_ID,
} from '../constants.js';

export const createCurrentWeatherContainer = () => {
  const htmlStr = String.raw`
      <div class="container d-flex justify-content-center">

        <div class="container d-flex flex-row tw-73">
          <div class="d-flex flex-row">
            <img id="${CURRENT_WEATHER_ICON_ID}" src="#" alt="weather icon" class="m-2" style="object-fit: contain;"/>
            <span id="${CURRENT_TEMPERATURE_ID}" style="font-size:6rem">temp</span>
            <span style="font-size:2rem; margin: 1rem 1rem 1rem 0;">°C</span>
            <div class="d-flex flex-column justify-content-center" style="min-width: 140px;">
              <div class="container d-flex justify-content-start">
                <span>Humidity:&nbsp;</span>
                <span id="${CURRENT_HUMIDITY_ID}"></span>
                <span>%</span>
              </div>
              <div class="container d-flex justify-content-start">
                <span>Wind:&nbsp;</span>
                <span id="${CURRENT_WIND_ID}"></span>
                <span>km/s</span>
              </div>
              <div class="container d-flex justify-content-start">
                <span>Feels like:&nbsp;</span>
                <span id="${CURRENT_FEELS_LIKE_ID}"></span>
                <span>°C</span>
                </div>
            </div>
          </div>
          <div class="container-fluid d-flex flex-row justify-content-end">
            <div class="d-flex flex-column justify-content-center">
              <div id="${CURRENT_CITY_ID}" style="font-weight:bold; font-size:2rem;">city</div>
              <div id="${CURRENT_DATE_ID}">date</div>
              <div id="${CURRENT_DESCRIPTION_ID}">description</div>
              <div id="${DAILY_FORECAST_LINK_ID}"><a class="text-muted" style="font-size:0.8rem; text-transform:uppercase;" href="#">daily forecast</a></div>
            </div>
          <div>
        </div>
      </div>
  `;

  return toHtmlElement(htmlStr);
};
