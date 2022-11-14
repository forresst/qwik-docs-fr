import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <h1>Hello World!</h1>
      Regardez ! Je suis un composant statique.
      <br />
      Qwik ne me chargera jamais sur le client. Je suis seulement rendu sur le serveur.
      <br />
      <button onClick$={() => alert('Hello')}>greet!</button>
      <hr />
      <Counter />
    </>
  );
});

export const Counter = component$(() => {
  const store = useStore({ count: 0 });
  return (
    <>
      Je suis un composant dynamique. Qwik me chargera uniquement quand il sera temps de me re-rendre après que
      l'utilisateur ait cliqué sur le bouton <tt>+1</tt>.
      <br />
      Compteur actuel : {store.count}
      <br />
      <button onClick$={() => store.count++}>+1</button>
    </>
  );
});
