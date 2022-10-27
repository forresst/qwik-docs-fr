import { component$, NoSerialize, useStore } from '@builder.io/qwik';

interface AppStore {
  time: null | string;
  cleanup: NoSerialize<() => void>;
}
export const App = component$(() => {
  const store = useStore<AppStore>({
    time: null,
    cleanup: undefined,
  });
  return (
    <>
      <div>Heure actuelle : {store.time}</div>
      <button
        onClick$={() => {
          // @ts-ignore
          const id = setInterval(() => (store.time = new Date().toString()), 1000);
          // assigner une fonction cleanup (nettoyage) à : store.cleanup
        }}
      >
        start
      </button>
      <button
        onClick$={() => {
          store.cleanup && store.cleanup();
          store.cleanup = undefined;
        }}
      >
        stop
      </button>
    </>
  );
});
