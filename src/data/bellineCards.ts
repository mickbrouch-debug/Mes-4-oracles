export type BellineSide={keywords:string;meaning:string;advice:string};
export type BellineCard={id:string;name:string;arcana:'belline';suit:string;number:number;upright:BellineSide;reversed:BellineSide};
export const BELLINE_CARDS:BellineCard[]=[
  {
    "id": "B01",
    "name": "Nativité",
    "arcana": "belline",
    "suit": "Soleil",
    "number": 1,
    "upright": {
      "keywords": "naissance, commencement, potentiel",
      "meaning": "Nativité — naissance, commencement, potentiel. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Accueillir un début et lui donner des bases solides"
    },
    "reversed": {
      "keywords": "naissance, commencement, potentiel",
      "meaning": "Nativité — expression délicate possible autour de naissance, commencement, potentiel. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Accueillir un début et lui donner des bases solides"
    }
  },
  {
    "id": "B02",
    "name": "Réussite",
    "arcana": "belline",
    "suit": "Soleil",
    "number": 2,
    "upright": {
      "keywords": "aboutissement, succès, reconnaissance",
      "meaning": "Réussite — aboutissement, succès, reconnaissance. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Définir ce que réussir signifie concrètement"
    },
    "reversed": {
      "keywords": "aboutissement, succès, reconnaissance",
      "meaning": "Réussite — expression délicate possible autour de aboutissement, succès, reconnaissance. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Définir ce que réussir signifie concrètement"
    }
  },
  {
    "id": "B03",
    "name": "Élévation",
    "arcana": "belline",
    "suit": "Soleil",
    "number": 3,
    "upright": {
      "keywords": "progression, ambition, dépassement",
      "meaning": "Élévation — progression, ambition, dépassement. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Avancer étape par étape sans brûler les étapes"
    },
    "reversed": {
      "keywords": "progression, ambition, dépassement",
      "meaning": "Élévation — expression délicate possible autour de progression, ambition, dépassement. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Avancer étape par étape sans brûler les étapes"
    }
  },
  {
    "id": "B04",
    "name": "Honneurs",
    "arcana": "belline",
    "suit": "Soleil",
    "number": 4,
    "upright": {
      "keywords": "estime, mérite, visibilité",
      "meaning": "Honneurs — estime, mérite, visibilité. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Laisser les actes parler et recevoir la reconnaissance"
    },
    "reversed": {
      "keywords": "estime, mérite, visibilité",
      "meaning": "Honneurs — expression délicate possible autour de estime, mérite, visibilité. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Laisser les actes parler et recevoir la reconnaissance"
    }
  },
  {
    "id": "B05",
    "name": "Pensée-Amitié",
    "arcana": "belline",
    "suit": "Soleil",
    "number": 5,
    "upright": {
      "keywords": "soutien, confiance, conseil",
      "meaning": "Pensée-Amitié — soutien, confiance, conseil. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Échanger avec une personne fiable"
    },
    "reversed": {
      "keywords": "soutien, confiance, conseil",
      "meaning": "Pensée-Amitié — expression délicate possible autour de soutien, confiance, conseil. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Échanger avec une personne fiable"
    }
  },
  {
    "id": "B06",
    "name": "Campagne-Santé",
    "arcana": "belline",
    "suit": "Soleil",
    "number": 6,
    "upright": {
      "keywords": "repos, nature, équilibre",
      "meaning": "Campagne-Santé — repos, nature, équilibre. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Revenir aux besoins du corps et au rythme quotidien"
    },
    "reversed": {
      "keywords": "repos, nature, équilibre",
      "meaning": "Campagne-Santé — expression délicate possible autour de repos, nature, équilibre. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Revenir aux besoins du corps et au rythme quotidien"
    }
  },
  {
    "id": "B07",
    "name": "Présents",
    "arcana": "belline",
    "suit": "Soleil",
    "number": 7,
    "upright": {
      "keywords": "cadeau, opportunité, générosité",
      "meaning": "Présents — cadeau, opportunité, générosité. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Repérer ce qui est offert sans rien présumer"
    },
    "reversed": {
      "keywords": "cadeau, opportunité, générosité",
      "meaning": "Présents — expression délicate possible autour de cadeau, opportunité, générosité. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Repérer ce qui est offert sans rien présumer"
    }
  },
  {
    "id": "B08",
    "name": "Trahison",
    "arcana": "belline",
    "suit": "Lune",
    "number": 8,
    "upright": {
      "keywords": "déception, méfiance, vérité cachée",
      "meaning": "Trahison — déception, méfiance, vérité cachée. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Vérifier les faits avant de conclure"
    },
    "reversed": {
      "keywords": "déception, méfiance, vérité cachée",
      "meaning": "Trahison — expression délicate possible autour de déception, méfiance, vérité cachée. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Vérifier les faits avant de conclure"
    }
  },
  {
    "id": "B09",
    "name": "Départ",
    "arcana": "belline",
    "suit": "Lune",
    "number": 9,
    "upright": {
      "keywords": "éloignement, voyage, transition",
      "meaning": "Départ — éloignement, voyage, transition. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Préparer le passage plutôt que le subir"
    },
    "reversed": {
      "keywords": "éloignement, voyage, transition",
      "meaning": "Départ — expression délicate possible autour de éloignement, voyage, transition. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Préparer le passage plutôt que le subir"
    }
  },
  {
    "id": "B10",
    "name": "Inconstance",
    "arcana": "belline",
    "suit": "Lune",
    "number": 10,
    "upright": {
      "keywords": "variabilité, hésitation, instabilité",
      "meaning": "Inconstance — variabilité, hésitation, instabilité. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Observer la régularité des actes dans le temps"
    },
    "reversed": {
      "keywords": "variabilité, hésitation, instabilité",
      "meaning": "Inconstance — expression délicate possible autour de variabilité, hésitation, instabilité. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Observer la régularité des actes dans le temps"
    }
  },
  {
    "id": "B11",
    "name": "Découverte",
    "arcana": "belline",
    "suit": "Lune",
    "number": 11,
    "upright": {
      "keywords": "révélation, prise de conscience, nouveauté",
      "meaning": "Découverte — révélation, prise de conscience, nouveauté. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Rester ouvert à une information nouvelle"
    },
    "reversed": {
      "keywords": "révélation, prise de conscience, nouveauté",
      "meaning": "Découverte — expression délicate possible autour de révélation, prise de conscience, nouveauté. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Rester ouvert à une information nouvelle"
    }
  },
  {
    "id": "B12",
    "name": "Eau",
    "arcana": "belline",
    "suit": "Lune",
    "number": 12,
    "upright": {
      "keywords": "émotions, intuition, sensibilité",
      "meaning": "Eau — émotions, intuition, sensibilité. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Accueillir l’émotion sans la confondre avec une preuve"
    },
    "reversed": {
      "keywords": "émotions, intuition, sensibilité",
      "meaning": "Eau — expression délicate possible autour de émotions, intuition, sensibilité. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Accueillir l’émotion sans la confondre avec une preuve"
    }
  },
  {
    "id": "B13",
    "name": "Pénates",
    "arcana": "belline",
    "suit": "Lune",
    "number": 13,
    "upright": {
      "keywords": "foyer, intimité, sécurité",
      "meaning": "Pénates — foyer, intimité, sécurité. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Clarifier ce qui rend le cadre de vie plus serein"
    },
    "reversed": {
      "keywords": "foyer, intimité, sécurité",
      "meaning": "Pénates — expression délicate possible autour de foyer, intimité, sécurité. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Clarifier ce qui rend le cadre de vie plus serein"
    }
  },
  {
    "id": "B14",
    "name": "Maladie",
    "arcana": "belline",
    "suit": "Lune",
    "number": 14,
    "upright": {
      "keywords": "fatigue, fragilité, ralentissement",
      "meaning": "Maladie — fatigue, fragilité, ralentissement. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Prendre soin de soi et solliciter un avis médical si besoin"
    },
    "reversed": {
      "keywords": "fatigue, fragilité, ralentissement",
      "meaning": "Maladie — expression délicate possible autour de fatigue, fragilité, ralentissement. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Prendre soin de soi et solliciter un avis médical si besoin"
    }
  },
  {
    "id": "B15",
    "name": "Changement",
    "arcana": "belline",
    "suit": "Mercure",
    "number": 15,
    "upright": {
      "keywords": "mutation, adaptation, mouvement",
      "meaning": "Changement — mutation, adaptation, mouvement. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Identifier ce qui peut évoluer et ce qui doit rester stable"
    },
    "reversed": {
      "keywords": "mutation, adaptation, mouvement",
      "meaning": "Changement — expression délicate possible autour de mutation, adaptation, mouvement. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Identifier ce qui peut évoluer et ce qui doit rester stable"
    }
  },
  {
    "id": "B16",
    "name": "Argent",
    "arcana": "belline",
    "suit": "Mercure",
    "number": 16,
    "upright": {
      "keywords": "ressources, valeur, échanges matériels",
      "meaning": "Argent — ressources, valeur, échanges matériels. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Vérifier les chiffres et les engagements"
    },
    "reversed": {
      "keywords": "ressources, valeur, échanges matériels",
      "meaning": "Argent — expression délicate possible autour de ressources, valeur, échanges matériels. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Vérifier les chiffres et les engagements"
    }
  },
  {
    "id": "B17",
    "name": "Intelligence",
    "arcana": "belline",
    "suit": "Mercure",
    "number": 17,
    "upright": {
      "keywords": "analyse, stratégie, discernement",
      "meaning": "Intelligence — analyse, stratégie, discernement. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Comparer les options avant de décider"
    },
    "reversed": {
      "keywords": "analyse, stratégie, discernement",
      "meaning": "Intelligence — expression délicate possible autour de analyse, stratégie, discernement. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Comparer les options avant de décider"
    }
  },
  {
    "id": "B18",
    "name": "Vol-Perte",
    "arcana": "belline",
    "suit": "Mercure",
    "number": 18,
    "upright": {
      "keywords": "manque, imprévu, prudence",
      "meaning": "Vol-Perte — manque, imprévu, prudence. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Sécuriser les biens et vérifier les informations"
    },
    "reversed": {
      "keywords": "manque, imprévu, prudence",
      "meaning": "Vol-Perte — expression délicate possible autour de manque, imprévu, prudence. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Sécuriser les biens et vérifier les informations"
    }
  },
  {
    "id": "B19",
    "name": "Entreprises",
    "arcana": "belline",
    "suit": "Mercure",
    "number": 19,
    "upright": {
      "keywords": "initiative, projet, action",
      "meaning": "Entreprises — initiative, projet, action. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Transformer l’idée en étapes mesurables"
    },
    "reversed": {
      "keywords": "initiative, projet, action",
      "meaning": "Entreprises — expression délicate possible autour de initiative, projet, action. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Transformer l’idée en étapes mesurables"
    }
  },
  {
    "id": "B20",
    "name": "Trafic",
    "arcana": "belline",
    "suit": "Mercure",
    "number": 20,
    "upright": {
      "keywords": "négociation, circulation, transaction",
      "meaning": "Trafic — négociation, circulation, transaction. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Préciser les conditions de l’échange"
    },
    "reversed": {
      "keywords": "négociation, circulation, transaction",
      "meaning": "Trafic — expression délicate possible autour de négociation, circulation, transaction. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Préciser les conditions de l’échange"
    }
  },
  {
    "id": "B21",
    "name": "Nouvelle",
    "arcana": "belline",
    "suit": "Mercure",
    "number": 21,
    "upright": {
      "keywords": "message, annonce, information",
      "meaning": "Nouvelle — message, annonce, information. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Attendre de disposer du contenu exact avant d’interpréter"
    },
    "reversed": {
      "keywords": "message, annonce, information",
      "meaning": "Nouvelle — expression délicate possible autour de message, annonce, information. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Attendre de disposer du contenu exact avant d’interpréter"
    }
  },
  {
    "id": "B22",
    "name": "Plaisirs",
    "arcana": "belline",
    "suit": "Vénus",
    "number": 22,
    "upright": {
      "keywords": "joie, détente, plaisir",
      "meaning": "Plaisirs — joie, détente, plaisir. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Faire une place à ce qui nourrit la joie sans excès"
    },
    "reversed": {
      "keywords": "joie, détente, plaisir",
      "meaning": "Plaisirs — expression délicate possible autour de joie, détente, plaisir. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Faire une place à ce qui nourrit la joie sans excès"
    }
  },
  {
    "id": "B23",
    "name": "Paix",
    "arcana": "belline",
    "suit": "Vénus",
    "number": 23,
    "upright": {
      "keywords": "apaisement, conciliation, harmonie",
      "meaning": "Paix — apaisement, conciliation, harmonie. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Rechercher une solution qui respecte les limites de chacun"
    },
    "reversed": {
      "keywords": "apaisement, conciliation, harmonie",
      "meaning": "Paix — expression délicate possible autour de apaisement, conciliation, harmonie. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Rechercher une solution qui respecte les limites de chacun"
    }
  },
  {
    "id": "B24",
    "name": "Union",
    "arcana": "belline",
    "suit": "Vénus",
    "number": 24,
    "upright": {
      "keywords": "alliance, rapprochement, partenariat",
      "meaning": "Union — alliance, rapprochement, partenariat. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Évaluer la réciprocité et les engagements"
    },
    "reversed": {
      "keywords": "alliance, rapprochement, partenariat",
      "meaning": "Union — expression délicate possible autour de alliance, rapprochement, partenariat. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Évaluer la réciprocité et les engagements"
    }
  },
  {
    "id": "B25",
    "name": "Famille",
    "arcana": "belline",
    "suit": "Vénus",
    "number": 25,
    "upright": {
      "keywords": "liens, racines, responsabilités",
      "meaning": "Famille — liens, racines, responsabilités. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Nommer les besoins et les rôles de chacun"
    },
    "reversed": {
      "keywords": "liens, racines, responsabilités",
      "meaning": "Famille — expression délicate possible autour de liens, racines, responsabilités. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Nommer les besoins et les rôles de chacun"
    }
  },
  {
    "id": "B26",
    "name": "Amour",
    "arcana": "belline",
    "suit": "Vénus",
    "number": 26,
    "upright": {
      "keywords": "affection, attirance, attachement",
      "meaning": "Amour — affection, attirance, attachement. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Distinguer le désir, les paroles et les actes"
    },
    "reversed": {
      "keywords": "affection, attirance, attachement",
      "meaning": "Amour — expression délicate possible autour de affection, attirance, attachement. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Distinguer le désir, les paroles et les actes"
    }
  },
  {
    "id": "B27",
    "name": "Table",
    "arcana": "belline",
    "suit": "Vénus",
    "number": 27,
    "upright": {
      "keywords": "convivialité, partage, rencontre",
      "meaning": "Table — convivialité, partage, rencontre. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Créer un espace simple pour dialoguer"
    },
    "reversed": {
      "keywords": "convivialité, partage, rencontre",
      "meaning": "Table — expression délicate possible autour de convivialité, partage, rencontre. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Créer un espace simple pour dialoguer"
    }
  },
  {
    "id": "B28",
    "name": "Passions",
    "arcana": "belline",
    "suit": "Vénus",
    "number": 28,
    "upright": {
      "keywords": "intensité, désir, impulsion",
      "meaning": "Passions — intensité, désir, impulsion. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Canaliser l’intensité et respecter le consentement"
    },
    "reversed": {
      "keywords": "intensité, désir, impulsion",
      "meaning": "Passions — expression délicate possible autour de intensité, désir, impulsion. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Canaliser l’intensité et respecter le consentement"
    }
  },
  {
    "id": "B29",
    "name": "Méchanceté",
    "arcana": "belline",
    "suit": "Mars",
    "number": 29,
    "upright": {
      "keywords": "hostilité, paroles blessantes, tension",
      "meaning": "Méchanceté — hostilité, paroles blessantes, tension. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Poser des limites sans alimenter l’escalade"
    },
    "reversed": {
      "keywords": "hostilité, paroles blessantes, tension",
      "meaning": "Méchanceté — expression délicate possible autour de hostilité, paroles blessantes, tension. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Poser des limites sans alimenter l’escalade"
    }
  },
  {
    "id": "B30",
    "name": "Procès",
    "arcana": "belline",
    "suit": "Mars",
    "number": 30,
    "upright": {
      "keywords": "conflit, arbitrage, responsabilité",
      "meaning": "Procès — conflit, arbitrage, responsabilité. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Documenter les faits et chercher conseil si nécessaire"
    },
    "reversed": {
      "keywords": "conflit, arbitrage, responsabilité",
      "meaning": "Procès — expression délicate possible autour de conflit, arbitrage, responsabilité. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Documenter les faits et chercher conseil si nécessaire"
    }
  },
  {
    "id": "B31",
    "name": "Despotisme",
    "arcana": "belline",
    "suit": "Mars",
    "number": 31,
    "upright": {
      "keywords": "contrôle, autorité, domination",
      "meaning": "Despotisme — contrôle, autorité, domination. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Repérer les rapports de force et préserver son autonomie"
    },
    "reversed": {
      "keywords": "contrôle, autorité, domination",
      "meaning": "Despotisme — expression délicate possible autour de contrôle, autorité, domination. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Repérer les rapports de force et préserver son autonomie"
    }
  },
  {
    "id": "B32",
    "name": "Ennemis",
    "arcana": "belline",
    "suit": "Mars",
    "number": 32,
    "upright": {
      "keywords": "opposition, rivalité, vigilance",
      "meaning": "Ennemis — opposition, rivalité, vigilance. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Identifier les obstacles réels plutôt que supposer des intentions"
    },
    "reversed": {
      "keywords": "opposition, rivalité, vigilance",
      "meaning": "Ennemis — expression délicate possible autour de opposition, rivalité, vigilance. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Identifier les obstacles réels plutôt que supposer des intentions"
    }
  },
  {
    "id": "B33",
    "name": "Pourparlers",
    "arcana": "belline",
    "suit": "Mars",
    "number": 33,
    "upright": {
      "keywords": "discussion, négociation, compromis",
      "meaning": "Pourparlers — discussion, négociation, compromis. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Préparer les points essentiels et écouter les réponses"
    },
    "reversed": {
      "keywords": "discussion, négociation, compromis",
      "meaning": "Pourparlers — expression délicate possible autour de discussion, négociation, compromis. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Préparer les points essentiels et écouter les réponses"
    }
  },
  {
    "id": "B34",
    "name": "Feu",
    "arcana": "belline",
    "suit": "Mars",
    "number": 34,
    "upright": {
      "keywords": "énergie, urgence, colère",
      "meaning": "Feu — énergie, urgence, colère. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Agir avec détermination sans précipitation"
    },
    "reversed": {
      "keywords": "énergie, urgence, colère",
      "meaning": "Feu — expression délicate possible autour de énergie, urgence, colère. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Agir avec détermination sans précipitation"
    }
  },
  {
    "id": "B35",
    "name": "Accident",
    "arcana": "belline",
    "suit": "Mars",
    "number": 35,
    "upright": {
      "keywords": "rupture, imprévu, vigilance",
      "meaning": "Accident — rupture, imprévu, vigilance. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Réduire les risques et garder une marge de sécurité"
    },
    "reversed": {
      "keywords": "rupture, imprévu, vigilance",
      "meaning": "Accident — expression délicate possible autour de rupture, imprévu, vigilance. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Réduire les risques et garder une marge de sécurité"
    }
  },
  {
    "id": "B36",
    "name": "Appui",
    "arcana": "belline",
    "suit": "Jupiter",
    "number": 36,
    "upright": {
      "keywords": "aide, protection, soutien",
      "meaning": "Appui — aide, protection, soutien. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Demander clairement le soutien dont tu as besoin"
    },
    "reversed": {
      "keywords": "aide, protection, soutien",
      "meaning": "Appui — expression délicate possible autour de aide, protection, soutien. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Demander clairement le soutien dont tu as besoin"
    }
  },
  {
    "id": "B37",
    "name": "Beauté",
    "arcana": "belline",
    "suit": "Jupiter",
    "number": 37,
    "upright": {
      "keywords": "attraction, harmonie, apparence",
      "meaning": "Beauté — attraction, harmonie, apparence. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Chercher l’équilibre entre l’image et le fond"
    },
    "reversed": {
      "keywords": "attraction, harmonie, apparence",
      "meaning": "Beauté — expression délicate possible autour de attraction, harmonie, apparence. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Chercher l’équilibre entre l’image et le fond"
    }
  },
  {
    "id": "B38",
    "name": "Héritage",
    "arcana": "belline",
    "suit": "Jupiter",
    "number": 38,
    "upright": {
      "keywords": "transmission, acquis, passé",
      "meaning": "Héritage — transmission, acquis, passé. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Faire le tri dans ce qui est reçu et ce que tu choisis de garder"
    },
    "reversed": {
      "keywords": "transmission, acquis, passé",
      "meaning": "Héritage — expression délicate possible autour de transmission, acquis, passé. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Faire le tri dans ce qui est reçu et ce que tu choisis de garder"
    }
  },
  {
    "id": "B39",
    "name": "Sagesse",
    "arcana": "belline",
    "suit": "Jupiter",
    "number": 39,
    "upright": {
      "keywords": "expérience, recul, maturité",
      "meaning": "Sagesse — expérience, recul, maturité. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Prendre le temps d’une décision réfléchie"
    },
    "reversed": {
      "keywords": "expérience, recul, maturité",
      "meaning": "Sagesse — expression délicate possible autour de expérience, recul, maturité. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Prendre le temps d’une décision réfléchie"
    }
  },
  {
    "id": "B40",
    "name": "Renommée",
    "arcana": "belline",
    "suit": "Jupiter",
    "number": 40,
    "upright": {
      "keywords": "réputation, visibilité, influence",
      "meaning": "Renommée — réputation, visibilité, influence. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Soigner la cohérence entre paroles et actions"
    },
    "reversed": {
      "keywords": "réputation, visibilité, influence",
      "meaning": "Renommée — expression délicate possible autour de réputation, visibilité, influence. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Soigner la cohérence entre paroles et actions"
    }
  },
  {
    "id": "B41",
    "name": "Hasard",
    "arcana": "belline",
    "suit": "Jupiter",
    "number": 41,
    "upright": {
      "keywords": "occasion, imprévu, ouverture",
      "meaning": "Hasard — occasion, imprévu, ouverture. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Saisir une occasion après en avoir évalué les risques"
    },
    "reversed": {
      "keywords": "occasion, imprévu, ouverture",
      "meaning": "Hasard — expression délicate possible autour de occasion, imprévu, ouverture. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Saisir une occasion après en avoir évalué les risques"
    }
  },
  {
    "id": "B42",
    "name": "Bonheur",
    "arcana": "belline",
    "suit": "Jupiter",
    "number": 42,
    "upright": {
      "keywords": "satisfaction, chance, accomplissement",
      "meaning": "Bonheur — satisfaction, chance, accomplissement. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Reconnaître les sources concrètes de bien-être"
    },
    "reversed": {
      "keywords": "satisfaction, chance, accomplissement",
      "meaning": "Bonheur — expression délicate possible autour de satisfaction, chance, accomplissement. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Reconnaître les sources concrètes de bien-être"
    }
  },
  {
    "id": "B43",
    "name": "Ruine",
    "arcana": "belline",
    "suit": "Saturne",
    "number": 43,
    "upright": {
      "keywords": "perte, épuisement, fin de cycle",
      "meaning": "Ruine — perte, épuisement, fin de cycle. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Protéger les ressources et reconstruire par étapes"
    },
    "reversed": {
      "keywords": "perte, épuisement, fin de cycle",
      "meaning": "Ruine — expression délicate possible autour de perte, épuisement, fin de cycle. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Protéger les ressources et reconstruire par étapes"
    }
  },
  {
    "id": "B44",
    "name": "Fatalité",
    "arcana": "belline",
    "suit": "Saturne",
    "number": 44,
    "upright": {
      "keywords": "contrainte, limite, acceptation",
      "meaning": "Fatalité — contrainte, limite, acceptation. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Distinguer ce qui échappe au contrôle de ce qui reste possible"
    },
    "reversed": {
      "keywords": "contrainte, limite, acceptation",
      "meaning": "Fatalité — expression délicate possible autour de contrainte, limite, acceptation. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Distinguer ce qui échappe au contrôle de ce qui reste possible"
    }
  },
  {
    "id": "B45",
    "name": "Grâce",
    "arcana": "belline",
    "suit": "Saturne",
    "number": 45,
    "upright": {
      "keywords": "indulgence, pardon, seconde chance",
      "meaning": "Grâce — indulgence, pardon, seconde chance. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Accorder une chance sans renoncer à ses limites"
    },
    "reversed": {
      "keywords": "indulgence, pardon, seconde chance",
      "meaning": "Grâce — expression délicate possible autour de indulgence, pardon, seconde chance. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Accorder une chance sans renoncer à ses limites"
    }
  },
  {
    "id": "B46",
    "name": "Cloître",
    "arcana": "belline",
    "suit": "Saturne",
    "number": 46,
    "upright": {
      "keywords": "retrait, solitude, réflexion",
      "meaning": "Cloître — retrait, solitude, réflexion. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Prendre du recul sans couper les liens utiles"
    },
    "reversed": {
      "keywords": "retrait, solitude, réflexion",
      "meaning": "Cloître — expression délicate possible autour de retrait, solitude, réflexion. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Prendre du recul sans couper les liens utiles"
    }
  },
  {
    "id": "B47",
    "name": "Retard",
    "arcana": "belline",
    "suit": "Saturne",
    "number": 47,
    "upright": {
      "keywords": "attente, délai, maturation",
      "meaning": "Retard — attente, délai, maturation. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Réviser le calendrier et avancer sur ce qui dépend de toi"
    },
    "reversed": {
      "keywords": "attente, délai, maturation",
      "meaning": "Retard — expression délicate possible autour de attente, délai, maturation. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Réviser le calendrier et avancer sur ce qui dépend de toi"
    }
  },
  {
    "id": "B48",
    "name": "Obstacles",
    "arcana": "belline",
    "suit": "Saturne",
    "number": 48,
    "upright": {
      "keywords": "freins, complications, résistance",
      "meaning": "Obstacles — freins, complications, résistance. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Décomposer le problème en étapes abordables"
    },
    "reversed": {
      "keywords": "freins, complications, résistance",
      "meaning": "Obstacles — expression délicate possible autour de freins, complications, résistance. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Décomposer le problème en étapes abordables"
    }
  },
  {
    "id": "B49",
    "name": "Épreuves",
    "arcana": "belline",
    "suit": "Saturne",
    "number": 49,
    "upright": {
      "keywords": "effort, endurance, apprentissage",
      "meaning": "Épreuves — effort, endurance, apprentissage. Cette carte invite à explorer ce thème dans le contexte de la question, sans en faire une certitude.",
      "advice": "Mobiliser ses ressources et demander de l’aide si nécessaire"
    },
    "reversed": {
      "keywords": "effort, endurance, apprentissage",
      "meaning": "Épreuves — expression délicate possible autour de effort, endurance, apprentissage. Cela invite à la prudence et à confronter les impressions aux faits.",
      "advice": "Mobiliser ses ressources et demander de l’aide si nécessaire"
    }
  },
  {
    "id": "B50",
    "name": "Étoile de l’Homme",
    "arcana": "speciale",
    "suit": "Cartes spéciales",
    "number": 50,
    "upright": {
      "keywords": "repère masculin, personne significative, rôle actif",
      "meaning": "Étoile de l’Homme évoque repère masculin, personne significative, rôle actif. À lire comme un symbole de réflexion, pas comme une garantie surnaturelle.",
      "advice": "Préciser de qui ou de quoi cette carte parle dans le contexte réel"
    },
    "reversed": {
      "keywords": "repère masculin, personne significative, rôle actif",
      "meaning": "Étoile de l’Homme invite à examiner avec nuance repère masculin, personne significative, rôle actif, sans conclure trop vite.",
      "advice": "Préciser de qui ou de quoi cette carte parle dans le contexte réel"
    }
  },
  {
    "id": "B51",
    "name": "Étoile de la Femme",
    "arcana": "speciale",
    "suit": "Cartes spéciales",
    "number": 51,
    "upright": {
      "keywords": "repère féminin, personne significative, rôle réceptif",
      "meaning": "Étoile de la Femme évoque repère féminin, personne significative, rôle réceptif. À lire comme un symbole de réflexion, pas comme une garantie surnaturelle.",
      "advice": "Préciser de qui ou de quoi cette carte parle dans le contexte réel"
    },
    "reversed": {
      "keywords": "repère féminin, personne significative, rôle réceptif",
      "meaning": "Étoile de la Femme invite à examiner avec nuance repère féminin, personne significative, rôle réceptif, sans conclure trop vite.",
      "advice": "Préciser de qui ou de quoi cette carte parle dans le contexte réel"
    }
  },
  {
    "id": "B52",
    "name": "Destinée",
    "arcana": "speciale",
    "suit": "Cartes spéciales",
    "number": 52,
    "upright": {
      "keywords": "orientation, carrefour, fil conducteur",
      "meaning": "Destinée évoque orientation, carrefour, fil conducteur. À lire comme un symbole de réflexion, pas comme une garantie surnaturelle.",
      "advice": "Considérer la direction possible sans la confondre avec un destin immuable"
    },
    "reversed": {
      "keywords": "orientation, carrefour, fil conducteur",
      "meaning": "Destinée invite à examiner avec nuance orientation, carrefour, fil conducteur, sans conclure trop vite.",
      "advice": "Considérer la direction possible sans la confondre avec un destin immuable"
    }
  },
  {
    "id": "B53",
    "name": "Carte Bleue",
    "arcana": "speciale",
    "suit": "Cartes spéciales",
    "number": 53,
    "upright": {
      "keywords": "protection symbolique, respiration, ouverture",
      "meaning": "Carte Bleue évoque protection symbolique, respiration, ouverture. À lire comme un symbole de réflexion, pas comme une garantie surnaturelle.",
      "advice": "Accueillir un espace de calme tout en gardant son discernement"
    },
    "reversed": {
      "keywords": "protection symbolique, respiration, ouverture",
      "meaning": "Carte Bleue invite à examiner avec nuance protection symbolique, respiration, ouverture, sans conclure trop vite.",
      "advice": "Accueillir un espace de calme tout en gardant son discernement"
    }
  }
];
