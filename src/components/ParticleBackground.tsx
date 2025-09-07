import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ParticleBackgroundProps {
  isDark: boolean;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ isDark }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<THREE.Points | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true, 
      antialias: true 
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;

    // Create particle system
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    // Color palette for dark theme
    const colorPalette = isDark ? [
      new THREE.Color(0x00ff88), // Neon green
      new THREE.Color(0x00d4aa), // Teal
      new THREE.Color(0x00a8ff), // Blue
      new THREE.Color(0x8b5cf6), // Purple
    ] : [
      new THREE.Color(0x10b981), // Green
      new THREE.Color(0x06b6d4), // Cyan
      new THREE.Color(0x3b82f6), // Blue
      new THREE.Color(0x8b5cf6), // Purple
    ];

    for (let i = 0; i < particleCount; i++) {
      // Position particles in a sphere
      const radius = Math.random() * 20 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Random color from palette
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      // Random size
      sizes[i] = Math.random() * 2 + 0.5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Custom shader material for better particle effects
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        mouse: { value: new THREE.Vector2(0, 0) },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      vertexShader: `
        attribute float size;
        uniform float time;
        uniform vec2 mouse;
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
          vColor = color;
          
          // Create wave motion
          vec3 pos = position;
          pos.y += sin(pos.x * 0.1 + time) * 0.5;
          pos.x += cos(pos.z * 0.1 + time) * 0.3;
          
          // Mouse interaction
          float mouseInfluence = 1.0 - distance(pos.xy, mouse * 10.0) * 0.1;
          mouseInfluence = max(0.0, mouseInfluence);
          pos.xy += (pos.xy - mouse * 10.0) * mouseInfluence * 0.1;
          
          // Pulsing effect
          float pulse = sin(time * 2.0 + pos.x * 0.1) * 0.1 + 1.0;
          pos *= pulse;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          
          // Size based on distance and mouse interaction
          gl_PointSize = size * (300.0 / -mvPosition.z) * (0.5 + mouseInfluence * 0.5);
          
          // Alpha based on distance and mouse interaction
          vAlpha = (1.0 - length(pos) / 25.0) * (0.3 + mouseInfluence * 0.4);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
          // Create circular particles
          float distance = length(gl_PointCoord - vec2(0.5));
          if (distance > 0.5) discard;
          
          // Add glow effect
          float glow = 1.0 - distance * 2.0;
          glow = pow(glow, 2.0);
          
          gl_FragColor = vec4(vColor, vAlpha * glow);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    particlesRef.current = new THREE.Points(geometry, material);
    scene.add(particlesRef.current);

    camera.position.z = 15;

    // Mouse movement handler
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      if (particlesRef.current && material.uniforms) {
        // Update time uniform
        material.uniforms.time.value = performance.now() * 0.001;
        material.uniforms.mouse.value.set(mouseRef.current.x, mouseRef.current.y);

        // Rotate particles
        particlesRef.current.rotation.x += 0.001;
        particlesRef.current.rotation.y += 0.002;
        particlesRef.current.rotation.z += 0.0005;

        // Update particle positions for wave motion
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
        const time = performance.now() * 0.001;
        
        for (let i = 0; i < particleCount; i++) {
          const x = positions[i * 3];
          const y = positions[i * 3 + 1];
          const z = positions[i * 3 + 2];
          
          // Create subtle wave motion
          positions[i * 3] = x + Math.sin(time + y * 0.01) * 0.01;
          positions[i * 3 + 1] = y + Math.cos(time + x * 0.01) * 0.01;
          positions[i * 3 + 2] = z + Math.sin(time + x * 0.01 + y * 0.01) * 0.005;
        }
        
        particlesRef.current.geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        if (material.uniforms && material.uniforms.resolution) {
          material.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (renderer) {
        renderer.dispose();
      }
      
      if (geometry) {
        geometry.dispose();
      }
      
      if (material) {
        material.dispose();
      }
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none opacity-70"
      style={{ 
        zIndex: -1,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh'
      }}
    />
  );
};

export default ParticleBackground;