import { component$, useWatch$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({
    value: '',
    debouncedValue: '',
  });
  useWatch$(({ track }) => {
    // Utilisez track pour réexécuter cette fonction lorsque la propriété `value` du store change.

    // Configurez un temporisateur pour copier `value => debouncedValue` après une demi-seconde.

    // Retournez la fonction de nettoyage dans le cas où la propriété `value` change avant la fin du temps.
    return () => {
      // code de nettoyage
    };
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
