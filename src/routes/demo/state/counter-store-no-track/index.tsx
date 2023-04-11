import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({
    nested: { fields: { are: 'not tracked' } },
  });

  return (
    <>
      <p>{store.nested.fields.are}</p>
      <button onClick$={() => (store.nested.fields.are = 'tracked')}>
        En me cliquant, cela ne fonctionne pas
      </button>
      <br />
      <button onClick$={() => (store.nested = { fields: { are: 'tracked' } })}>
        Cliquez-moi, cela fonctionne
      </button>
    </>
  );
});
