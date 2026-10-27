export default function About() {
  const skillCategories = [
    {
      name: 'Languages',
      skills: ['C++', 'Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'HTML/CSS'],
    },
    {
      name: 'Web & Frameworks',
      skills: ['Next.js', 'React.js', 'Node.js', 'FastAPI', 'Flask', 'Django', 'Tailwind CSS', 'Framer Motion', 'shadcn/ui'],
    },
    {
      name: 'Databases & State',
      skills: ['PostgreSQL', 'Supabase', 'Redis', 'SQL'],
    },
    {
      name: 'AI & LLM',
      skills: ['Gemini API', 'LLM Integration', 'Prompt Engineering', 'Applied AI'],
    },
    {
      name: 'DevOps & Tools',
      skills: ['Docker', 'Linux', 'Git', 'GitHub Actions', 'Vercel', 'GCP', 'Shopify Liquid', 'Codolio'],
    },
    {
      name: 'Core CS & APIs',
      skills: ['Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'Computer Networks', 'REST APIs', 'Server Actions', 'Authentication'],
    },
  ];

  return (
    <section className="layer" id="about" data-bg="kokum" aria-label="About">
      <div className="about-inner" style={{ position: 'relative' }}>
        <svg className="plane" id="plane" style={{ color: 'var(--fg)' }} viewBox="0 0 260 110" aria-hidden="true">
          <path
            id="trail"
            d="M4 100 Q50 30 96 76 Q128 106 150 70 Q164 46 188 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeDasharray="7 9"
            strokeLinecap="round"
          />
          <g id="planeBody">
            <path d="M196 36 L256 6 L226 66 L214 48 Z" fill="#fff" stroke="#000" strokeWidth="3.5" strokeLinejoin="round" />
            <path d="M214 48 L256 6 L206 56 Z" fill="#000" />
          </g>
        </svg>

        <h2 className="st" id="aboutSt">
          <span><i>I care about the code</i></span>
          <span><i>and architecture that make</i></span>
          <span><i>software fast and reliable.</i></span>
        </h2>

        <p className="about-sub" id="aboutSub">
          Full-stack developer and Computer Science undergraduate at Bennett University (CGPA 8.53/10). I specialize in building data-driven web applications with Next.js, React, TypeScript, Node.js, PostgreSQL/Supabase, and integrating LLM features via the Gemini API.
        </p>

        <dl className="facts" id="facts">
          <div>
            <dt>Now</dt>
            <dd>B.Tech CSE, Bennett University (CGPA 8.53/10)</dd>
          </div>
          <div>
            <dt>Also</dt>
            <dd>Freelance Web Developer, Sartae</dd>
          </div>
          <div>
            <dt>Honors</dt>
            <dd>Best Paper Award @ ICCCNet-2025 (Manchester, UK)</dd>
          </div>
          <div>
            <dt>LeetCode</dt>
            <dd>269+ Solved (129 Easy, 129 Med, 11 Hard · 100 Days Badge)</dd>
          </div>
        </dl>

        <div className="tools" id="tools" aria-label="Skills & Tech Stack">
          {skillCategories.map((cat) => (
            <div key={cat.name} className="tools-group">
              <span className="tools-cat">{cat.name}:</span>
              <div className="tools-items">
                {cat.skills.map((skill) => (
                  <span key={skill} className="chip">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="more" id="more">
          <a href="https://github.com/goutam-lab" target="_blank" rel="noopener">GitHub Profile</a>
          <a href="https://leetcode.com/" target="_blank" rel="noopener">LeetCode Profile</a>
          <a href="https://www.linkedin.com/in/goutam-hanjwani-3b997530a" target="_blank" rel="noopener">LinkedIn Profile</a>
          <a href="/resume/Goutam-Kumar-Hanjwani-Resume.pdf" target="_blank" rel="noopener" download="Goutam-Kumar-Hanjwani-Resume.pdf">Download Resume (PDF)</a>
        </div>
      </div>
    </section>
  );
}
