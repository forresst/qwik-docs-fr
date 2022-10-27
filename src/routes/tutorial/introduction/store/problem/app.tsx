import { component$ } from '@builder.io/qwik';

export const App = component$(() => {
  // `github` est simplement un objet constant.
  // Convertissez-le en un store qui peut être sérialisé en JSON lors de la mise en pause de l'application.
  const github = {
    org: 'BuilderIO',
    repos: ['qwik', 'partytown'] as string[] | null,
  };

  return (
    <div>
      <span>
        Nom d'utilisateur GitHub :
        <input value={github.org} />
      </span>
      <div>
        {github.repos ? (
          <ul>
            {github.repos.map((repo) => (
              <li>
                <a href={`https://github.com/${github.org}/${repo}`}>
                  {github.org}/{repo}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          'chargement...'
        )}
      </div>
    </div>
  );
});
