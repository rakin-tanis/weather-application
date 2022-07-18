import { createHeaderElement } from '../views/headerView.js'

export const createHeaderComponent = () => {
  const userInterface = document.getElementById('user-interface');
  userInterface.innerHTML = ``;
  userInterface.appendChild(createHeaderElement());
};
