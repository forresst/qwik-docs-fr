import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const currentElm = useSignal<HTMLElement|null>(null);
  const targetElm = useSignal<HTMLElement|null>(null);

  return (
    <div onClick$={(event, currentTarget) => {
      currentElm.value = currentTarget;
      targetElm.value = event.target as HTMLElement;
    }}>
      Cliquez sur n'importe quel texte <code>target</code> et <code>currentElm</code> de l'événement.
      <hr/>
      <span>Hello <b>World</b>!</span>
      <hr/>
      <ul>
        <li>currentElm : {currentElm.value?.tagName}</li>
        <li>target : {targetElm.value?.tagName}</li>
      </ul>
    </div>
  );
});