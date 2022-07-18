import { getSearchList } from '../services/storageService.js';
import {
  createCurrentWeatherDetailsElement,
  createRecentlySearchedItem,
} from '../views/currentWeatherDetailsView.js';
import {
  RECENTLY_SEARCHED_ID,
  RECENTLY_SEARCHED_ITEMS_ID,
  RECENTLY_SEARCHED_ITEMS_TITLE_ID,
} from '../constants';

export const createCurrentWeatherDetailsComponent = () => {
  const userInterface = document.getElementById('user-interface');
  userInterface.appendChild(createCurrentWeatherDetailsElement());
};

export const updateRecentlySearchPanel = (callback) => {
  const searchList = getSearchList();
  searchList.reverse();

  const recentlySearchedContainer = document.getElementById(
    RECENTLY_SEARCHED_ITEMS_ID
  );
  const recentlySearchedItemsTitle = document.getElementById(
    RECENTLY_SEARCHED_ITEMS_TITLE_ID
  );
  if (searchList.length > 0) {
    recentlySearchedItemsTitle.style.display = 'block';
  } else {
    recentlySearchedItemsTitle.style.display = 'none';
  }

  recentlySearchedContainer.innerHTML = ``;
  searchList.forEach((item) => {
    recentlySearchedContainer.appendChild(createRecentlySearchedItem(item));

    document
      .getElementById(RECENTLY_SEARCHED_ID + '_' + item.cityName)
      .addEventListener('click', () => {
        callback(item);
      });
  });
};
