const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('primaryNav');
const yearEl = document.getElementById('year');

// Year
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Theme
const savedTheme = localStorage.getItem('pref-theme');
if (savedTheme === 'light' || savedTheme === 'dark') {
  root.setAttribute('data-theme', savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
  root.setAttribute('data-theme', 'light');
}

themeToggle?.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  localStorage.setItem('pref-theme', next);
  
  // Update particle colors when theme changes
  updateParticleColors(next === 'dark');
});

// Mobile nav
navToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  }
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Typed text effect (lightweight)
const typedEl = document.getElementById('typed');
const phrases = [
  'Smart contract security & audits',
  'Zero-knowledge research & engineering',
  'Consensus & cryptoeconomic design',
  'MEV-aware protocol mechanics'
];
let pi = 0, ci = 0, deleting = false;

function typeLoop() {
  if (!typedEl) return;
  const current = phrases[pi % phrases.length];
  if (!deleting) {
    ci++;
    typedEl.textContent = current.slice(0, ci);
    if (ci === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    ci--;
    typedEl.textContent = current.slice(0, ci);
    if (ci === 0) {
      deleting = false; pi++;
    }
  }
  const delay = deleting ? 45 : 70;
  setTimeout(typeLoop, delay);
}

typeLoop();

// Particle Background with Three.js
let scene, camera, renderer, particles, mouse = { x: 0, y: 0 };
let isDarkTheme = root.getAttribute('data-theme') === 'dark';

// Initialize particle system
function initParticles() {
  // Create canvas element
  const canvas = document.createElement('canvas');
  canvas.className = 'particle-canvas';
  canvas.style.cssText = 'position: fixed; inset: 0; width: 100%; height: 100%; pointer-events: none; opacity: 0.6; z-index: -1;';
  document.body.appendChild(canvas);

  // Scene setup
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ 
    canvas: canvas, 
    alpha: true, 
    antialias: true 
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Create particles
  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

    // Color based on theme
    const color = isDarkTheme ? new THREE.Color(0x3b82f6) : new THREE.Color(0x1e40af);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // Particle material
  const material = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
  });

  particles = new THREE.Points(geometry, material);
  scene.add(particles);

  camera.position.z = 5;

  // Mouse movement handler
  const handleMouseMove = (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  window.addEventListener('mousemove', handleMouseMove);

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    if (particles) {
      // Rotate particles
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.002;

      // Mouse interaction - move particles towards mouse
      const positions = particles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const x = positions[i * 3];
        const y = positions[i * 3 + 1];
        
        // Calculate distance from mouse
        const mouseX = mouse.x * 10;
        const mouseY = mouse.y * 10;
        const distance = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);
        
        // Move particles towards mouse with easing
        if (distance > 0.1) {
          positions[i * 3] += (mouseX - x) * 0.0001;
          positions[i * 3 + 1] += (mouseY - y) * 0.0001;
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;
    }

    renderer.render(scene, camera);
  }

  animate();

  // Handle resize
  const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  window.addEventListener('resize', handleResize);

  // Store cleanup function
  window.particleCleanup = () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('resize', handleResize);
    if (renderer) renderer.dispose();
    if (canvas && canvas.parentNode) {
      canvas.parentNode.removeChild(canvas);
    }
  };
}

// Update particle colors when theme changes
function updateParticleColors(isDark) {
  if (!particles) return;
  
  isDarkTheme = isDark;
  const colors = particles.geometry.attributes.color.array;
  const color = isDark ? new THREE.Color(0x3b82f6) : new THREE.Color(0x1e40af);
  
  for (let i = 0; i < colors.length; i += 3) {
    colors[i] = color.r;
    colors[i + 1] = color.g;
    colors[i + 2] = color.b;
  }
  
  particles.geometry.attributes.color.needsUpdate = true;
}

// Initialize particles when Three.js is loaded
function loadThreeJS() {
  if (typeof THREE !== 'undefined') {
    initParticles();
  } else {
    // If Three.js isn't loaded yet, wait a bit and try again
    setTimeout(loadThreeJS, 100);
  }
}

// Start loading Three.js
loadThreeJS(); 