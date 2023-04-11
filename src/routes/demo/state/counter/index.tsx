import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const count = useSignal(0);

  return (
    <>
      <div>Compteur : {count.value}</div>
      <button onClick$={(e) => count.value++}>Incrémenter</button>
    </>
  );
});
