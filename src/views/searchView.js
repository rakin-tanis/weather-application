import { toHtmlElement } from "../utils/util.js";

export const createSearchElements = () => {
  const htmlStr = String.raw`
    <div class="input-group">
        <div class="form-outline">
            <input type="search" id="form1" class="form-control" />
            <label class="form-label" for="form1">
            Search
            </label>
        </div>
        <button type="button" class="btn btn-primary">
            <i class="fas fa-search"></i>
        </button>
    </div>
  `;

  return toHtmlElement(htmlStr);
};
