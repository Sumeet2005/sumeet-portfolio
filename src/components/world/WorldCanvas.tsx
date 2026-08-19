import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { world } from "./world-store";

const CYAN = new THREE.Color("#7fdbe8");
const VIOLET = new THREE.Color("#a189f5");
const DEPTH = 260; // total travel distance of the camera through the world

function Starfield() {
  const ref = useRef<THREE.Points>(null);
  const geo = useMemo(() => {
    const count = 1400;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 26 + Math.random() * 60;
      const a = Math.random() * Math.PI * 2;
      pos[i * 3] = Math.cos(a) * r;
      pos[i * 3 + 1] = Math.sin(a) * r * 0.6;
      pos[i * 3 + 2] = -Math.random() * (DEPTH + 120) + 40;
      const c = Math.random() > 0.5 ? CYAN : VIOLET;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    g.setAttribute("color", new THREE.BufferAttribute(col, 3));
    return g;
  }, []);

  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += dt * 0.01;
  });

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial
        size={0.42}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/** Infinite technical grid floor + ceiling forming the corridor of the world. */
function Corridor() {
  const group = useRef<THREE.Group>(null);
  const planes = useMemo(() => {
    const g = new THREE.PlaneGeometry(160, 160, 32, 32);
    return g;
  }, []);

  useFrame(() => {
    if (!group.current) return;
    const z = -world.progress * DEPTH;
    // tile the grid so it never ends
    group.current.position.z = Math.floor(z / 40) * 40;
  });

  return (
    <group ref={group}>
      {[0, 1, 2, 3, 4].map((i) => (
        <group key={i} position={[0, 0, -i * 40 + 60]}>
          <lineSegments rotation={[-Math.PI / 2, 0, 0]} position={[0, -13, -60]}>
            <wireframeGeometry args={[planes]} />
            <lineBasicMaterial
              color={CYAN}
              transparent
              opacity={0.13}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </lineSegments>
          <lineSegments rotation={[Math.PI / 2, 0, 0]} position={[0, 15, -60]}>
            <wireframeGeometry args={[planes]} />
            <lineBasicMaterial
              color={VIOLET}
              transparent
              opacity={0.08}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </lineSegments>
        </group>
      ))}
    </group>
  );
}

/** Glowing wireframe structures marking each "room" of the world. */
function Landmarks() {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo(
    () =>
      Array.from({ length: 9 }, (_, i) => ({
        z: -18 - i * 30,
        x: (i % 2 === 0 ? -1 : 1) * (11 + (i % 3) * 3),
        y: ((i % 3) - 1) * 4,
        s: 1.6 + (i % 4) * 0.7,
        c: i % 2 === 0 ? CYAN : VIOLET,
        spin: 0.1 + (i % 5) * 0.04,
      })),
    [],
  );

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.children.forEach((child, i) => {
      const n = nodes[i]!;
      child.rotation.x = t * n.spin;
      child.rotation.y = t * n.spin * 0.7;
      child.position.y = n.y + Math.sin(t * 0.5 + i) * 0.6;
    });
  });

  return (
    <group ref={group}>
      {nodes.map((n, i) => (
        <mesh key={i} position={[n.x, n.y, n.z]} scale={n.s}>
          {i % 3 === 0 ? (
            <icosahedronGeometry args={[1, 1]} />
          ) : i % 3 === 1 ? (
            <octahedronGeometry args={[1, 0]} />
          ) : (
            <torusGeometry args={[1, 0.28, 8, 24]} />
          )}
          <meshBasicMaterial
            color={n.c}
            wireframe
            transparent
            opacity={0.35}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

/** Streaming data particles that accelerate with scroll velocity. */
function DataStream() {
  const ref = useRef<THREE.Points>(null);
  const geo = useMemo(() => {
    const count = 500;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 46;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 24;
      pos[i * 3 + 2] = -Math.random() * (DEPTH + 80);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return g;
  }, []);

  useFrame((_, dt) => {
    const attr = geo.getAttribute("position") as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;
    const speed = 6 + Math.min(60, Math.abs(world.velocity) * 3);
    const camZ = 40 - world.progress * DEPTH;
    for (let i = 2; i < arr.length; i += 3) {
      arr[i]! += speed * dt;
      if (arr[i]! > camZ + 6) arr[i] = camZ - (DEPTH + 60) * Math.random() - 20;
    }
    attr.needsUpdate = true;
    if (ref.current) ref.current.visible = true;
  });

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial
        size={0.16}
        color={CYAN}
        transparent
        opacity={0.5}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function CameraRig({ reduced }: { reduced: boolean }) {
  const { camera } = useThree();
  useFrame(() => {
    const targetZ = 40 - world.progress * DEPTH;
    camera.position.z += (targetZ - camera.position.z) * 0.08;
    if (!reduced) {
      camera.position.x += (world.sx * 3.2 - camera.position.x) * 0.06;
      camera.position.y += (-world.sy * 2 - camera.position.y) * 0.06;
      camera.rotation.z += (world.sx * 0.02 - camera.rotation.z) * 0.05;
    }
    camera.lookAt(world.sx * 1.4, -world.sy * 0.8, camera.position.z - 30);
  });
  return null;
}

export function WorldCanvas({ reduced }: { reduced: boolean }) {
  return (
    <Canvas
      className="world-canvas"
      dpr={[1, 1.5]}
      frameloop={reduced ? "demand" : "always"}
      gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
      camera={{ position: [0, 0, 40], fov: 62, near: 0.1, far: 400 }}
    >
      <fog attach="fog" args={["#0a0e1a", 30, 190]} />
      <Starfield />
      <Corridor />
      <Landmarks />
      {reduced ? null : <DataStream />}
      <CameraRig reduced={reduced} />
    </Canvas>
  );
}
