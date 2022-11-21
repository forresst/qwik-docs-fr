/* eslint-disable no-console */
import { component$, useStore, Resource, useResource$ } from '@builder.io/qwik';

export default component$(() => {
  const github = useStore({
    org: 'BuilderIO',
  });

  // Utilisez la fonction useResource$() pour définir la manière dont les données sont récupérées sur le serveur.
  // Voir l'exemple de récupération des données dans le texte de gauche.
  const reposResource = useResource$<string[]>(({ track, cleanup }) => {
    // Nous avons besoin d'un moyen de relancer la recherche de données chaque fois que `github.org` change.
    // Utilisez `track` pour déclencher la ré-exécution de cette fonction de récupération de données.
    track(() => github.org);

    // Une bonne pratique consiste à utiliser `AbortController` pour interrompre la récupération des données si
    // une nouvelle requête arrive. Nous créons un nouveau `AbortController` et nous enregistrons une fonction `cleanup`.
    // qui sera appelée lorsque cette fonction sera ré-exécutée.
    const controller = new AbortController();
    cleanup(() => controller.abort());

    // Récupére les données et renvoie les promesses.
    return getRepositories(github.org, controller);
  });

  console.log('Render');
  return (
    <div>
      <span>
        Nom d'utilisateur GitHub :
        <input
          value={github.org}
          onInput$={(ev) => (github.org = (ev.target as HTMLInputElement).value)}
        />
      </span>
      <div>
        {/* Utilisez <Resource> pour afficher les données de la fonction useResource$(). */}
        {/* Pour vous aider, voici une fonction callback pour afficher les données lors de la résolution. */}
        {/* (repos) => (
            <ul>
              {repos.map((repo) => (
                <li>
                  <a href={`https://github.com/${github.org}/${repo}`}>{repo}</a>
                </li>
              ))}
            </ul>
          ) */}
      </div>
    </div>
  );
});

export async function getRepositories(
  username: string,
  controller?: AbortController
): Promise<string[]> {
  console.log('FETCH', `https://api.github.com/users/${username}/repos`);
  const resp = await fetch(`https://api.github.com/users/${username}/repos`, {
    signal: controller?.signal,
  });
  console.log('FETCH resolved');
  const json = await resp.json();
  return Array.isArray(json)
    ? json.map((repo: { name: string }) => repo.name)
    : Promise.reject(json);
}
