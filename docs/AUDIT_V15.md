# Audit technique V15.0 — Le Sanctuaire

Date : 15 novembre 2026  
Branche auditée : `V15.0`  
Commit de référence : `d40fa78e75915862053c40215bd6bf76a62f069b`

## Périmètre du premier passage

Inventaire GitHub de l'arborescence complète, lecture des routes, composants d'oracles, types partagés, feuilles de style, configurations de build et fichiers de données.

## État des six jeux

| Oracle | Cartes dans les données | Page / composant |
|---|---:|---|
| Tarot | 78 | Page dédiée |
| Belline | 53 | Page dédiée |
| Grand Lenormand | 54 | Composant symbolique partagé |
| Astrologie | 34 | Composant symbolique partagé |
| Runes | 24 | Composant symbolique partagé |
| Portes | 46 | Composant symbolique partagé |

Les identifiants des jeux JSON Tarot, Belline, Lenormand et Astrologie sont uniques dans les données inspectées. Les 24 runes et 46 portes ont également des identifiants et numéros uniques et continus. Les 24 fichiers image des runes sont bien présents dans `public/assets/` (ce point est vérifié dans l'arbre GitHub actuel).

## Anomalies et risques relevés

### P0 — Publication / déploiement
- `.github/workflows/deploy.yml` ne déclenche le déploiement automatique que sur `refonte-zero`.
- La branche `V15.0` n'est pas dans ce déclencheur. Ne pas ajouter V15.0 au déploiement automatique sans décision explicite : cela pourrait publier prématurément la refonte sur GitHub Pages.
- Le build TypeScript/Vite de V15.0 n'a pas encore été exécuté dans cet audit.

### P1 — Normalisation fonctionnelle
- Tarot et Belline ont chacun leur propre implémentation de préparation, sélection, révélation, analyse locale, Gemini, historique et voix.
- Lenormand, Astrologie, Runes et Portes partagent `SymbolicOraclePage.tsx`.
- Cette séparation entraîne de la duplication et des comportements qui peuvent diverger. Objectif recommandé : extraire un moteur commun (tirage, positions, historique, voix, client Gemini, erreurs) et conserver des configurations propres à chaque oracle pour les règles éditoriales et les jeux de cartes.
- Les six clés Gemini et historiques sont actuellement stockés sous des clés locales distinctes par oracle dans les pages dédiées/partagées. Le panneau « Réglages » de la page d'accueil utilise d'autres clés globales et indique lui-même que les connexions seront raccordées plus tard : il ne pilote donc pas réellement les six pages.
- Les composants sont fortement minifiés/compactés (plusieurs milliers de caractères sur une seule ligne). Cela complique la maintenance, la revue et la détection de régressions.
- La page Portes hérite du libellé automatique « CINQUIÈME ORACLE · 24 RUNES » du composant partagé. Il faut un numéro et un libellé spécifiques par oracle.
- Les réglages IA, le format d'appel Gemini et la gestion des modèles sont dupliqués entre les pages ; à normaliser sans perdre l'indépendance des clés par oracle.

### P1 — Qualité et sécurité de rendu
- Les pages symboliques et Belline rendent le texte Gemini avec `dangerouslySetInnerHTML`. Le code possède un échappement Markdown, à vérifier et centraliser avant refonte ; le rendu en texte React ou un parseur contrôlé serait préférable.
- La navigation de la page d'accueil utilise des cartes cliquables sur des éléments `article` ; vérifier l'accessibilité clavier et les rôles sémantiques.
- Le panneau d'accueil « carnet intérieur » est encore une présentation « bientôt » et n'est pas un historique consolidé des six oracles.

### P2 — Ressources et doublons
- L'arborescence contient 549 fichiers, dont 333 sous `public/assets/`.
- 221 groupes de blobs identiques ont été relevés par SHA Git. Une grande partie correspond à des copies d'images entre la racine du dépôt et `public/assets/`, ainsi qu'à des alias d'images.
- Aucun doublon n'a été supprimé : il faut d'abord rechercher toutes les références, notamment dans les pages HTML autonomes et les anciens prototypes.
- Les alias Astrologie `carte-01.png` à `carte-34.png` et les noms descriptifs `01-belier.png` à `34-maison-12.png` sont des contenus identiques. Ne pas en supprimer un jeu avant vérification des références.
- Le fichier autonome `Grand_Lenormand_54_CARTES_AUTONOME.html` pèse environ 6,35 Mo. Décider s'il reste une livraison autonome nécessaire ou s'il doit être placé dans une zone d'archives.

## Architecture cible proposée

1. Un shell visuel commun aux six oracles : en-tête, navigation inter-oracles, navigation des étapes, panneaux, boutons, typographie, palette et responsive.
2. Un moteur de tirage commun : sélection manuelle, limites de tirage, positions, orientation, révélation, réinitialisation et validation.
3. Un moteur d'interprétation commun : analyse locale par adaptateur éditorial, appel Gemini commun, choix de modèle, erreurs, annulation et progression.
4. Un stockage commun versionné, cloisonné par oracle : clés API indépendantes, modèles, historiques et préférences.
5. Des configurations spécifiques à chaque oracle : nombre de cartes, positions, images, dos, règles de lecture et textes.
6. Un registre central des ressources avec contrôle automatisé des chemins d'images et des fichiers manquants.
7. Des contrôles de qualité : TypeScript, build Vite, tests des six routes, tests des cardinalités/identifiants, tests de chemins d'images et revue responsive/accessibilité.

## Ordre d'exécution recommandé

1. Corriger les métadonnées de Portes et établir une configuration explicite des six oracles.
2. Contrôler automatiquement toutes les images référencées par les six jeux.
3. Extraire les fonctions communes sans modifier les règles éditoriales.
4. Harmoniser les composants et les styles.
5. Reconnecter proprement le panneau global aux réglages par oracle, sans fusionner les clés.
6. Ajouter des tests et exécuter le build sur V15.0.
7. Nettoyer/archiver les doublons uniquement après preuve d'absence de références.
8. Déployer seulement après validation et décision explicite.

## Limites de ce premier passage

Aucun fichier applicatif n'a été supprimé ou remplacé. Aucun test navigateur n'a été effectué. Le rapport documente des constats statiques à partir des fichiers GitHub ; il ne constitue pas une validation d'exécution.

## Mise en œuvre V15 — refonte structurelle

### Modifications réalisées
- Les six pages d'oracles utilisent maintenant le même composant fonctionnel `SymbolicOraclePage`. Tarot et Belline ne conservent plus deux moteurs de tirage autonomes : leurs pages sont devenues de simples configurations qui injectent leur jeu de cartes, leur titre, leur description et leurs domaines.
- Le moteur partagé gère désormais les six jeux : préparation, choix manuel, révélation, orientation, analyse locale, interprétation Gemini, historique, lecture vocale et réglages par oracle.
- Les métadonnées de l'en-tête distinguent explicitement les six traditions, y compris Portes (sixième oracle, 46 portes).
- Les résolveurs d'images Tarot et Belline ont été intégrés au composant partagé ; les autres résolveurs existants ont été conservés.
- Les historiques Tarot et Belline continuent d'utiliser leurs anciennes clés locales `.history.v1` : les tirages enregistrés ne sont pas abandonnés par la migration.
- Les réponses Gemini sont maintenant rendues comme texte React échappé dans le composant partagé ; suppression du rendu HTML injecté pour ce contenu.
- La page d'accueil utilise des liens accessibles au clavier pour ouvrir les six oracles.
- Le carnet intérieur agrège les historiques locaux des six oracles.
- Le panneau de réglages de la page d'accueil renvoie vers les réglages individuels de chaque oracle, sans prétendre stocker une clé globale active.
- Ajout de `.github/workflows/validate-v15.yml` : validation TypeScript/Vite sur la branche V15.0 sans publier GitHub Pages.
- Suppression de 187 copies d'images à la racine du dépôt, dont les mêmes fichiers existent dans `public/assets/`. Les chemins réellement utilisés par l'application restent dans `public/assets/`.

### Doublons volontairement conservés
- 34 paires d'images Astrologie sous les noms descriptifs (`01-belier.png`, etc.) et sous les anciens alias (`carte-01.png`, etc.) restent identiques.
- Les alias ne sont pas supprimés dans cette passe : l'ancien fichier HTML autonome Lenormand et les prototypes historiques n'ont pas pu être intégralement inspectés (le HTML autonome de 6,35 Mo n'est pas restitué par l'API de lecture). La suppression sans preuve de non-référence pourrait casser une ancienne version autonome.
- Les 187 suppressions concernent uniquement des copies binaires de fichiers racine ; aucune ressource correspondante dans `public/assets/` n'a été supprimée.

### Validation
- Le workflow GitHub Actions `Validate V15.0` a réussi sur le commit `9ae9f22b9c1edcb8a640db79d762a6aa912cd7f6` : `npm install` et `npm run build` (TypeScript + Vite) terminés avec succès.
- Un commit ultérieur a supprimé uniquement les copies d'images racine ; aucune source de l'application n'a changé depuis le build réussi.
- Pas de test navigateur automatisé ni de test visuel réel effectué à ce stade.
- Le workflow de validation ne déploie pas le site. Le workflow GitHub Pages existant reste limité à `refonte-zero`, afin de ne pas publier V15.0 avant validation visuelle et décision explicite.
