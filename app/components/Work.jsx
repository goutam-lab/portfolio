export default function Work() {
  return (
    <section className="layer work" id="work" data-bg="leaf" aria-label="Selected work">
      <div className="track" id="track">
        <div className="work-head">
          <h2 data-amp="9">
            <svg className="peek" id="peek" viewBox="0 0 130 70" aria-hidden="true">
              <path className="skin" d="M18 70 L18 44 Q18 8 58 8 L72 8 Q112 8 112 44 L112 70 Z" stroke="#000" strokeWidth="3" />
              <path d="M18 50 Q18 8 58 8 L72 8 Q112 8 112 48 Q104 38 94 44 Q86 32 74 40 Q64 28 52 38 Q42 30 34 42 Q24 38 18 50 Z" fill="#000" />
              <ellipse cx="50" cy="58" rx="9" ry="11" fill="#fff" stroke="#000" strokeWidth="2.5" />
              <ellipse cx="82" cy="58" rx="9" ry="11" fill="#fff" stroke="#000" strokeWidth="2.5" />
              <circle id="pl" cx="54" cy="60" r="4" fill="#000" />
              <circle id="pr" cx="86" cy="60" r="4" fill="#000" />
              <path className="skin" d="M4 70 Q4 58 14 58 Q24 58 24 70 Z M106 70 Q106 58 116 58 Q126 58 126 70 Z" stroke="#000" strokeWidth="3" />
            </svg>
            Selected work
          </h2>
          <p>
            A few scalable platforms, AI systems and research projects I’ve engineered, from hackathon-winning apps to production storefronts.
          </p>
          <p className="work-more">
            Explore my open-source code and competitive programming on{' '}
            <a href="https://github.com/goutam-lab" target="_blank" rel="noopener">GitHub</a> &amp;{' '}
            <a href="https://leetcode.com/" target="_blank" rel="noopener">LeetCode</a>.
          </p>
        </div>

        <a className="proj" href="/work/corridor-tms" data-case="corridor-tms">
          <div className="label">
            <span>Eunoia</span>
            <em>Mental Wellness Platform</em>
          </div>
          <div className="cover">
            <img src="/work/corridor-tms-cover.jpg" alt="Eunoia Student Mental Wellness Platform" loading="lazy" style={{ objectPosition: 'left top' }} />
          </div>
          <h3>Stigma-free student burnout &amp; wellness platform</h3>
          <p>
            Built for Smart India Hackathon supporting 1200+ users via Next.js, TypeScript &amp; Supabase. Reduced page latency by 30% with server-side caching.
          </p>
        </a>

        <a className="proj" href="/work/the-local-project" data-case="the-local-project">
          <div className="label">
            <span>MyDishGenie</span>
            <em>AI Nutrition &amp; Gemini LLM</em>
          </div>
          <div className="cover">
            <img src="/work/the-local-project-cover.jpg" alt="MyDishGenie AI Nutrition Recommendation Platform" loading="lazy" style={{ objectPosition: 'left center' }} />
          </div>
          <h3>AI-powered personalized nutrition recommendation</h3>
          <p>
            Engineered LLM integration via Gemini API with complex structured prompts for 500+ daily users. Improved data retrieval speed by 35% with indexed schemas.
          </p>
        </a>

        <a className="proj" href="/work/upgrad-design-system" data-case="upgrad-design-system">
          <div className="label">
            <span>Sartae Storefront</span>
            <em>Shopify E-Commerce &amp; Storefront</em>
          </div>
          <div className="cover">
            <img src="/work/upgrad-design-system-cover.jpg" alt="Sartae Custom Streetwear Storefront" loading="lazy" />
          </div>
          <h3>Custom Shopify storefront with 20% navigation boost</h3>
          <p>
            Structured product catalog for 5+ collections using custom Liquid object schemas &amp; metafields, managing 10+ product pages and checkout flow.
          </p>
        </a>

        <a className="proj" href="/work/malayali-kada" data-case="malayali-kada">
          <div className="label">
            <span>Ethereum Research</span>
            <em>ICCCNet-2025 Best Paper</em>
          </div>
          <div className="cover">
            <img src="/work/malayali-kada-cover.webp" alt="Blockchain Innovation Research Publication" loading="lazy" />
          </div>
          <h3>Best Paper Award at ICCCNet-2025 (Manchester, UK)</h3>
          <p>
            Co-authored and presented peer-reviewed research on Ethereum blockchain innovation at an international conference hosted by Manchester Metropolitan University.
          </p>
        </a>

        <a className="proj" href="/work/temple" data-case="temple">
          <div className="label">
            <span>LeetCode 269+</span>
            <em>Algorithms &amp; Data Structures</em>
          </div>
          <div className="cover">
            <img src="/work/temple-cover.webp" alt="LeetCode 269+ Solved, 100 Days Badge" loading="lazy" style={{ objectPosition: 'left top' }} />
          </div>
          <h3>269+ Algorithmic Challenges Mastered</h3>
          <p>
            129 Easy, 129 Medium, 11 Hard problems with 46-day streak and 100 Days Badge. Strong problem solving foundation in trees, graphs, DP, and core CS.
          </p>
        </a>

        <a className="proj" href="/work/upgrad-three-doors" data-case="upgrad-three-doors">
          <div className="label">
            <span>Backend &amp; APIs</span>
            <em>FastAPI, Docker &amp; PostgreSQL</em>
          </div>
          <div className="cover">
            <img src="/work/upgrad-three-doors-cover.jpg" alt="Full-stack APIs, Docker & Cloud Architecture" loading="lazy" style={{ objectPosition: 'left top' }} />
          </div>
          <h3>Scalable microservices &amp; high-availability APIs</h3>
          <p>
            Engineered RESTful APIs with FastAPI and Node.js, containerized services using Docker, and built CI/CD workflows deploying to Vercel and GCP.
          </p>
        </a>
      </div>
    </section>
  );
}
