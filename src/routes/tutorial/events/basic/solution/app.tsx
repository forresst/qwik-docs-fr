import { component$ } from '@builder.io/qwik';

export const App = component$(() => {
  return <button onClick$={() => alert('Hello World!')}>Cliquez-moi</button>;
});
