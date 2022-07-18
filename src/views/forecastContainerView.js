import { toHtmlElement } from '../utils/util';
import { FORECAST_CONTAINER_ID } from '../constants.js';

export const createForecastContainerView = () => {
  const htmlStr = String.raw`
        <div class="container d-flex justify-content-center">
            <div id=${FORECAST_CONTAINER_ID} class="card-group p-1" style="overflow-x: auto; flex-wrap: nowrap !important;">
                
            </div>
        </div>
    `;

  return toHtmlElement(htmlStr);
};
