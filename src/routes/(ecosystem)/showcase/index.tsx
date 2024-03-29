import { component$, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from './styles.css?inline';
import pages from './generated-pages.json';

export interface MediaEntry {
  title: string;
  href: string;
  imgSrc: string;
  size: 'small' | 'large';
  perf: {
    score: number;
    fcpDisplay: string;
    fcpScore: number;
    lcpDisplay: string;
    lcpScore: number;
    ttiDisplay: string;
    ttiScore: number;
    ttiTime: number;
  };
}

export default component$(() => {
  useStyles$(styles);
  return (
    <article class="showcase">
      <h1>Galerie</h1> {/* TranslatedToFrench */}

      <ul class="grid">
        {pages.map((entry) => (
          <SiteLink entry={entry as any} key={entry.href} />
        ))}
      </ul>
      <section>
        <h2>Ajouter un site</h2> {/* TranslatedToFrench */}
        <p>Est-ce que cette page manque d'un bon site ou a besoin d'une mise à jour ?</p> {/* TranslatedToFrench */}
        <p>
          <a
            href="https://github.com/BuilderIO/qwik/edit/main/packages/docs/scripts/pages.json"
            target="_blank"
            class="edit-page"
          >
            Modifier cette page ! {/* TranslatedToFrench */}
          </a>
        </p>
      </section>
      <section>
        <h2>Comment les scores sont-ils calculés ?</h2> {/* TranslatedToFrench */}
        <p>
        Les scores sont calculés à l'aide de l'outil{' '} {/* TranslatedToFrench */}
          <a href="https://developers.google.com/speed/docs/insights/v5/get-started">
            PageSpeed Insights API {/* TranslatedToFrench */}
          </a>
          , analysé avec la{' '} {/* TranslatedToFrench */}
          <a href="https://developers.google.com/speed/docs/insights/rest/v5/pagespeedapi/runpagespeed#strategy">
            stratégie MOBILE {/* TranslatedToFrench */}
          </a>
          .
        </p>
      </section>
    </article>
  );
});

export const SiteLink = component$((props: { entry: MediaEntry }) => {
  return (
    <li class={props.entry.size}>
      <Score speedScore={props.entry.perf.score} url={props.entry.href}></Score>
      <a class="card" href={props.entry.href} target="_blank" rel="nofollow noreferrer">
        <img width="1440" height="980" loading="lazy" src={props.entry.imgSrc} aria-hidden="true" />
        <div class="backdrop">
          <div class="metrics">
            <div
              style={{
                '--color': getLighthouseColorForScore(props.entry.perf.ttiScore),
              }}
            >
              <h3>TTF</h3>
              <p>{props.entry.perf.ttiDisplay}</p>
            </div>
            <div
              style={{
                '--color': getLighthouseColorForScore(props.entry.perf.fcpScore),
              }}
            >
              <h3>FCP</h3>
              <p>{props.entry.perf.fcpDisplay}</p>
            </div>
            <div
              style={{
                '--color': getLighthouseColorForScore(props.entry.perf.lcpScore),
              }}
            >
              <h3>LCP</h3>
              <p>{props.entry.perf.lcpDisplay}</p>
            </div>
          </div>
          <p class="title">{props.entry.title}</p>
        </div>
      </a>
    </li>
  );
});

export const Score = ({ speedScore, url }: { speedScore: number; url: string }) => {
  return (
    <a
      class="score"
      style={{
        '--color': getLighthouseColorForScore(speedScore),
      }}
      title="Mobile perf score from PageSpeed Insights"
      target="_blank"
      rel="noreferrer"
      href={getPagespeedInsightsUrl(url)}
    >
      <div class="score-inner">
        <svg viewBox="0 0 120 120">
          <circle class="circle-1" r="56" cx="60" cy="60" stroke-width="8"></circle>
          <circle
            r="56"
            cx="60"
            cy="60"
            stroke-width="8"
            class="circle-2"
            style={{
              transform: `rotate(-87.9537deg)`,
              strokeDasharray: `${(speedScore * 350).toFixed(2)} 1000`,
            }}
          ></circle>
        </svg>
        <div class="score-text">{Math.round(speedScore * 100)}</div>
      </div>
    </a>
  );
};

const lighthouseRed = '#f33';
const lighthouseOrange = '#ffaa32';
const lighthouseGreen = '#0c6';

export function getLighthouseColorForScore(score: number) {
  return score < 0.5 ? lighthouseRed : score < 0.9 ? lighthouseOrange : lighthouseGreen;
}

export function getPagespeedInsightsUrl(url: string) {
  return `https://pagespeed.web.dev/report?url=${encodeURIComponent(url)}`;
}

export const head: DocumentHead = {
  title: 'Qwik Sites Showcase',
};
