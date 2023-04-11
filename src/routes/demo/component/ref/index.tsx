import { component$, useVisibleTask$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const width = useSignal(0);
  const height = useSignal(0);
  const outputRef = useSignal<Element>();

  useVisibleTask$(() => {
    if (outputRef.value) {
      const rect = outputRef.value.getBoundingClientRect();
      width.value = Math.round(rect.width);
      height.value = Math.round(rect.height);
    }
  });

  return (
    <div>
      <div ref={outputRef} style={{ border: '1px solid red', width: '100px' }}>
        Changez la valeur du texte ici pour étirer la boîte.
      </div>
      <div>
        La boîte rouge ci-dessus a une hauteur de {height.value} pixels et une largeur de {width.value}{' '}
        pixels.
      </div>
    </div>
  );
});
