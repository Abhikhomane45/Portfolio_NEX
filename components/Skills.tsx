const SKILL_CATEGORIES = [
  {
    title: "Programming",
    iconClass: "fas fa-code",
    themeClass: "ic-purple",
    skills: ["Python", "Java", "JavaScript"],
    delayClass: "reveal-delay-1",
  },
  {
    title: "Data & Analytics",
    iconClass: "fas fa-chart-bar",
    themeClass: "ic-teal",
    skills: ["Power BI", "Azure", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    delayClass: "reveal-delay-2",
  },
  {
    title: "Web Development",
    iconClass: "fas fa-globe",
    themeClass: "ic-coral",
    skills: ["HTML", "CSS", "React", "Node.js", "Flask", "Git", "GitHub"],
    delayClass: "reveal-delay-3",
  },
  {
    title: "Databases & Tools",
    iconClass: "fas fa-database",
    themeClass: "ic-blue",
    skills: ["MySQL", "MongoDB", "Linux", "VS Code", "IntelliJ IDEA", "Cisco Packet Tracer"],
    delayClass: "reveal-delay-4",
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-wrap">
        <p className="sec-label reveal">What I Know</p>
        <h2 className="sec-title reveal">Skills & Technologies</h2>
        <div className="sec-divider reveal" />
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className={`skill-card reveal ${cat.delayClass}`}
            >
              <div className={`skill-card-icon ${cat.themeClass}`}>
                <i className={cat.iconClass} />
              </div>
              <h3>{cat.title}</h3>
              <div className="skill-pills">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
