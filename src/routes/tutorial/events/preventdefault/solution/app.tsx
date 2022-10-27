import { component$ } from '@builder.io/qwik';

export const App = component$(() => {
  return (
    <a href="/" preventdefault:click onClick$={() => alert('faire autre chose.')}>
      Cliquez-moi !
    </a>
  );
});
