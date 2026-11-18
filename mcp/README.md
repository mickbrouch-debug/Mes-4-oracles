# Le Sanctuaire — ChatGPT App (V17.5)

Cette branche ajoute une application ChatGPT basée sur le **Model Context Protocol (MCP) et MCP Apps UI**. Elle ne remplace pas le site ni l'APK.

## Fonctions initiales

- Six jeux de cartes : Tarot (78), Belline (53), Grand Lenormand (54), Astrologie (34), Runes (24), Portes (46).
- Sélection des cartes par l'utilisateur dans le widget ; aucun tirage automatique.
- Choix droite / renversée et position facultative pour chaque carte.
- Outil MCP qui renvoie les significations, mots-clés et conseils issus des données de la branche V17.4.
- ChatGPT réalise ensuite l'interprétation à partir des cartes effectivement sélectionnées. Aucune clé Gemini n'est requise dans cette intégration initiale.

## Outils MCP

- `sanctuaire_catalogue` : ouvre le widget et annonce les six oracles.
- `sanctuaire_lister_cartes` : renvoie le jeu complet d'un oracle.
- `sanctuaire_preparer_tirage` : prépare les cartes choisies, sans en ajouter ni les tirer au hasard.

## Hébergement

Le serveur MCP doit être hébergé sur un service Node/Docker avec une URL HTTPS stable. GitHub Pages seul ne peut pas héberger ce serveur MCP.

Un blueprint Render est fourni (`render.yaml`). Déployer ce dépôt/branche dans Render crée un service Docker. L'URL MCP finale sera `https://<domaine-fourni-par-render>/mcp`. La route `/` est un contrôle de santé.

## Connexion dans ChatGPT

1. Déployer le service Render et attendre que le contrôle de santé réponde.
2. Dans ChatGPT, ouvrir **Paramètres → Applications et connecteurs → Paramètres avancés**, puis activer le mode développeur si disponible.
3. Créer une application personnalisée et renseigner l'URL HTTPS terminée par `/mcp`.
4. Tester `sanctuaire_catalogue`, choisir un oracle, sélectionner manuellement les cartes et préparer le tirage.
5. Demander à ChatGPT l'interprétation du tirage. Actualiser/reconnecter l'application après les modifications des outils ou métadonnées.

## Développement local

Node.js 22.6+ :

```bash
npm install
npm run mcp:start
```

Serveur local : `http://localhost:8787/mcp`. Pour tester depuis ChatGPT, exposer le port avec un tunnel HTTPS, puis utiliser l'URL publique + `/mcp`.

## Limites connues de cette première intégration

- Le widget ChatGPT est une interface dédiée de sélection manuelle ; il ne réutilise pas encore toute l'interface React de l'APK/site.
- La synthèse vocale native Android et la dictée du site ne sont pas disponibles dans un widget ChatGPT. La lecture vocale peut être assurée par les fonctions de conversation de ChatGPT.
- Les historiques locaux de l'APK/site ne sont pas synchronisés avec ChatGPT.
- Cette branche est un prototype technique à tester dans ChatGPT avant toute soumission publique à l'annuaire.
