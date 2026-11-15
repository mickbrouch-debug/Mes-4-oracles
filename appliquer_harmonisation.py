#!/usr/bin/env python3
"""Applique le thème Sanctuaire unifié aux six oracles, sans toucher au Tarot ni à l'accueil."""
from pathlib import Path
import re, sys, zipfile

FILES = [
    "portes-intuition.html",
    "belline.html",
    "astrologie.html",
    "lenormand-54.html",
    "Grand_Jeu_Mlle_Lenormand_54.html",
    "runes.html",
]
CSS_NAME = "sanctuaire-unifie-v1.css"
ROOT = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(".")
changed = []
errors = []

for name in FILES:
    p = ROOT / name
    if not p.exists():
        errors.append(f"Absent : {name}")
        continue
    s = p.read_text(encoding="utf-8")
    original = s

    # Répare la corruption littérale issue d'une substitution de regex antérieure.
    s = s.replace(r'\1 aria-label="Navigation Oracles Studio">', '<nav aria-label="Navigation Oracles Studio">')
    s = s.replace(r'\1 aria-label=\"Navigation Oracles Studio\">', '<nav aria-label="Navigation Oracles Studio">')

    # Évite d'ajouter deux fois la feuille commune.
    if CSS_NAME not in s:
        link = f'<link rel="stylesheet" href="{CSS_NAME}?v=1">'
        if re.search(r'</head\s*>', s, re.I):
            s = re.sub(r'</head\s*>', link + '\n</head>', s, count=1, flags=re.I)
        else:
            errors.append(f"Pas de balise </head> : {name}")
            continue

    if s != original:
        p.write_text(s, encoding="utf-8")
        changed.append(name)

print("Fichiers modifiés :", ", ".join(changed) if changed else "aucun")
if errors:
    print("À vérifier :", *errors, sep="\n - ")

# Crée une archive prête à téléverser, avec les fichiers modifiés et la feuille commune.
zip_path = ROOT / "ORACLES_HARMONISES_V1.zip"
with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as z:
    for name in FILES:
        p = ROOT / name
        if p.exists():
            z.write(p, name)
    css = ROOT / CSS_NAME
    if css.exists():
        z.write(css, CSS_NAME)
    banner = ROOT / "sanctuaire-banniere.jpg"
    if banner.exists():
        z.write(banner, "sanctuaire-banniere.jpg")
print("Archive créée :", zip_path)
