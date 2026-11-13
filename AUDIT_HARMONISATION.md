# Audit et harmonisation — Les six oracles

## Fonctionnalités
- Les six pages conservent leurs jeux, leurs tirages, leurs analyses IA et leur historique existants.
- L’Astrologie et les Runes disposent maintenant d’une analyse symbolique locale autonome, sans clé Gemini ni connexion, en plus de leur analyse IA.
- Les analyses locales Astrologie/Runes sont lisibles par le moteur vocal commun déjà présent dans cette version.
- Les clés Gemini restent locales au navigateur et ne sont pas intégrées à l’archive.
- Le service worker reçoit un identifiant de cache renouvelé.

## Limites de validation
Le code a été inspecté statiquement. La validité des clés, les quotas Gemini, les voix installées sur Android et les interactions réelles dans Chrome doivent être confirmés sur l’appareil. Les interprétations locales sont des lectures symboliques fondées sur les mots-clés présents dans les données de chaque jeu ; elles ne prétendent pas remplacer l’analyse IA approfondie.
