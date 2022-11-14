import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <a href="/" onClick$={() => alert('faire autre chose.')}>
      Cliquez-moi !
    </a>
  );
});
