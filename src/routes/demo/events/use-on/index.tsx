import { $, component$, useOnDocument, useStore } from '@builder.io/qwik';

// Supposons une méthode use réutilisable qui n'a pas accès à JSX
// mais doit enregistrer des gestionnaires d'événements.
function useMousePosition() {
  const position = useStore({ x: 0, y: 0 });
  useOnDocument(
    'mousemove',
    $((event) => {
      const { x, y } = event as MouseEvent;
      position.x = x;
      position.y = y;
    })
  );
  return position;
}

export default component$(() => {
  const pos = useMousePosition();
  return (
    <div>
      MousePosition : ({pos.x}, {pos.y})
    </div>
  );
});
