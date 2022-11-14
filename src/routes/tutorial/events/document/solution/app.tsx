/* eslint-disable no-console */
import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({ x: 0, y: 0 });
  return (
    <div
      document:onMouseMove$={(event) => {
        store.x = event.x;
        store.y = event.y;
      }}
    >
      La position de votre souris est ({store.x}, {store.y}).
    </div>
  );
});
