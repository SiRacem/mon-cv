import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { motion } from 'motion/react';
import { Download, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]" id="home">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas>
          <ambientLight intensity={1} />
          <directionalLight position={[2, 5, 2]} intensity={2} />
          <Float speed={2} rotationIntensity={2} floatIntensity={2}>
            <Sphere args={[1, 64, 64]} scale={2.5}>
              <MeshDistortMaterial
                color="#4f46e5"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.2}
                metalness={0.8}
              />
            </Sphere>
          </Float>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="backdrop-blur-xl bg-black/40 p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl max-w-4xl w-full"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-indigo-500/30 shadow-[0_0_30px_rgba(79,70,229,0.3)]"
          >
            <img 
              src="https://picsum.photos/seed/racem/400/400" 
              alt="Racem Elleuch" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-indigo-400 font-semibold tracking-widest uppercase mb-4 text-sm md:text-base"
          >
            Développeur JS Full Stack
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-display"
          >
            Racem Elleuch
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Passionné par les technologies E-Business, avec une solide expertise en React, PHP, Node.js et bases de données SQL/NoSQL.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-all flex items-center gap-2 w-full sm:w-auto justify-center shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)]"
            >
              <Mail size={20} />
              Me Contacter
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-medium backdrop-blur-md transition-all border border-white/10 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Download size={20} />
              Télécharger CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
