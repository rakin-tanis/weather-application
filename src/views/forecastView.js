import { importAll } from '../utils/util.js';
import { toHtmlElement } from '../utils/util.js';
import dateFormat from 'dateformat';
import { env } from '../env.js';

const icons = importAll(
  require.context('../assets/icons/', false, /\.(png|jpe?g|svg)$/)
);

export const createForecastView = (forecast) => {
  const icon = icons.find((icon) =>
    icon.default.includes(forecast.weather[0].icon)
  );
  // http://openweathermap.org/img/wn/10n@2x.png
  // const icon = env.ICON_ENDPOINT + forecast.weather[0].icon + '@2x.png';
  const time = dateFormat(Date.parse(forecast.dt_txt), 'HH:MM');
  const day = dateFormat(Date.parse(forecast.dt_txt), 'dddd');
  const tempMax = Math.floor(forecast.main.temp_max);
  const tempMin = Math.floor(forecast.main.temp_min);

  const htmlStr = String.raw`
        <div class="card tw-93" style="width: 10rem; flex: 0 0 auto;">
            <div class="card-body">
                <p class="card-text text-center"><small class="text-muted">${time}</small></p>
                <h5 class="card-title text-center">${day}</h5>
                <img src="${icon.default}" class="card-img-top" alt="...">
                <p class="card-text text-center">${tempMax}° ${tempMin}°</p>
            </div>
        </div>
      `;

  return toHtmlElement(htmlStr);
};
