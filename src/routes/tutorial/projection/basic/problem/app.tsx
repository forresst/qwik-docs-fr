/* eslint-disable no-console */
import { component$, useStore } from '@builder.io/qwik';

export const App = component$(() => {
  const store = useStore({ count: 0 });
  console.log('Render: <App>');
  return (
    <Panel>
      Compteur : {store.count}. <button onClick$={() => store.count++}>+1</button>
    </Panel>
  );
});

export const Panel = component$(() => {
  console.log('Render: <Panel>');
  return (
    <div style={{ border: '2px solid red;', padding: '1em' }}>
      Actuellement, le composant <tt>&lt;Panel&gt;</tt> contrôle le contenu ici. Remplacez ce texte
      par l'élément <tt>&lt;Slot&gt;</tt> pour voir le contenu projeté depuis <tt>&lt;App&gt;</tt>.
    </div>
  );
});
