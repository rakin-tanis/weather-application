import { createSearchPage } from './pages/searchPage.js';

import './styles/main.scss';
import 'jquery';
import 'popper.js';
import 'bootstrap';

const loadApp = async () => {
  document.title = 'Weather Application';
  createSearchPage();
};

window.addEventListener('load', loadApp);
