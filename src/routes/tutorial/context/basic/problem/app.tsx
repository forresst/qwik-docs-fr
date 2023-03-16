import { component$, createContextId, useContextProvider, useStore } from '@builder.io/qwik';

interface TodosStore {
  items: string[];
}
export const TodosContext = createContextId<TodosStore>('Todos');
export default component$(() => {
  useContextProvider(
    TodosContext,
    useStore<TodosStore>({
      items: ['Apprendre Qwik', 'Construire une appli Qwik', 'En tirer profit'],
    })
  );

  return <Items />;
});

export const Items = component$(() => {
  // remplacer ceci par la récupération du contexte.
  const todos = { items: [] };
  return (
    <ul>
      {todos.items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
});
