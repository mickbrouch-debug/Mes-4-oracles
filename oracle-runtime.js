/* Shared runtime for all six oracles — release 2026-11-13 */
(function(){
 'use strict';
 if(window.OracleRuntime) return;
 let queue=[], index=0, generation=0;
 function chunks(text, limit=170){
   const clean=String(text||'').replace(/\s+/g,' ').trim(); if(!clean) return [];
   const sentences=clean.match(/[^.!?;]+[.!?;]+|[^.!?;]+$/g)||[clean]; const out=[];
   for(let part of sentences){part=part.trim();while(part.length>limit){let cut=Math.max(part.lastIndexOf(' ',limit),part.lastIndexOf(',',limit),part.lastIndexOf(':',limit));if(cut<Math.floor(limit*.55))cut=limit;out.push(part.slice(0,cut).trim());part=part.slice(cut).trim();}if(part)out.push(part);}
   return out;
 }
 function status(message){const el=document.getElementById('voiceStatus');if(el)el.textContent=message;}
 function speakNext(token){
   if(token!==generation)return;
   if(!('speechSynthesis'in window)||!('SpeechSynthesisUtterance'in window)){status('Lecture vocale non prise en charge par ce navigateur.');return;}
   if(index>=queue.length){status('Lecture terminée.');return;}
   const u=new SpeechSynthesisUtterance(queue[index]);u.lang='fr-FR';u.rate=0.94;
   const voices=speechSynthesis.getVoices();const voice=voices.find(v=>/^fr([-_]|$)/i.test(v.lang));if(voice)u.voice=voice;
   u.onend=()=>{if(token===generation){index++;speakNext(token)}};
   u.onerror=e=>{if(token===generation)status('Erreur vocale : '+(e.error||'lecture impossible'))};
   speechSynthesis.speak(u);
 }
 function stop(){generation++;if('speechSynthesis'in window)speechSynthesis.cancel();queue=[];index=0;status('Lecture arrêtée.');}
 function speak(text){
   if(!('speechSynthesis'in window)){status('Lecture vocale indisponible dans ce navigateur.');return false;}
   const parts=chunks(text);if(!parts.length){status('Aucun texte à lire.');return false;}
   generation++;const token=generation;speechSynthesis.cancel();queue=parts;index=0;status('Lecture en cours…');
   // Android Chrome can drop the first utterance immediately after cancel; yield one task.
   setTimeout(()=>speakNext(token),80);return true;
 }
 function toggle(){if(!('speechSynthesis'in window))return;if(speechSynthesis.paused){speechSynthesis.resume();status('Lecture reprise.')}else if(speechSynthesis.speaking){speechSynthesis.pause();status('Lecture en pause.')}else status('Aucune lecture en cours.');}
 window.OracleRuntime={speak,stop,toggle,chunks};
 // Backwards compatibility: history and older pages call this global.
 window.speakOracleText=function(text){return speak(text)};
})();
