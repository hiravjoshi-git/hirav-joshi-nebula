import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { Mesh } from "three";
import Navbar from "@/components/Navbar";

// 3D Scene Component - Futuristic Robot-like Design
const TechCube = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<Mesh>(null);

  return (
    <Float speed={1.0} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial
          color="#1a1a1a"
          emissive="#ff6b35"
          emissiveIntensity={0.1}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
      {/* Inner glowing core */}
      <mesh position={position}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial
          color="#ff6b35"
          emissive="#ff6b35"
          emissiveIntensity={0.5}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
};

const RoboticSphere = ({ position, size = 0.5 }: { position: [number, number, number], size?: number }) => {
  const meshRef = useRef<Mesh>(null);

  return (
    <Float speed={0.7} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color="#2a2a2a"
          emissive="#4a9eff"
          emissiveIntensity={0.2}
          roughness={0.05}
          metalness={0.95}
        />
      </mesh>
      {/* Outer energy field */}
      <mesh position={position}>
        <sphereGeometry args={[size * 1.2, 16, 16]} />
        <meshStandardMaterial
          color="#4a9eff"
          transparent
          opacity={0.15}
          emissive="#4a9eff"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
};

const TechRing = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<Mesh>(null);

  return (
    <Float speed={0.5} rotationIntensity={1.2} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[1.0, 0.1, 16, 100]} />
        <meshStandardMaterial
          color="#1a1a1a"
          emissive="#ff6b35"
          emissiveIntensity={0.3}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
      {/* Inner glowing ring */}
      <mesh position={position}>
        <torusGeometry args={[1.0, 0.05, 8, 50]} />
        <meshStandardMaterial
          color="#ff6b35"
          emissive="#ff6b35"
          emissiveIntensity={0.8}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
};

const HoloParticle = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<Mesh>(null);

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[0.08]} />
        <meshStandardMaterial
          color="#4a9eff"
          emissive="#4a9eff"
          emissiveIntensity={0.6}
          transparent
          opacity={0.8}
          roughness={0.0}
          metalness={1.0}
        />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <>
      {/* Enhanced lighting setup for futuristic look */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ff6b35" castShadow />
      <pointLight position={[-10, -10, 5]} intensity={1.0} color="#4a9eff" />
      <pointLight position={[0, 0, 10]} intensity={0.8} color="#ffffff" />

      {/* Main robotic elements */}
      <RoboticSphere position={[1.2, 0.8, 0]} size={0.6} />
      <RoboticSphere position={[-1.0, -0.6, -0.5]} size={0.4} />
      <RoboticSphere position={[0.2, -1.2, 0.8]} size={0.5} />

      {/* Tech cubes */}
      <TechCube position={[1.8, -0.3, -0.2]} />
      <TechCube position={[-1.5, 1.2, 0.3]} />

      {/* Floating tech ring */}
      <TechRing position={[-0.5, 0.2, -0.8]} />

      {/* Holographic particles for atmosphere */}
      <HoloParticle position={[2.0, 1.5, 0.2]} />
      <HoloParticle position={[-2.0, 0.3, 0.5]} />
      <HoloParticle position={[0.8, -2.0, -0.2]} />
      <HoloParticle position={[-0.3, -0.8, 1.5]} />
      <HoloParticle position={[1.5, -0.2, -1.2]} />
      <HoloParticle position={[-1.2, 1.8, 0.3]} />
      <HoloParticle position={[0.5, 1.2, 1.0]} />
      <HoloParticle position={[-0.8, -1.5, -0.8]} />

      {/* Subtle orbit controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 2.5}
      />
    </>
  );
};

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Modern dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-darker-surface to-dark-surface"></div>

        {/* Animated particles and flowing elements */}
        <div className="absolute inset-0">
          {/* Floating particles */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary/25 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-60 right-1/3 w-2 h-2 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-20 right-10 w-1 h-1 bg-primary/35 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

          {/* Glowing abstract lines */}
          <div className="absolute top-1/3 left-0 w-40 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-1/3 right-0 w-32 h-px bg-gradient-to-l from-transparent via-accent/15 to-transparent animate-float" style={{ animationDelay: '2.5s' }}></div>

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>

          {/* Large blur elements for depth */}
          <div className="absolute top-1/4 -left-20 w-60 h-60 bg-primary/[0.03] rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/[0.02] rounded-full blur-3xl animate-float" style={{ animationDelay: '1.8s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column - Content */}
            <div className="space-y-6 sm:space-y-8 animate-slide-up order-2 lg:order-1">
              {/* Name */}
              <div>
                <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-foreground leading-tight text-center lg:text-left">
                  Hirav Joshi
                </h1>
              </div>

              {/* Title */}
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="font-heading text-lg sm:text-xl md:text-2xl xl:text-3xl text-primary font-semibold text-center lg:text-left">
                  Operation Executive | Flutter Developer
                </h2>
              </div>

              {/* Tagline */}
              <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                  Computer Science Graduate crafting innovative solutions with modern technologies.
                  Blending design and technology to create impactful digital products.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up justify-center lg:justify-start" style={{ animationDelay: '0.6s' }}>
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => scrollToSection('projects')}
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary w-full sm:w-auto"
                >
                  View My Work
                  <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 w-full sm:w-auto"
                >
                  <Mail className="mr-2 w-4 h-4" />
                  Contact Me
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4 animate-slide-up justify-center lg:justify-start" style={{ animationDelay: '0.8s' }}>
                <a
                  href="https://github.com/hiravjoshi-git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <Github className="w-4 sm:w-5 h-4 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/hirav-joshi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <Linkedin className="w-4 sm:w-5 h-4 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="mailto:hiravjoshi4@gmail.com"
                  className="p-2 sm:p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

            {/* Right Column - 3D Scene */}
            <div className="relative animate-slide-up order-1 lg:order-2" style={{ animationDelay: '0.4s' }}>
              <div className="h-64 sm:h-80 lg:h-96 w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 lg:ml-auto">
                <Suspense fallback={
                  <div className="h-full w-full flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 sm:h-8 w-6 sm:w-8 border-b-2 border-primary"></div>
                  </div>
                }>
                  <Canvas
                    camera={{ position: [0, 0, 5], fov: 60 }}
                    className="rounded-lg"
                  >
                    <Scene3D />
                  </Canvas>
                </Suspense>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-5 h-5 text-muted-foreground/60" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;