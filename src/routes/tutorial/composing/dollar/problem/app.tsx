import { component$, QRL, implicit$FirstArg, useStore } from '@builder.io/qwik';

export function delayQrl<T>(fn: QRL<() => T>, delayInMs: number): Promise<T> {
  return new Promise((res) => {
    setTimeout(() => {
      res(fn());
    }, delayInMs);
  });
}

export const delay$ = implicit$FirstArg(delayQrl);

export const App = component$(() => {
  const store = useStore({ count: 0, delay: 0 });
  return (
    <>
      Compteur : {store.count} <br />
      Délai : {store.delay} <br />
      <button
        onClick$={async () => {
          store.count++;
          // Ce code doit être retardé de 1000ms
          store.delay++;
        }}
      >
        +1
      </button>
    </>
  );
});
