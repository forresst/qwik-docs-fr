import { component$, Slot, useStore } from '@builder.io/qwik';

export default component$(() => {
  console.log('Render: <App>');
  return (
    <Collapsable>
      <div q:slot="closed">▶ (résumé replié)</div>
      <div q:slot="open">
        ▼<div> Le contenu qui doit être affiché lorsque le composant pliable est déplié. </div>
      </div>
    </Collapsable>
  );
});

export const Collapsable = component$(() => {
  console.log('Render: <Collapsable>');
  const store = useStore({ open: true });
  return (
    <div onClick$={() => (store.open = !store.open)}>
      {store.open ? <Slot name="open" /> : `▶`}
      {/* A la place, projetez ici le contenu du parent nommé "closed". */}
    </div>
  );
});
