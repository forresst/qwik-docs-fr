# Le site des docs de Qwik en français ⚡️

## Lancez localement la documentation traduite

### 1. Prérequis

- `git` : git doit être installé sur votre machine.
- `NodeJs` : NodeJs doit être installé sur votre machine. A noter que NodeJs est pré-installé avec le gestionnaire de packages `npm`
- `pnpm` : L'équipe de Qwik utilise le gestionnaire de packages `pnpm`, veillez à ce que `pnpm` soit installé. Vous pouvez l'installer en utilisant `npm`:

```shell
npm install -g pnpm
```

### 2. Cloner ce dépôt en local

Tout d'abord, veuillez cloner ce dépôt sur votre machine avec git :

```shell
git clone https://github.com/forresst/qwik-docs-fr.git
```

### 3. Installer les dépendances

Déplacez vous dans le répertoire `qwik-docs-fr` :

```shell
cd qwik-docs-fr
```

Puis installez les dépendances avec `pnpm` :

```shell
pnpm install
```

### 4. Lancer localement en mode développement

Pour lancer localement le site  traduit, veuillez exécuter la commande suivante :

```shell
pnpm start
```

Cela devrait ouvrir une page sur votre navigateur à l'adresse [`http://localhost:3000/`](http://localhost:3000/)

> REMARQUE : La page d'accueil de Qwik n'est pas traduite pour l'instant, mais en naviguant, vous aurez la traduction pour toutes les autres pages

## Problèmes connus

- Le lancement localement du site ne fonctionne pas si vous utiliser un vpn. Veuillez désactiver votre vpn pour pouvoir l'utiliser