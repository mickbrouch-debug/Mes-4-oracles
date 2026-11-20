import {Suspense,useMemo,useRef} from 'react';
import {Canvas,useFrame} from '@react-three/fiber';
import {Sparkles,Stars,Float,Environment,MeshDistortMaterial} from '@react-three/drei';
import * as THREE from 'three';

// Décor procédural : portail rituel, astrolabe, cristaux et poussière astrale.
// Tout est calculé en 3D : aucune image de fond statique ne masque la scène.
function AstralPortal(){
 const portal=useRef<THREE.Group>(null!);
 const inner=useRef<THREE.Group>(null!);
 useFrame((s,d)=>{
  portal.current.rotation.z+=d*.012;
  inner.current.rotation.y+=d*.035;
  inner.current.rotation.x=Math.sin(s.clock.elapsedTime*.16)*.035;
 });
 return <group position={[0,.15,-2.8]}>
  <group ref={portal}>
   {[3.65,3.35,3.02,2.72].map((r,i)=><mesh key={r} rotation={[.16*i,.22*i,.08*i]}>
    <torusGeometry args={[r,.012+(i%2)*.003,8,220]}/>
    <meshBasicMaterial color={i===1?'#c9a7f2':'#d9bd83'} transparent opacity={.22+i*.045}/>
   </mesh>)}
   {Array.from({length:24},(_,i)=><group key={i} rotation={[0,0,i*Math.PI/12]}>
    <mesh position={[0,3.48,0]}><octahedronGeometry args={[.075,0]}/><meshBasicMaterial color={i%3===0?'#e8d4a6':'#b99bdd'} transparent opacity={.85}/></mesh>
    <mesh position={[0,3.18,0]}><boxGeometry args={[.012,.22,.012]}/><meshBasicMaterial color="#d8c39b" transparent opacity={.48}/></mesh>
   </group>)}
  </group>
  <group ref={inner}>
   <mesh><icosahedronGeometry args={[1.02,2]}/><MeshDistortMaterial color="#211a39" emissive="#5b347e" emissiveIntensity={1.35} roughness={.18} metalness={.72} distort={.32} speed={.7}/></mesh>
   <mesh scale={.72}><sphereGeometry args={[1,40,40]}/><meshBasicMaterial color="#bca0e6" transparent opacity={.12}/></mesh>
   <mesh rotation={[Math.PI/2,.25,0]}><torusGeometry args={[1.38,.018,8,120]}/><meshBasicMaterial color="#d9bd83" transparent opacity={.72}/></mesh>
   <pointLight color="#a77bd4" intensity={18} distance={9}/>
  </group>
  <mesh rotation={[Math.PI/2,0,0]}><torusGeometry args={[4.05,.012,8,200]}/><meshBasicMaterial color="#a98acb" transparent opacity={.22}/></mesh>
 </group>
}
function OrbitingSigils(){
 const group=useRef<THREE.Group>(null!);
 const symbols=useMemo(()=>Array.from({length:9},(_,i)=>({a:i*Math.PI*2/9,r:4.65+(i%2)*.32,z:-1.6-(i%3)*.4,s:.13+(i%3)*.035})),[]);
 useFrame((s,d)=>{group.current.rotation.z-=d*.018;group.current.children.forEach((c,i)=>{c.position.y+=Math.sin(s.clock.elapsedTime*.55+i)*.0008})});
 return <group ref={group} position={[0,0,-2]}>
  {symbols.map((p,i)=><group key={i} position={[Math.cos(p.a)*p.r,Math.sin(p.a)*p.r,p.z]} scale={p.s}>
   <mesh rotation={[.4,i*.5,.3]}><octahedronGeometry args={[1,0]}/><meshBasicMaterial color={i%2?'#c9a8e8':'#e0c58c'} wireframe transparent opacity={.7}/></mesh>
   <mesh><sphereGeometry args={[.22,12,12]}/><meshBasicMaterial color="#f0dcae"/></mesh>
   <pointLight color={i%2?'#a47acb':'#d5b578'} intensity={.45} distance={1.4}/>
  </group>)}
 </group>
}
function Crescent(){
 const moon=useRef<THREE.Group>(null!);
 useFrame((s,d)=>{moon.current.rotation.y+=d*.012;moon.current.rotation.z=Math.sin(s.clock.elapsedTime*.1)*.018});
 return <group ref={moon} position={[5.35,2.6,-6]}>
  <mesh><sphereGeometry args={[1.35,48,48]}/><meshStandardMaterial color="#c9b9dc" emissive="#574174" emissiveIntensity={.34} roughness={.88}/></mesh>
  <mesh position={[.58,.12,.42]} scale={[1.27,1.27,1.27]}><sphereGeometry args={[1.2,40,40]}/><meshBasicMaterial color="#090813"/></mesh>
  {[1.65,1.9,2.15].map((r,i)=><mesh key={r} rotation={[.8+i*.2,.2,i*.48]}><torusGeometry args={[r,.009,6,144]}/><meshBasicMaterial color={i===1?'#d8b87c':'#c4a4e6'} transparent opacity={.28}/></mesh>)}
  <pointLight color="#b99bd8" intensity={7} distance={11}/>
 </group>
}
function Nebula(){
 const cloud=useRef<THREE.Group>(null!);
 useFrame((s,d)=>{cloud.current.rotation.z+=d*.002;cloud.current.position.x=Math.sin(s.clock.elapsedTime*.035)*.18});
 return <group ref={cloud} position={[0,0,-8]}>
  {Array.from({length:10},(_,i)=><mesh key={i} position={[Math.sin(i*1.7)*4.2,Math.cos(i*1.2)*2.9,-i*.16]} scale={[3.2+i*.24,1.35+i*.12,.16]} rotation={[0,0,i*.39]}>
   <sphereGeometry args={[1,24,16]}/><meshBasicMaterial color={i%3===0?'#9a62bd':i%3===1?'#405b91':'#75518d'} transparent opacity={.045} depthWrite={false}/>
  </mesh>)}
 </group>
}
function Crystal({position,scale=1,color='#b99bd8'}:{position:[number,number,number];scale?:number;color?:string}){
 return <group position={position} scale={scale}>
  <mesh><octahedronGeometry args={[.48,1]}/><meshPhysicalMaterial color={color} metalness={.28} roughness={.12} transmission={.42} thickness={1} emissive={color} emissiveIntensity={.22}/></mesh>
  <mesh rotation={[0,0,Math.PI/4]}><octahedronGeometry args={[.56,0]}/><meshBasicMaterial color="#e4c88d" wireframe transparent opacity={.42}/></mesh>
 </group>
}
function FloatingCrystals(){
 const items=useMemo(()=>Array.from({length:13},(_,i)=>({x:Math.sin(i*2.4)*7,y:Math.cos(i*1.73)*4.1,z:-1-(i%5)*1.1,s:.25+(i%3)*.12})),[]);
 const group=useRef<THREE.Group>(null!);
 useFrame((s,d)=>{group.current.rotation.y+=d*.006;group.current.children.forEach((c,i)=>{c.position.y+=Math.sin(s.clock.elapsedTime*.35+i)*.0007})});
 return <group ref={group}>{items.map((p,i)=><group key={i} position={[p.x,p.y,p.z]} scale={p.s}><Crystal position={[0,0,0]} color={i%2?'#aa8acb':'#d0b27c'}/></group>)}</group>
}

function TempleArchitecture(){
 const stairs=Array.from({length:11},(_,i)=>({y:-3.45+i*.34,z:1.2-i*.39,w:5.9-i*.23}));
 return <group>
  {/* Escalier monumental : marches sombres cerclées d'or */}
  {stairs.map((s,i)=><group key={i} position={[0,s.y,s.z]}>
   <mesh position={[0,0,0]}><boxGeometry args={[s.w,.28,.72]}/><meshStandardMaterial color={i%2?'#29213b':'#342844'} metalness={.62} roughness={.34}/></mesh>
   <mesh position={[0,.145,.02]}><boxGeometry args={[s.w,.018,.73]}/><meshBasicMaterial color="#d7b875" transparent opacity={.8}/></mesh>
   <pointLight position={[0,.24,.2]} color="#c99b55" intensity={.38} distance={2.2}/>
  </group>)}
  {/* Colonnes du portail */}
  {[-3.35,3.35].map((x,i)=><group key={i} position={[x,.35,-2.35]}>
   <mesh position={[0,0,0]}><cylinderGeometry args={[.34,.48,5.5,12]}/><meshStandardMaterial color="#40304f" metalness={.72} roughness={.28}/></mesh>
   {[ -2.5,-1.85,1.85,2.5].map((y,j)=><mesh key={j} position={[0,y,0]}><torusGeometry args={[.42,.055,8,32]}/><meshStandardMaterial color="#d7b875" metalness={.8} roughness={.24} emissive="#9b7139" emissiveIntensity={.22}/></mesh>)}
   <mesh position={[0,2.82,0]}><boxGeometry args={[.9,.3,.9]}/><meshStandardMaterial color="#b18a52" metalness={.72} roughness={.3}/></mesh>
   <pointLight position={[0,1.2,.55]} color="#a77bd4" intensity={2.2} distance={4}/>
  </group>)}
  {/* Arc monumental au-dessus de la porte */}
  <mesh position={[0,3.12,-2.4]} rotation={[0,0,Math.PI/2]}><torusGeometry args={[3.35,.19,16,96,Math.PI]}/><meshStandardMaterial color="#6d4b72" metalness={.78} roughness={.26} emissive="#482b62" emissiveIntensity={.3}/></mesh>
  <mesh position={[0,5.95,-2.35]}><octahedronGeometry args={[.48,1]}/><meshStandardMaterial color="#c9a0eb" emissive="#9d68d2" emissiveIntensity={1.2} metalness={.3} roughness={.18}/></mesh>
  {/* Parvis et grand sceau au premier plan */}
  <mesh position={[0,-3.55,.7]} rotation={[-Math.PI/2,0,0]}><circleGeometry args={[4.7,96]}/><meshStandardMaterial color="#171225" metalness={.5} roughness={.42}/></mesh>
  {[1.8,2.35,2.9,3.45].map((r,i)=><mesh key={r} position={[0,-3.36,.7]} rotation={[-Math.PI/2,0,i*.12]}><ringGeometry args={[r,r+.018,128]}/><meshBasicMaterial color={i%2?'#b99bd8':'#e0bd78'} transparent opacity={.56}/></mesh>)}
  {Array.from({length:12},(_,i)=><mesh key={i} position={[Math.cos(i*Math.PI/6)*2.65,-3.34,.7+Math.sin(i*Math.PI/6)*2.65]}><octahedronGeometry args={[.11,0]}/><meshBasicMaterial color="#e5c98c" emissive="#d3a85d" emissiveIntensity={.8}/></mesh>)}
 </group>
}
\nfunction World(){return <>
 <color attach="background" args={['#080611']}/><fog attach="fog" args={['#080611',10,24]}/>
 <ambientLight intensity={.62}/><pointLight position={[0,2,4]} color="#d7b878" intensity={26} distance={17}/><pointLight position={[-6,-2,-4]} color="#78519d" intensity={24} distance={15}/><pointLight position={[6,3,-5]} color="#a47acb" intensity={17} distance={14}/>
 <Suspense fallback={null}><Environment preset="night"/></Suspense>
 <Stars radius={90} depth={60} count={1900} factor={3.5} saturation={.35} fade speed={.18}/>
 <Sparkles count={190} scale={[17,11,13]} size={2.1} speed={.14} opacity={.7} color="#ead7aa"/>
 <Sparkles count={125} scale={[15,10,12]} size={3.1} speed={.09} opacity={.52} color="#c5a0e8"/>
 <Sparkles count={55} scale={[12,8,10]} size={3.8} speed={.07} opacity={.28} color="#8da8dc"/>
 <Nebula/><Crescent/><TempleArchitecture/><AstralPortal/><OrbitingSigils/><FloatingCrystals/>
 <Float speed={.55} rotationIntensity={.08} floatIntensity={.12}>
  <Crystal position={[-4.8,-1.8,-1.2]} scale={1.25}/>
  <Crystal position={[4.6,1.5,-1.8]} scale={1.1} color="#d6b477"/>
  <Crystal position={[3.5,-2.5,-1]} scale={.82}/>
 </Float>
 </>}
export default function Scene(){return <div className="scene-wrap" aria-hidden="true"><Canvas camera={{position:[0,0,11],fov:43}} dpr={[1,1.35]} gl={{antialias:false,alpha:false,powerPreference:'low-power'}} onCreated={({gl})=>{gl.setClearColor('#080611');gl.toneMapping=THREE.ACESFilmicToneMapping}}><World/></Canvas></div>}
