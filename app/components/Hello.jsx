export default function Hello() {
  return (
    <section className="layer" id="hello" data-bg="hibiscus" aria-label="Hello">
      <div className="doodles" aria-hidden="true">
        <svg className="spark" viewBox="0 0 24 24" style={{ left: '11%', top: '22%', width: '46px' }}>
          <path d="M12 0 Q13.4 10.6 24 12 Q13.4 13.4 12 24 Q10.6 13.4 0 12 Q10.6 10.6 12 0 Z" />
        </svg>
        <svg className="spark" viewBox="0 0 24 24" style={{ left: '20%', top: '70%', width: '26px' }}>
          <path d="M12 0 Q13.4 10.6 24 12 Q13.4 13.4 12 24 Q10.6 13.4 0 12 Q10.6 10.6 12 0 Z" />
        </svg>
        <svg className="spark" viewBox="0 0 24 24" style={{ left: '84%', top: '20%', width: '34px' }}>
          <path d="M12 0 Q13.4 10.6 24 12 Q13.4 13.4 12 24 Q10.6 13.4 0 12 Q10.6 10.6 12 0 Z" />
        </svg>
        <svg className="spark" viewBox="0 0 24 24" style={{ left: '76%', top: '66%', width: '54px' }}>
          <path d="M12 0 Q13.4 10.6 24 12 Q13.4 13.4 12 24 Q10.6 13.4 0 12 Q10.6 10.6 12 0 Z" />
        </svg>
        <svg className="spark" viewBox="0 0 24 24" style={{ left: '50%', top: '16%', width: '22px' }}>
          <path d="M12 0 Q13.4 10.6 24 12 Q13.4 13.4 12 24 Q10.6 13.4 0 12 Q10.6 10.6 12 0 Z" />
        </svg>
        <svg className="squig" viewBox="0 0 320 34">
          <path
            id="squigPath"
            d="M4 18 Q24 2 44 18 T84 18 T124 18 T164 18 T204 18 T244 18 T284 18 T316 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <h2 className="hi-line" id="hiLine">Hi, I'm Goutam.</h2>
      <p className="cap" id="hiCap">
        Full-stack developer and Computer Science undergraduate at Bennett University (CGPA 8.53/10). Freelance Web Developer at Sartae, engineering scalable web platforms with Next.js, TypeScript, PostgreSQL, and integrating AI via the Gemini API.
      </p>
    </section>
  );
}
