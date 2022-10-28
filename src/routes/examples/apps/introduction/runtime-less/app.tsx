import { component$ } from '@builder.io/qwik';

export const App = component$(() => {
  console.log('render <App>');
  return (
    <div id="container">
      <button
        onClick$={() => {
          // Le gestionnaire de clics est complètement apatride et n'utilise pas d'API QWIK.
          // Ce qui signifie que le runtime de QWIK n'est JAMAIS chargé, ni exécuté.
          console.log('click');
          const div = document.querySelector('#container')! as HTMLElement;
          div.style.background = 'yellow';
        }}
      >
        Action
      </button>
    </div>
  );
});
