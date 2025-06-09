import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <video
                src="/Banana.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-72 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">BananaPeels</h3>
              <p className="text-gray-400 mb-4">
                BananaPeels is a web platform for buying and selling products between individuals. It allows users to register, manage their listings, contact sellers through real-time chat, and mark favorites.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Vite", "TailwindCSS", "Axios", "Socket.IO Client","Node.js", "i18n", "AWS", "Ngix", "certificado SSL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://bananapeels.duckdns.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡️
                </a>
                                <a
                  href="https://github.com/orgs/PruebasBananaPeelsTeam/repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Code ➡️
                </a>
              </div>
            </div>


            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <video
                src="/Generate-P.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-72 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Password Generator</h3>
              <p className="text-gray-400 mb-4">
                This project is a random password generator where you can configure the password length and choose which types of characters to include, such as uppercase, lowercase, numbers, and symbols. It also includes functionality to copy the password to the clipboard with a single click.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript", "Clipboard.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Aida230/Generator-password"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Code ➡️
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <video
                src="/colorPalette.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-72 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">
                Color-Palette Generator
              </h3>
              <p className="text-gray-400 mb-4">
                This project is a simple tool for generating random color palettes in hexadecimal format. The palette is dynamically generated each time the user clicks the "Generate palette" button.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Aida230/Color-Palette-Generator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Code ➡️
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <video
                src="/Pokepop.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-72 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">
                PokePop
              </h3>
              <p className="text-gray-400 mb-4">
                PokePop is a clone inspired by Wallapop, specifically designed for buying and selling Pokémon. It is a web application developed using HTML, CSS, and pure JavaScript (without frameworks), focused on managing products (Pokémon) and users through a clean, modular architecture.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Aida230/practica-FrontedJS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Code ➡️
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
