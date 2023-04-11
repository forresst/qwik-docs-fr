import { component$, useComputed$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const name = useSignal('Qwik');
  const capitalizedName = useComputed$(() => name.value.toUpperCase());

  return (
    <>
      <input type="text" bind:value={name} />
      <div>Nom : {name.value}</div>
      <div>Nom en capitales : {capitalizedName.value}</div>
    </>
  );
});
