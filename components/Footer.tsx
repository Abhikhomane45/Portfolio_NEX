export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">
              AK<span>.</span>
            </a>
            <p>Data Analyst & IoT Developer based in Pune, India.</p>
            <div className="social-row">
              <a
                href="https://linkedin.com/in/abhijeet-khomane-08a202275"
                target="_blank"
                rel="noopener noreferrer"
                className="soc-btn"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                href="https://github.com/Abhikhomane45"
                target="_blank"
                rel="noopener noreferrer"
                className="soc-btn"
                aria-label="GitHub"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="mailto:abhikhomane123@gmail.com"
                className="soc-btn"
                aria-label="Email"
              >
                <i className="fas fa-envelope" />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h5>Navigate</h5>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#certifications">Certifications</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h5>Projects</h5>
            <ul>
              <li>
                <a
                  href="https://github.com/Abhikhomane45/IoT-based-Plant-Disease-Recognition-System-Using-ESP32-CAM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plant Disease Detection
                </a>
              </li>
              <li>
                <a
                  href="https://task-flow-flask-based-task-manager.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TaskFlow App
                </a>
              </li>
              <li>
                <a href="#">Sales Analysis Dashboard</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Abhijeet Khomane. All rights reserved.</p>
          <p>Built with Next.js & React</p>
        </div>
      </div>
    </footer>
  );
}
