import { component$ } from '@builder.io/qwik';

interface ItemProps {
  name?: string;
  quantity?: number;
  description?: string;
  price?: number;
}

export const Item = component$<ItemProps>((props) => {
  return (
    <ul>
      <li>nom : {props.name}</li>
      <li>quantité : {props.quantity}</li>
      <li>description : {props.description}</li>
      <li>prix : {props.price}</li>
    </ul>
  );
});

export default component$(() => {
  return (
    <>
      <h1>Props</h1>
      <Item name="hammer" price={9.99} />
    </>
  );
});
