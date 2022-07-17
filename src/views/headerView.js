import { toHtmlElement } from '../utils/util';

export const createHeaderElement = () => {
  const htmlStr = String.raw`
        <div class="container" style="height:120px">
          <h1>WEATHER APPLICATION</h1>
        </div>
    `;

  return toHtmlElement(htmlStr);
};
