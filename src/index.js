import { createSearchPage } from './pages/searchPage.js';
import { getGeo } from './services/apiService.js';
import './styles/main.scss';
import 'jquery';
import 'popper.js';
import 'bootstrap';

const loadApp = async () => {
  document.title = 'Weather Application';
  const geoResult = await getGeo();
  createSearchPage(geoResult);
};

window.addEventListener('load', loadApp);
