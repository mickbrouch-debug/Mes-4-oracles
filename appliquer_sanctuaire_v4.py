from pathlib import Path
import re
import sys

FILES = [
    "portes-intuition.html",
    "belline.html",
    "astrologie.html",
    "lenormand-54.html",
    "Grand_Jeu_Mlle_Lenormand_54.html",
    "runes.html",
]
LINK = '<link rel="stylesheet" href="sanctuaire-v4.css?v=4">'

root = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(".")
for name in FILES:
    path = root / name
    if not path.exists():
        print(f"ABSENT : {name}")
        continue
    html = path.read_text(encoding="utf-8")
    if re.search(r'<link[^>]+href=["\']sanctuaire-v4\.css(?:\?[^"\']*)?["\']', html, re.I):
        print(f"DEJA LIE : {name}")
        continue
    if not re.search(r"</head\s*>", html, re.I):
        print(f"ERREUR : balise </head> introuvable dans {name}")
        continue
    html = re.sub(r"</head\s*>", LINK + "\n</head>", html, count=1, flags=re.I)
    path.write_text(html, encoding="utf-8")
    print(f"MODIFIE : {name}")

print("Terminé. Le fichier sanctuaire-v4.css et sanctuaire-banniere.jpg doivent rester à la racine du site.")
