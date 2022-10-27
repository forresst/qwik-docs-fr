import { component$, useStore } from '@builder.io/qwik';

export const App = component$(() => {
  const counter = useStore({ count: 0 });

  return (
    <>
      <div>Compteur : {counter.count}</div>
      <button onClick$={() => counter.count++}>+1</button>
    </>
  );
});
