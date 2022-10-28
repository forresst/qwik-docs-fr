import { component$, useRef, useClientEffect$, useStore } from '@builder.io/qwik';

export const App = component$(() => {
  const store = useStore({
    width: 0,
    height: 0,
  });
  const outputRef = useRef();
  useClientEffect$(() => {
    if (outputRef.current) {
      const rect = outputRef.current.getBoundingClientRect();
      store.width = Math.round(rect.width);
      store.height = Math.round(rect.height);
    }
  });

  return (
    <div>
      <div style={{ border: '1px solid red', width: '100px' }} ref={outputRef}>
        Changez la valeur du texte ici pour étirer la boîte.
      </div>
      <div>
        La boîte rouge ci-dessus a une hauteur de {store.height} pixels et une largeur de {store.width} pixels.
      </div>
    </div>
  );
});
