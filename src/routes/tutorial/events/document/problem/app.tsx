/* eslint-disable no-console */
import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({ x: 0, y: 0 });
  return (
    <div
      onMouseMove$={(event) => {
        store.x = event.clientX;
        store.y = event.clientY;
      }}
    >
      La position de votre souris est ({store.x}, {store.y}).
    </div>
  );
});
