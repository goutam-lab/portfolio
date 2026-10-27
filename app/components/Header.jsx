export default function Header() {
  return (
    <header className="top">
      <div className="brand">
        <span className="who">Goutam Kumar Hanjwani</span>
        <span className="status">
          <i aria-hidden="true" />
          Open to Remote · Full-Stack Developer
        </span>
      </div>
      <nav className="nav" aria-label="Sections">
        <button
          className="sound"
          id="sound"
          aria-pressed="false"
          aria-label="Turn background music on"
        >
          <span className="bars" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span className="sound-label">Sound off</span>
          <span className="sound-hint" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path
                d="M9 17.5V5.5l10-2v12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="6.5" cy="17.5" r="2.6" fill="currentColor" />
              <circle cx="16.5" cy="15.5" r="2.6" fill="currentColor" />
            </svg>
            <span className="hint-click">Click for sound</span>
            <span className="hint-tap">Tap for sound</span>
          </span>
        </button>
        <button data-go="work">Work</button>
        <button data-go="about">About</button>
        <button data-go="contact">Contact</button>
      </nav>
    </header>
  );
}
