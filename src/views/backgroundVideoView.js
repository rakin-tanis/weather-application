import { toHtmlElement } from '../utils/util';
import { BACKGROUND_VIDEO_ID } from '../constants.js';

export const createBackgroundVideoElements = () => {
  const sunnyDay = 'ipf7ifVSeDU';
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


