import { component$, useOn, $ } from '@builder.io/qwik';

export default component$(() => {
  useOn(
    'click',
    $(() => alert('Hello World!'))
  );

  return <div>Composant App. Cliquez-moi.</div>;
});
