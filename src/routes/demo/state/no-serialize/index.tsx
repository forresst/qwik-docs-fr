import {
  component$,
  useStore,
  noSerialize,
  useVisibleTask$,
} from '@builder.io/qwik';
import Monaco from './monaco';

export default component$(() => {
  const store = useStore<{ monacoInstance: Monaco | undefined }>({
    // Ne pas initialiser sur le serveur
    monacoInstance: undefined,
  });

  useVisibleTask$(() => {
    // Monaco n'est pas sérialisable, nous ne pouvons donc pas le sérialiser dans le cadre du SSR.
    // Nous pouvons cependant l'instancier sur le client une fois que le composant est visible
    setTimeout(() => (store.monacoInstance = noSerialize(new Monaco())), 1000);
  });
  return <div>{store.monacoInstance ? 'Monaco est chargé' : 'chargement...'}</div>;
});
