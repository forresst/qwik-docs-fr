import { component$, useStyles$, type FunctionComponent } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import styles from '../ecosystem.css?inline';
import data from '../ecosystem.json';
import { MEDIA } from '../media/index';
import SHOWCASE from '../showcase/generated-pages.json';
import { EcosystemMenu } from './ecosystem-menu';
import { QwikPlusLogo } from './qwik-plus-logo';

export default component$(() => {
  useStyles$(styles);

  const videos = MEDIA.vidéos.slice(0, 6); // TranslatedToFrench
  const podcasts = MEDIA.podcasts.slice(0, 6);
  const presentations = MEDIA.présentations.slice(0, 6); // TranslatedToFrench
  const showcaseSites = SHOWCASE.slice(0, 6);

  return (
    <>
      <div class="ecosystem lg:grid grid-cols-[240px,1fr] px-6 m-auto max-w-screen-xl gap-8">
        <EcosystemMenu />

        <article>
          <QwikPlusLogo />

          <div class="purple-gradient" role="presentation" />
          <div class="blue-gradient" role="presentation" />

          <section id="deployments">
            <h2>
              <Link href="/docs/deployments/">Déploiements</Link> {/* TranslatedToFrench */}
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-3">
              {data.deployments.map((item, i) => (
                <GridItem
                  title={item.title}
                  href={item.href}
                  imgSrc={item.imgSrc}
                  key={i}
                  thumbnailBg={true}
                />
              ))}
            </ul>
          </section>

          <section id="integrations">
            <h2>
              <span>
                <Link href="/docs/integrations/">Intégrations</Link> {/* TranslatedToFrench */}
              </span>
              <span>
                <Link href="/docs/integrations/" class="text-sm">
                  Tout voir {/* TranslatedToFrench */}
                </Link>
              </span>
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-3">
              {data.integrations.map((item, i) => (
                <GridItem
                  title={item.title}
                  href={item.href}
                  imgSrc={item.imgSrc}
                  key={i}
                  thumbnailBg={true}
                />
              ))}
            </ul>
          </section>

          <section id="videos">
            <h2>
              <span>
                <Link href="/media/#videos">Vidéos</Link> {/* TranslatedToFrench */}
              </span>
              <span>
                <Link href="/media/#vidéos" class="text-sm"> {/* TranslatedToFrench */}
                  Tout voir {/* TranslatedToFrench */}
                </Link>
              </span>
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-3">
              {videos.map((item, i) => (
                <GridItem
                  title={item.title}
                  href={item.href}
                  imgSrc={item.imgSrc}
                  imgCover={true}
                  key={i}
                  thumbnailBg={true}
                />
              ))}
            </ul>
          </section>

          <section id="podcasts">
            <h2>
              <span>
                <Link href="/media/#podcasts">Podcasts</Link> {/* TranslatedToFrench */}
              </span>
              <span>
                <Link href="/media/#podcasts" class="text-sm">
                  Tout voir {/* TranslatedToFrench */}
                </Link>
              </span>
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-3">
              {podcasts.map((item, i) => (
                <GridItem
                  title={item.title}
                  href={item.href}
                  imgSrc={item.imgSrc}
                  imgCover={true}
                  key={i}
                  thumbnailBg={true}
                />
              ))}
            </ul>
          </section>

          <section id="showcase">
            <h2>
              <span>
                <Link href="/showcase/">Galerie</Link> {/* TranslatedToFrench */}
              </span>
              <span>
                <Link href="/showcase/" class="text-sm">
                  Tout voir  {/* TranslatedToFrench */}
                </Link>
              </span>
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-3">
              {showcaseSites.map((item, i) => (
                <GridItem
                  title={item.title}
                  href={item.href}
                  imgSrc={item.imgSrc}
                  imgCover={true}
                  key={i}
                  thumbnailBg={true}
                />
              ))}
            </ul>
          </section>

          <section id="presentations">
            <h2>
              <span>
                <Link href="/media/#présentations">Présentations</Link> {/* TranslatedToFrench */}
              </span>
              <span>
                <Link href="/media/#présentations" class="text-sm"> {/* TranslatedToFrench */}
                  Tout voir  {/* TranslatedToFrench */}
                </Link>
              </span>
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-3">
              {presentations.map((item, i) => (
                <GridItem
                  title={item.title}
                  href={item.href}
                  imgSrc={item.imgSrc}
                  imgCover={true}
                  key={i}
                  thumbnailBg={true}
                />
              ))}
            </ul>
          </section>

          <section id="community">
            <h2>
              <Link href="/community/groups/">Communauté</Link> {/* TranslatedToFrench */}
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-4">
              {data.communities.map((item, i) => (
                <GridItem
                  title={item.title}
                  href={item.href}
                  imgSrc={item.imgSrc}
                  key={i}
                  thumbnailBg={false}
                />
              ))}
            </ul>
          </section>

          <section id="social">
            <h2>
              <Link href="/community/groups/">Social</Link> {/* TranslatedToFrench */}
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-3">
              {data.social.map((item, i) => (
                <GridItem
                  title={item.title}
                  href={item.href}
                  imgSrc={item.imgSrc}
                  key={i}
                  thumbnailBg={false}
                />
              ))}
            </ul>
          </section>
        </article>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Ecosystem',
};

export const GridItem: FunctionComponent<GridItemProps> = (props) => {
  return (
    <li class="grid-item">
      <Link href={props.href}>
        <div class={{ thumbnail: props.thumbnailBg, cover: props.imgCover }}>
          <img src={props.imgSrc} alt={props.title} loading="lazy" />
        </div>
        <div class="text">{props.title}</div>
      </Link>
    </li>
  );
};

interface GridItemProps {
  title: string;
  href: string;
  imgSrc?: string;
  imgCover?: boolean;
  thumbnailBg: boolean;
}
