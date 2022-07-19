import {
  SEARCH_INPUT_ID,
  SEARCH_RESULT_ID,
  SEARCH_FORM_ID,
} from '../constants.js';
import {
  createAutoCompleteResultElement,
  createSearchElements,
} from '../views/searchComponentView.js';
import { getCity } from '../services/apiService.js';
import { capitalize } from '../utils/util.js';

export const createSearchComponent = (callback) => {
  const userInterface = document.getElementById('user-interface');
  userInterface.appendChild(createSearchElements());

  addCallback(callback);
};

const addCallback = (callback) => {
  let cityResult = { results: [] };
  const searchInput = document.getElementById(SEARCH_INPUT_ID);
  const searchForm = document.getElementById(SEARCH_FORM_ID);

  searchInput.addEventListener('keyup', async () => {
    if (searchInput.value.length < 3) {
      cleanAutocomplete();
      return;
    }
    cityResult = await getCity(searchInput.value);
    populateAutocomplete(searchInput.value, cityResult.results, callback);
  });
  searchForm.addEventListener('focusout', () => {
    setTimeout(() => cleanAutocomplete(), 1000);
  });
  searchInput.addEventListener('focusin', () => {
    if (searchInput.value.length >= 3) {
      populateAutocomplete(searchInput.value, cityResult.results, callback);
    }
  });
  searchForm.addEventListener('keypress', (e) => {
    var key = e.charCode || e.keyCode || 0;
    if (key == 13) {
      e.preventDefault();
    }
  });
};

const populateAutocomplete = (searchedKey, results, callback) => {
  if (!results) return;
  const searchResultContainer = document.getElementById(SEARCH_RESULT_ID);
  const searchInput = document.getElementById(SEARCH_INPUT_ID);
  searchResultContainer.innerHTML = ``;
  searchResultContainer.style.display = 'block';
  results.forEach((result) => {
    const content = expressSearchedPart(result.name, searchedKey);
    const region = result.admin1 ? `, ${result.admin1}` : '';
    const country = result.country ? `, ${result.country}` : '';
    const resultElement = createAutoCompleteResultElement(
      result.id,
      content,
      region,
      country
    );
    searchResultContainer.appendChild(resultElement);
    const item = document.getElementById(result.id);
    item.addEventListener('click', () => {
      callback({
        city: result.name,
        lon: result.longitude,
        lat: result.latitude,
      });
      cleanAutocomplete();
      searchInput.value = result.name;
    });
  });
};

const cleanAutocomplete = () => {
  const searchResultContainer = document.getElementById(SEARCH_RESULT_ID);
  searchResultContainer.innerHTML = ``;
  searchResultContainer.style.display = 'none';
};

const expressSearchedPart = (str, substr) => {
  const strRegExp = new RegExp(capitalize(substr), 'g');
  return str.replace(strRegExp, '<b>' + capitalize(substr) + '</b>');
};
