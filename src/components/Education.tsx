import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const formations = [
  {
    title: "Développement d'Applications Web avec MERN Stack",
    institution: "Formation Intensive",
    period: "2024 - 2025"
  },
  {
    title: "Licence en Informatique de Gestion",
    speciality: "Spécialité E-Business",
    institution: "Université",
    period: "2022 - 2023"
  },
  {
    title: "Baccalauréat",
    speciality: "Economie et Gestion (Session Principale)",
    institution: "Lycée",
    period: "2019"
  }
];

const certificats = [
  {
    title: "FULLSTACK JS DEVELOPER",
    institution: "LMTC",
    period: "2024 - 2025"
  },
  {
    title: "Formation Anglais",
    institution: "OPEN School Center",
    period: "2023 - 2024"
  },
  {
    title: "Gestion De Stress, Python, Parole En Public",
    institution: "Formation",
    period: "2022 - 2023"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
            Formation & Certificats
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-indigo-500/20 rounded-2xl text-indigo-400">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white font-display">
                Formations
              </h3>
            </div>

            <div className="space-y-6">
              {formations.map((form, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500" />
                  
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-white font-display leading-tight pr-4">
                      {form.title}
                    </h4>
                    <span className="text-sm font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {form.period}
                    </span>
                  </div>
                  
                  {form.speciality && (
                    <p className="text-indigo-300 mb-2 font-medium">
                      {form.speciality}
                    </p>
                  )}
                  
                  <div className="flex items-center gap-2 text-gray-400 mt-4">
                    <BookOpen size={16} />
                    <span>{form.institution}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certificats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-purple-500/20 rounded-2xl text-purple-400">
                <Award size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white font-display">
                Certificats
              </h3>
            </div>

            <div className="space-y-6">
              {certificats.map((cert, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500" />
                  
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-white font-display leading-tight pr-4">
                      {cert.title}
                    </h4>
                    <span className="text-sm font-mono text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {cert.period}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-400 mt-4">
                    <Award size={16} />
                    <span>{cert.institution}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
