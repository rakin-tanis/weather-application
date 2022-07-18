import { createBackgroundVideoElements } from '../views/backgroundVideoView.js';
import { BACKGROUND_VIDEO_ID } from '../constants.js';

export const createBackgroundVideoComponent = () => {
  const body = document.getElementsByTagName('body');
  body[0].appendChild(createBackgroundVideoElements());
};

/* const rainyForest = '74b3Zb18UDM';
  
  const rainyCity = '9QneqUhCVtU';
  const cloudySky = '-ZTMh7Np2z8';
  const youtubeVideoId2 = 'ubNfkpbxXUs';
  const youtubeVideoId3 = 'W0LHTWG-UmQ'; 
  0ANLBX2EgmM day few clouds
  4DjRSmpT_po
  
  9J7ej1Mkh0s
  */

export const changeBackgroundVideo = (id) => {
  console.log(id);
  switch (id) {
    case '01d':
      changeVideo('ipf7ifVSeDU'); // clear day
      break;
    case '01n':
      changeVideo('Q-sZipetAEc'); // clear night
      break;
    case '02d':
      changeVideo('-ZTMh7Np2z8'); // cloudy day
      break;
    case '02n':
      changeVideo('jVxOBShrHck'); // cloudy night
      break;
    case '03d':
      changeVideo('XFoczTlvoY4'); // more cloudy day
      break;
    case '03n':
      changeVideo('UZn1MrjL4pE'); // more cloudy night
      break;
    case '04d':
      changeVideo('HxxymYoXosE'); // most cloudy day
      break;
    case '04n':
      changeVideo('UZn1MrjL4pE');
      break;
    case '09d':
      changeVideo('');
      break;
    case '09n':
      changeVideo('');
      break;
    case '10d':
      changeVideo('74b3Zb18UDM'); // rainy day
      break;
    case '10n':
      changeVideo('9QneqUhCVtU'); // rainy night
      break;
    case '11d':
      changeVideo('');
      break;
    case '11n':
      changeVideo('');
      break;
    case '13d':
      changeVideo('');
      break;
    case '13n':
      changeVideo('');
      break;
    case '50d':
      changeVideo('');
      break;
    case '50n':
      changeVideo('');
      break;
    case 'unknown':
      changeVideo('');
      break;
  }
};

const changeVideo = (videoId) => {
  document.getElementById(
    BACKGROUND_VIDEO_ID
  ).src = `https://www.youtube.com/embed/${videoId}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=${videoId}&amp;start=1549`;
  console.log(document.getElementById(BACKGROUND_VIDEO_ID).src);
};
