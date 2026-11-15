import SymbolicOraclePage from './SymbolicOraclePage';
import {ASTROLOGIE_CARDS} from '../data/astrologieCards';
export default function AstrologiePage({onHome}:{onHome:()=>void}){return <SymbolicOraclePage onHome={onHome} oracle="astrologie" title="Oracle astrologique" subtitle="34 cartes du zodiaque, des planètes et des maisons pour explorer les dynamiques symboliques." cards={ASTROLOGIE_CARDS} domains={['Général','Identité et chemin personnel','Amour et relations','Travail et vocation','Ressources et finances','Famille et foyer','Spiritualité et évolution']}/>}
