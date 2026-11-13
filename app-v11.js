const ORACLES = [
    { id: 'tarot', title: 'Tarot des 78 Arcanes', short: 'Tarot', subtitle: 'Les grands passages et les chemins intérieurs', symbol: '✶', family: 'ARCHÉTYPES · 78 ARCANES', file: 'tarot-78.html', accent: '#d9b56d', accent2: '#a88bea', glow: 'rgba(168,139,234,.26)', description: 'Un miroir des cycles, des choix et des transformations. Des arcanes majeurs aux mineurs, explore les nuances de ta question.', ritual: 'Prends le temps de formuler une question claire, puis laisse les cartes révéler leurs correspondances.' },
    { id: 'belline', title: 'Oracle de Belline', short: 'Belline', subtitle: 'Les influences, les élans et les avertissements', symbol: '☼', family: 'INFLUENCES · 53 CARTES', file: 'belline.html', accent: '#e1b96e', accent2: '#d58c59', glow: 'rgba(213,140,89,.25)', description: 'Un langage symbolique riche en nuances, entre influences favorables, tensions et évolutions possibles.', ritual: 'Observe les dominantes du tirage et les liens entre les cartes avant de chercher une réponse isolée.' },
    { id: 'lenormand', title: 'Grand Lenormand', short: 'Lenormand', subtitle: 'Les signes concrets et les associations', symbol: '❧', family: 'SYMBOLES · 54 CARTES', file: 'lenormand-54.html', accent: '#9bc6a9', accent2: '#6da6a0', glow: 'rgba(109,166,160,.24)', description: 'Une lecture attentive aux associations, aux voisinages et aux détails qui donnent du relief à une situation.', ritual: 'Lis les cartes en relation : la proximité, l’ordre et les associations font partie du message.' },
    { id: 'portes', title: 'Les Portes de l’Intuition', short: 'Portes', subtitle: 'Les seuils, les ressentis et les possibles', symbol: '◈', family: 'INTUITION · PORTES SYMBOLIQUES', file: 'portes-intuition.html', accent: '#e7a4b4', accent2: '#a78be6', glow: 'rgba(231,164,180,.23)', description: 'Un espace d’introspection pour éclairer les ressentis, les blocages et les directions qui demandent ton attention.', ritual: 'Accueille la première résonance, puis distingue intuition, émotion et fait concret.' },
    { id: 'astro', title: 'Oracle astrologique', short: 'Astrologie', subtitle: 'Les cycles, les tempéraments et les dynamiques', symbol: '☾', family: 'ASTRES · SIGNES & PLANÈTES', file: 'astrologie.html', accent: '#90b7ef', accent2: '#b295ea', glow: 'rgba(144,183,239,.25)', description: 'Des symboles astrologiques pour réfléchir aux rythmes, aux polarités et aux énergies en présence.', ritual: 'Pense en termes de dynamique et d’équilibre, sans transformer un symbole en verdict.' },
    { id: 'runes', title: 'Oracle des Runes', short: 'Runes', subtitle: 'Les forces anciennes et les passages à traverser', symbol: 'ᚱ', family: 'TRADITION NORDIQUE · RUNES', file: 'runes.html', accent: '#a9c3ca', accent2: '#93a9dd', glow: 'rgba(147,169,221,.24)', description: 'Un alphabet symbolique ancien pour mettre en perspective les forces, les résistances et les transformations.', ritual: 'Lis chaque rune dans son contexte et respecte les nuances propres à sa tradition.' }
];
class SanctuaireApp extends HTMLElement {
    root;
    page = 'home';
    frame;
    frameStyle = '';
    menuOpen = false;
    lastOracle = null;
    observedDocs = new WeakSet();
    onPop = () => { this.readRoute(); this.render(); };
    constructor() { super(); this.root = this.attachShadow({ mode: 'open' }); }
    connectedCallback() {
        this.readRoute();
        const saved = localStorage.getItem('sanctuaire:last-oracle');
        this.lastOracle = saved && ORACLES.some(o => o.id === saved) ? saved : null;
        this.render();
        window.addEventListener('popstate', this.onPop);
        fetch('./legacy-v11.css').then(r => r.text()).then(css => { this.frameStyle = css; if (this.frame?.contentDocument)
            this.decorateFrame(this.frame); }).catch(() => { });
        if ('serviceWorker' in navigator && location.protocol.startsWith('http'))
            navigator.serviceWorker.register('./sw.js').catch(() => { });
    }
    disconnectedCallback() { window.removeEventListener('popstate', this.onPop); }
    readRoute() { const route = new URLSearchParams(location.search).get('view'); this.page = ['tarot', 'belline', 'lenormand', 'portes', 'astro', 'runes', 'cross', 'settings'].includes(route || '') ? route : 'home'; }
    info(id) { return ORACLES.find(o => o.id === id); }
    go(page, push = true) { this.page = page; this.menuOpen = false; const url = page === 'home' ? './' : `?view=${page}`; if (push)
        history.pushState({ page }, '', url); this.render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    esc(s) { return s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
    icon(o, small = false) { return `<span class="oracle-glyph ${small ? 'small' : ''}" style="--accent:${o.accent};--accent2:${o.accent2};--glow:${o.glow}">${o.symbol}</span>`; }
    navItem(id, label, symbol) { const active = this.page === id || (id === 'home' && this.page === 'home'); return `<button class="nav-item ${active ? 'active' : ''}" data-go="${id}"><span>${symbol}</span><b>${label}</b></button>`; }
    shell(content) {
        const current = this.page !== 'home' && this.page !== 'cross' && this.page !== 'settings' ? this.info(this.page) : null;
        return `<div class="app-shell ${current ? 'is-workspace' : ''}" style="--active-accent:${current?.accent || '#d9b56d'};--active-glow:${current?.glow || 'rgba(168,139,234,.22)'}">
   <aside class="sidebar"><button class="brand" data-go="home"><span class="brand-mark">✧</span><span><strong>LE SANCTUAIRE</strong><small>DES ORACLES</small></span></button>
    <div class="side-label">EXPLORER</div>${this.navItem('home', 'Accueil', '⌂')}
    <div class="side-label">LES SIX UNIVERS</div>${ORACLES.map(o => `<button class="nav-item ${this.page === o.id ? 'active' : ''}" data-go="${o.id}">${this.icon(o, true)}<b>${o.short}</b><span class="nav-arrow">›</span></button>`).join('')}
    <div class="side-separator"></div>${this.navItem('cross', 'Lecture croisée', '✧')}${this.navItem('settings', 'Clé & réglages', '⚙')}
    <div class="sidebar-bottom"><span class="live-dot"></span><span>Interprétations locales disponibles</span></div>
   </aside>
   <div class="main-column"><header class="topbar"><button class="mobile-brand" data-go="home"><span>✧</span> SANCTUAIRE</button><div class="breadcrumb"><span>ESPACE SYMBOLIQUE</span><i>／</i><b>${current ? current.short : this.page === 'cross' ? 'Lecture croisée' : this.page === 'settings' ? 'Réglages' : 'Accueil'}</b></div><div class="top-actions"><span class="mode-indicator"><i></i> MODE PERSONNEL</span><button class="top-icon" title="Accueil" data-go="home">⌂</button></div></header>
    <main class="main-content">${content}</main><footer class="app-footer"><span>LE SANCTUAIRE DES ORACLES</span><span>Un espace de symboles, de discernement et de réflexion.</span></footer>
   </div>
   <nav class="mobile-dock">${this.navItem('home', 'Accueil', '⌂')}${this.navItem('cross', 'Croisée', '✧')}${this.navItem('settings', 'Réglages', '⚙')}<button class="nav-item" data-action="all-oracles"><span>✶</span><b>Oracles</b></button></nav>
  </div>`;
    }
    home() {
        const cards = ORACLES.map((o, i) => `<button class="oracle-card" data-go="${o.id}" style="--accent:${o.accent};--accent2:${o.accent2};--glow:${o.glow};--delay:${i * 65}ms">
    <span class="card-index">0${i + 1}</span><span class="card-art"><span class="art-orbit orbit-one"></span><span class="art-orbit orbit-two"></span><span class="art-glyph">${o.symbol}</span><span class="art-star star-a">✦</span><span class="art-star star-b">✧</span></span>
    <span class="card-copy"><small>${o.family}</small><strong>${o.title}</strong><em>${o.subtitle}</em><span class="card-enter">ENTRER DANS L’UNIVERS <b>↗</b></span></span></button>`).join('');
        const last = this.lastOracle ? this.info(this.lastOracle) : null;
        return `<section class="welcome-hero"><div class="hero-copy"><div class="kicker"><span></span> UN ESPACE POUR ÉCOUTER LES SYMBOLES</div><h1>Les réponses ne sont pas toujours <i>là où l’on regarde.</i></h1><p>Six traditions symboliques, six façons d’éclairer une question. Explore, tire tes cartes et construis ta propre lecture.</p><div class="hero-actions"><button class="btn-primary" data-go="${last?.id || 'tarot'}">${last ? 'Reprendre mon dernier oracle' : 'Commencer une lecture'} <b>↗</b></button><button class="btn-quiet" data-go="cross">Découvrir la lecture croisée <b>→</b></button></div><div class="hero-footnote"><span class="tiny-symbol">✧</span> Tirages manuels · Interprétations locales · IA facultative</div></div>
   <div class="hero-stage" aria-hidden="true"><div class="stage-halo"></div><div class="stage-ring ring-a"></div><div class="stage-ring ring-b"></div><div class="stage-card card-back"><span>✧</span><i>THE INNER<br>JOURNEY</i><small>✦</small></div><div class="stage-card card-mid"><span>☾</span><i>THE<br>MOON</i><small>XVIII</small></div><div class="stage-card card-front"><span>✶</span><i>THE<br>STAR</i><small>XVII</small></div><div class="stage-caption">LA SYMBOLIQUE COMME MIROIR</div></div>
  </section>
  <section class="metric-row"><div><b>06</b><span>traditions symboliques</span></div><div><b>∞</b><span>associations à explorer</span></div><div><b>01</b><span>question à la fois</span></div><div class="local-pill"><i></i> Une lecture locale sans IA</div></section>
  <section class="section-heading"><div><span class="kicker">CHOISIS TON CHEMIN</span><h2>Les six univers</h2><p>Chaque oracle possède ses codes, son langage et sa manière d’éclairer le présent.</p></div><span class="section-count">01 — 06</span></section>
  <section class="oracle-grid">${cards}</section>
  <section class="cross-promo"><div class="cross-symbol">✧</div><div><small>POUR ALLER PLUS LOIN</small><strong>La lecture croisée</strong><p>Fais dialoguer plusieurs traditions pour repérer convergences, nuances et tensions symboliques.</p></div><button class="btn-outline" data-go="cross">Explorer la lecture croisée <b>↗</b></button></section>
  <section class="bottom-note"><span>✦</span><p>Les oracles sont des supports de réflexion personnelle. Ils n’annoncent pas des faits certains et ne remplacent ni ton jugement ni les décisions éclairées.</p></section>`;
    }
    workspace(id) {
        const o = this.info(id);
        localStorage.setItem('sanctuaire:last-oracle', id);
        this.lastOracle = id;
        return `<section class="workspace-heading" style="--accent:${o.accent};--accent2:${o.accent2};--glow:${o.glow}"><div class="workspace-identity"><div class="workspace-sigil">${o.symbol}</div><div><div class="kicker">${o.family}</div><h1>${o.title}</h1><p>${o.subtitle}</p></div></div><div class="workspace-controls"><button class="btn-quiet" data-go="home">← Tous les univers</button><span class="workspace-status"><i></i> ESPACE ACTIF</span></div></section>
  <section class="workspace-intro"><p>${o.description}</p><div class="ritual-tip"><span>✧</span><div><b>Avant de commencer</b><small>${o.ritual}</small></div></div></section>
  <section class="legacy-window"><div class="legacy-window-bar"><div class="window-lights"><i></i><i></i><i></i></div><div class="window-title">ATELIER DE TIRAGE <span>／</span> ${o.short.toUpperCase()}</div><button class="window-reload" data-action="reload-frame" title="Recharger l’atelier">↻</button></div><div class="legacy-frame-wrap"><iframe title="Atelier ${o.title}" data-oracle-frame="${o.id}" src="${o.file}" loading="eager" allow="microphone; clipboard-read; clipboard-write" referrerpolicy="same-origin"></iframe></div></section>
  <div class="workspace-foot"><span>✦ Le tirage reste manuel : aucune carte n’est sélectionnée à ta place.</span><button data-go="cross">Comparer avec un autre oracle ↗</button></div>`;
    }
    specialPage(id) {
        const cross = id === 'cross';
        const title = cross ? 'Lecture croisée des six systèmes' : 'Clé API & réglages';
        const file = cross ? 'analyse-croisee.html' : 'cle-api.html';
        return `<section class="workspace-heading special-heading"><div class="workspace-identity"><div class="workspace-sigil">${cross ? '✧' : '⚙'}</div><div><div class="kicker">${cross ? 'SYNTHÈSE SYMBOLIQUE' : 'CONFIGURATION PERSONNELLE'}</div><h1>${title}</h1><p>${cross ? 'Mettre les traditions en dialogue.' : 'Centraliser tes préférences et tes accès IA.'}</p></div></div><div class="workspace-controls"><button class="btn-quiet" data-go="home">← Accueil</button></div></section><section class="legacy-window"><div class="legacy-window-bar"><div class="window-lights"><i></i><i></i><i></i></div><div class="window-title">${cross ? 'ATELIER DE SYNTHÈSE' : 'CENTRE DE CONFIGURATION'}</div><button class="window-reload" data-action="reload-frame">↻</button></div><div class="legacy-frame-wrap"><iframe title="${title}" data-special-frame="${id}" src="${file}" loading="eager" allow="microphone; clipboard-read; clipboard-write"></iframe></div></section>`;
    }
    render() {
        const content = this.page === 'home' ? this.home() : this.page === 'cross' || this.page === 'settings' ? this.specialPage(this.page) : this.workspace(this.page);
        this.root.innerHTML = `<link rel="stylesheet" href="./app-v11.css">${this.shell(content)}`;
        this.frame = this.root.querySelector('iframe') || undefined;
        this.root.querySelectorAll('[data-go]').forEach(el => el.addEventListener('click', () => { const page = el.dataset.go; if (page)
            this.go(page); }));
        this.root.querySelector('[data-action="all-oracles"]')?.addEventListener('click', () => { if (this.page !== 'home') {
            this.go('home');
            requestAnimationFrame(() => this.root.querySelector('.oracle-grid')?.scrollIntoView({ behavior: 'smooth' }));
        }
        else {
            this.root.querySelector('.oracle-grid')?.scrollIntoView({ behavior: 'smooth' });
        } });
        this.root.querySelector('[data-action="reload-frame"]')?.addEventListener('click', () => { if (this.frame) {
            this.frame.src = this.frame.src;
        } });
        if (this.frame) {
            this.frame.addEventListener('load', () => this.decorateFrame(this.frame));
            if (this.frame.contentDocument?.readyState === 'complete')
                this.decorateFrame(this.frame);
        }
    }
    decorateFrame(frame) {
        try {
            const doc = frame.contentDocument;
            if (!doc?.body)
                return;
            let style = doc.getElementById('sanctuaire-runtime-v11');
            if (!style) {
                style = doc.createElement('style');
                style.id = 'sanctuaire-runtime-v11';
                doc.body.appendChild(style);
            }
            style.textContent = this.frameStyle || this.fallbackLegacyCss();
            const oracleId = (frame.dataset.oracleFrame || '');
            const o = ORACLES.find(item => item.id === oracleId);
            if (o) {
                for (const [key, value] of Object.entries({ '--v11-accent': o.accent, '--v11-accent2': o.accent2, '--v11-glow': o.glow }))
                    doc.documentElement.style.setProperty(key, value);
            }
            this.resizeFrame(frame);
            if (!this.observedDocs.has(doc)) {
                this.observedDocs.add(doc);
                if ('ResizeObserver' in window) {
                    const obs = new ResizeObserver(() => this.resizeFrame(frame));
                    obs.observe(doc.documentElement);
                    if (doc.body)
                        obs.observe(doc.body);
                }
                frame.contentWindow?.addEventListener('resize', () => this.resizeFrame(frame));
            }
        }
        catch (error) {
            console.warn('Impossible de styliser l’atelier intégré', error);
        }
    }
    resizeFrame(frame) { try {
        const d = frame.contentDocument;
        if (!d)
            return;
        const h = Math.max(d.documentElement.scrollHeight, d.body?.scrollHeight || 0, 700);
        frame.style.height = `${h + 24}px`;
    }
    catch { } }
    fallbackLegacyCss() { return `body{background:#090b18!important;color:#f8f0df!important}.panel{background:#15172b!important;color:#f8f0df!important;border:1px solid rgba(220,190,120,.32)!important;border-radius:20px!important}.oracles-key-nav,.navlinks{display:none!important}button,.btn{border-radius:12px!important}`; }
}
customElements.define('sanctuaire-app', SanctuaireApp);
