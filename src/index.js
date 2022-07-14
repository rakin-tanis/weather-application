import { createSearchPage } from "./pages/searchPage.js";
import "./styles/main.scss";

const loadApp = () => {
  document.title = "Weather Application";
  createSearchPage();
};

window.addEventListener("load", loadApp);
