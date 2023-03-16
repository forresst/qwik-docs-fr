import {
  component$,
  createContextId,
  useContextProvider,
  useContext,
  useStore,
} from '@builder.io/qwik';

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
  const todos = useContext(TodosContext);
  return (
    <ul>
      {todos.items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
});
