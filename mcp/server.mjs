import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { registerAppResource, registerAppTool, RESOURCE_MIME_TYPE } from "@modelcontextprotocol/ext-apps/server";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { z } from "zod";
import { TAROT_CARDS } from "./data/tarot.js";
import { BELLINE_CARDS } from "./data/belline.js";
import { LENORMAND_CARDS } from "./data/lenormand.js";
import { ASTROLOGIE_CARDS } from "./data/astrologie.js";
import { RUNES_CARDS } from "./data/runes.js";
import { PORTES_CARDS } from "./data/portes.js";

const here=dirname(fileURLToPath(import.meta.url));
const widgetHtml=readFileSync(resolve(here,"widget.html"),"utf8");
const decks={
 tarot:{label:"Tarot de Marseille",cards:TAROT_CARDS},
 belline:{label:"Oracle Belline",cards:BELLINE_CARDS},
 lenormand:{label:"Grand Lenormand",cards:LENORMAND_CARDS},
 astrologie:{label:"Oracle Astrologique",cards:ASTROLOGIE_CARDS},
 runes:{label:"Runes nordiques",cards:RUNES_CARDS},
 portes:{label:"Les 46 Portes",cards:PORTES_CARDS}
};
const cardSummary=c=>({id:c.id,name:c.name,number:c.number,suit:c.suit,icon:c.icon||"",keywords:c.keywords||c.upright?.keywords||""});
const reply=(text,structuredContent)=>({content:[{type:"text",text}],structuredContent});
const uiUri="ui://sanctuaire/oracle.html";
function configure(server){
 registerAppResource(server,"sanctuaire-ui",uiUri,{},async()=>({contents:[{uri:uiUri,mimeType:RESOURCE_MIME_TYPE,text:widgetHtml}]}));
 registerAppTool(server,"sanctuaire_catalogue",{
  title:"Ouvrir Le Sanctuaire",
  description:"Présente les six oracles disponibles et ouvre l'interface interactive.",
  inputSchema:{},
  outputSchema:{oracles:z.array(z.object({id:z.string(),name:z.string(),cardCount:z.number()}))},
  _meta:{ui:{resourceUri:uiUri}}
 },async()=>{const oracles=Object.entries(decks).map(([id,d])=>({id,name:d.label,cardCount:d.cards.length}));return reply("Le Sanctuaire V17.5 est prêt. Choisissez un oracle et sélectionnez manuellement les cartes.",{oracles});});
 registerAppTool(server,"sanctuaire_lister_cartes",{
  title:"Afficher les cartes d'un oracle",
  description:"Renvoie le jeu complet afin que l'utilisateur choisisse lui-même ses cartes. Aucun tirage aléatoire.",
  inputSchema:{oracle:z.enum(["tarot","belline","lenormand","astrologie","runes","portes"])},
  outputSchema:{oracle:z.string(),name:z.string(),cards:z.array(z.object({id:z.string(),name:z.string(),number:z.number(),suit:z.string(),icon:z.string(),keywords:z.string()}))}
 },async({oracle})=>{const d=decks[oracle];return reply(d.label+" : "+d.cards.length+" cartes disponibles. Sélection manuelle.",{oracle,name:d.label,cards:d.cards.map(cardSummary)});});
 registerAppTool(server,"sanctuaire_preparer_tirage",{
  title:"Préparer un tirage manuel",
  description:"Prépare uniquement les cartes explicitement choisies. Respecte leur orientation et n'ajoute aucune carte.",
  inputSchema:{
   oracle:z.enum(["tarot","belline","lenormand","astrologie","runes","portes"]),
   question:z.string().max(1200).default(""),
   domaine:z.string().max(120).default("Général"),
   cartes:z.array(z.object({id:z.string(),orientation:z.enum(["droite","renversee"]).default("droite"),position:z.string().max(100).default("")})).min(1).max(78)
  },
  outputSchema:{oracle:z.string(),oracleName:z.string(),question:z.string(),domaine:z.string(),cartes:z.array(z.object({id:z.string(),name:z.string(),position:z.string(),orientation:z.string(),keywords:z.string(),meaning:z.string(),advice:z.string()})),consigneInterpretation:z.string()},
  _meta:{ui:{resourceUri:uiUri}}
 },async({oracle,question,domaine,cartes})=>{
  const d=decks[oracle];
  const selected=cartes.map((pick,i)=>{
   const card=d.cards.find(c=>c.id===pick.id);
   if(!card)throw new Error("Carte inconnue pour "+d.label+": "+pick.id);
   const side=pick.orientation==="renversee"?(card.reversed||card.upright):card.upright;
   return{id:card.id,name:card.name,position:pick.position||("Carte "+(i+1)),orientation:pick.orientation,keywords:side?.keywords||card.keywords||"",meaning:side?.meaning||"",advice:side?.advice||""};
  });
  const payload={oracle,oracleName:d.label,question:question||"Tirage général",domaine,cartes:selected,consigneInterpretation:"Interprète en français avec nuance et fluidité. Relie les cartes entre elles, respecte les positions et orientations, distingue symboles et faits vérifiables. Donne une synthèse, la lecture de chaque position, les associations et tensions, puis un conseil concret. Ne présente jamais le tirage comme une certitude sur l'avenir, les pensées ou les intentions d'autrui."};
  return reply("Tirage manuel préparé pour "+d.label+". "+selected.length+" carte(s) choisie(s) par l'utilisateur.",payload);
 });
}
const port=Number(process.env.PORT||8787),path="/mcp";
const httpServer=createServer(async(req,res)=>{
 if(!req.url){res.writeHead(400).end("Missing URL");return;}
 const url=new URL(req.url,"http://"+(req.headers.host||"localhost"));
 if(req.method==="OPTIONS"&&url.pathname===path){res.writeHead(204,{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST, GET, OPTIONS","Access-Control-Allow-Headers":"content-type, mcp-session-id","Access-Control-Expose-Headers":"Mcp-Session-Id"}).end();return;}
 if(req.method==="GET"&&url.pathname==="/"){res.writeHead(200,{"content-type":"application/json"}).end(JSON.stringify({name:"Le Sanctuaire",version:"17.5.0",status:"ok",endpoint:"/mcp"}));return;}
 if(url.pathname===path&&req.method&&["POST","GET","DELETE"].includes(req.method)){
  res.setHeader("Access-Control-Allow-Origin","*");res.setHeader("Access-Control-Expose-Headers","Mcp-Session-Id");
  const mcp=new McpServer({name:"le-sanctuaire",version:"17.5.0"});configure(mcp);
  const transport=new StreamableHTTPServerTransport({sessionIdGenerator:undefined,enableJsonResponse:true});
  res.on("close",()=>{transport.close();mcp.close();});
  try{await mcp.connect(transport);await transport.handleRequest(req,res);}catch(error){console.error(error);if(!res.headersSent)res.writeHead(500).end("MCP internal error");}
  return;
 }
 res.writeHead(404).end("Not Found");
});
httpServer.listen(port,()=>console.log("Le Sanctuaire MCP listening on "+port+path));
