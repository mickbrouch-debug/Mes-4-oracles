import SymbolicOraclePage from './SymbolicOraclePage';
import {LENORMAND_CARDS} from '../data/lenormandCards';
export default function LenormandPage({onHome}:{onHome:()=>void}){return <SymbolicOraclePage onHome={onHome} oracle="lenormand" title="Grand Jeu de Mlle Lenormand" subtitle="54 cartes, valeurs cartomantiques, associations et lecture en tableau complet." cards={LENORMAND_CARDS} domains={['Général','Amour et relations','Travail et projets','Finances et ressources','Famille et entourage','Choix et décisions']}/>}
