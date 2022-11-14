import { component$, useStyles$, useStore } from '@builder.io/qwik';

export default component$(() => {
  useStyles$(AppCSS);
  const store = useStore({ open: false, siblings: [0] }, { recursive: true });

  return (
    <div class="parent">
      <button onClick$={() => (store.open = !store.open)}>Affiche/Masque Child</button>
      <button onClick$={() => store.siblings.push(0)}>Ajoute un Sibling</button>
      {store.open ? <Child key="child" /> : null}
      {store.siblings.map(() => (
        <Sibling />
      ))}
    </div>
  );
});

export const Child = component$(() => {
  useStyles$(ChildCSS);
  return (
    <div class="child">
      <div>Child</div>
    </div>
  );
});

export const Sibling = component$(() => {
  useStyles$(SiblingCSS);

  return (
    <div class="sibling">
      <div>Sibling</div>
    </div>
  );
});

// A FAIRE : Ceci devrait être importé ainsi : import AppCSS from './app.css';
// mais l'outil pour tester ne prend pas encore en charge de telles importations.
export const AppCSS = `
.parent {
  border: 1px solid black;
  padding: 1em;
}
`;
export const ChildCSS = `
.child {
  margin-top: 1em;
  border: 1px solid red;
  padding: 1em;
  display: block;
}
`;
export const SiblingCSS = `.sibling {
  margin-top: 1em;
  border: 1px solid green;
  padding: 1em;
  display: block;
}
`;
