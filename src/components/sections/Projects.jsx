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
                src="/public/Banana.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-72 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">BananaPeels</h3>
              <p className="text-gray-400 mb-4">
                BananaPeels es una plataforma web de compra y venta de productos entre particulares. Permite a los usuarios registrarse, gestionar sus anuncios, contactar a vendedores mediante chat en tiempo real y marcar favoritos.
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
                src="/public/Password.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-72 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Password Generator</h3>
              <p className="text-gray-400 mb-4">
                Este proyecto es un generador de contraseñas aleatorias en el cual puedes configurar la longitud de la contraseña y elegir qué tipos de caracteres deseas incluir, como mayúsculas, minúsculas, números y símbolos. Además, incluye la funcionalidad para copiar la contraseña al portapapeles con un solo clic.
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
                src="/public/colorPalette.mp4"
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
                Este proyecto es una herramienta simple para generar paletas de colores aleatorias en formato hexadecimal. La paleta se genera dinámicamente cada vez que el usuario hace clic en el botón "Generate palette".
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
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
