import { component$ } from '@builder.io/qwik';

export default component$(() => {
  // @ts-ignore
  const data = {
    name: 'Qwik',
    description: DESCRIPTION,
  };

  return (
    <>
      <input value="data.name devrait aller ici" />
      <br />
      <textarea rows={10} cols={60}>
        data.description devrait aller ici
      </textarea>
    </>
  );
});

export const DESCRIPTION = `
Qwik est conçu pour obtenir le temps de chargement des pages
le plus rapide possible, en délivrant du HTML pur avec
quasiment aucun JavaScript pour que vos pages deviennent
interactives, quelle que soit la complexité de votre site ou de
votre appli. Il atteint cet objectif via la résumabilité
du code`;
