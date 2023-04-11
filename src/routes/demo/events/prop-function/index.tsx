import { type PropFunction, component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return <CmpButton onClick$={() => alert('CLIQUÉ !')}>Cliquez-moi !</CmpButton>;
});

export const CmpButton = component$<{
  // Il est important d'indiquer à TypeScript qu'il s'agit d'une opération asynchrone.
  onClick$?: PropFunction<() => void>;
}>((props) => {
  return (
    <button onClick$={onClick$}>
      <Slot />
    </button>
  );
});
