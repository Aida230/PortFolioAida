import { useTranslation } from "react-i18next";
import { RevealOnScroll } from "../RevealOnScroll";
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div className="w-full max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
            {t("contact.title")}
          </h2>

          <div className="p-6 rounded-xl bg-black border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <ul className="space-y-8 text-gray-300 text-lg md:text-xl">
              <li className="flex items-center justify-center space-x-4">
                <Mail className="w-6 h-6 text-blue-400" />
                <a
                  href="mailto:afdlf2306@gmail.com"
                  className="hover:underline text-blue-400 break-words"
                >
                  afdlf2306@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center space-x-4">
                <Phone className="w-6 h-6 text-blue-400" />
                <span className="text-blue-400">633-62-16-16</span>
              </li>
              <li className="flex items-center justify-center space-x-4">
                <Linkedin className="w-6 h-6 text-blue-400" />
                <a
                  href="https://www.linkedin.com/in/aida-fuentes-de-la-fuente-237278328/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-400"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center justify-center space-x-4">
                <Github className="w-6 h-6 text-blue-400" />
                <a
                  href="https://github.com/Aida230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-400"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
