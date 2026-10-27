export default function Systems() {
  return (
    <section className="layer" id="systems" data-bg="monsoon" aria-label="What I do">
      <div className="sys">
        <p className="sys-small" id="sysSmall" data-amp="3">I build</p>
        <h2 className="sys-word" id="sysWord">systems.</h2>
        <div className="kit" id="kit" aria-hidden="true">
          <div className="card" id="card">
            <em className="tag">API / Endpoint</em>
            <span className="bar a" />
            <span className="bar b" />
            <span className="btn">Deploy Service</span>
          </div>
          <span className="sw" style={{ background: 'var(--turmeric)' }} />
          <span className="sw" style={{ background: 'var(--hibiscus)' }} />
          <span className="sw" style={{ background: '#fff' }} />
          <span className="sw" style={{ background: 'var(--backwater)' }} />
          <span className="sw" style={{ background: 'var(--leaf)' }} />
        </div>
        <p className="cap" id="sysCap">
          Relational schemas become reliable APIs. Type-safe components become reactive interfaces. Clean code becomes scalable systems a team can depend on.
        </p>
      </div>
    </section>
  );
}
