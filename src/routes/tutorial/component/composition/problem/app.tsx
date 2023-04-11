import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <main>
      Insérez le composant Greeter ici. En assemblant des composants, il est possible d'écrire de grandes applications
      sans avoir à mettre tout le code dans un seul fichier/composant.
    </main>
  );
});

export const Greeter = component$(() => {
  return <p>Hello World!</p>;
});
