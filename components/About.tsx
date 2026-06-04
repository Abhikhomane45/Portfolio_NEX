import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="section-wrap">
        <div className="about-grid">
          <div>
            <p className="sec-label reveal">About Me</p>
            <h2 className="sec-title reveal">Turning data into decisions</h2>
            <div className="sec-divider reveal" />
            <div className="about-text reveal">
              <p>
                I&apos;m a dedicated <strong>Data Analyst and IoT Developer</strong> with
                expertise in transforming complex data into actionable insights and
                building innovative IoT solutions. My work focuses on delivering
                analytics dashboards and scalable models to support data-driven
                decision-making.
              </p>
              <p>
                Currently pursuing my B.Tech in <strong>Electronics and Computer
                Engineering</strong> at PES&apos;s Modern College of Engineering, Pune, I
                bring a unique combination of hardware and software knowledge to every
                project.
              </p>
            </div>
            <div className="about-cards">
              <div className="about-card reveal reveal-delay-1">
                <i className="fas fa-envelope" />
                <h5>Email</h5>
                <p>
                  <a href="mailto:abhikhomane123@gmail.com">
                    abhikhomane123@gmail.com
                  </a>
                </p>
              </div>
              <div className="about-card reveal reveal-delay-2">
                <i className="fas fa-phone" />
                <h5>Phone</h5>
                <p>+91 76662 00956</p>
              </div>
              <div className="about-card reveal reveal-delay-3">
                <i className="fab fa-linkedin" />
                <h5>LinkedIn</h5>
                <p>
                  <a
                    href="https://linkedin.com/in/abhijeet-khomane-08a202275"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    abhijeet-khomane
                  </a>
                </p>
              </div>
              <div className="about-card reveal reveal-delay-4">
                <i className="fab fa-github" />
                <h5>GitHub</h5>
                <p>
                  <a
                    href="https://github.com/Abhikhomane45"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abhikhomane45
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="about-img-wrap reveal">
            <Image
              src="/Myimage.jpg"
              alt="Abhijeet Khomane"
              width={380}
              height={507}
              className="about-img"
            />
            <div className="about-img-tag">
              <div className="num">8.5</div>
              <div className="txt">Aggregate CGPA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
