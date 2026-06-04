const CERTIFICATIONS = [
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "Mar 2025",
    iconClass: "fab fa-microsoft",
    themeClass: "azure",
    delayClass: "reveal-delay-1",
  },
  {
    title: "Developing Soft Skills",
    issuer: "NPTEL",
    date: "Aug 2024",
    iconClass: "fas fa-graduation-cap",
    themeClass: "nptel",
    delayClass: "reveal-delay-2",
  },
  {
    title: "Java, C++, RDBMS",
    issuer: "Spoken Tutorial, IIT Bombay",
    date: "",
    iconClass: "fas fa-university",
    themeClass: "iit",
    delayClass: "reveal-delay-3",
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "Jul 2024",
    iconClass: "fas fa-terminal",
    themeClass: "hack",
    delayClass: "reveal-delay-4",
  },
  {
    title: "First Runner-Up, AiZureStack Hackathon",
    issuer: "CertifyO",
    date: "2025",
    iconClass: "fas fa-trophy",
    themeClass: "award",
    delayClass: "reveal-delay-1",
  },
];

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="section-wrap">
        <p className="sec-label reveal">Credentials</p>
        <h2 className="sec-title reveal">Certifications & Awards</h2>
        <div className="sec-divider reveal" />
        <div className="cert-grid">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className={`cert-card reveal ${cert.delayClass}`}
            >
              <div className={`cert-icon ${cert.themeClass}`}>
                <i className={cert.iconClass} />
              </div>
              <div className="cert-body">
                <h4>{cert.title}</h4>
                <div className="issuer">{cert.issuer}</div>
                {cert.date && <span className="date">{cert.date}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
