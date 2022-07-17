import { createBackgroundVideoElements } from '../views/backgroundVideoView.js';

export const createBackgroundVideoComponent = () => {
  const body = document.getElementsByTagName('body');
  body[0].appendChild(createBackgroundVideoElements());
};
