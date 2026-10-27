export default function CaseStudyDrawer() {
  return (
    <div className="cs" id="cs" role="dialog" aria-modal="true" aria-labelledby="csTitle">
      <div className="cs-bar">
        <button className="cs-back" id="csBack" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
          Back to work
        </button>
        <span className="cs-title" id="csTitle">Case study</span>
        <a className="cs-back cs-dl" id="csDl" href="#" download hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 4v11M7 10.5l5 5 5-5M5 20h14" />
          </svg>
          Download
        </a>
      </div>
      <div className="cs-body">
        <div className="cs-load" aria-hidden="true"><i /></div>
        <iframe id="csFrame" title="Case study" />
      </div>
    </div>
  );
}
