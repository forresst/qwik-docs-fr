import { component$ } from '@builder.io/qwik';

export const App = component$(() => {
  return (
    <div>
      Insérez le composant Greeter ici. En assemblant des composants, il est possible d'écrire de grandes applications
      sans avoir à mettre tout le code dans un seul fichier/composant.
    </div>
  );
});

export const Greeter = component$(() => {
  return <div>Hello World!</div>;
});
