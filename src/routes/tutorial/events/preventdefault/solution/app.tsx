import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <a href="/" preventdefault:click onClick$={() => alert('faire autre chose.')}>
      Cliquez-moi !
    </a>
  );
});
