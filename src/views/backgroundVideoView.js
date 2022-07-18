import { toHtmlElement } from '../utils/util';
import { BACKGROUND_VIDEO_ID } from '../constants.js';

export const createBackgroundVideoElements = () => {
  const rainyForest = '74b3Zb18UDM';
  const sunnyDay = 'ipf7ifVSeDU';
  const rainyCity = '9QneqUhCVtU';
  const cloudySky = '-ZTMh7Np2z8';
  const youtubeVideoId2 = 'ubNfkpbxXUs';
  const youtubeVideoId3 = 'W0LHTWG-UmQ';
  const youtubeVideoId = sunnyDay;
  const htmlStr = String.raw`
        <div class="video-background">
          <div class="video-foreground">
            <iframe id="${BACKGROUND_VIDEO_ID}" src="https://www.youtube.com/embed/${youtubeVideoId}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=${youtubeVideoId}&amp;start=1549" frameborder="0" allowfullscreen allow="autoplay"></iframe>
          </div>
        </div>
    `;

  return toHtmlElement(htmlStr);
};

export const changeBackgroundVideo = (id) => {
  switch (id) {
    case '01d': changeVideo('');
    case '01n': changeVideo('');
    case '02d': changeVideo('-ZTMh7Np2z8'); // cloudy sky
    case '02n': changeVideo('');
    case '03d': changeVideo('');
    case '03n': changeVideo('');
    case '04d': changeVideo('');
    case '04n': changeVideo('');
    case '09d': changeVideo('');
    case '09n': changeVideo('');
    case '10d': changeVideo('74b3Zb18UDM'); // rainy day
    case '10n': changeVideo('9QneqUhCVtU'); // rainy night
    case '11d': changeVideo('');
    case '11n': changeVideo('');
    case '13d': changeVideo('');
    case '13n': changeVideo('');
    case '50d': changeVideo('');
    case '50n': changeVideo('');
    case 'unknown': changeVideo('');
  }
};

const changeVideo = (videoId) => {
  document.getElementById(
    BACKGROUND_VIDEO_ID
  ).src = `https://www.youtube.com/embed/${videoId}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=${videoId}&amp;start=1549`;
};
