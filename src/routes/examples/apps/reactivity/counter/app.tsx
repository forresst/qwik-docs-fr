import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({ count: 0 });

  return (
    <div>
      <p>Compteur : {store.count}</p>
      <p>
        <button onClick$={() => store.count++}>Cliquer</button>
      </p>
    </div>
  );
});
