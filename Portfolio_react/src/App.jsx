import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>Tripti Mittal</h2>
        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <p className="tag">B.Tech CSE Student</p>
          <h1>Hi, I’m Tripti Mittal</h1>
          <h3>Full Stack Developer & DSA Enthusiast</h3>
          <p>
            I build beautiful, responsive websites using React, JavaScript,
            Tailwind, Bootstrap and modern web technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>

        {/* <div className="hero-card">
          <h2>600+</h2>
          <p>LeetCode Problems Solved</p>
          <h2>8.76</h2>
          <p>CGPA</p>
          <h2>2024 - 2028</h2>
          <p>B.Tech CSE</p>
        </div> */}
        <img src='tripti.jpeg' style={{width : "300px",borderRadius:"50%"}} />
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a Computer Science Engineering student at Geeta University,
          Panipat. I am passionate about frontend development, problem solving,
          and building useful web applications.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {[
            "C",
            "C++",
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Bootstrap",
            "Tailwind CSS",
            "WordPress",
            "Node.js",
            "Express.js",
            "MongoDB",
            "SQL",
            "Git",
            "GitHub",
          ].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>

        <div className="timeline">
          <div className="timeline-card">
            <h3>Programming Intern</h3>
            <h4>Coding Blocks | Feb 2025 - Mar 2025</h4>
            <p>
              Worked on core programming concepts, data structures, algorithms,
              arrays, strings, recursion and basic DSA.
            </p>
          </div>

          <div className="timeline-card">
            <h3>Programming Intern</h3>
            <h4>Geeta University | Jun 2025 - Aug 2025</h4>
            <p>
              Completed coding-focused internship with emphasis on logical
              thinking, algorithm design and DSA fundamentals.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-grid">
          <div className="project-card">
            <h3>Placement Preparation Website</h3>
            <p>
              A website for students to prepare for campus placements with DSA,
              Aptitude, Core Subjects and Interview Questions.
            </p>
          </div>

          <div className="project-card">
            <h3>To-Do List Application</h3>
            <p>
              A React.js task management app with Add, Edit, Delete and Mark
              Complete features.
            </p>
          </div>

          <div className="project-card">
            <h3>Smart Campus Communication Hub</h3>
            <p>
              A campus communication project with announcements, events,
              feedback and student-friendly dashboard.
            </p>
          </div>
        </div>
      </section>

      <section id="certificates" className="section">
        <h2>Certificates & Achievements</h2>

        <div className="certificate-grid">
          <div>🏆 Top 15 Teams in Internal Hackathon</div>
          <div>🥈 Second Position — Smart India Hackathon at Geeta University</div>
          <div>🎓 DSA Advanced Internship — Coding Blocks</div>
          <div>🥇 First Position — B.Tech 1st Semester</div>
          <div>💻 500+ / 600+ LeetCode Problems Solved</div>
        </div>
      </section>

      <section id="education" className="section">
        <h2>Education</h2>

        <div className="education-card">
          <h3>Geeta University, Panipat</h3>
          <p>B.Tech in Computer Science & Engineering | 2024 - 2028</p>
          <p>CGPA: 8.76</p>
        </div>

        <div className="education-card">
          <h3>SGMS, New Delhi</h3>
          <p>Class XII | 81.4%</p>
        </div>

        <div className="education-card">
          <h3>GGS Public School, Panipat</h3>
          <p>Class X | 96.8%</p>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact Me</h2>
        <p>Email: triptimittal996@gmail.com</p>
        <p>Phone: +91 7056935169</p>
        <p>Location: Panipat, India</p>
      </section>

      <footer>
        <p>© 2026 Tripti Mittal | Portfolio</p>
      </footer>
    </div>
  );
}

export default App;