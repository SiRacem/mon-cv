import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
            Contactez-moi
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white font-display mb-6">
              Discutons de votre projet
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              Je suis actuellement à la recherche de nouvelles opportunités. N'hésitez pas à me contacter pour discuter de vos projets ou simplement pour échanger.
            </p>

            <div className="space-y-6">
              <a href="mailto:racemelleuch12@gmail.com" className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                <div className="w-14 h-14 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(79,70,229,0.2)] group-hover:shadow-[0_0_25px_rgba(79,70,229,0.5)]">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-white font-medium text-lg">racemelleuch12@gmail.com</p>
                </div>
              </a>

              <a href="tel:29660432" className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Téléphone</p>
                  <p className="text-white font-medium text-lg">29660432</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Adresse</p>
                  <p className="text-white font-medium text-lg">Route Gremda Km 2, Sfax</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Nom complet</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Sujet</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                  placeholder="Proposition de projet"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none"
                  placeholder="Votre message ici..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl py-4 font-medium transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)]"
              >
                <Send size={20} />
                Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
