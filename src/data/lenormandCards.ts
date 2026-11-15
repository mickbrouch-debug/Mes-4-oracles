export type LenormandSide={keywords:string;meaning:string;advice:string};
export type LenormandCard={id:string;name:string;arcana:string;suit:string;number:number;icon:string;keywords:string;upright:LenormandSide;reversed:LenormandSide};
export const LENORMAND_CARDS:LenormandCard[]=[
  {
    "id": "LN01",
    "name": "As de Cœur",
    "arcana": "carte",
    "suit": "Cœur",
    "number": 1,
    "icon": "♥",
    "keywords": "commencement, unité, impulsion ; affects, liens, famille, vie relationnelle",
    "upright": {
      "keywords": "commencement, unité, impulsion ; affects, liens, famille, vie relationnelle",
      "meaning": "Le domaine affectif, les liens, l'attachement et les relations. La valeur As apporte la nuance suivante : commencement, unité, impulsion. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de commencement, unité, impulsion",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de commencement, unité, impulsion. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN02",
    "name": "Deux de Cœur",
    "arcana": "carte",
    "suit": "Cœur",
    "number": 2,
    "icon": "♥",
    "keywords": "dualité, rencontre, choix ; affects, liens, famille, vie relationnelle",
    "upright": {
      "keywords": "dualité, rencontre, choix ; affects, liens, famille, vie relationnelle",
      "meaning": "Le domaine affectif, les liens, l'attachement et les relations. La valeur Deux apporte la nuance suivante : dualité, rencontre, choix. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de dualité, rencontre, choix",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de dualité, rencontre, choix. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN03",
    "name": "Trois de Cœur",
    "arcana": "carte",
    "suit": "Cœur",
    "number": 3,
    "icon": "♥",
    "keywords": "développement, échanges, créativité ; affects, liens, famille, vie relationnelle",
    "upright": {
      "keywords": "développement, échanges, créativité ; affects, liens, famille, vie relationnelle",
      "meaning": "Le domaine affectif, les liens, l'attachement et les relations. La valeur Trois apporte la nuance suivante : développement, échanges, créativité. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de développement, échanges, créativité",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de développement, échanges, créativité. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN04",
    "name": "Quatre de Cœur",
    "arcana": "carte",
    "suit": "Cœur",
    "number": 4,
    "icon": "♥",
    "keywords": "structure, stabilité, cadre ; affects, liens, famille, vie relationnelle",
    "upright": {
      "keywords": "structure, stabilité, cadre ; affects, liens, famille, vie relationnelle",
      "meaning": "Le domaine affectif, les liens, l'attachement et les relations. La valeur Quatre apporte la nuance suivante : structure, stabilité, cadre. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de structure, stabilité, cadre",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de structure, stabilité, cadre. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN05",
    "name": "Cinq de Cœur",
    "arcana": "carte",
    "suit": "Cœur",
    "number": 5,
    "icon": "♥",
    "keywords": "mouvement, tension, changement ; affects, liens, famille, vie relationnelle",
    "upright": {
      "keywords": "mouvement, tension, changement ; affects, liens, famille, vie relationnelle",
      "meaning": "Le domaine affectif, les liens, l'attachement et les relations. La valeur Cinq apporte la nuance suivante : mouvement, tension, changement. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de mouvement, tension, changement",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de mouvement, tension, changement. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN06",
    "name": "Six de Cœur",
    "arcana": "carte",
    "suit": "Cœur",
    "number": 6,
    "icon": "♥",
    "keywords": "ajustement, harmonie, passage ; affects, liens, famille, vie relationnelle",
    "upright": {
      "keywords": "ajustement, harmonie, passage ; affects, liens, famille, vie relationnelle",
      "meaning": "Le domaine affectif, les liens, l'attachement et les relations. La valeur Six apporte la nuance suivante : ajustement, harmonie, passage. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de ajustement, harmonie, passage",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de ajustement, harmonie, passage. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN07",
    "name": "Sept de Cœur",
    "arcana": "carte",
    "suit": "Cœur",
    "number": 7,
    "icon": "♥",
    "keywords": "réflexion, recherche, épreuve ; affects, liens, famille, vie relationnelle",
    "upright": {
      "keywords": "réflexion, recherche, épreuve ; affects, liens, famille, vie relationnelle",
      "meaning": "Le domaine affectif, les liens, l'attachement et les relations. La valeur Sept apporte la nuance suivante : réflexion, recherche, épreuve. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de réflexion, recherche, épreuve",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de réflexion, recherche, épreuve. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN08",
    "name": "Huit de Cœur",
    "arcana": "carte",
    "suit": "Cœur",
    "number": 8,
    "icon": "♥",
    "keywords": "activité, progression, maîtrise ; affects, liens, famille, vie relationnelle",
    "upright": {
      "keywords": "activité, progression, maîtrise ; affects, liens, famille, vie relationnelle",
      "meaning": "Le domaine affectif, les liens, l'attachement et les relations. La valeur Huit apporte la nuance suivante : activité, progression, maîtrise. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de activité, progression, maîtrise",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de activité, progression, maîtrise. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN09",
    "name": "Neuf de Cœur",
    "arcana": "carte",
    "suit": "Cœur",
    "number": 9,
    "icon": "♥",
    "keywords": "aboutissement, intensité, maturation ; affects, liens, famille, vie relationnelle",
    "upright": {
      "keywords": "aboutissement, intensité, maturation ; affects, liens, famille, vie relationnelle",
      "meaning": "Le domaine affectif, les liens, l'attachement et les relations. La valeur Neuf apporte la nuance suivante : aboutissement, intensité, maturation. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de aboutissement, intensité, maturation",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de aboutissement, intensité, maturation. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN10",
    "name": "Dix de Cœur",
    "arcana": "carte",
    "suit": "Cœur",
    "number": 10,
    "icon": "♥",
    "keywords": "résultat, accomplissement, transition ; affects, liens, famille, vie relationnelle",
    "upright": {
      "keywords": "résultat, accomplissement, transition ; affects, liens, famille, vie relationnelle",
      "meaning": "Le domaine affectif, les liens, l'attachement et les relations. La valeur Dix apporte la nuance suivante : résultat, accomplissement, transition. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de résultat, accomplissement, transition",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de résultat, accomplissement, transition. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN11",
    "name": "Valet de Cœur",
    "arcana": "carte",
    "suit": "Cœur",
    "number": 11,
    "icon": "♥",
    "keywords": "message, jeune énergie, apprentissage ; affects, liens, famille, vie relationnelle",
    "upright": {
      "keywords": "message, jeune énergie, apprentissage ; affects, liens, famille, vie relationnelle",
      "meaning": "Le domaine affectif, les liens, l'attachement et les relations. La valeur Valet apporte la nuance suivante : message, jeune énergie, apprentissage. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de message, jeune énergie, apprentissage",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de message, jeune énergie, apprentissage. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN12",
    "name": "Dame de Cœur",
    "arcana": "carte",
    "suit": "Cœur",
    "number": 12,
    "icon": "♥",
    "keywords": "réceptivité, influence féminine, discernement ; affects, liens, famille, vie relationnelle",
    "upright": {
      "keywords": "réceptivité, influence féminine, discernement ; affects, liens, famille, vie relationnelle",
      "meaning": "Le domaine affectif, les liens, l'attachement et les relations. La valeur Dame apporte la nuance suivante : réceptivité, influence féminine, discernement. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de réceptivité, influence féminine, discernement",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de réceptivité, influence féminine, discernement. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN13",
    "name": "Roi de Cœur",
    "arcana": "carte",
    "suit": "Cœur",
    "number": 13,
    "icon": "♥",
    "keywords": "autorité, influence masculine, décision ; affects, liens, famille, vie relationnelle",
    "upright": {
      "keywords": "autorité, influence masculine, décision ; affects, liens, famille, vie relationnelle",
      "meaning": "Le domaine affectif, les liens, l'attachement et les relations. La valeur Roi apporte la nuance suivante : autorité, influence masculine, décision. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de autorité, influence masculine, décision",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de autorité, influence masculine, décision. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN14",
    "name": "As de Carreau",
    "arcana": "carte",
    "suit": "Carreau",
    "number": 14,
    "icon": "♦",
    "keywords": "commencement, unité, impulsion ; activité, échanges, nouvelles, matière",
    "upright": {
      "keywords": "commencement, unité, impulsion ; activité, échanges, nouvelles, matière",
      "meaning": "Les échanges, les démarches, les nouvelles et les aspects matériels ou professionnels. La valeur As apporte la nuance suivante : commencement, unité, impulsion. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de commencement, unité, impulsion",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de commencement, unité, impulsion. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN15",
    "name": "Deux de Carreau",
    "arcana": "carte",
    "suit": "Carreau",
    "number": 15,
    "icon": "♦",
    "keywords": "dualité, rencontre, choix ; activité, échanges, nouvelles, matière",
    "upright": {
      "keywords": "dualité, rencontre, choix ; activité, échanges, nouvelles, matière",
      "meaning": "Les échanges, les démarches, les nouvelles et les aspects matériels ou professionnels. La valeur Deux apporte la nuance suivante : dualité, rencontre, choix. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de dualité, rencontre, choix",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de dualité, rencontre, choix. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN16",
    "name": "Trois de Carreau",
    "arcana": "carte",
    "suit": "Carreau",
    "number": 16,
    "icon": "♦",
    "keywords": "développement, échanges, créativité ; activité, échanges, nouvelles, matière",
    "upright": {
      "keywords": "développement, échanges, créativité ; activité, échanges, nouvelles, matière",
      "meaning": "Les échanges, les démarches, les nouvelles et les aspects matériels ou professionnels. La valeur Trois apporte la nuance suivante : développement, échanges, créativité. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de développement, échanges, créativité",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de développement, échanges, créativité. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN17",
    "name": "Quatre de Carreau",
    "arcana": "carte",
    "suit": "Carreau",
    "number": 17,
    "icon": "♦",
    "keywords": "structure, stabilité, cadre ; activité, échanges, nouvelles, matière",
    "upright": {
      "keywords": "structure, stabilité, cadre ; activité, échanges, nouvelles, matière",
      "meaning": "Les échanges, les démarches, les nouvelles et les aspects matériels ou professionnels. La valeur Quatre apporte la nuance suivante : structure, stabilité, cadre. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de structure, stabilité, cadre",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de structure, stabilité, cadre. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN18",
    "name": "Cinq de Carreau",
    "arcana": "carte",
    "suit": "Carreau",
    "number": 18,
    "icon": "♦",
    "keywords": "mouvement, tension, changement ; activité, échanges, nouvelles, matière",
    "upright": {
      "keywords": "mouvement, tension, changement ; activité, échanges, nouvelles, matière",
      "meaning": "Les échanges, les démarches, les nouvelles et les aspects matériels ou professionnels. La valeur Cinq apporte la nuance suivante : mouvement, tension, changement. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de mouvement, tension, changement",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de mouvement, tension, changement. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN19",
    "name": "Six de Carreau",
    "arcana": "carte",
    "suit": "Carreau",
    "number": 19,
    "icon": "♦",
    "keywords": "ajustement, harmonie, passage ; activité, échanges, nouvelles, matière",
    "upright": {
      "keywords": "ajustement, harmonie, passage ; activité, échanges, nouvelles, matière",
      "meaning": "Les échanges, les démarches, les nouvelles et les aspects matériels ou professionnels. La valeur Six apporte la nuance suivante : ajustement, harmonie, passage. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de ajustement, harmonie, passage",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de ajustement, harmonie, passage. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN20",
    "name": "Sept de Carreau",
    "arcana": "carte",
    "suit": "Carreau",
    "number": 20,
    "icon": "♦",
    "keywords": "réflexion, recherche, épreuve ; activité, échanges, nouvelles, matière",
    "upright": {
      "keywords": "réflexion, recherche, épreuve ; activité, échanges, nouvelles, matière",
      "meaning": "Les échanges, les démarches, les nouvelles et les aspects matériels ou professionnels. La valeur Sept apporte la nuance suivante : réflexion, recherche, épreuve. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de réflexion, recherche, épreuve",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de réflexion, recherche, épreuve. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN21",
    "name": "Huit de Carreau",
    "arcana": "carte",
    "suit": "Carreau",
    "number": 21,
    "icon": "♦",
    "keywords": "activité, progression, maîtrise ; activité, échanges, nouvelles, matière",
    "upright": {
      "keywords": "activité, progression, maîtrise ; activité, échanges, nouvelles, matière",
      "meaning": "Les échanges, les démarches, les nouvelles et les aspects matériels ou professionnels. La valeur Huit apporte la nuance suivante : activité, progression, maîtrise. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de activité, progression, maîtrise",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de activité, progression, maîtrise. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN22",
    "name": "Neuf de Carreau",
    "arcana": "carte",
    "suit": "Carreau",
    "number": 22,
    "icon": "♦",
    "keywords": "aboutissement, intensité, maturation ; activité, échanges, nouvelles, matière",
    "upright": {
      "keywords": "aboutissement, intensité, maturation ; activité, échanges, nouvelles, matière",
      "meaning": "Les échanges, les démarches, les nouvelles et les aspects matériels ou professionnels. La valeur Neuf apporte la nuance suivante : aboutissement, intensité, maturation. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de aboutissement, intensité, maturation",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de aboutissement, intensité, maturation. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN23",
    "name": "Dix de Carreau",
    "arcana": "carte",
    "suit": "Carreau",
    "number": 23,
    "icon": "♦",
    "keywords": "résultat, accomplissement, transition ; activité, échanges, nouvelles, matière",
    "upright": {
      "keywords": "résultat, accomplissement, transition ; activité, échanges, nouvelles, matière",
      "meaning": "Les échanges, les démarches, les nouvelles et les aspects matériels ou professionnels. La valeur Dix apporte la nuance suivante : résultat, accomplissement, transition. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de résultat, accomplissement, transition",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de résultat, accomplissement, transition. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN24",
    "name": "Valet de Carreau",
    "arcana": "carte",
    "suit": "Carreau",
    "number": 24,
    "icon": "♦",
    "keywords": "message, jeune énergie, apprentissage ; activité, échanges, nouvelles, matière",
    "upright": {
      "keywords": "message, jeune énergie, apprentissage ; activité, échanges, nouvelles, matière",
      "meaning": "Les échanges, les démarches, les nouvelles et les aspects matériels ou professionnels. La valeur Valet apporte la nuance suivante : message, jeune énergie, apprentissage. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de message, jeune énergie, apprentissage",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de message, jeune énergie, apprentissage. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN25",
    "name": "Dame de Carreau",
    "arcana": "carte",
    "suit": "Carreau",
    "number": 25,
    "icon": "♦",
    "keywords": "réceptivité, influence féminine, discernement ; activité, échanges, nouvelles, matière",
    "upright": {
      "keywords": "réceptivité, influence féminine, discernement ; activité, échanges, nouvelles, matière",
      "meaning": "Les échanges, les démarches, les nouvelles et les aspects matériels ou professionnels. La valeur Dame apporte la nuance suivante : réceptivité, influence féminine, discernement. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de réceptivité, influence féminine, discernement",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de réceptivité, influence féminine, discernement. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN26",
    "name": "Roi de Carreau",
    "arcana": "carte",
    "suit": "Carreau",
    "number": 26,
    "icon": "♦",
    "keywords": "autorité, influence masculine, décision ; activité, échanges, nouvelles, matière",
    "upright": {
      "keywords": "autorité, influence masculine, décision ; activité, échanges, nouvelles, matière",
      "meaning": "Les échanges, les démarches, les nouvelles et les aspects matériels ou professionnels. La valeur Roi apporte la nuance suivante : autorité, influence masculine, décision. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de autorité, influence masculine, décision",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de autorité, influence masculine, décision. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN27",
    "name": "As de Trèfle",
    "arcana": "carte",
    "suit": "Trèfle",
    "number": 27,
    "icon": "♣",
    "keywords": "commencement, unité, impulsion ; action, croissance, ressources, initiatives",
    "upright": {
      "keywords": "commencement, unité, impulsion ; action, croissance, ressources, initiatives",
      "meaning": "L'action, les ressources, la croissance et les initiatives. La valeur As apporte la nuance suivante : commencement, unité, impulsion. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de commencement, unité, impulsion",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de commencement, unité, impulsion. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN28",
    "name": "Deux de Trèfle",
    "arcana": "carte",
    "suit": "Trèfle",
    "number": 28,
    "icon": "♣",
    "keywords": "dualité, rencontre, choix ; action, croissance, ressources, initiatives",
    "upright": {
      "keywords": "dualité, rencontre, choix ; action, croissance, ressources, initiatives",
      "meaning": "L'action, les ressources, la croissance et les initiatives. La valeur Deux apporte la nuance suivante : dualité, rencontre, choix. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de dualité, rencontre, choix",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de dualité, rencontre, choix. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN29",
    "name": "Trois de Trèfle",
    "arcana": "carte",
    "suit": "Trèfle",
    "number": 29,
    "icon": "♣",
    "keywords": "développement, échanges, créativité ; action, croissance, ressources, initiatives",
    "upright": {
      "keywords": "développement, échanges, créativité ; action, croissance, ressources, initiatives",
      "meaning": "L'action, les ressources, la croissance et les initiatives. La valeur Trois apporte la nuance suivante : développement, échanges, créativité. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de développement, échanges, créativité",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de développement, échanges, créativité. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN30",
    "name": "Quatre de Trèfle",
    "arcana": "carte",
    "suit": "Trèfle",
    "number": 30,
    "icon": "♣",
    "keywords": "structure, stabilité, cadre ; action, croissance, ressources, initiatives",
    "upright": {
      "keywords": "structure, stabilité, cadre ; action, croissance, ressources, initiatives",
      "meaning": "L'action, les ressources, la croissance et les initiatives. La valeur Quatre apporte la nuance suivante : structure, stabilité, cadre. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de structure, stabilité, cadre",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de structure, stabilité, cadre. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN31",
    "name": "Cinq de Trèfle",
    "arcana": "carte",
    "suit": "Trèfle",
    "number": 31,
    "icon": "♣",
    "keywords": "mouvement, tension, changement ; action, croissance, ressources, initiatives",
    "upright": {
      "keywords": "mouvement, tension, changement ; action, croissance, ressources, initiatives",
      "meaning": "L'action, les ressources, la croissance et les initiatives. La valeur Cinq apporte la nuance suivante : mouvement, tension, changement. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de mouvement, tension, changement",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de mouvement, tension, changement. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN32",
    "name": "Six de Trèfle",
    "arcana": "carte",
    "suit": "Trèfle",
    "number": 32,
    "icon": "♣",
    "keywords": "ajustement, harmonie, passage ; action, croissance, ressources, initiatives",
    "upright": {
      "keywords": "ajustement, harmonie, passage ; action, croissance, ressources, initiatives",
      "meaning": "L'action, les ressources, la croissance et les initiatives. La valeur Six apporte la nuance suivante : ajustement, harmonie, passage. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de ajustement, harmonie, passage",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de ajustement, harmonie, passage. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN33",
    "name": "Sept de Trèfle",
    "arcana": "carte",
    "suit": "Trèfle",
    "number": 33,
    "icon": "♣",
    "keywords": "réflexion, recherche, épreuve ; action, croissance, ressources, initiatives",
    "upright": {
      "keywords": "réflexion, recherche, épreuve ; action, croissance, ressources, initiatives",
      "meaning": "L'action, les ressources, la croissance et les initiatives. La valeur Sept apporte la nuance suivante : réflexion, recherche, épreuve. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de réflexion, recherche, épreuve",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de réflexion, recherche, épreuve. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN34",
    "name": "Huit de Trèfle",
    "arcana": "carte",
    "suit": "Trèfle",
    "number": 34,
    "icon": "♣",
    "keywords": "activité, progression, maîtrise ; action, croissance, ressources, initiatives",
    "upright": {
      "keywords": "activité, progression, maîtrise ; action, croissance, ressources, initiatives",
      "meaning": "L'action, les ressources, la croissance et les initiatives. La valeur Huit apporte la nuance suivante : activité, progression, maîtrise. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de activité, progression, maîtrise",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de activité, progression, maîtrise. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN35",
    "name": "Neuf de Trèfle",
    "arcana": "carte",
    "suit": "Trèfle",
    "number": 35,
    "icon": "♣",
    "keywords": "aboutissement, intensité, maturation ; action, croissance, ressources, initiatives",
    "upright": {
      "keywords": "aboutissement, intensité, maturation ; action, croissance, ressources, initiatives",
      "meaning": "L'action, les ressources, la croissance et les initiatives. La valeur Neuf apporte la nuance suivante : aboutissement, intensité, maturation. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de aboutissement, intensité, maturation",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de aboutissement, intensité, maturation. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN36",
    "name": "Dix de Trèfle",
    "arcana": "carte",
    "suit": "Trèfle",
    "number": 36,
    "icon": "♣",
    "keywords": "résultat, accomplissement, transition ; action, croissance, ressources, initiatives",
    "upright": {
      "keywords": "résultat, accomplissement, transition ; action, croissance, ressources, initiatives",
      "meaning": "L'action, les ressources, la croissance et les initiatives. La valeur Dix apporte la nuance suivante : résultat, accomplissement, transition. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de résultat, accomplissement, transition",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de résultat, accomplissement, transition. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN37",
    "name": "Valet de Trèfle",
    "arcana": "carte",
    "suit": "Trèfle",
    "number": 37,
    "icon": "♣",
    "keywords": "message, jeune énergie, apprentissage ; action, croissance, ressources, initiatives",
    "upright": {
      "keywords": "message, jeune énergie, apprentissage ; action, croissance, ressources, initiatives",
      "meaning": "L'action, les ressources, la croissance et les initiatives. La valeur Valet apporte la nuance suivante : message, jeune énergie, apprentissage. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de message, jeune énergie, apprentissage",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de message, jeune énergie, apprentissage. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN38",
    "name": "Dame de Trèfle",
    "arcana": "carte",
    "suit": "Trèfle",
    "number": 38,
    "icon": "♣",
    "keywords": "réceptivité, influence féminine, discernement ; action, croissance, ressources, initiatives",
    "upright": {
      "keywords": "réceptivité, influence féminine, discernement ; action, croissance, ressources, initiatives",
      "meaning": "L'action, les ressources, la croissance et les initiatives. La valeur Dame apporte la nuance suivante : réceptivité, influence féminine, discernement. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de réceptivité, influence féminine, discernement",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de réceptivité, influence féminine, discernement. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN39",
    "name": "Roi de Trèfle",
    "arcana": "carte",
    "suit": "Trèfle",
    "number": 39,
    "icon": "♣",
    "keywords": "autorité, influence masculine, décision ; action, croissance, ressources, initiatives",
    "upright": {
      "keywords": "autorité, influence masculine, décision ; action, croissance, ressources, initiatives",
      "meaning": "L'action, les ressources, la croissance et les initiatives. La valeur Roi apporte la nuance suivante : autorité, influence masculine, décision. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de autorité, influence masculine, décision",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de autorité, influence masculine, décision. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN40",
    "name": "As de Pique",
    "arcana": "carte",
    "suit": "Pique",
    "number": 40,
    "icon": "♠",
    "keywords": "commencement, unité, impulsion ; épreuves, décisions, limites, transformation",
    "upright": {
      "keywords": "commencement, unité, impulsion ; épreuves, décisions, limites, transformation",
      "meaning": "Les défis, les décisions, les limites et les transformations. La valeur As apporte la nuance suivante : commencement, unité, impulsion. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de commencement, unité, impulsion",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de commencement, unité, impulsion. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN41",
    "name": "Deux de Pique",
    "arcana": "carte",
    "suit": "Pique",
    "number": 41,
    "icon": "♠",
    "keywords": "dualité, rencontre, choix ; épreuves, décisions, limites, transformation",
    "upright": {
      "keywords": "dualité, rencontre, choix ; épreuves, décisions, limites, transformation",
      "meaning": "Les défis, les décisions, les limites et les transformations. La valeur Deux apporte la nuance suivante : dualité, rencontre, choix. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de dualité, rencontre, choix",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de dualité, rencontre, choix. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN42",
    "name": "Trois de Pique",
    "arcana": "carte",
    "suit": "Pique",
    "number": 42,
    "icon": "♠",
    "keywords": "développement, échanges, créativité ; épreuves, décisions, limites, transformation",
    "upright": {
      "keywords": "développement, échanges, créativité ; épreuves, décisions, limites, transformation",
      "meaning": "Les défis, les décisions, les limites et les transformations. La valeur Trois apporte la nuance suivante : développement, échanges, créativité. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de développement, échanges, créativité",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de développement, échanges, créativité. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN43",
    "name": "Quatre de Pique",
    "arcana": "carte",
    "suit": "Pique",
    "number": 43,
    "icon": "♠",
    "keywords": "structure, stabilité, cadre ; épreuves, décisions, limites, transformation",
    "upright": {
      "keywords": "structure, stabilité, cadre ; épreuves, décisions, limites, transformation",
      "meaning": "Les défis, les décisions, les limites et les transformations. La valeur Quatre apporte la nuance suivante : structure, stabilité, cadre. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de structure, stabilité, cadre",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de structure, stabilité, cadre. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN44",
    "name": "Cinq de Pique",
    "arcana": "carte",
    "suit": "Pique",
    "number": 44,
    "icon": "♠",
    "keywords": "mouvement, tension, changement ; épreuves, décisions, limites, transformation",
    "upright": {
      "keywords": "mouvement, tension, changement ; épreuves, décisions, limites, transformation",
      "meaning": "Les défis, les décisions, les limites et les transformations. La valeur Cinq apporte la nuance suivante : mouvement, tension, changement. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de mouvement, tension, changement",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de mouvement, tension, changement. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN45",
    "name": "Six de Pique",
    "arcana": "carte",
    "suit": "Pique",
    "number": 45,
    "icon": "♠",
    "keywords": "ajustement, harmonie, passage ; épreuves, décisions, limites, transformation",
    "upright": {
      "keywords": "ajustement, harmonie, passage ; épreuves, décisions, limites, transformation",
      "meaning": "Les défis, les décisions, les limites et les transformations. La valeur Six apporte la nuance suivante : ajustement, harmonie, passage. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de ajustement, harmonie, passage",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de ajustement, harmonie, passage. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN46",
    "name": "Sept de Pique",
    "arcana": "carte",
    "suit": "Pique",
    "number": 46,
    "icon": "♠",
    "keywords": "réflexion, recherche, épreuve ; épreuves, décisions, limites, transformation",
    "upright": {
      "keywords": "réflexion, recherche, épreuve ; épreuves, décisions, limites, transformation",
      "meaning": "Les défis, les décisions, les limites et les transformations. La valeur Sept apporte la nuance suivante : réflexion, recherche, épreuve. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de réflexion, recherche, épreuve",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de réflexion, recherche, épreuve. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN47",
    "name": "Huit de Pique",
    "arcana": "carte",
    "suit": "Pique",
    "number": 47,
    "icon": "♠",
    "keywords": "activité, progression, maîtrise ; épreuves, décisions, limites, transformation",
    "upright": {
      "keywords": "activité, progression, maîtrise ; épreuves, décisions, limites, transformation",
      "meaning": "Les défis, les décisions, les limites et les transformations. La valeur Huit apporte la nuance suivante : activité, progression, maîtrise. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de activité, progression, maîtrise",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de activité, progression, maîtrise. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN48",
    "name": "Neuf de Pique",
    "arcana": "carte",
    "suit": "Pique",
    "number": 48,
    "icon": "♠",
    "keywords": "aboutissement, intensité, maturation ; épreuves, décisions, limites, transformation",
    "upright": {
      "keywords": "aboutissement, intensité, maturation ; épreuves, décisions, limites, transformation",
      "meaning": "Les défis, les décisions, les limites et les transformations. La valeur Neuf apporte la nuance suivante : aboutissement, intensité, maturation. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de aboutissement, intensité, maturation",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de aboutissement, intensité, maturation. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN49",
    "name": "Dix de Pique",
    "arcana": "carte",
    "suit": "Pique",
    "number": 49,
    "icon": "♠",
    "keywords": "résultat, accomplissement, transition ; épreuves, décisions, limites, transformation",
    "upright": {
      "keywords": "résultat, accomplissement, transition ; épreuves, décisions, limites, transformation",
      "meaning": "Les défis, les décisions, les limites et les transformations. La valeur Dix apporte la nuance suivante : résultat, accomplissement, transition. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de résultat, accomplissement, transition",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de résultat, accomplissement, transition. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN50",
    "name": "Valet de Pique",
    "arcana": "carte",
    "suit": "Pique",
    "number": 50,
    "icon": "♠",
    "keywords": "message, jeune énergie, apprentissage ; épreuves, décisions, limites, transformation",
    "upright": {
      "keywords": "message, jeune énergie, apprentissage ; épreuves, décisions, limites, transformation",
      "meaning": "Les défis, les décisions, les limites et les transformations. La valeur Valet apporte la nuance suivante : message, jeune énergie, apprentissage. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de message, jeune énergie, apprentissage",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de message, jeune énergie, apprentissage. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN51",
    "name": "Dame de Pique",
    "arcana": "carte",
    "suit": "Pique",
    "number": 51,
    "icon": "♠",
    "keywords": "réceptivité, influence féminine, discernement ; épreuves, décisions, limites, transformation",
    "upright": {
      "keywords": "réceptivité, influence féminine, discernement ; épreuves, décisions, limites, transformation",
      "meaning": "Les défis, les décisions, les limites et les transformations. La valeur Dame apporte la nuance suivante : réceptivité, influence féminine, discernement. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de réceptivité, influence féminine, discernement",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de réceptivité, influence féminine, discernement. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN52",
    "name": "Roi de Pique",
    "arcana": "carte",
    "suit": "Pique",
    "number": 52,
    "icon": "♠",
    "keywords": "autorité, influence masculine, décision ; épreuves, décisions, limites, transformation",
    "upright": {
      "keywords": "autorité, influence masculine, décision ; épreuves, décisions, limites, transformation",
      "meaning": "Les défis, les décisions, les limites et les transformations. La valeur Roi apporte la nuance suivante : autorité, influence masculine, décision. Dans le Grand Jeu, cette lecture cartomantique doit être mise en relation avec les autres cartes et les symboles de l’édition utilisée.",
      "advice": "Relier le thème de la carte à un fait concret de la situation."
    },
    "reversed": {
      "keywords": "déséquilibre autour de autorité, influence masculine, décision",
      "meaning": "Renversée, cette carte peut inviter à examiner un excès, un retard ou un blocage autour de autorité, influence masculine, décision. Ce n’est pas une fatalité mais un angle à vérifier.",
      "advice": "Repérer ce qui demande rééquilibrage ou clarification."
    }
  },
  {
    "id": "LN53",
    "name": "Consultante",
    "arcana": "personne",
    "suit": "Cartes-personnes",
    "number": 53,
    "icon": "👩",
    "keywords": "personne qui consulte, point de vue, réceptivité",
    "upright": {
      "keywords": "personne qui consulte, point de vue, réceptivité",
      "meaning": "Carte-personne représentant la consultante ou le pôle réceptif du tirage, selon la convention retenue.",
      "advice": "Observer la place de cette carte par rapport aux autres."
    },
    "reversed": {
      "keywords": "représentation personnelle à clarifier",
      "meaning": "Renversée, Consultante invite à questionner la place, le rôle ou le point de vue représenté, sans présumer de l’identité d’une personne réelle.",
      "advice": "Clarifier qui ou quoi cette carte représente dans le tirage."
    }
  },
  {
    "id": "LN54",
    "name": "Consultant",
    "arcana": "personne",
    "suit": "Cartes-personnes",
    "number": 54,
    "icon": "👤",
    "keywords": "personne qui consulte, point de vue, action",
    "upright": {
      "keywords": "personne qui consulte, point de vue, action",
      "meaning": "Carte-personne représentant le consultant ou le pôle actif du tirage, selon la convention retenue.",
      "advice": "Observer la place de cette carte par rapport aux autres."
    },
    "reversed": {
      "keywords": "représentation personnelle à clarifier",
      "meaning": "Renversée, Consultant invite à questionner la place, le rôle ou le point de vue représenté, sans présumer de l’identité d’une personne réelle.",
      "advice": "Clarifier qui ou quoi cette carte représente dans le tirage."
    }
  }
];
