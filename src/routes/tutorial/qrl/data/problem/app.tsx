import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <button onClick$={async () => alert('Hello World!')}>cliquez-moi</button>
    </>
  );
});
