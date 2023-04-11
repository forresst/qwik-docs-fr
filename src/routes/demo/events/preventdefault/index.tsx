import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <a
      href="/about"
      preventdefault:click // Cela empêchera le comportement par défaut de l'événement "click".
      onClick$={() => {
        // event.PreventDefault() ne fonctionnera pas ici, car le gestionnaire est distribué de manière asynchrone.
        alert('Faire autre chose pour simuler la navigation...');
      }}
    >
      Aller à la page d'accueil
    </a>
  );
});
