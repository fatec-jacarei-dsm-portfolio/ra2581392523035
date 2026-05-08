import { useEffect, useState } from 'react'
import { FaCode, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiPhp,
  SiGit,
  SiFigma,
  SiTrello,
  SiHackthebox,
} from 'react-icons/si'

const profilePhoto = new URL('../docs/foto.jpg', import.meta.url).href

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Currículo', href: '#curriculo' },
  { label: 'Profissional', href: '#profissional' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Certificados', href: '#certificados' },
  { label: 'Interesses', href: '#interesses' },
  { label: 'Contato', href: '#contato' },
]

const education = [
  {
    period: '2025 - 2028 (cursando)',
    title: 'Tecnólogo em Desenvolvimento de Software Multiplataforma',
    institution: 'Fatec Jacareí',
    description:
      'Formação tecnológica focada em desenvolvimento de software multiplataforma, arquitetura de sistemas e práticas ágeis.',
  },
  {
    period: '2024 - 2025',
    title: 'Técnico em Desenvolvimento de Sistemas',
    institution: 'ETEC São José dos Campos',
    description:
      'Formação técnica com foco em programação, banco de dados e desenvolvimento web.',
  },
]

const experience = [
  {
    status: 'Em construção',
    title: 'Buscando primeira oportunidade',
    company: 'Mercado de Tecnologia',
    description:
      'Atualmente em formação na FATEC, desenvolvendo projetos acadêmicos e adquirindo habilidades em desenvolvimento web. Ansioso para aplicar meus conhecimentos em um ambiente profissional.',
  },
]

const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Python', 'SQL', 'PHP'],
  },
  {
    title: 'Tools',
    items: ['Git', 'Figma', 'Trello'],
  },
  {
    title: 'Soft Skills',
    items: ['Comunicação', 'Trabalho em Equipe', 'Resolução de Problemas'],
  },
]

const skillIcons: Record<string, JSX.Element> = {
  React: <SiReact />,
  TypeScript: <SiTypescript />,
  JavaScript: <SiJavascript />,
  HTML: <SiHtml5 />,
  CSS: <SiCss />,
  'Node.js': <SiNodedotjs />,
  Python: <SiPython />,
  SQL: <SiMysql />,
  PHP: <SiPhp />,
  Hack: <SiHackthebox />,
  Git: <SiGit />,
  Figma: <SiFigma />,
  Trello: <SiTrello />,
}

const stats = [
  { label: 'Anos de experiência', value: '0' },
  { label: 'Projetos concluídos', value: '3' },
  { label: 'Tecnologias', value: '8+' },
  { label: 'Comprometimento', value: '100%' },
]

const createProjectImage = (title: string) =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="500"><rect width="100%" height="100%" fill="#0A1426"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#4DA6FF" font-family="Inter, Arial, sans-serif" font-size="32">${title}</text></svg>`
  )}`

const projects = [
  {
    title: 'ABP FATEC 1 – AgriRS-Lab',
    description:
      'Projeto desenvolvido no 1º semestre do curso de Desenvolvimento de Software Multiplataforma. Site para o laboratório de sensoriamento remoto agrícola do INPE.',
    contribution:
      'Desenvolvi a interface e as páginas de informação do laboratório, garantindo navegação clara e responsiva.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: createProjectImage('AgriRS-Lab'),
    repoLink: 'https://github.com/felipefmac/agrirs-lab',
  },
  {
    title: 'ABP FATEC 2 – Conecta Fatec Jacareí',
    description:
      'Projeto integrador do 2º período focado na criação de soluções tecnológicas para a secretaria da Fatec Jacareí.',
    contribution:
      'Criei fluxos de usuário e componentes interativos, conectando as funcionalidades do sistema acadêmico.',
    tags: ['JavaScript', 'TypeScript', 'React'],
    image: createProjectImage('Conecta Fatec'),
    repoLink: 'https://github.com/felipefmac/conecta-fatec',
  },
  {
    title: 'TCC ETEC – PetNexus',
    description:
      'Sistema web para gestão de pet shop e clínica veterinária com agendamento, controle de estoque e relatórios.',
    contribution:
      'Implementei formulários de registro e dashboard de controle, com foco na experiência do cliente e organização de dados.',
    tags: ['JavaScript', 'PHP', 'SCSS'],
    image: createProjectImage('PetNexus'),
    repoLink: 'https://github.com/felipefmac/petnexus',
  },
  {
    title: 'Portfólio ETEC',
    description:
      'Portfólio desenvolvido durante o curso Técnico em Desenvolvimento de Sistemas na ETEC São José dos Campos.',
    contribution:
      'Projetei uma estrutura visual limpa e organizei projetos para destacar as entregas do período.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: createProjectImage('Portfólio ETEC 1'),
    repoLink: 'https://github.com/felipefmac/portfolio-etec',
  },
]

const certifications = [
  {
    title: 'Getting Started with Cisco Packet Tracer',
    issuer: 'Cisco Networking Academy',
    year: '2024',
  },
  {
    title: 'Linux Unhatched',
    issuer: 'Cisco Networking Academy',
    year: '2024',
  },
  {
    title: 'Gerenciamento de Ameaças Cibernéticas',
    issuer: 'Cisco Networking Academy',
    year: '2024',
  },
  {
    title: 'Introdução à Cibersegurança',
    issuer: 'Cisco Networking Academy',
    year: '2024',
  },
]

const interests = [
  {
    icon: '🎵',
    title: 'Música',
    description: 'Gosto de ouvir músicas de diversos gêneros.',
    tags: ['Sertanejo', 'Pagode', 'Reggae'],
  },
  {
    icon: '🎮',
    title: 'Games',
    description: 'Gosto de jogar (Prefiro RPG).',
    tags: ['RPG', 'Corrida', 'Estratégia'],
  },
  {
    icon: '📚',
    title: 'Leitura',
    description: 'Gosto de ler.',
    tags: ['Ficção', 'Aventura', 'Históricos'],
  },
  {
    icon: '🎬',
    title: 'Filmes',
    description: 'Gosto de assistir filmes.',
    tags: ['Sci-Fi', 'Viagem no Tempo', 'Espacial'],
  },
  {
    icon: '✈️',
    title: 'Viajar',
    description: 'Gosto de viajar.',
    tags: ['Explorar', 'Cultura', 'Paisagens'],
  },
  {
    icon: '⚽',
    title: 'Esportes',
    description: 'Gosto de acompanhar esportes.',
    tags: ['Futebol', 'Futebol Americano', 'Basquete'],
  },
]

const contactLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/felipefmac',
    icon: <FaGithub aria-hidden="true" />,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/felipefariamachado',
    icon: <FaLinkedin aria-hidden="true" />,
  },
  {
    label: 'Email',
    url: 'mailto:felipe1708001@gmail.com',
    icon: <MdEmail aria-hidden="true" />,
  },
]

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null)

  useEffect(() => {
    document.body.classList.toggle('light-mode', theme === 'light')
  }, [theme])

  return (
    <div className={`app-shell ${theme}`}>
      <header className="navbar">
        <div className="brand">
          <span className="brand-name">Felipe</span>
          <span className="brand-dot" />
        </div>
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="theme-button"
          type="button"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Alternar tema"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-text">
            <h1>Felipe Faria Machado</h1>
            <div className="hero-actions">
              <a className="button-primary" href="#projetos">
                Ver Projetos
              </a>
              <a className="button-secondary" href="#curriculo">
                Meu Currículo
              </a>
            </div>
          </div>

          <div className="hero-image-card">
            <div className="avatar-ring">
              <img className="avatar-image" src={profilePhoto} alt="Foto de Felipe" />
            </div>
          </div>
        </section>

        <section id="curriculo" className="section-block curriculum-section">
          <div className="section-heading">
            <span>Currículo</span>
            <h2>Minha formação acadêmica, experiência profissional e habilidades técnicas</h2>
          </div>
          <div className="curriculum-grid">
            <div className="timeline-panel">
              <div className="timeline-marker" />
              {education.map((item) => (
                <div key={item.title} className="timeline-card">
                  <span className="timeline-period">{item.period}</span>
                  <h3>{item.title}</h3>
                  <p className="timeline-institution">{item.institution}</p>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="curriculum-subtitle">Habilidades</div>
          <div className="skill-groups-row">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-group-card skill-group-card--wide">
                <h3>{group.title}</h3>
                <div className="skill-group-list skill-group-list--horizontal">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`skill-group-item ${skillIcons[item] ? 'skill-group-item--icon' : ''}`}
                      title={item}
                    >
                      {skillIcons[item] || item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="profissional" className="section-block professional-section">
          <div className="section-heading">
            <span>Profissional</span>
            <h2>Minha trajetória profissional e contribuições</h2>
          </div>
          <div className="professional-card">
            <div className="profile-summary">
              <div className="profile-thumb">
                <div className="thumb-image">
                  <img src={profilePhoto} alt="Foto de Felipe" />
                </div>
              </div>
              <div>
                <h3>Desenvolvedor</h3>
                <p>
                  Sou um profissional dedicado ao desenvolvimento web, com foco em criar experiências digitais memoráveis e funcionais. Atualmente busco minha primeira oportunidade no mercado de tecnologia.
                </p>
                <div className="profile-meta">
                  <span>📍 São José dos Campos, Brasil</span>
                  <span>✉️ felipe1708001@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="stats-grid">
              {stats.map((item) => (
                <div key={item.label} className="stat-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="philosophy-card">
            <h3>Minha Filosofia</h3>
            <blockquote>
              “A tecnologia deve ser uma extensão da criatividade humana, não uma barreira. Cada linha de código é uma oportunidade de criar algo que faça a diferença na vida das pessoas.”
            </blockquote>
            <div className="value-cards">
              <span>Foco em Resultados</span>
              <span>Melhoria Contínua</span>
              <span>Colaboração</span>
              <span>Inovação</span>
            </div>
          </div>
        </section>

        <section id="projetos" className="section-block projects-section">
          <div className="section-heading">
            <span>Projetos</span>
            <h2>Projetos acadêmicos e pessoais desenvolvidos</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-card-icon">⌨️</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="project-link" type="button" onClick={() => setActiveProject(project)}>
                  Ver Detalhes
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="certificados" className="section-block certificates-section">
          <div className="section-heading">
            <span>Certificados</span>
            <h2>Certificações e cursos</h2>
          </div>
          <div className="certificates-grid">
            {certifications.map((certificate) => (
              <article key={certificate.title} className="certificate-card">
                <div className="certificate-image" />
                <h3>{certificate.title}</h3>
                <p>{certificate.issuer}</p>
                <span>{certificate.year}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="interesses" className="section-block interests-section">
          <div className="section-heading">
            <span>Interesses</span>
            <h2>O que me inspira e motiva fora do mundo da tecnologia</h2>
          </div>
          <div className="interests-grid">
            {interests.map((interest) => (
              <article key={interest.title} className="interest-card">
                <h3>
                  <span className="interest-icon">{interest.icon}</span>
                  {interest.title}
                </h3>
                <p>{interest.description}</p>
                <div className="tag-list">
                  {interest.tags.map((tag) => (
                    <span key={tag} className="project-tag project-tag--alt">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contato" className="section-block contact-section">
          <div className="section-heading">
            <span>Contato</span>
            <h2>Entre contato</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-icons-panel">
              <div className="contact-icons contact-icons--row">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    className="contact-icon-link"
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="project-modal" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setActiveProject(null)}>
              ×
            </button>
            <div className="project-modal-image-wrapper">
              <img
                className="project-modal-image"
                src={activeProject.image}
                alt={activeProject.title}
              />
            </div>
            <div className="project-modal-body">
              <h3>{activeProject.title}</h3>
              <div className="project-modal-sections">
                <div className="project-modal-section">
                  <strong>Descrição</strong>
                  <p>{activeProject.description}</p>
                </div>
                <div className="project-modal-section">
                  <strong>Minha contribuição</strong>
                  <p>{activeProject.contribution}</p>
                </div>
                <div className="project-modal-section">
                  <strong>Tecnologias utilizadas</strong>
                  <div className="modal-tech-list">
                    {activeProject.tags.map((tag) => (
                      <span key={tag} className="modal-tech-item">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <a
                className="modal-repo-link"
                href={activeProject.repoLink}
                target="_blank"
                rel="noreferrer"
              >
                link do repositório
              </a>
            </div>
          </div>
        </div>
      )}

      <footer className="footer-bar">
        <span>© 2026 Felipe Faria Machado. Todos os direitos reservados.</span>
      </footer>
    </div>
  )
}

export default App
