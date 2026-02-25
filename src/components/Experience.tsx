import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: "Développement d'Applications Web Full-Stack avec MERN Stack",
    company: "Formation Intensive",
    location: "Sfax",
    period: "2024 - 2025",
    description: [
      "Formation intensive full-stack en React et technologies MERN (MongoDB, Express.js, React, Node.js).",
      "Projets pratiques : développement d'interfaces utilisateur React et conception d'APIs Node.js."
    ],
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Développeur Web Freelance",
    company: "Indépendant",
    location: "Sfax",
    period: "2023 - 2024",
    description: [
      "Développement de sites web vitrine et d'applications web de gestion de stock.",
      "Conception et développement d'une application web de gestion de stock avec PHP natif, intégrant un système de facturation."
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Stagiaire en Développement Web",
    company: "Entreprise ADENIUM",
    location: "Sfax",
    period: "2022",
    description: [
      "Participation au développement d'une application web pour la planification, l'ordonnancement et le suivi des dossiers de fabrication."
    ],
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Gestionnaire de Stock Informatique",
    company: "Entreprise",
    location: "Sfax",
    period: "2022",
    description: [
      "Gestion de stock informatisée, incluant la saisie et le suivi des articles via des outils dédiés."
    ],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Technicien en Réparation de Smartphones",
    company: "Boutique",
    location: "Sfax",
    period: "2021",
    description: [
      "Expérience en réparation de smartphones, permettant le développement de compétences techniques et relationnelles avec les clients."
    ],
    color: "from-yellow-500 to-orange-500"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
            Expérience Professionnelle
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-[#0a0a0a] border-4 border-indigo-500 transform -translate-x-1/2 z-10 hidden md:block shadow-[0_0_15px_rgba(79,70,229,0.5)]" />

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 relative overflow-hidden group">
                    {/* Decorative gradient */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exp.color} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <h3 className="text-2xl font-bold text-white font-display">
                        {exp.title}
                      </h3>
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm text-gray-300 whitespace-nowrap">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-indigo-400 font-medium mb-6">
                      <Briefcase size={18} />
                      <span>{exp.company}</span>
                      <span className="text-gray-500 px-2">•</span>
                      <span className="text-gray-400">{exp.location}</span>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-gray-300 leading-relaxed flex items-start gap-3">
                          <span className="text-indigo-500 mt-1.5 text-xs">▶</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
