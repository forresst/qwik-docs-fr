import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div>
      <Greeter />
    </div>
  );
});

interface GreeterProps {}
export const Greeter = component$((props: GreeterProps) => {
  return <div>Liez les props ici</div>;
});
