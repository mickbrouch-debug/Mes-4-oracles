import SymbolicOraclePage from './SymbolicOraclePage';
import {TAROT_CARDS} from '../data/tarotCards';

export default function TarotPage({onHome}:{onHome:()=>void}){
  return <SymbolicOraclePage
    onHome={onHome}
    oracle="tarot"
    title="Tarot des 78 Arcanes"
    subtitle="Les 22 arcanes majeurs et les 56 mineurs pour explorer les dynamiques, les choix et les ressources d’une situation."
    cards={TAROT_CARDS}
    domains={['Général','Amour et relations','Travail et vocation','Finances et ressources','Famille et entourage','Choix et décisions','Spiritualité et évolution']}
  />;
}
