import { toHtmlElement } from '../utils/util.js';

export const createSearchElements = () => {
  const htmlStr = String.raw`
      <div class="container d-flex justify-content-center">    
        <form class="d-flex w-50">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
  `;

  return toHtmlElement(htmlStr);
};
