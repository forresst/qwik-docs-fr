import { component$, useVisibleTask$, useSignal, useStore } from '@builder.io/qwik';

export default component$(() => {
  const store = useStore({
    width: 0,
    height: 0,
  });
  const outputRef = useSignal<Element>();
  useVisibleTask$(() => {
    if (outputRef.value) {
      const rect = outputRef.value.getBoundingClientRect();
      store.width = Math.round(rect.width);
      store.height = Math.round(rect.height);
    }
  });

  return (
    <main>
      <aside style={{ border: '1px solid red', width: '100px' }} ref={outputRef}>
        Changez la valeur du texte ici pour étirer la boîte.
      </aside>
      <p>
        La boîte rouge ci-dessus a une hauteur de {store.height} pixels et une largeur de {store.width} pixels.
      </p>
    </main>
  );
});
