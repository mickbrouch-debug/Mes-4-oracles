import SymbolicOraclePage from './SymbolicOraclePage';
import {BELLINE_CARDS} from '../data/bellineCards';

export default function BellinePage({onHome}:{onHome:()=>void}){
  return <SymbolicOraclePage
    onHome={onHome}
    oracle="belline"
    title="Oracle de Belline"
    subtitle="53 cartes réparties entre influences planétaires et cartes spéciales pour éclairer les mouvements d’une situation."
    cards={BELLINE_CARDS}
    domains={['Général','Amour et relations','Travail et projets','Finances et ressources','Famille et entourage','Choix et décisions','Spiritualité et évolution']}
  />;
}
