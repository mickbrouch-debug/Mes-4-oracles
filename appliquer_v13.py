#!/usr/bin/env python3
# V13.0 — patch conservateur des sources V12.0
# Usage: python appliquer_v13.py /chemin/vers/le/dossier-du-site
from pathlib import Path
import re, shutil, sys, json

PAGES = [
    "index.html", "tarot-78.html", "lenormand-54.html", "belline.html",
    "portes-intuition.html", "astrologie.html", "runes.html",
    "analyse-croisee.html", "cle-api.html"
]
NAV_LINKS = [
    ("index.html", "Accueil"),
    ("cle-api.html", "Clé API"),
    ("tarot-78.html", "Tarot"),
    ("lenormand-54.html", "Lenormand"),
    ("belline.html", "Belline"),
    ("portes-intuition.html", "Portes"),
    ("astrologie.html", "Astrologie"),
    ("runes.html", "Runes"),
    ("analyse-croisee.html", "Analyse croisée"),
]
def fail(msg):
    print("ERREUR:", msg)
    raise SystemExit(2)

if len(sys.argv) != 2:
    fail("Indique le dossier racine du site : python appliquer_v13.py ./Mes-4-oracles")
root = Path(sys.argv[1]).expanduser().resolve()
if not root.is_dir():
    fail(f"Dossier introuvable : {root}")
missing = [p for p in PAGES if not (root/p).is_file()]
if missing:
    fail("Fichiers V12.0 manquants : " + ", ".join(missing))

backup = root / "_V12_BACKUP"
backup.mkdir(exist_ok=True)
report = {}

def balance_divs(fragment):
    opens = len(re.findall(r"<div\b", fragment, re.I))
    closes = len(re.findall(r"</div\s*>", fragment, re.I))
    return opens - closes

for name in PAGES:
    path = root/name
    original = path.read_text(encoding="utf-8")
    text = original
    shutil.copy2(path, backup/name)

    # 1) Répare les bandeaux V12.0 où la navigation était accidentellement imbriquée.
    banner = re.search(r'<div\b[^>]*class=["\'][^"\']*sanctuaire-v4-banner[^"\']*["\'][^>]*>', text, re.I)
    nav = re.search(r'<nav\b', text[banner.end():] if banner else "", re.I)
    banner_fixed = False
    if banner and nav:
        nav_start = banner.end() + nav.start()
        fragment = text[banner.start():nav_start]
        delta = balance_divs(fragment)
        if delta == 1:
            text = text[:nav_start] + "</div>\n" + text[nav_start:]
            banner_fixed = True

    # 2) Donne à la navigation de la page Clé API les mêmes classes que les autres.
    text = text.replace('<nav class="nav">', '<nav class="nav oracles-key-nav">')
    text = text.replace("<nav class='nav'>", "<nav class='nav oracles-key-nav'>")

    # 3) Complète les liens manquants dans les barres de navigation existantes.
    nav_match = re.search(r'<nav\b[\s\S]*?</nav>', text, re.I)
    nav_added = []
    if nav_match:
        block = nav_match.group(0)
        for href, label in NAV_LINKS:
            if not re.search(r'href=["\']' + re.escape(href) + r'["\']', block, re.I):
                nav_added.append(f'<a href="{href}">{label}</a>')
        if nav_added:
            close = block.rfind("</div>")
            if close >= 0:
                block = block[:close] + "".join(nav_added) + block[close:]
                text = text[:nav_match.start()] + block + text[nav_match.end():]

    # 4) Actualise le cache-busting de la feuille commune, sans retirer les styles existants.
    text = re.sub(r'sanctuaire-unifie-v12\.1\.css(?:\?[^"\']*)?',
                  'sanctuaire-unifie-v13.css?v=13.0', text, flags=re.I)

    # 5) Harmonise le vieux libellé de la barre historique.
    text = text.replace("✧ Les 4 Oracles", "✧ Le Sanctuaire des Oracles")

    # 6) Replace le panneau Gemini généré dynamiquement auprès des réglages IA,
    #    au lieu de l'insérer systématiquement tout en haut du contenu.
    old = "const target=document.querySelector('main')||document.querySelector('.container')||document.body; target.insertBefore(panel,target.firstChild);"
    new = ("const target=document.querySelector('main')||document.querySelector('.container')||document.body;"
           "const settingsAnchor=document.getElementById('aiKey')||document.getElementById('aiModel');"
           "const settingsSection=settingsAnchor&&settingsAnchor.closest('section,.panel,.card,fieldset,form');"
           "if(settingsSection){settingsSection.appendChild(panel);}else{target.appendChild(panel);}")
    panel_moved = old in text
    text = text.replace(old, new)

    if text != original:
        path.write_text(text, encoding="utf-8")
    report[name] = {
        "banner_repaired": banner_fixed,
        "navigation_links_added": nav_added,
        "legacy_history_label_fixed": "✧ Les 4 Oracles" not in text,
        "gemini_panel_repositioned": panel_moved,
        "common_css_v13_linked": "sanctuaire-unifie-v13.css?v=13.0" in text,
        "changed": text != original
    }

# CSS commune copiée dans le dossier racine.
css_source = Path(__file__).with_name("sanctuaire-unifie-v13.css")
if not css_source.is_file():
    fail("sanctuaire-unifie-v13.css doit se trouver à côté du script.")
    shutil.copy2(css_source, root/"sanctuaire-unifie-v13.css")
(root/"RAPPORT-V13.json").write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps(report, ensure_ascii=False, indent=2))
print("\\nV13 préparée. Les originaux sont sauvegardés dans _V12_BACKUP.")
print("Aucun script métier, fichier d'image, jeu de cartes ou moteur de tirage n'a été supprimé.")
