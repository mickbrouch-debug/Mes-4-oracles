# Le Sanctuaire des Oracles — V11

Application statique progressive (PWA), développée en TypeScript avec Web Components natifs.

## Architecture
- `app-v11.ts` : source TypeScript de l'application.
- `app-v11.js` : JavaScript compilé prêt à déployer.
- `app-v11.css` : interface principale, responsive.
- `legacy-v11.css` : thème des ateliers historiques, injecté après leur chargement.
- Les pages HTML des six oracles, de la lecture croisée et des réglages API conservent les moteurs fonctionnels existants.

## Déploiement
Les fichiers sont prévus pour être placés ensemble à la racine du dépôt GitHub Pages. Aucun serveur personnel, outil de build ou CDN n'est requis sur le site publié.

La compilation TypeScript locale se fait avec :

```sh
tsc --target ES2022 --lib DOM,ES2022 --module none --skipLibCheck --strict false --outFile app-v11.js app-v11.ts
```
