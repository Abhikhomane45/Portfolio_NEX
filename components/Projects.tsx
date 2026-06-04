import Image from "next/image";

const PROJECTS = [
  {
    title: "IoT-based Plant Disease Detection System",
    imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=300&q=80",
    tags: ["IoT", "OpenCV", "ESP32-CAM", "Python"],
    points: [
      "Applied OpenCV achieving over 90% detection accuracy.",
      "Integrated temperature & humidity sensors with visual data.",
      "Reduced detection time for farmers by 60%.",
    ],
    linkText: "View on GitHub",
    linkUrl: "https://github.com/Abhikhomane45/IoT-based-Plant-Disease-Recognition-System-Using-ESP32-CAM",
    overlayText: "View Project",
    overlayIcon: "fas fa-external-link-alt",
    delayClass: "reveal-delay-1",
    isComingSoon: false,
  },
  {
    title: "Global Sales Performance Analysis",
    imgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=300&q=80",
    tags: ["Power BI", "DAX", "Power Query", "Data Viz"],
    points: [
      "Visualized core metrics — sales & profit — across 2012–2015.",
      "Implemented dynamic filters using DAX and Power Query.",
      "Identified a 90% growth trend in key regions.",
    ],
    linkText: "Offline Demo",
    linkUrl: "#",
    overlayText: "Coming Soon",
    overlayIcon: "fas fa-clock",
    delayClass: "reveal-delay-2",
    isComingSoon: true,
  },
  {
    title: "TaskFlow — Task Manager Web App",
    imgSrc: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=600&h=300&q=80",
    tags: ["Flask", "SQLite", "Bootstrap", "Python"],
    points: [
      "Flask web app with secure login and full CRUD functionality.",
      "SQLite for persistent data storage, Bootstrap for responsive UI.",
      "Improved task optimization & team efficiency by 40%.",
    ],
    linkText: "Live Demo",
    linkUrl: "https://task-flow-flask-based-task-manager.vercel.app/",
    overlayText: "Live Demo",
    overlayIcon: "fas fa-external-link-alt",
    delayClass: "reveal-delay-3",
    isComingSoon: false,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-wrap">
        <p className="sec-label reveal">What I&apos;ve Built</p>
        <h2 className="sec-title reveal">Projects</h2>
        <div className="sec-divider reveal" />
        <div className="projects-grid">
          {PROJECTS.map((proj, idx) => (
            <div
              key={idx}
              className={`proj-card reveal ${proj.delayClass}`}
            >
              <div className="proj-img-wrap">
                <Image
                  src={proj.imgSrc}
                  alt={proj.title}
                  width={600}
                  height={300}
                  style={{ objectFit: "cover" }}
                  priority={idx === 0}
                />
                <div className="proj-overlay">
                  {proj.isComingSoon ? (
                    <span className="coming-soon">
                      <i className={proj.overlayIcon} /> {proj.overlayText}
                    </span>
                  ) : (
                    <span>
                      <i className={proj.overlayIcon} /> {proj.overlayText}
                    </span>
                  )}
                </div>
              </div>
              <div className="proj-body">
                <div className="proj-tags">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="proj-tag">
                      {tag}
                    </span>
                  ))}
                  {proj.isComingSoon && (
                    <span className="proj-coming-badge">
                      <i className="fas fa-lock" style={{ fontSize: "0.7rem" }} /> Coming Soon
                    </span>
                  )}
                </div>
                <h3>{proj.title}</h3>
                <ul>
                  {proj.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
                {proj.isComingSoon ? (
                  <span className="proj-link disabled">
                    {proj.linkText} <i className="fas fa-arrow-right" />
                  </span>
                ) : (
                  <a
                    href={proj.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link"
                  >
                    {proj.linkText} <i className="fas fa-arrow-right" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
