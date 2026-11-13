# Mes-4-oracles
Appli tarot 


## Gestion des clés Gemini

La page `cle-api.html` permet d'enregistrer une clé commune et, facultativement, une clé individuelle pour chacun des six oracles. Une clé individuelle est prioritaire pour son oracle uniquement ; si le champ individuel est vide, la clé commune est utilisée. Les clés sont stockées dans le `localStorage` du navigateur et ne sont pas incluses dans les fichiers publiés. Le modèle Gemini reste indépendant par oracle.
