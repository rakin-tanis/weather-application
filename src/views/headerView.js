import { toHtmlElement } from '../utils/util';

export const createHeaderElement = () => {
  const htmlStr = String.raw`
        <div class="container" style="height:120px">
          
        </div>
    `;

  return toHtmlElement(htmlStr);
};
