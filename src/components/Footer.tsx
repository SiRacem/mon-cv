import { Code2, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="flex items-center gap-2 text-white font-display font-bold text-2xl tracking-tight mb-6">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(79,70,229,0.5)]">
                <Code2 size={24} />
              </div>
              Racem<span className="text-indigo-500">.</span>
            </a>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-8">
              Développeur web full stack passionné par la création d'expériences numériques innovantes et performantes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-indigo-500 hover:text-white transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-indigo-500 hover:text-white transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:racemelleuch12@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-indigo-500 hover:text-white transition-all duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 font-display">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-indigo-400 transition-colors">Accueil</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors">À Propos</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-indigo-400 transition-colors">Compétences</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-indigo-400 transition-colors">Expérience</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 font-display">Contact</h4>
            <ul className="space-y-4">
              <li className="text-gray-400">Route Gremda Km 2, Sfax</li>
              <li className="text-gray-400">racemelleuch12@gmail.com</li>
              <li className="text-gray-400">+216 29 660 432</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Racem Elleuch. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Fait avec <span className="text-red-500">❤</span> en Tunisie
          </p>
        </div>
      </div>
    </footer>
  );
}
