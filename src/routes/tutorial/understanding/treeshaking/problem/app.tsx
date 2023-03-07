/* eslint-disable no-console */
import { component$, useStore } from '@builder.io/qwik';

interface CountStore {
  count: number;
}
export default component$(() => {
  const store = useStore<CountStore>({ count: 0 });
  console.log('Render: <App/>');
  return (
    <>
      <tt>&lt;App&gt;</tt>
      Ce composant est statique ! Après le rendu initial dans le cadre du SSR, il ne sera jamais rendu à nouveau sur
      le client. Cela signifie qu'il ne sera jamais chargé sur le client. Le composant est
      tree-shaké sur le client.
      <br />
      Cliquez <button onClick$={() => store.count++}>+1</button> pour observer le code que Qwik charge en tant que
      résultat de la modification de l'état de l'application.
      <Child store={store} />
    </>
  );
});

export const Child = component$((props: { store: CountStore }) => {
  console.log('Render: <Child/>');
  return (
    <>
      <tt>&lt;Child&gt;</tt>
      Ce composant est dynamique car il est lié à <tt>props.store.count</tt>
      {props.store.count}
      <GrandChild store={props.store} />
    </>
  );
});

export const GrandChild = component$((props: { store: CountStore }) => {
  console.log('Render: <GroundChild/>');
  return (
    <>
      <tt>&lt;GrandChild&lt;</tt>
      Ce composant est également dynamique car il est lié à <tt>props.store.count</tt>
      {props.store.count}
    </>
  );
});
