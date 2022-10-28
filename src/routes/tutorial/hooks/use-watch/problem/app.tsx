import { component$, useWatch$, useStore } from '@builder.io/qwik';

export const App = component$(() => {
  const store = useStore({
    value: '',
    debouncedValue: '',
  });
  useWatch$(({ track }) => {
    // réexécute cette fonction lorsque la propriété `value` change.
    track(() => store.value);
    // Configure un délai d'attente pour la valeur retardée.
    const id = setTimeout(() => (store.debouncedValue = store.value), 500);
    // retourne une fonction de nettoyage au cas où la propriété `value` changerait avant la fin du temps.
    return () => clearTimeout(id);
  });
  return (
    <>
      <input
        value={store.value}
        onInput$={(event) => (store.value = (event.target as HTMLInputElement).value)}
      />
      <br />
      Valeur courante : {store.value}
      <br />
      Valeur retardée : {store.debouncedValue}
    </>
  );
});
