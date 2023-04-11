import { component$ } from '@builder.io/qwik';

// Composant en ligne : déclaré à l'aide d'une fonction standard.
export const MyButton = (props: { text: string }) => {
  return <button>{props.text}</button>;
};

// Composant : déclarée à l'aide de `component$()`.
export default component$(() => {
  return (
    <div>
      Un peu de texte :
      <MyButton text="Cliquez-moi" />
    </div>
  );
});
