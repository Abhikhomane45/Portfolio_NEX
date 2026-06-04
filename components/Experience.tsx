export default function Experience() {
  return (
    <section id="experience">
      <div className="section-wrap">
        <p className="sec-label reveal">My Journey</p>
        <h2 className="sec-title reveal">Experience & Education</h2>
        <div className="sec-divider reveal" />
        <div className="timeline">
          {/* INTERNSHIP */}
          <div className="tl-item reveal">
            <div className="tl-dot" />
            <div className="tl-card">
              <span className="tl-date">Jan 2025 – Mar 2025</span>
              <h3>Data Analyst Intern</h3>
              <p className="org">KasNet Technologies · Hybrid</p>
              <ul>
                <li>
                  Built and deployed 3+ interactive Power BI dashboards using DAX,
                  enabling stakeholders to track KPIs and trends efficiently.
                </li>
                <li>
                  Cleaned and transformed 50,000+ rows of raw data using Python
                  (Pandas, NumPy) and SQL, improving data accuracy by 95%.
                </li>
                <li>
                  Designed visualizations to highlight key insights, boosting
                  decision-making speed by 30%.
                </li>
                <li>
                  Conducted exploratory data analysis (EDA) to identify patterns
                  and trends, leading to actionable business recommendations.
                </li>
              </ul>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="tl-item reveal reveal-delay-2">
            <div className="tl-dot edu" />
            <div className="tl-card">
              <span className="tl-date edu-date">Mar 2022 – May 2026</span>
              <h3>B.Tech — Electronics & Computer Engineering</h3>
              <p className="org">PES&apos;s Modern College of Engineering, Pune</p>
              <div className="cgpa">
                <span>9.48</span> T.E. CGPA &nbsp;·&nbsp; <span>8.5</span> Aggregate CGPA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
