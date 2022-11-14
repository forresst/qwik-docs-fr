import { component$, Slot, useStyles$ } from '@builder.io/qwik';

export const Card = component$(() => {
  useStyles$(CSS);
  return (
    <div class="card">
      <div class="title">
        <Slot name="title"></Slot>
      </div>
      <div class="body">
        <Slot name="body"></Slot>
      </div>
    </div>
  );
});

export default component$(() => {
  return (
    <>
      <Card>
        <span q:slot="title">Qwik</span>
        <span q:slot="body">Qwik est un framework résumable pour construire des applis web rapides.</span>
      </Card>
      <Card>
        <span q:slot="title">Partytown</span>
      </Card>
      <Card>
        <span q:slot="body">
          Builder.io vous permet de construire visuellement sur votre pile technologique Donnez à toute votre
          équipe la possibilité de créer visuellement et d'optimiser des expériences à haut débit sur vos
          sites et applis. Offrez une autonomie à toute l'équipe grâce à une plateforme approuvée par les développeurs.
        </span>
      </Card>
    </>
  );
});

export const CSS = `
.card {
  border-radius: 5px;
  vertical-align: top;
  display: inline-block;
  border: 1px solid grey;
  width: 200px;
  margin: .5em;
}

.title {
  background-color: lightgray;
  padding: 0.5em;
  border-bottom: 1px solid black;
}

/* Ajoutez le sélecteur CSS approprié ici pour créer une solution de secours pour le slot nommé "title". */
q\\:title {
  content: 'Solution secours titre';
  color: red;
}

.body {
  padding: 0.5em;
}

/* Ajoutez le sélecteur CSS approprié ici pour créer une solution de secours pour le slot nommé "body" */
q\\:body {
  content: 'Solution secours corps';
  color: orange;
}
`;
