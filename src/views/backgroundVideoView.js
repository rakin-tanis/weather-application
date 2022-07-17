import { toHtmlElement } from '../utils/util';

export const createBackgroundVideoElements = () => {
  const rainyForest = '74b3Zb18UDM';
  const rainyCity = '9QneqUhCVtU';
  const youtubeVideoId2 = 'ubNfkpbxXUs';
  const youtubeVideoId3 = 'W0LHTWG-UmQ';
  const youtubeVideoId = rainyCity;
  const htmlStr = String.raw`
        <div class="video-background">
          <div class="video-foreground">
            <iframe src="https://www.youtube.com/embed/${youtubeVideoId}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=${youtubeVideoId}&amp;start=1549" frameborder="0" allowfullscreen allow="autoplay"></iframe>
          </div>
        </div>
    `;

  return toHtmlElement(htmlStr);
};
