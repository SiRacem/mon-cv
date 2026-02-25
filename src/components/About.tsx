import { motion } from 'motion/react';
import { Calendar, MapPin, Mail, Phone, Linkedin, Car } from 'lucide-react';

const personalInfo = [
  { icon: Calendar, label: 'Date de naissance', value: '05/12/1999' },
  { icon: MapPin, label: 'Adresse', value: 'Route Gremda Km 2, Sfax' },
  { icon: Mail, label: 'Email', value: 'racemelleuch12@gmail.com' },
  { icon: Phone, label: 'Téléphone', value: '29660432' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Racem Elleuch' },
  { icon: Car, label: 'Permis', value: 'Permis de conduire B' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
              À Propos de Moi
            </h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Profile Text */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl font-semibold text-indigo-400 font-display">
                Profil Professionnel
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                Développeur web full stack passionné par les technologies E-Business, avec une solide expertise en React, PHP, Node.js et bases de données SQL/NoSQL.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                Je recherche une opportunité stimulante pour mettre à profit mes compétences techniques et mon enthousiasme au service de projets innovants et ambitieux.
              </p>
              
              <div className="pt-6 grid grid-cols-2 gap-6 border-t border-white/10 mt-8">
                <div>
                  <h4 className="text-4xl font-bold text-white mb-2 font-display">3+</h4>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">Années d'expérience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-white mb-2 font-display">10+</h4>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">Projets réalisés</p>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-xl font-semibold text-white mb-6 font-display border-b border-white/10 pb-4">
                  Informations Personnelles
                </h3>
                <ul className="space-y-6">
                  {personalInfo.map((info, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                        <info.icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
