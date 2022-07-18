import { toHtmlElement } from '../utils/util';
import {
  RECENTLY_SEARCHED_ITEMS_ID,
  RECENTLY_SEARCHED_ID,
  RECENTLY_SEARCHED_ITEMS_TITLE_ID,
} from '../constants';

export const createCurrentWeatherDetailsElement = () => {
  const htmlStr = String.raw`
        <div class="container d-flex justify-content-center" style="margin-top: 4px; height:120px">

          <div class="container pe-0 tw-73">
            <div class="container d-flex justify-content-start pe-0" style="height:100%">
              <h1>WEATHER DETAILS</h1>
              <div class="container d-flex justify-content-end pe-0">
                <div class="d-flex  flex-column justify-content-end" style="width:fit-content;">
                  <div id="${RECENTLY_SEARCHED_ITEMS_TITLE_ID}" class="border-bottom border-secondary mx-3" style="display:none; font-size: 0.7rem; color: dimgray; font-weight:bold; height: fit-content;">
                    Recently searched ...
                  </div>
                  <div id="${RECENTLY_SEARCHED_ITEMS_ID}" class="container d-flex flex-row justify-content-end align-items-end" style="height: fit-content;">
                  
                  </div>
                </div>
              </div>
            <div>
          </div>
        </div>
    `;

  return toHtmlElement(htmlStr);
};

export const createRecentlySearchedItem = (item) => {
  const src =
    process.env.ICON_ENDPOINT + item.currentWeather.weather[0].icon + '@2x.png';
  const temp = Math.floor(item.currentWeather.main.temp);
  const htmlStr = String.raw`
        <div id="${RECENTLY_SEARCHED_ID}_${item.cityName}" class="recentlySearchedItem d-flex flex-column align-items-center justify-content-center p-1 me-1 my-1 border border-secondary tw-43">
          <div>
            <img src="${src}" alt="weather icon" style="object-fit: contain; max-width:24px"/>
            <span style="font-size:0.9rem">${temp}°C</span>
          </div>
          <span style="font-size:0.7rem">${item.cityName}</span>
        </div>
    `;

  return toHtmlElement(htmlStr);
};
