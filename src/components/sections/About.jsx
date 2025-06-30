import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  const frontendSkills = [
    "React",
    "Vite",
    "JavaScript",
    "Tailwind CSS",
    "Axios (client.js)",
    "i18next",
    "Lucide React",
    "Custom Hooks and Reusable Components"
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
    "PostMan"
  ];

  const softSkills = t('about.softSkillsList', { returnObjects: true });

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {t('about.title')}
          </h2>

          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              {t('about.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">🖥️ {t('about.frontend')}</h3>
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

              {/* Backend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">🧩 {t('about.backend')}</h3>
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

            {/* Soft Skills */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all mt-8">
              <h3 className="text-xl font-bold mb-4">🧠 {t('about.softSkills')}</h3>
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

          {/* Education and Work Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
            {/* Education */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 {t('about.education.title')}</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-4">
                <li>
                  <strong>{t('about.education.course1.title')}</strong> — {t('about.education.course1.school')}<br />
                  {t('about.education.course1.description')}
                </li>
                <li>
                  <strong>{t('about.education.course2.title')}</strong> — {t('about.education.course2.school')}<br />
                  {t('about.education.course2.description')}
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 {t('about.work.title')}</h3>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h4 className="font-semibold text-lg">{t('about.work.job1.title')}</h4>
                  <p className="text-sm"><em>{t('about.work.job1.dates')}</em></p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                    {t('about.work.job1.tasks', { returnObjects: true }).map((task, idx) => (
                      <li key={idx}>{task}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{t('about.work.job2.title')}</h4>
                  <p className="text-sm"><em>{t('about.work.job2.dates')}</em></p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                    {t('about.work.job2.tasks', { returnObjects: true }).map((task, idx) => (
                      <li key={idx}>{task}</li>
                    ))}
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
