# Les 6 Oracles — V6.0 (base nettoyée)

Cette version est une base de déploiement nettoyée, préparée à partir de l’archive fournie.

## Pages principales
- index.html : accueil et accès aux six oracles
- tarot-78.html : Tarot des 78 arcanes
- belline.html : Oracle de Belline (53 cartes)
- lenormand-54.html : Grand Lenormand (54 cartes)
- portes-intuition.html : Portes de l’Intuition (46 portes)
- astrologie.html : Oracle astrologique
- runes.html : Runes nordiques
- analyse-croisee.html : analyse croisée
- cle-api.html : gestion des clés API

## Installation GitHub
1. Créer une nouvelle branche nommée V6.0 à partir de main, et non de V5.
2. Décompresser les trois archives CORE-PARTIE-01, 02 et 03.
3. Téléverser leur contenu directement à la racine de la branche V6.0, dans trois lots successifs.
4. Ne pas téléverser le dossier parent ni déplacer les fichiers dans un sous-dossier.

Pourquoi partir de main ? La branche main contient 27 fichiers, contre 534 dans V5. En partant de main, on évite de réintroduire des centaines de fichiers historiques supprimés de cette base propre.

Après le téléversement, supprimer ces 12 anciens fichiers hérités de main s’ils sont encore présents :
- AUDIT_HARMONISATION.md
- AUDIT_INTERFACE_PRO_V1.md
- LISEZ-MOI-RELEASE.txt
- LISEZ-MOI.txt
- NOTES_VERSION.txt
- astrologie-illustration.svg
- belline-illustration.svg
- lenormand-illustration.svg
- portes-illustration.svg
- runes-illustration.svg
- tarot-illustration.svg
- oracle-runtime.js

## Clés Gemini
Les clés restent dans le stockage local du navigateur. Elles ne sont pas intégrées aux fichiers du dépôt. La page cle-api.html permet de gérer la clé commune et les clés individuelles ; une clé individuelle est prioritaire pour l’oracle concerné.

## Nettoyage V6.0
- Retrait des pages de sauvegarde, variantes et doublons exacts.
- Retrait des prototypes V11 non reliés aux pages actives.
- Déduplication du moteur SVG et de son bloc CSS dans les pages concernées.
- Correction du JavaScript de Belline et association des 53 images JPEG aux 53 cartes.
- Correction de l’expression régulière HTML du service worker et renouvellement du cache.
- Conservation des 78 images Tarot, 53 images Belline, 46 images Portes, des six couvertures et des éléments graphiques utilisés.

## Galerie SVG optionnelle
La galerie cartes.html et ses 287 illustrations SVG sont conservées séparément dans l’archive V6.0-GALERIE-SVG-OPTIONNELLE.zip. La galerie n’était reliée à aucune navigation de la version active et ses SVG ne sont pas utilisés par les moteurs de tirage des six pages.

## Validation
Les scripts intégrés aux neuf pages principales passent le contrôle syntaxique Node.js. Les chemins des images Tarot, Belline et Portes ont été vérifiés. Cela ne remplace pas un test réel dans Chrome Android avec les clés Gemini, la synthèse vocale, les interactions tactiles et le fonctionnement hors ligne.
