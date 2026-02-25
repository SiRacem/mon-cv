import { motion } from 'motion/react';
import { Code2, Database, Layout, Server, GitBranch, Languages, BrainCircuit } from 'lucide-react';

const technicalSkills = [
  { category: 'Langages', icon: Code2, items: ['HTML', 'CSS', 'JS', 'PHP', 'SQL'] },
  { category: 'Frameworks & Libs', icon: Layout, items: ['React', 'Bootstrap', 'Tailwind CSS', 'Express.js'] },
  { category: 'Backend', icon: Server, items: ['Node.js', 'API RESTful'] },
  { category: 'Base de données', icon: Database, items: ['MySQL', 'MongoDB'] },
  { category: 'Version Control', icon: GitBranch, items: ['Git', 'GitHub'] },
  { category: 'State Management', icon: Layout, items: ['Redux'] },
];

const softSkills = [
  'Connaissance en informatique',
  'Travail en équipe',
  'Apprentissage continu',
  'Créativité',
  'Résolution de problèmes',
  'Négociation',
  'Communication'
];

const languages = [
  { name: 'Arabe', level: 'Maternelle' },
  { name: 'Français', level: 'Courant' },
  { name: 'Anglais', level: 'Intermédiaire' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
            Compétences
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Technical Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400">
                <Code2 size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white font-display">
                Compétences Techniques
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalSkills.map((skill, idx) => (
                <div key={idx} className="group">
                  <h4 className="text-indigo-300 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                    <skill.icon size={16} />
                    {skill.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 group-hover:text-white transition-all duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            {/* Soft Skills */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
                  <BrainCircuit size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white font-display">
                  Savoir-être
                </h3>
              </div>
              
              <ul className="space-y-3">
                {softSkills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Languages */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400">
                  <Languages size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white font-display">
                  Langues
                </h3>
              </div>
              
              <div className="space-y-4">
                {languages.map((lang, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                    <span className="text-white font-medium">{lang.name}</span>
                    <span className="text-sm text-gray-400 px-3 py-1 bg-white/5 rounded-full">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
