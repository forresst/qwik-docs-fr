// @ts-ignore: Unused import
import { component$, useStore, $ } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({ name: '' });
  return (
    <>
      Entrez votre nom, puis appuyez sur la touche Entrée :{' '}
      <input
        onInput$={(event) => {
          const input = event.target as HTMLInputElement;
          store.name = input.value;
        }}
        onChange$={() => {
          if (store.name) alert(store.name);
        }}
        value={store.name}
      />
    </>
  );
});
