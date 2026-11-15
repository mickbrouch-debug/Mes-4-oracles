import SymbolicOraclePage from './SymbolicOraclePage';
import {PORTES_CARDS} from '../data/portesCards';

export default function PortesPage({onHome}:{onHome:()=>void}){
  return <SymbolicOraclePage
    onHome={onHome}
    oracle="portes"
    title="Les Portes de l’Intuition"
    subtitle="46 portes symboliques pour explorer vos ressentis, vos choix et les passages de votre chemin intérieur."
    cards={PORTES_CARDS}
    domains={['Général','Amour et relations','Travail et vocation','Famille et entourage','Choix et changements','Connaissance de soi','Spiritualité et évolution']}
  />;
}
