import {Suspense,useMemo,useRef} from 'react';
import {Canvas,useFrame} from '@react-three/fiber';
import {Sparkles,Stars,Float,Environment,MeshDistortMaterial} from '@react-three/drei';
import * as THREE from 'three';

function SacredCore(){
 const g=useRef<THREE.Group>(null!);const halo=useRef<THREE.Group>(null!);
 useFrame((s,d)=>{g.current.rotation.y+=d*.045;g.current.rotation.z=Math.sin(s.clock.elapsedTime*.14)*.035;halo.current.rotation.z-=d*.012});
 return <group position={[0,.15,-1.8]}>
  <group ref={halo}>
   {[2.65,2.34,1.98].map((r,i)=><mesh key={r} rotation={[i*.45,.25*i,i*.2]}><torusGeometry args={[r,.008,8,180]}/><meshBasicMaterial color={i===1?'#f2d9a2':'#c6a36a'} transparent opacity={.38+i*.1}/></mesh>)}
   {Array.from({length:12},(_,i)=><mesh key={i} rotation={[0,0,i*Math.PI/6]}><torusGeometry args={[2.48,.006,6,120,Math.PI/5]}/><meshBasicMaterial color="#ead3a1" transparent opacity={.52}/></mesh>)}
  </group>
  <group ref={g}>
   <mesh><icosahedronGeometry args={[1.03,5]}/><MeshDistortMaterial color="#9a78a9" emissive="#432a55" emissiveIntensity={1.05} roughness={.16} metalness={.68} distort={.2} speed={1.1}/></mesh>
   <mesh scale={.67}><sphereGeometry args={[1,48,48]}/><meshBasicMaterial color="#f4dca8" transparent opacity={.15}/></mesh>
   <pointLight color="#e8c98d" intensity={13} distance={8}/>
  </group>
  <mesh rotation={[Math.PI/2,0,0]}><torusGeometry args={[3.1,.012,8,180]}/><meshBasicMaterial color="#d2b477" transparent opacity={.28}/></mesh>
 </group>
}
function ZodiacWheel(){
 const group=useRef<THREE.Group>(null!);
 useFrame((_,d)=>{group.current.rotation.z+=d*.006});
 return <group ref={group} position={[0,0,-3.1]}>
  <mesh><torusGeometry args={[4.15,.009,6,240]}/><meshBasicMaterial color="#b99965" transparent opacity={.26}/></mesh>
  <mesh><torusGeometry args={[3.78,.006,6,240]}/><meshBasicMaterial color="#d6bf8f" transparent opacity={.2}/></mesh>
  {Array.from({length:12},(_,i)=><group key={i} rotation={[0,0,i*Math.PI/6]}><mesh position={[0,3.96,0]}><boxGeometry args={[.012,.42,.012]}/><meshBasicMaterial color="#dfc58e" transparent opacity={.55}/></mesh><mesh position={[0,3.63,0]}><sphereGeometry args={[.035,12,12]}/><meshBasicMaterial color="#e6c98e"/></mesh></group>)}
 </group>
}
function Crystal({position,scale=1,color='#b99bc7'}:{position:[number,number,number],scale?:number,color?:string}){
 return <group position={position} scale={scale}><mesh><octahedronGeometry args={[.34,0]}/><meshPhysicalMaterial color={color} metalness={.28} roughness={.16} transmission={.35} thickness={.8} emissive={color} emissiveIntensity={.18}/></mesh><mesh rotation={[0,0,Math.PI/4]}><octahedronGeometry args={[.42,0]}/><meshBasicMaterial color="#e4c88d" wireframe transparent opacity={.45}/></mesh></group>
}
function FloatingRelics(){
 const relics=useMemo(()=>Array.from({length:16},(_,i)=>({x:Math.sin(i*2.4)*6.2,y:Math.cos(i*1.73)*3.6,z:-1-(i%5)*1.2,s:.35+(i%3)*.14})),[]);
 const g=useRef<THREE.Group>(null!);useFrame((s,d)=>{g.current.rotation.y+=d*.009;g.current.children.forEach((c,i)=>{c.position.y+=Math.sin(s.clock.elapsedTime*.35+i)*.0009})});
 return <group ref={g}>{relics.map((r,i)=><group key={i} position={[r.x,r.y,r.z]} scale={r.s}><mesh rotation={[.3,i*.4,.2]}><torusGeometry args={[.52,.009,6,48]}/><meshBasicMaterial color={i%3===0?'#e4c98d':'#9d82ad'} transparent opacity={.46}/></mesh><mesh rotation={[.4,.2,i*.3]}><octahedronGeometry args={[.22,0]}/><meshBasicMaterial color="#e6c98e" wireframe transparent opacity={.35}/></mesh></group>)}</group>
}
function Constellations(){
 const points=useMemo(()=>Array.from({length:9},(_,i)=>new THREE.Vector3(Math.sin(i*1.7)*5.8,Math.cos(i*2.1)*3.2,-5)),[]);
 const geom=useMemo(()=>new THREE.BufferGeometry().setFromPoints(points),[points]);
 return <group><lineSegments geometry={new THREE.BufferGeometry().setFromPoints(points.flatMap((p,i)=>i<points.length-1?[p,points[i+1]]:[]))}><lineBasicMaterial color="#d7c08f" transparent opacity={.22}/></lineSegments>{points.map((p,i)=><mesh key={i} position={p}><sphereGeometry args={[.035,10,10]}/><meshBasicMaterial color="#f4dfb0"/></mesh>)}</group>
}
function World(){return <>
 <color attach="background" args={['#090813']}/><fog attach="fog" args={['#090813',9,22]}/>
 <ambientLight intensity={.8}/><pointLight position={[0,2,3]} color="#e0bd7c" intensity={34} distance={15}/><pointLight position={[-6,-2,-4]} color="#76518e" intensity={27} distance={14}/><pointLight position={[6,2,-5]} color="#bd9562" intensity={20} distance={13}/>
 <Suspense fallback={null}><Environment preset="night"/></Suspense>
 <Stars radius={100} depth={65} count={2600} factor={3.5} saturation={.2} fade speed={.22}/>
 <Sparkles count={280} scale={[17,11,12]} size={2.2} speed={.16} opacity={.68} color="#e8d09a"/>
 <Sparkles count={110} scale={[12,8,10]} size={3.2} speed={.12} opacity={.38} color="#b99bc7"/>
 <ZodiacWheel/><Constellations/><FloatingRelics/><SacredCore/>
 <Float speed={.65} rotationIntensity={.05} floatIntensity={.1}><Crystal position={[-4.8,-1.7,-1.2]} scale={1.35}/><Crystal position={[4.7,1.7,-2]} scale={1.15} color="#d7b477"/><Crystal position={[3.7,-2.4,-1]} scale={.8}/></Float>
 </>}
export default function Scene(){return <div className="scene-wrap" aria-hidden="true"><Canvas camera={{position:[0,0,10],fov:44}} dpr={[1,1.5]} gl={{antialias:false,alpha:false,powerPreference:'low-power'}} onCreated={({gl})=>{gl.setClearColor('#090813');gl.toneMapping=THREE.ACESFilmicToneMapping}}><World/></Canvas></div>}