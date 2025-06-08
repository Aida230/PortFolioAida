import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vite",
    "JavaScript",
    "Tailwind CSS",
    "Axios (client.js)",
    "i18next",
    "Lucide React",
    "Custom Hooks y Components Reutilizables",
  ];
  const backendSkills = [
    "Node.js",
    "Express",
    "AWS EC2",
    "Nginx",
    "Certbot (SSL)",
    "Supervisor",
    "MongoDB Atlas",
    "Mongoose",
    "JWT (jsonwebtoken)",
    "bcrypt",
    "Zod",
    "PostMan",
  ];
  const softSkills = [
    "Teamwork",
    "Communication",
    "Problem-solving",
    "Adaptability",
    "Attention to detail",
    "Resilience",
    "Geographic mobility",
    "Growth mindset",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm Aida Fuentes, a Full Stack Developer passionate about building
              web applications that combine functionality with an outstanding
              user experience. After years in demanding environments like the
              gastronomy industry, I discovered web development as a way to
              channel my creativity and discipline into real technological
              solutions. I have worked with React, Node.js, and MongoDB, and
              have deployed projects on AWS, such as BananaPeels, a complete
              marketplace that connects users for buying and selling products
              with real-time chat functionality. My daily motivation is to learn
              and grow alongside teams that value collaboration, attention to
              detail, and continuous improvement. I aim to transform ideas into
              solid and accessible digital products for everyone.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">🖥️ Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">🧩 Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* NEW SOFT SKILLS SECTION */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all mt-8">
              <h3 className="text-xl font-bold mb-4">🧠 Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-4">
                <li>
                  <strong>Full Stack Web Development</strong> — KeepCoding Tech
                  School (Junio 2024 – Actualmente)
                  <br />
                  Formación intensiva en desarrollo de aplicaciones web
                  modernas, frontend y backend, arquitectura de software y
                  despliegue en la nube.
                </li>
                <li>
                  <strong>Grado Superior en Comercio Internacional</strong> —
                  I.E.S. Zaidín Vergeles (2017 – 2019)
                  <br />
                  Estudios centrados en negocios internacionales, logística y
                  gestión comercial.
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h4 className="font-semibold text-lg">
                    Full Stack Web Developer — KeepCoding, España
                  </h4>
                  <p className="text-sm">
                    <em>Junio 2024 – Actualmente</em>
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                    <li>
                      Desarrollo de aplicaciones web full stack con React,
                      Node.js y MongoDB.
                    </li>
                    <li>
                      Implementación de API REST y autenticación JWT segura.
                    </li>
                    <li>
                      Despliegue de proyectos en AWS usando Nginx y Certbot
                      (SSL).
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Sous Chef — Andanza Restaurant, Londres
                  </h4>
                  <p className="text-sm">
                    <em>Septiembre 2021 – Abril 2024</em>
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                    <li>
                      Coordinación de equipos en entornos de alta presión.
                    </li>
                    <li>
                      Desarrollo de habilidades de gestión del tiempo y
                      liderazgo.
                    </li>
                    <li>
                      Colaboración en la creación de menús y supervisión de
                      calidad culinaria.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
