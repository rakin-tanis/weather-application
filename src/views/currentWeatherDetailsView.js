import { toHtmlElement } from '../utils/util';

export const createCurrentWeatherDetailsElement = () => {
  const htmlStr = String.raw`
        <div class="container d-flex justify-content-center" style="margin-top: 4px; height:120px">

          <div class="container d-flex flex-row tw-73">
            <div class="d-flex flex-row">
              <h1>WEATHER DETAILS</h1>
            <div>
          </div>
        </div>
    `;

  return toHtmlElement(htmlStr);
};