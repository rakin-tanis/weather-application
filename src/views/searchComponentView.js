import { toHtmlElement } from '../utils/util.js';
import { SEARCH_INPUT_ID, SEARCH_RESULT_ID, SEARCH_FORM_ID } from '../constants.js';

export const createSearchElements = () => {
  const htmlStr = String.raw`
      <div class="container d-flex justify-content-center my-5">    
        <form id="${SEARCH_FORM_ID}" class="w-50" autocomplete="off">
          <input id="${SEARCH_INPUT_ID}" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <div id="${SEARCH_RESULT_ID}" class="w-50 mt-1 bg-white border border-light rounded-2" 
          style="display:none; position: absolute; box-shadow: 0px 4px 16px grey; z-index:999;"></div>
        </form>
      </div>
  `;

  return toHtmlElement(htmlStr);
};

export const createAutoCompleteResultElement = (
  id,
  content,
  region,
  country
) => {
  const htmlStr = String.raw`
      <div id=${id} class="container d-flex justify-content-start py-2 border-bottom border-light searchResultItem">    
        ${content} <span class="text-muted">${region} ${country}</span>
      </div>
  `;

  return toHtmlElement(htmlStr);
};
