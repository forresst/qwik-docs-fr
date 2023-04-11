import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore(
    {
      nested: { fields: { are: 'not tracked' } },
    },
    { deep: true }
  );

  return (
    <>
      <p>{store.nested.fields.are}</p>
      <button onClick$={() => (store.nested.fields.are = 'tracked')}>
        En me cliquant, le store fonctionne parce qu'il est profondément surveillé
      </button>
      <br />
      <button onClick$={() => (store.nested = { fields: { are: 'tracked' } })}>
        Cliquez-moi, cela fonctionne encore
      </button>
    </>
  );
});
