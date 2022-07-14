import { createSearchElements } from "../views/searchView.js";

export const createSearchPage = () => {
  const userInterface = document.getElementById("user-interface");
  userInterface.innerHTML = ``;
  userInterface.appendChild(createSearchElements());
};
