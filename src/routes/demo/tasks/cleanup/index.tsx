import { component$, useSignal, useTask$ } from '@builder.io/qwik';

export default component$(() => {
  const text = useSignal('');
  const debounceText = useSignal('');

  useTask$(({ track, cleanup }) => {
    const value = track(() => text.value);
    const id = setTimeout(() => (debounceText.value = value), 500);
    cleanup(() => clearTimeout(id));
  });

  return (
    <div>
      Enter text: <input bind:value={text} />
      <div>Debounced text: {debounceText}</div>
    </div>
  );
});
