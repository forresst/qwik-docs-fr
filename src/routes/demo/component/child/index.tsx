import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <div>Texte du Parent</div>
      <Child />
    </>
  );
});

const Child = component$(() => {
  return <div>Texte du Child</div>;
});
