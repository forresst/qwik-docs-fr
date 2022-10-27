import { component$ } from '@builder.io/qwik';

export const App = component$(() => {
  return (
    <a href="/" onClick$={() => alert('faire autre chose.')}>
      Cliquez-moi !
    </a>
  );
});
