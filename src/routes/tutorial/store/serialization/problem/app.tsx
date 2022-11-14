import { component$, useStore, QRL, $ } from '@builder.io/qwik';

interface ParentStore {
  name: string;
  children: ChildStore[];
  greetNames: QRL<(parent: ParentStore) => void>;
}
interface ChildStore {
  name: string;
  parent: ParentStore;
}
export default component$(() => {
  const parent: ParentStore = {
    name: 'Builder.io',
    children: [],
    greetNames: $((parent) => alert(parent.name)),
  };
  parent.children = [
    // insérer quelques éléments ici
  ];
  const parentStore = useStore<ParentStore>(parent, { recursive: true });
  return (
    <>
      {parentStore.name}
      <button onClick$={async () => await parentStore.greetNames(parent)}>alert</button>
      <ul>
        {parentStore.children.map((child) => (
          <li>
            {child.name} -&lt; {child.parent.name}
          </li>
        ))}
      </ul>
    </>
  );
});
