import {useCallback,useEffect,useRef,useState,type ComponentType} from 'react';
import type {OracleId} from './oracles/types';
import {gsap} from 'gsap';
import Scene from './Scene';
import { readPersistentValue, writePersistentValue, removePersistentValue } from './nativeStorage';
import { Capacitor, CapacitorHttp } from '@capacitor/core';
import { TextToSpeech } from '@capacitor-community/text-to-speech';

type Oracle={id:OracleId;roman:string;name:string;description:string;image:string;tag:string};
function cleanCrossSpeechText(input:string){
 const plain=input
  .replace(/\[([^\]]+)\]\((?:https?:\/\/)?[^)]+\)/g,'$1')
  .replace(/^\s{0,3}#{1,6}\s*/gm,'')
  .replace(/^\s{0,3}>\s?/gm,'')
  .replace(/^\s*[-*+]\s+/gm,'')
  .replace(/^\s*\d+[.)]\s+/gm,'')
  .replace(/^\s*\|.*\|\s*$/gm,'')
  .replace(/^\s*[-:| ]{3,}\s*$/gm,'')
  .replace(/\*\*(.*?)\*\*/gs,'$1').replace(/__(.*?)__/gs,'$1')
  .replace(/\*(.*?)\*/gs,'$1').replace(/_(.*?)_/gs,'$1')
  .replace(/~~(.*?)~~/gs,'$1')
  .replace(new RegExp(String.fromCharCode(96)+'{1,3}','g'),'')
  .replace(/[#*_~|>]/g,' ')
  .replace(/https?:\/\/\S+/g,'')
  .replace(/[ \t]+/g,' ')
  .replace(/\n{3,}/g,'\n\n')
  .replace(/[ \t]*\n[ \t]*/g,'\n')
  .trim();
 return plain;
}
type JournalEntry={key:string;oracleId:OracleId;oracle:string;date:string;domain?:string;cards?:string;question?:string;local?:string;ai?:string};
const ORACLES:Oracle[]=[
  {id:'tarot',roman:'I',name:'Le Tarot',description:'Les 78 arcanes · Archétypes & cheminement',image:'oracle-tarot.jpg',tag:'Le grand voyage'},
  {id:'belline',roman:'II',name:'Le Belline',description:'Influences · Cycles · Destinées',image:'oracle-belline.jpg',tag:'Les influences'},
  {id:'lenormand',roman:'III',name:'Le Lenormand',description:'Symboles · Liens · Perspectives',image:'oracle-lenormand.jpg',tag:'Le langage des signes'},
  {id:'astrologie',roman:'IV',name:'L’Astrologie',description:'Thèmes · Planètes · Correspondances',image:'oracle-astrologie.jpg',tag:'La carte céleste'},
  {id:'runes',roman:'V',name:'Les Runes',description:'Tradition nordique · Forces · Sagesse',image:'oracle-runes.jpg',tag:'Les signes anciens'},
  {id:'portes',roman:'VI',name:'Les Portes',description:'Exploration · Ressenti · Introspection',image:'oracle-portes.jpg',tag:'Le passage intérieur'}
];
const HISTORY_KEYS:Record<string,string>={tarot:'sanctuaire.tarot.history.v1',belline:'sanctuaire.belline.history.v1',lenormand:'sanctuaire.lenormand.history',astrologie:'sanctuaire.astrologie.history',runes:'sanctuaire.runes.history',portes:'sanctuaire.portes.history'};
function readJournal():JournalEntry[]{const entries:JournalEntry[]=[];for(const oracle of ORACLES){try{const raw=localStorage.getItem(HISTORY_KEYS[oracle.id])||'[]';const rows=JSON.parse(raw);if(Array.isArray(rows))for(const [index,row] of rows.entries())entries.push({...row,key:oracle.id+'::'+String(row.id||row.date+'::'+index),oracleId:oracle.id,oracle:oracle.name})}catch{/* Une entrée corrompue ne doit pas bloquer les autres historiques. */}}return entries.sort((a,b)=>String(b.date||'').localeCompare(String(a.date||''))).slice(0,100)}
export default function App(){
  const root=useRef<HTMLElement>(null);
  const [route,setRoute]=useState(location.hash);
  const [modal,setModal]=useState<'keys'|'journal'|'cross'|null>(null);
  const [crossSelected,setCrossSelected]=useState<string[]>([]);
  const [crossResult,setCrossResult]=useState('');
  const [crossStatus,setCrossStatus]=useState('');
  const [crossBusy,setCrossBusy]=useState(false);
  const [crossVoiceStatus,setCrossVoiceStatus]=useState('');
  const crossVoice=useRef<{parts:string[];index:number;active:boolean}|null>(null);
  const crossVoiceBusy=useRef(false);
  const crossVoiceRun=useRef(0);
  const [crossModel,setCrossModel]=useState(()=>{const saved=localStorage.getItem('sanctuaire.cross.gemini.model');return !saved||saved==='gemini-3.5-flash'?'gemini-3.5-flash-lite':saved});
  const [crossModels,setCrossModels]=useState<string[]>(()=>{try{const saved=JSON.parse(localStorage.getItem('sanctuaire.cross.gemini.models')||'null');return Array.isArray(saved)&&saved.length?['gemini-3.5-flash-lite',...saved.filter((x:string)=>x!=='gemini-3.5-flash-lite')]:['gemini-3.5-flash-lite','gemini-3.5-flash','gemini-2.5-flash','gemini-2.5-pro','gemini-2.0-flash']}catch{return ['gemini-3.5-flash-lite','gemini-3.5-flash','gemini-2.5-flash','gemini-2.5-pro','gemini-2.0-flash']}});
  const [journal,setJournal]=useState<JournalEntry[]>([]);
  const [globalApiKey,setGlobalApiKey]=useState(()=>localStorage.getItem('sanctuaire.gemini.key')||'');
  useEffect(()=>{let active=true;readPersistentValue('sanctuaire.gemini.key').then(value=>{if(active&&value!==null)setGlobalApiKey(value)}).catch(()=>{});return()=>{active=false}},[]);
  useEffect(()=>{const update=()=>setRoute(location.hash);window.addEventListener('hashchange',update);return()=>window.removeEventListener('hashchange',update)},[]);
  useEffect(()=>{if(route) return;const ctx=gsap.context(()=>{gsap.from('.topbar',{y:-25,opacity:0,duration:.8,ease:'power3.out'});gsap.from('.hero-copy > *',{y:25,opacity:0,duration:.8,stagger:.1,delay:.15,ease:'power3.out'});gsap.from('.oracle-card',{y:24,opacity:0,duration:.7,stagger:.08,delay:.25,ease:'power2.out'})},root);return()=>ctx.revert()},[route]);
  const goHome=useCallback(()=>{location.hash='';setRoute('')},[]);
  const openJournal=()=>{setJournal(readJournal());setModal('journal')};
  const openCross=()=>{setJournal(readJournal());setCrossSelected([]);setCrossResult('');setCrossStatus('');setModal('cross')};
  const runCrossReading=async()=>{
    const chosen=journal.filter(entry=>crossSelected.includes(entry.key));
    if(chosen.length<2){setCrossStatus('Sélectionnez au moins deux tirages pour les comparer.');return}
    const persistedGlobal=await readPersistentValue('sanctuaire.gemini.key').catch(()=>null);const individualKeys=await Promise.all(chosen.map(entry=>readPersistentValue('sanctuaire.'+entry.oracleId+'.gemini.key').catch(()=>null)));const key=globalApiKey.trim()||persistedGlobal?.trim()||individualKeys.find(value=>value?.trim())?.trim()||'';
    if(!key){setCrossStatus('Aucune clé Gemini disponible. Ajoutez une clé universelle ou une clé individuelle dans un oracle.');return}
    const model=crossModel;
    setCrossBusy(true);setCrossStatus('Analyse croisée des '+chosen.length+' tirages…');setCrossResult('');
    const source=chosen.map((entry,index)=>'TIRAGE '+(index+1)+' — '+entry.oracle+'\nDate : '+entry.date+'\nDomaine : '+(entry.domain||'Général')+'\nQuestion : '+(entry.question||'Tirage général')+'\nCartes : '+(entry.cards||'Non renseignées')+'\nAnalyse locale : '+(entry.local||'Non disponible')+'\nInterprétation IA : '+(entry.ai||'Non disponible')).join('\n\n--------------------\n\n');
    const prompt='Tu es le moteur de lecture croisée du Sanctuaire. Compare les tirages issus de plusieurs traditions symboliques, sans les confondre. Produis une synthèse globale structurée en français. Commence par rappeler les tirages pris en compte. Analyse ensuite : 1) les thèmes et messages communs, 2) les correspondances entre cartes, symboles et traditions, 3) les divergences ou tensions apparentes, 4) les éclairages complémentaires propres à chaque oracle, 5) les répétitions et évolutions éventuelles, 6) une synthèse transversale et des pistes concrètes de réflexion. Distingue clairement les éléments réellement présents dans les tirages de tes rapprochements interprétatifs. Ne présente jamais les symboles comme des prédictions certaines ni comme des faits sur autrui. Si les questions des tirages diffèrent, signale-le et ne force pas artificiellement une cohérence.\n\nDONNÉES DES TIRAGES :\n'+source;
    try{const url='https://generativelanguage.googleapis.com/v1beta/models/'+encodeURIComponent(model)+':generateContent';const body={contents:[{role:'user',parts:[{text:prompt}]}],generationConfig:{temperature:.65,maxOutputTokens:6000}};let data:any;if(Capacitor.isNativePlatform()){const response=await CapacitorHttp.post({url,headers:{'Content-Type':'application/json','x-goog-api-key':key},data:body});data=response.data;if(response.status<200||response.status>=300)throw new Error(data?.error?.message||'Erreur Gemini HTTP '+response.status)}else{const response=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json','x-goog-api-key':key},body:JSON.stringify(body)});data=await response.json();if(!response.ok)throw new Error(data.error?.message||'Erreur Gemini HTTP '+response.status)}const answer=data.candidates?.[0]?.content?.parts?.map((part:any)=>part.text||'').join('\n')||'Aucune synthèse reçue.';setCrossResult(answer);setCrossStatus('Synthèse terminée à partir de '+chosen.length+' tirages.');}catch(error:any){const message=error?.message||String(error)||'échec de la requête';setCrossStatus('Erreur de lecture croisée : '+message+(message==='Failed to fetch'?' — vérifiez la connexion Internet et la disponibilité du service Gemini.':' mais la requête a bien atteint le service si un code HTTP est indiqué.'))}finally{setCrossBusy(false)}
  };
  const playCrossVoicePart=async()=>{
    const session=crossVoice.current;if(!session||!session.active)return;
    if(session.index>=session.parts.length){crossVoice.current=null;setCrossVoiceStatus('Lecture vocale terminée.');return}
    const run=crossVoiceRun.current;
    if(Capacitor.isNativePlatform()){
      if(crossVoiceBusy.current)return;crossVoiceBusy.current=true;
      try{await TextToSpeech.speak({text:session.parts[session.index],lang:'fr-FR',rate:.94,pitch:1,volume:1,queueStrategy:0});const current=crossVoice.current;if(current&&current.active&&crossVoiceRun.current===run)current.index++}
      catch(error:any){if(crossVoiceRun.current===run)setCrossVoiceStatus('Erreur de lecture vocale : '+(error?.message||'vérifiez le moteur vocal français Android.'))}
      finally{crossVoiceBusy.current=false}
      if(crossVoice.current?.active&&crossVoiceRun.current===run)void playCrossVoicePart();return
    }
    const synth=window.speechSynthesis;if(!synth)return;
    const utterance=new SpeechSynthesisUtterance(session.parts[session.index]);utterance.lang='fr-FR';utterance.rate=.94;
    utterance.onend=()=>{const current=crossVoice.current;if(!current||!current.active||crossVoiceRun.current!==run)return;current.index++;void playCrossVoicePart()};
    utterance.onerror=()=>{if(crossVoiceRun.current===run)setCrossVoiceStatus('La lecture vocale a rencontré une erreur.')};synth.speak(utterance);
  };
  const startCrossVoice=()=>{const text=cleanCrossSpeechText(crossResult);if(!text){setCrossVoiceStatus('Aucune analyse croisée à lire.');return}crossVoiceRun.current++;if(Capacitor.isNativePlatform()){void TextToSpeech.stop().catch(()=>{});crossVoiceBusy.current=false}else window.speechSynthesis?.cancel();const parts=text.match(/[^.!?;]+[.!?;]+|[^.!?;]+$/g)||[text];crossVoice.current={parts,index:0,active:true};setCrossVoiceStatus('Lecture de l’analyse croisée…');void playCrossVoicePart()};
  const pauseCrossVoice=()=>{const session=crossVoice.current;if(!session){setCrossVoiceStatus('Aucune lecture vocale en cours.');return}if(session.active){session.active=false;crossVoiceRun.current++;if(Capacitor.isNativePlatform()){void TextToSpeech.stop().catch(()=>{}).finally(()=>{crossVoiceBusy.current=false})}else window.speechSynthesis?.cancel();setCrossVoiceStatus('Lecture en pause. La reprise repart au début de la phrase en cours.')}else{session.active=true;setCrossVoiceStatus('Reprise de la lecture…');if(Capacitor.isNativePlatform()){void TextToSpeech.stop().catch(()=>{}).finally(()=>{crossVoiceBusy.current=false;void playCrossVoicePart()})}else void playCrossVoicePart()}};
  const stopCrossVoice=()=>{crossVoiceRun.current++;crossVoice.current=null;if(Capacitor.isNativePlatform()){crossVoiceBusy.current=false;void TextToSpeech.stop().catch(()=>{})}else window.speechSynthesis?.cancel();setCrossVoiceStatus('Lecture vocale arrêtée.')};
  const refreshCrossModels=async()=>{
    const key=globalApiKey.trim()||journal.map(entry=>localStorage.getItem('sanctuaire.'+entry.oracleId+'.gemini.key')||'').find(value=>value.trim())||'';
    if(!key){setCrossStatus('Ajoutez une clé API Gemini pour actualiser la liste des modèles.');return}
    setCrossStatus('Actualisation des modèles Gemini…');
    try{
      let data:any;if(Capacitor.isNativePlatform()){const response=await CapacitorHttp.get({url:'https://generativelanguage.googleapis.com/v1beta/models?pageSize=1000',headers:{'x-goog-api-key':key}});data=response.data;if(response.status<200||response.status>=300)throw new Error(data?.error?.message||'Erreur API HTTP '+response.status)}else{const response=await fetch('https://generativelanguage.googleapis.com/v1beta/models?pageSize=1000',{headers:{'x-goog-api-key':key}});data=await response.json();if(!response.ok)throw new Error(data.error?.message||'Erreur API HTTP '+response.status)}
      const available=(data.models||[]).filter((m:any)=>(m.supportedGenerationMethods||[]).includes('generateContent')&&m.name.startsWith('models/gemini-')&&!/(embedding|image|tts|live|audio|video)/i.test(m.name)).map((m:any)=>m.name.replace('models/',''));
      if(!available.length)throw new Error('Aucun modèle compatible');
      const list=[...new Set(['gemini-3.5-flash-lite',...available])];
      setCrossModels(list);localStorage.setItem('sanctuaire.cross.gemini.models',JSON.stringify(list));
      if(!list.includes(crossModel)){setCrossModel('gemini-3.5-flash-lite');localStorage.setItem('sanctuaire.cross.gemini.model','gemini-3.5-flash-lite')}
      setCrossStatus(list.length+' modèles disponibles pour la lecture croisée.');
    }catch(error:any){setCrossStatus('Erreur de récupération des modèles : '+(error?.message||'échec de la requête'))}
  };
  const openSettings=()=>setModal('keys');
  const active=ORACLES.find(o=>route==='#/'+o.id);
  if(active)return <OracleRoute page={active.id} onHome={goHome}/>;
  return <main ref={root}><Scene/><div className="scene-vignette"/><header className="topbar"><a className="brand" href="#home"><span className="brand-seal">✧</span><span><b>LE SANCTUAIRE</b><small>ORACLES · SYMBOLES · INTUITION</small></span></a><nav><a href="#oracles">Les chemins</a><a href="#atelier">L’atelier</a><button onClick={openSettings}>✧ Réglages</button></nav><div className="build-version-top" aria-label="Version actuellement chargée"><span className="build-version-dot"/><span><b>{import.meta.env.VITE_BUILD_VERSION || 'V17.3'}</b><small>BUILD #{import.meta.env.VITE_BUILD_RUN || 'local'}</small></span></div></header>
    <section className="hero" id="home"><div className="hero-backdrop"><img src={import.meta.env.BASE_URL+'assets/sanctuaire-banniere.jpg'} alt=""/></div><div className="hero-relics" aria-hidden="true"><div className="relic relic-tarot"><img src={import.meta.env.BASE_URL+'assets/oracle-tarot.jpg'} alt=""/><span>ARCANES</span></div><div className="relic relic-belline"><img src={import.meta.env.BASE_URL+'assets/oracle-belline.jpg'} alt=""/><span>INFLUENCES</span></div><div className="relic relic-zodiac"><img src={import.meta.env.BASE_URL+'assets/oracle-astrologie.jpg'} alt=""/><span>ASTRES</span></div></div><div className="hero-copy"><div className="eyebrow"><i/> UN ESPACE HORS DU TEMPS <i/></div><h1>Franchissez<br/><em>le voile</em><span>.</span></h1><p className="hero-lead">Six traditions. Six langages symboliques. Un sanctuaire pour explorer les signes, écouter votre intuition et donner forme à vos questionnements.</p><div className="hero-actions"><a className="gold-button" href="#oracles">Entrer dans le sanctuaire <span>↗</span></a><button className="quiet-button" onClick={openJournal}>Mon carnet intérieur</button></div><div className="hero-footnote"><span className="tiny-star">✧</span> UN VOYAGE INTÉRIEUR, À VOTRE RYTHME</div></div><div className="hero-art-caption"><span>✧</span><div>« Le symbole est une porte.<br/>À chacun de choisir de l’ouvrir. »</div><span>✧</span></div><div className="scroll-cue"><span/> DÉFILER POUR EXPLORER</div></section>
    <section className="oracle-section" id="oracles"><div className="section-heading"><div><div className="eyebrow">LES SIX PORTES</div><h2>Quel chemin <em>vous appelle ?</em></h2></div><p>Chaque tradition révèle une facette différente de votre paysage intérieur.</p></div><div className="oracle-grid">{ORACLES.map(o=><a className="oracle-card" key={o.id} href={'#/'+o.id} aria-label={'Ouvrir '+o.name}><img src={import.meta.env.BASE_URL+'assets/'+o.image} alt="" loading="lazy"/><div className="card-aura"/><div className="card-content"><span className="card-number">{o.roman} / 06</span><span className="card-tag">{o.tag}</span><h3>{o.name}</h3><p>{o.description}</p><span className="card-enter">EXPLORER <b>↗</b></span></div><div className="card-frame"/></a>)}</div></section>
    <section className="atelier" id="atelier"><div className="section-heading"><div><div className="eyebrow">VOTRE ESPACE PERSONNEL</div><h2>L’atelier <em>intérieur</em></h2></div><p>Retrouvez vos tirages et vos réglages dans un espace commun aux six traditions.</p></div><div className="atelier-grid"><button onClick={openJournal}><span>☷</span><b>Le carnet des tirages</b><small>Retrouvez les consultations enregistrées dans chaque oracle.</small><i>↗</i></button><button onClick={openSettings}><span>✧</span><b>La clef des intelligences</b><small>Chaque oracle conserve sa propre clé Gemini et son modèle.</small><i>↗</i></button><button onClick={openCross}><span>☼</span><b>La lecture croisée</b><small>Sélectionnez plusieurs tirages et demandez une synthèse globale à l’IA.</small><i>↗</i></button></div></section>
    <footer><span>✧</span> LE SANCTUAIRE <small>UN ESPACE DE SYMBOLES ET DE RÉFLEXION PERSONNELLE</small><span>✧</span></footer>
    {modal&&<div className="modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)setModal(null)}}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={()=>setModal(null)} aria-label="Fermer">×</button>{modal==='keys'?<><div className="eyebrow">VOTRE ESPACE PRIVÉ</div><h2 id="modal-title">Réglages des intelligences</h2><p>Vous pouvez utiliser une seule clé Gemini pour les six oracles, ou définir une clé individuelle dans les réglages de chaque oracle. Une clé individuelle est prioritaire ; si elle est vide, la clé universelle est utilisée.</p><label className="global-api-key">Clé API Gemini universelle<input type="password" value={globalApiKey} onChange={e=>setGlobalApiKey(e.target.value)} placeholder="Votre clé Gemini commune aux six oracles" autoComplete="off"/></label><div className="tarot-form-actions"><button className="gold-action" onClick={async()=>{const value=globalApiKey.trim();await writePersistentValue('sanctuaire.gemini.key',value);setGlobalApiKey(value);setCrossStatus('Clé universelle enregistrée sur cet appareil.')}}>Enregistrer la clé universelle</button><button className="quiet-action" onClick={async()=>{await removePersistentValue('sanctuaire.gemini.key');setGlobalApiKey('');}}>Effacer la clé universelle</button></div><div className="oracle-settings-links">{ORACLES.map(o=><a key={o.id} href={'#/'+o.id} onClick={()=>setModal(null)}>{o.name} <span>Ouvrir les réglages →</span></a>)}</div></>:modal==='cross'?<><div className="eyebrow">SYNTHÈSE DES SIX TRADITIONS</div><h2 id="modal-title">Lecture croisée</h2><p>Sélectionnez au moins deux tirages dans vos historiques. L’IA confrontera leurs questions, cartes et interprétations pour produire une synthèse commune.</p>{journal.length?<><div className="cross-toolbar"><span>{crossSelected.length} tirage(s) sélectionné(s) · {journal.length} disponible(s)</span><div><button className="quiet-action" onClick={()=>setCrossSelected(journal.map(entry=>entry.key))}>Tout sélectionner</button><button className="quiet-action" onClick={()=>setCrossSelected([])}>Tout désélectionner</button></div></div><div className="tarot-form-grid"><label>Modèle Gemini pour la lecture croisée<select value={crossModel} onChange={event=>{setCrossModel(event.target.value);localStorage.setItem("sanctuaire.cross.gemini.model",event.target.value)}}>{crossModels.map(model=><option key={model} value={model}>{model}</option>)}</select></label><button className="quiet-action" onClick={refreshCrossModels}>Actualiser les modèles</button></div><div className="cross-list">{journal.map(entry=><label className="cross-choice" key={entry.key}><input type="checkbox" checked={crossSelected.includes(entry.key)} onChange={event=>setCrossSelected(old=>event.target.checked?[...old,entry.key]:old.filter(key=>key!==entry.key))}/><span><b>{entry.oracle}</b><small>{entry.date} · {entry.domain||'Général'}</small><small>{entry.question||'Tirage général'}</small><small>Cartes : {entry.cards||'—'}</small><small>{entry.ai?'Interprétation IA disponible':entry.local?'Analyse locale disponible':'Aucune analyse enregistrée'}</small></span></label>)}</div><div className="tarot-form-actions"><button className="gold-action" onClick={runCrossReading} disabled={crossBusy||crossSelected.length<2}>{crossBusy?'Analyse en cours…':'Comparer les tirages avec Gemini'}</button></div>{crossStatus&&<p>{crossStatus}</p>}{crossResult&&<><h3 className="cross-result-title">Synthèse globale</h3><div className="tarot-form-actions"><button className="gold-action" onClick={startCrossVoice}>▶ Lire l’analyse croisée</button><button className="quiet-action" onClick={pauseCrossVoice}>Pause / Reprendre</button><button className="quiet-action" onClick={stopCrossVoice}>Arrêter</button></div>{crossVoiceStatus&&<p>{crossVoiceStatus}</p>}<pre className="cross-result">{crossResult}</pre></>}</>:<p>Aucun tirage enregistré pour le moment. Enregistrez des tirages dans les onglets « Historique » de vos oracles : ils apparaîtront ici.</p>}</>:<><div className="eyebrow">VOTRE ESPACE PERSONNEL</div><h2 id="modal-title">Le carnet intérieur</h2>{journal.length?<div className="journal-list">{journal.map(entry=><details key={entry.key}><summary>{entry.date} · {entry.oracle} · {entry.domain||'Général'}</summary><p>{entry.question||'Tirage général'}</p><p><b>Cartes :</b> {entry.cards||'—'}</p>{entry.local&&<pre>{entry.local}</pre>}{entry.ai&&<pre>{entry.ai}</pre>}</details>)}</div>:<p>Aucun tirage enregistré pour le moment. Enregistrez un tirage dans l’onglet « Historique » d’un oracle : il apparaîtra ici.</p>}</>}</div></div>}
  </main>;
}
function OracleRoute({page,onHome}:{page:OracleId;onHome:()=>void}){
  const [Component,setComponent]=useState<ComponentType<{onHome:()=>void}>|null>(null);
  useEffect(()=>{let alive=true;const loaders:Record<OracleId,()=>Promise<{default:ComponentType<{onHome:()=>void}>}>>={tarot:()=>import('./oracles/TarotPage'),belline:()=>import('./oracles/BellinePage'),lenormand:()=>import('./oracles/LenormandPage'),astrologie:()=>import('./oracles/AstrologiePage'),runes:()=>import('./oracles/RunesPage'),portes:()=>import('./oracles/PortesPage')};loaders[page]().then(m=>{if(alive)setComponent(()=>m.default)});return()=>{alive=false}},[page]);
  return Component?<Component onHome={onHome}/>:<main className="oracle-app"><div className="oracle-loading">Ouverture de l’oracle…</div></main>;
}
