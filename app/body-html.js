export const BODY_HTML = `<div class="frame">
  <div class="stage" id="stage">
    <canvas class="dust" id="dust" aria-hidden="true"></canvas>
    <div class="grain" aria-hidden="true"><i class="g1"></i><i class="g2"></i><i class="g3"></i></div>

    <header class="top">
      <div class="brand"><span class="who">Goutam Kumar Hanjwani</span><span class="status"><i aria-hidden="true"></i>Open to Remote · Full-Stack Developer</span></div>
      <nav class="nav" aria-label="Sections">
        <button class="sound" id="sound" aria-pressed="false" aria-label="Turn background music on"><span class="bars" aria-hidden="true"><i></i><i></i><i></i><i></i></span><span class="sound-label">Sound off</span><span class="sound-hint" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M9 17.5V5.5l10-2v12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6.5" cy="17.5" r="2.6" fill="currentColor"/><circle cx="16.5" cy="15.5" r="2.6" fill="currentColor"/></svg><span class="hint-click">Click for sound</span><span class="hint-tap">Tap for sound</span></span></button>
        <button data-go="work">Work</button>
        <button data-go="about">About</button>
        <button data-go="contact">Contact</button>
      </nav>
    </header>

    <!-- nested frames used for the dive in and the dive out -->
    <div class="tunnel" id="tunnel" aria-hidden="true"></div>

    <!-- 0. Hero, and later the contact ending -->
    <section class="layer is-first" id="hero" data-bg="turmeric" aria-label="Introduction">
      <div class="hero-inner" id="heroInner">
        <svg class="birds" id="birds" viewBox="0 0 220 90" aria-hidden="true">
          <path class="bird" d="M10 60 Q20 48 30 58 Q40 48 50 60" />
          <path class="bird" d="M62 40 Q70 31 78 39 Q86 31 94 40" />
          <path class="bird" d="M104 58 Q111 50 118 57 Q125 50 132 58" />
          <path class="bird" d="M150 26 Q160 15 170 25 Q180 15 190 26" />
        </svg>
        <div class="hero-top">
          <p class="kicker" data-amp="7">Inside the mind of</p>
          <div class="name-wrap" id="nameWrap">
            <h1 class="name" id="name"><span>Goutam</span> <span>Kumar</span></h1>
            <div class="sel" id="sel" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
            <em class="dim" id="dim" aria-hidden="true">0 × 0</em>
          </div>
          <p class="phrase" id="phrase" aria-label="Full-Stack Developer"><span aria-hidden="true">Full-Stack</span><span aria-hidden="true">Developer</span></p>
        </div>
        <div class="me" id="me">
          <svg class="me-svg" id="meSvg" viewBox="0 0 640 600" aria-hidden="true">
  <!-- waving arm, behind the body -->
  <g id="arm">
    <path d="M168 470 Q84 430 92 316" fill="none" stroke="#000" stroke-width="62" stroke-linecap="round"/>
    <g id="hand">
      <path class="skin" d="M66 318 Q58 282 66 250 Q70 238 80 242 Q84 246 84 262 L86 226 Q88 214 98 214 Q108 214 108 226 L108 258 L112 222 Q114 212 124 213 Q133 215 132 227 L128 264 L136 238 Q140 228 149 231 Q156 235 153 247 L142 300 Q156 290 166 294 Q174 300 166 312 Q146 336 124 344 Q88 352 66 318 Z" stroke="#000" stroke-width="3" stroke-linejoin="round"/>
    </g>
  </g>
  <!-- body -->
  <path d="M20 600 C24 492 110 440 226 430 L414 430 C530 440 616 492 620 600 Z" fill="#000"/>
  <!-- neck -->
  <path class="skin" d="M284 360 L356 360 L358 430 Q320 478 282 430 Z" stroke="#000" stroke-width="3" stroke-linejoin="round"/>
  <!-- ears -->
  <ellipse class="skin" cx="203" cy="296" rx="15" ry="24" stroke="#000" stroke-width="3"/>
  <ellipse class="skin" cx="437" cy="296" rx="15" ry="24" stroke="#000" stroke-width="3"/>
  <!-- lower head -->
  <path class="skin" d="M204 232 L436 232 L436 326 Q436 398 368 398 L272 398 Q204 398 204 326 Z" stroke="#000" stroke-width="3" stroke-linejoin="round"/>
  <!-- the open mind -->
  <ellipse id="cavity" class="deep" cx="320" cy="232" rx="116" ry="13" stroke="#000" stroke-width="3"/>
  <g id="rings" style="opacity:0">
    <ellipse cx="320" cy="232" rx="92" ry="15" fill="rgba(0,0,0,.18)" stroke="rgba(0,0,0,.75)" stroke-width="2"/>
    <ellipse cx="320" cy="232" rx="68" ry="11" fill="rgba(0,0,0,.2)" stroke="rgba(0,0,0,.75)" stroke-width="2"/>
    <ellipse cx="320" cy="232" rx="46" ry="7.5" fill="rgba(0,0,0,.22)" stroke="rgba(0,0,0,.75)" stroke-width="2"/>
    <ellipse cx="320" cy="232" rx="26" ry="4.4" fill="rgba(0,0,0,.25)" stroke="rgba(0,0,0,.75)" stroke-width="1.6"/>
    <ellipse cx="320" cy="232" rx="10" ry="1.8" fill="rgba(0,0,0,.4)" stroke="rgba(0,0,0,.75)" stroke-width="1.2"/>
  </g>
  <!-- face -->
  <path d="M252 270 Q274 256 296 266 M344 266 Q366 256 388 270" fill="none" stroke="#000" stroke-width="5" stroke-linecap="round"/>
  <ellipse class="eye" cx="276" cy="290" rx="17" ry="21" fill="#fff" stroke="#000" stroke-width="3"/>
  <ellipse class="eye" cx="364" cy="290" rx="17" ry="21" fill="#fff" stroke="#000" stroke-width="3"/>
  <circle class="pupil" cx="282" cy="280" r="7.5" fill="#000"/>
  <circle class="pupil" cx="370" cy="280" r="7.5" fill="#000"/>
  <path d="M322 298 Q310 322 328 324" fill="none" stroke="#000" stroke-width="3.5" stroke-linecap="round"/>
  <path d="M288 340 Q320 388 352 340 Q320 350 288 340 Z" fill="#000" stroke="#000" stroke-width="3" stroke-linejoin="round"/>
  <path class="skin" d="M306 362 Q320 354 334 362 Q320 374 306 362 Z"/>
  <!-- thoughts escaping -->
  <g id="thoughts">
    <g class="th"><circle cx="400" cy="186" r="15" fill="#E2527F" stroke="#000" stroke-width="3"/></g>
    <g class="th"><circle cx="452" cy="146" r="19" fill="#6477DB" stroke="#000" stroke-width="3"/></g>
    <g class="th"><circle cx="420" cy="100" r="12" fill="#fff" stroke="#000" stroke-width="3"/></g>
    <g class="th"><path d="M500 88 L518 116 L512 132 L488 132 L482 116 Z" fill="#fff" stroke="#000" stroke-width="3" stroke-linejoin="round"/><path d="M500 88 L500 112" stroke="#000" stroke-width="2.5"/><circle cx="500" cy="115" r="4" fill="#000"/><rect x="486" y="132" width="28" height="8" rx="2" fill="#000"/></g>
    <g class="th"><path d="M470 52 Q500 30 532 44 Q504 70 470 52 Z" fill="#5AA84F" stroke="#000" stroke-width="3" stroke-linejoin="round"/><path d="M474 52 Q502 46 528 45" fill="none" stroke="#000" stroke-width="2"/></g>
    <g class="th"><path d="M540 118 Q542 130 554 132 Q542 134 540 146 Q538 134 526 132 Q538 130 540 118 Z" fill="#000"/></g>
  </g>
  <!-- the lid, hinged at the left -->
  <g id="lid">
    <path class="skin" d="M204 232 L204 200 Q204 142 266 142 L374 142 Q436 142 436 200 L436 232 Z" stroke="#000" stroke-width="3" stroke-linejoin="round"/>
    <path d="M204 212 Q204 142 266 142 L374 142 Q436 142 436 206 Q424 190 408 200 Q396 180 376 194 Q360 174 340 190 Q322 172 304 188 Q286 174 270 192 Q250 180 238 200 Q220 192 204 212 Z" fill="#000"/>
  </g>
</svg>

          <div class="dream" id="dream" aria-label="You've been exploring Goutam's Digital Universe"><svg class="moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 3.2A9 9 0 1 0 20.8 16 7 7 0 0 1 15.5 3.2Z" fill="#F2C230" stroke="#000" stroke-width="1.8" stroke-linejoin="round"/></svg><span aria-hidden="true"><small>You’ve been exploring</small><b>Goutam’s Portfolio</b></span></div>
          <div class="shirt">
            <p class="role" id="role"><span class="role-title">Full-Stack Developer &amp; AI Engineer</span> I build scalable, data-driven web apps with Next.js, AI &amp; modern systems</p>
            <p class="hint-m" id="hintM" aria-hidden="true"><span>Scroll to step inside</span></p>
            <div class="contact" id="contact">
              <h2 data-amp="5">Get in touch</h2>
              <div class="links">
                <span class="mail-wrap"><a class="primary" id="mail" href="mailto:Goutam54401@gmail.com">Goutam54401@gmail.com</a><button class="copy" id="copyMail" type="button" data-copy="Goutam54401@gmail.com" aria-label="Copy email address"><svg class="i-copy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="8.5" y="8.5" width="12" height="12" rx="2.5"/><path d="M15.5 8.5V6A2.5 2.5 0 0 0 13 3.5H6A2.5 2.5 0 0 0 3.5 6v7A2.5 2.5 0 0 0 6 15.5h2.5"/></svg><svg class="i-done" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 12.5l5 5 10-11"/></svg><span class="copy-tip" aria-hidden="true">Copied</span></button><span class="sr-only" id="copyStatus" aria-live="polite"></span></span>
                <a href="https://www.linkedin.com/in/nesil-noble-763732151/" target="_blank" rel="noopener">LinkedIn</a>
                <a href="https://www.behance.net/nesilnoble" target="_blank" rel="noopener">Behance</a>
                <a href="resume/Nesil-Noble-Resume.pdf?v=2" target="_blank" rel="noopener" data-case="resume" data-hash="#resume" data-title="Resume" data-back="Back" data-download="Nesil-Noble-Resume.pdf">Resume</a>
              </div>
            </div>
          </div>
        </div>
        <div class="cursor" id="cursor" aria-hidden="true">
              <svg viewBox="0 0 22 24"><path d="M2 2 L2 20 L7 15.5 L10.5 22.5 L13.5 21 L10 14 L17 14 Z" fill="#0A6FC2" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>
              <b id="cursorLabel">Goutam</b>
            </div>
      </div>
      <div class="hint" id="hint" aria-hidden="true"><span>Scroll to step inside</span><span class="line"></span></div>
    </section>

    <!-- 1. Hello -->
    <section class="layer" id="hello" data-bg="hibiscus" aria-label="Hello">
      <div class="doodles" aria-hidden="true">
        <svg class="spark" viewBox="0 0 24 24" style="left:11%;top:22%;width:46px"><path d="M12 0 Q13.4 10.6 24 12 Q13.4 13.4 12 24 Q10.6 13.4 0 12 Q10.6 10.6 12 0 Z"/></svg>
        <svg class="spark" viewBox="0 0 24 24" style="left:20%;top:70%;width:26px"><path d="M12 0 Q13.4 10.6 24 12 Q13.4 13.4 12 24 Q10.6 13.4 0 12 Q10.6 10.6 12 0 Z"/></svg>
        <svg class="spark" viewBox="0 0 24 24" style="left:84%;top:20%;width:34px"><path d="M12 0 Q13.4 10.6 24 12 Q13.4 13.4 12 24 Q10.6 13.4 0 12 Q10.6 10.6 12 0 Z"/></svg>
        <svg class="spark" viewBox="0 0 24 24" style="left:76%;top:66%;width:54px"><path d="M12 0 Q13.4 10.6 24 12 Q13.4 13.4 12 24 Q10.6 13.4 0 12 Q10.6 10.6 12 0 Z"/></svg>
        <svg class="spark" viewBox="0 0 24 24" style="left:50%;top:16%;width:22px"><path d="M12 0 Q13.4 10.6 24 12 Q13.4 13.4 12 24 Q10.6 13.4 0 12 Q10.6 10.6 12 0 Z"/></svg>
        <svg class="squig" viewBox="0 0 320 34"><path id="squigPath" d="M4 18 Q24 2 44 18 T84 18 T124 18 T164 18 T204 18 T244 18 T284 18 T316 14" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"/></svg>
      </div>
      <h2 class="hi-line" id="hiLine">Hi, I'm Goutam.</h2>
      <p class="cap" id="hiCap">7+ years designing digital experiences, products and interfaces. Currently leading Product Design at upGrad, where I work across product, strategy, systems, AI and design culture.</p>
    </section>

    <!-- 2. Systems -->
    <section class="layer" id="systems" data-bg="monsoon" aria-label="What I do">
      <div class="sys">
        <p class="sys-small" id="sysSmall" data-amp="3">I build</p>
        <h2 class="sys-word" id="sysWord">systems.</h2>
        <div class="kit" id="kit" aria-hidden="true">
          <div class="card" id="card">
            <em class="tag">Card / Default</em>
            <span class="bar a"></span><span class="bar b"></span>
            <span class="btn">Continue learning</span>
          </div>
          <span class="sw" style="background:var(--turmeric)"></span>
          <span class="sw" style="background:var(--hibiscus)"></span>
          <span class="sw" style="background:#fff"></span>
          <span class="sw" style="background:var(--backwater)"></span>
          <span class="sw" style="background:var(--leaf)"></span>
        </div>
        <p class="cap" id="sysCap">Schemas become APIs. Components become interfaces. Clean code becomes scalable systems a team can depend on.</p>
      </div>
    </section>

    <!-- 2b. Beliefs -->
    <section class="layer" id="beliefs" data-bg="deep" aria-label="What I believe">
      <div class="bl-scene bl-a" id="blA">
        <h2 class="bl-years">269+ Solved.</h2>
        <svg class="bl-under" viewBox="0 0 400 30" aria-hidden="true"><path id="blUnder" d="M6 18 Q60 4 120 16 T240 14 T394 12" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"/></svg>
        <p class="bl-hands" data-amp="13">Algorithms, Data Structures &amp; Full-Stack Craft.</p>
      </div>
      <div class="bl-scene bl-b" id="blB1">
        <div class="bl-inner">
        <h3>I build scalable, data-driven web applications from scratch.</h3>
        <p>From relational schemas in Supabase and PostgreSQL to high-performance Next.js frontends and Gemini API integrations, I ship applications engineered for reliability and real-world impact.</p>
  </div>
      </div>
      <div class="bl-scene bl-b" id="blB2">
        <div class="bl-inner">
        <h3>Strong algorithms foundation with an obsession for clean UI/UX.</h3>
        <p>269+ LeetCode problems solved across trees, graphs, and dynamic programming. I combine rigorous algorithmic problem-solving with responsive, modern interfaces that feel fast, intuitive and delightful.</p>
  </div>
      </div>
      <div class="bl-scene bl-b" id="blB3">
        <div class="bl-inner">
        <h3>I design for inclusion.</h3>
        <p>Not because it's on a checklist, but because the most interesting design problems live at the edges, not the centre.</p>
  </div>
      </div>
      <div class="bl-scene bl-b" id="blB4">
        <div class="bl-inner">
        <h3>These days I'm also in the code.</h3>
        <p>Prototyping faster, helping designers push PRs, shipping alongside engineers. Not because it's trendy, but because the seam between design and engineering is where the craft either holds or falls apart.</p>
        <p class="bl-kick" data-amp="17">I'd rather be standing there when it decides.</p>
  </div>
      </div>
      <div class="bl-scene bl-c" id="blC">
        <p class="c1">I don't believe in polite decks that protect average ideas.</p>
        <p class="c2" data-amp="4">I don't believe in <span class="vanilla">vanilla<svg class="strike" viewBox="0 0 300 40" preserveAspectRatio="none" aria-hidden="true"><path id="strikePath" d="M4 26 Q70 8 140 22 T296 14" fill="none" stroke="#E2527F" stroke-width="9" stroke-linecap="round"/></svg></span>.</p>
        <p class="c3">I believe in things with a spine: products that are unmistakably themselves, built by people who give a damn about the details no one asked them to care about.</p>
      </div>
      <div class="bl-scene bl-d" id="blD">
        <div class="bl-doodles" aria-hidden="true"><span class="dd dd-pen" data-depth="18" style="--x:9%;--y:21%;--w:4.2vw;--t:5.2s;--dl:0s;--mx:12%;--my:17%;--mw:11vw"><span class="ddp"><span class="ddf"><svg viewBox="0 0 60 70"><path d="M30 6 L48 34 L40 54 L20 54 L12 34 Z" fill="#fff" stroke="#000" stroke-width="3" stroke-linejoin="round"/><path d="M30 6 L30 30" stroke="#000" stroke-width="2.5"/><circle cx="30" cy="34" r="5" fill="#000"/><rect x="18" y="54" width="24" height="10" rx="2" fill="#F2C230" stroke="#000" stroke-width="3" stroke-linejoin="round"/></svg></span></span></span><span class="dd dd-bez" data-depth="10" style="--x:14%;--y:44%;--w:9vw;--t:6.4s;--dl:0.6s;--mx:38%;--my:14%;--mw:22vw"><span class="ddp"><span class="ddf"><svg viewBox="0 0 120 70"><path d="M10 58 L30 12 M110 58 L90 12" stroke="#0D99FF" stroke-width="2"/><path d="M10 58 C30 12 90 12 110 58" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/><rect x="5.5" y="53.5" width="9" height="9" fill="#fff" stroke="#0D99FF" stroke-width="2.5"/><rect x="105.5" y="53.5" width="9" height="9" fill="#fff" stroke="#0D99FF" stroke-width="2.5"/><circle cx="30" cy="12" r="4.5" fill="#0D99FF"/><circle cx="90" cy="12" r="4.5" fill="#0D99FF"/></svg></span></span></span><span class="dd dd-sw" data-depth="14" style="--x:8%;--y:68%;--w:5.6vw;--t:5.8s;--dl:1.1s;--mx:14%;--my:83%;--mw:15vw"><span class="ddp"><span class="ddf"><svg viewBox="0 0 90 90"><rect x="32" y="18" width="26" height="62" rx="8" fill="#E2527F" stroke="#000" stroke-width="3" stroke-linejoin="round" transform="rotate(-24 45 80)"/><rect x="32" y="18" width="26" height="62" rx="8" fill="#F2C230" stroke="#000" stroke-width="3" stroke-linejoin="round"/><rect x="32" y="18" width="26" height="62" rx="8" fill="#5AA84F" stroke="#000" stroke-width="3" stroke-linejoin="round" transform="rotate(24 45 80)"/><circle cx="45" cy="72" r="3.5" fill="#000"/></svg></span></span></span><span class="dd dd-card dd-hide-m" data-depth="8" style="--x:17%;--y:85%;--w:7.2vw;--t:6.8s;--dl:0.3s;--mw:0"><span class="ddp"><span class="ddf"><svg viewBox="0 0 110 80"><rect x="4" y="4" width="102" height="72" rx="12" fill="#fff" stroke="#000" stroke-width="3" stroke-linejoin="round"/><circle cx="24" cy="26" r="9" fill="#6477DB" stroke="#000" stroke-width="2.5"/><rect x="40" y="19" width="50" height="6" rx="3" fill="#000"/><rect x="40" y="31" width="34" height="5" rx="2.5" fill="#BDBDBD"/><rect x="16" y="50" width="44" height="14" rx="7" fill="#000"/></svg></span></span></span><span class="dd dd-team" data-depth="16" style="--x:89%;--y:22%;--w:8.6vw;--t:5.6s;--dl:0.4s;--mx:74%;--my:17%;--mw:24vw"><span class="ddp"><span class="ddf"><svg viewBox="0 0 130 70"><path d="M22 46 L65 28 L108 46" fill="none" stroke="#fff" stroke-width="2.5" stroke-dasharray="4 6" stroke-linecap="round"/><circle cx="22" cy="46" r="15" fill="#E2527F" stroke="#000" stroke-width="3"/><circle cx="17" cy="44" r="2.2" fill="#000"/><circle cx="27" cy="44" r="2.2" fill="#000"/><path d="M17 51 Q22 55 27 51" fill="none" stroke="#000" stroke-width="2.2" stroke-linecap="round"/><circle cx="108" cy="46" r="15" fill="#6477DB" stroke="#000" stroke-width="3"/><circle cx="103" cy="44" r="2.2" fill="#000"/><circle cx="113" cy="44" r="2.2" fill="#000"/><path d="M103 51 Q108 55 113 51" fill="none" stroke="#000" stroke-width="2.2" stroke-linecap="round"/><circle cx="65" cy="28" r="17" fill="#fff" stroke="#000" stroke-width="3"/><circle cx="60" cy="26" r="2.2" fill="#000"/><circle cx="70" cy="26" r="2.2" fill="#000"/><path d="M60 33 Q65 37 70 33" fill="none" stroke="#000" stroke-width="2.2" stroke-linecap="round"/></svg></span></span></span><span class="dd dd-talk" data-depth="12" style="--x:86%;--y:48%;--w:8vw;--t:6.2s;--dl:1.3s;--mx:50%;--my:85%;--mw:21vw"><span class="ddp"><span class="ddf"><svg viewBox="0 0 120 92"><rect x="46" y="42" width="68" height="40" rx="16" fill="#F2C230" stroke="#000" stroke-width="3" stroke-linejoin="round"/><path d="M96 80 L104 90 L86 81" fill="#F2C230" stroke="#000" stroke-width="3" stroke-linejoin="round"/><rect x="60" y="58" width="40" height="6" rx="3" fill="#000"/><rect x="6" y="8" width="72" height="44" rx="18" fill="#fff" stroke="#000" stroke-width="3" stroke-linejoin="round"/><path d="M22 50 L16 64 L36 51" fill="#fff" stroke="#000" stroke-width="3" stroke-linejoin="round"/><g class="dots"><circle cx="27" cy="30" r="4.5" fill="#000"/><circle cx="42" cy="30" r="4.5" fill="#000"/><circle cx="57" cy="30" r="4.5" fill="#000"/></g></svg></span></span></span><span class="dd dd-flag" data-depth="18" style="--x:91%;--y:73%;--w:5.4vw;--t:5s;--dl:0.8s;--mx:86%;--my:81%;--mw:15vw"><span class="ddp"><span class="ddf"><svg viewBox="0 0 80 100"><path d="M4 96 Q40 68 76 96 Z" fill="#5AA84F" stroke="#000" stroke-width="3" stroke-linejoin="round"/><path d="M30 84 L30 12" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path class="cloth" d="M31 14 Q46 8 60 16 Q52 24 62 32 Q46 28 31 34 Z" fill="#E2527F" stroke="#000" stroke-width="3" stroke-linejoin="round"/></svg></span></span></span><span class="dd dd-s1" data-depth="22" style="--x:22%;--y:14%;--w:1.4vw;--t:4.2s;--dl:0.2s;--mx:88%;--my:29%;--mw:4vw"><span class="ddp"><span class="ddf"><svg viewBox="0 0 24 24"><path d="M12 0 Q13 10 24 12 Q13 14 12 24 Q11 14 0 12 Q11 10 12 0 Z" fill="#fff"/></svg></span></span></span><span class="dd dd-s2 dd-hide-m" data-depth="20" style="--x:79%;--y:86%;--w:1.8vw;--t:4.8s;--dl:1.6s;--mw:0"><span class="ddp"><span class="ddf"><svg viewBox="0 0 24 24"><path d="M12 0 Q13 10 24 12 Q13 14 12 24 Q11 14 0 12 Q11 10 12 0 Z" fill="#fff"/></svg></span></span></span><span class="dd dd-s3" data-depth="24" style="--x:95%;--y:36%;--w:1.1vw;--t:3.8s;--dl:0.9s;--mx:6%;--my:72%;--mw:4vw"><span class="ddp"><span class="ddf"><svg viewBox="0 0 24 24"><path d="M12 0 Q13 10 24 12 Q13 14 12 24 Q11 14 0 12 Q11 10 12 0 Z" fill="#fff"/></svg></span></span></span></div>
        <h2>That's what I make.<br>That's what I lead.</h2>
        <p>If you're building something that deserves to be remembered, let's talk.</p>
        <p class="bl-open">I'm open to building brands, designing experiences and good conversations over a cup of <span class="nowrap">coffee.<svg class="coffee" viewBox="0 0 44 48" aria-hidden="true"><g class="wisps" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"><path d="M15 19 q-3.5 -4 0 -7.5 q3.5 -3.5 0 -7.5"/><path d="M21.5 19 q-3.5 -4 0 -7.5 q3.5 -3.5 0 -7.5"/><path d="M28 19 q-3.5 -4 0 -7.5 q3.5 -3.5 0 -7.5"/></g><path d="M34 26 Q41 26 41 31.5 Q41 37 33 37" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="M8 23 H35 V32 Q35 42 25 42 H18 Q8 42 8 32 Z" fill="#fff" stroke="#000" stroke-width="2.5" stroke-linejoin="round"/><ellipse cx="21.5" cy="23" rx="13.5" ry="2.6" fill="#6B4430" stroke="#000" stroke-width="2.5"/><path d="M4 45.5 H39" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg></span></p>
      </div>
    </section>

    <!-- 3. Based -->
    <section class="layer" id="based" data-bg="backwater" aria-label="Where I am">
      <div class="based">
        <div class="based-copy"><h2 class="based-text" id="basedText" data-amp="11"><span>Based in</span><span>Greater Noida.</span></h2>
        <div class="doodles" aria-hidden="true"><svg class="hills" viewBox="0 0 1000 120" preserveAspectRatio="none"><path d="M0 120 L0 84 Q90 40 180 70 Q260 96 330 58 Q420 8 520 56 Q600 92 680 50 Q770 6 860 48 Q930 78 1000 60 L1000 120 Z" fill="rgba(255,255,255,.05)" stroke="currentColor" stroke-opacity=".4" stroke-width="2" vector-effect="non-scaling-stroke"/><path d="M0 120 L0 100 Q140 70 260 92 Q400 116 520 86 Q680 52 820 90 Q920 112 1000 96 L1000 120 Z" fill="rgba(255,255,255,.05)" stroke="currentColor" stroke-opacity=".28" stroke-width="2" vector-effect="non-scaling-stroke"/></svg><svg class="palm far" viewBox="0 0 120 220" style="left:5%;width:clamp(60px,6.5vw,96px)"><path d="M60 220 Q50 150 66 72" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/><path d="M66 70 Q30 48 2 82 Q34 62 64 78 Z M66 70 Q40 26 8 34 Q42 44 64 76 Z M66 70 Q82 24 116 28 Q84 44 68 76 Z M66 70 Q106 56 120 96 Q98 70 68 78 Z M66 70 Q58 30 70 4 Q76 40 70 74 Z" fill="currentColor"/><circle cx="60" cy="82" r="7" fill="currentColor"/><circle cx="72" cy="84" r="7" fill="currentColor"/></svg><svg class="palm " viewBox="0 0 120 220" style="left:76%;width:clamp(70px,7.5vw,112px)"><path d="M60 220 Q50 150 66 72" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/><path d="M66 70 Q30 48 2 82 Q34 62 64 78 Z M66 70 Q40 26 8 34 Q42 44 64 76 Z M66 70 Q82 24 116 28 Q84 44 68 76 Z M66 70 Q106 56 120 96 Q98 70 68 78 Z M66 70 Q58 30 70 4 Q76 40 70 74 Z" fill="currentColor"/><circle cx="60" cy="82" r="7" fill="currentColor"/><circle cx="72" cy="84" r="7" fill="currentColor"/></svg><svg class="palm far" viewBox="0 0 120 220" style="left:89%;width:clamp(50px,5vw,80px)"><path d="M60 220 Q50 150 66 72" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/><path d="M66 70 Q30 48 2 82 Q34 62 64 78 Z M66 70 Q40 26 8 34 Q42 44 64 76 Z M66 70 Q82 24 116 28 Q84 44 68 76 Z M66 70 Q106 56 120 96 Q98 70 68 78 Z M66 70 Q58 30 70 4 Q76 40 70 74 Z" fill="currentColor"/><circle cx="60" cy="82" r="7" fill="currentColor"/><circle cx="72" cy="84" r="7" fill="currentColor"/></svg><svg class="cup" id="cup" viewBox="0 0 110 140" style="left:12%;width:clamp(48px,5vw,76px)"><g id="steam"><path d="M42 36 Q34 24 42 12 Q50 0 42 -12 M58 34 Q50 20 58 8 Q66 -4 58 -16" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></g><path class="skin" d="M4 104 L106 104 L96 138 L14 138 Z" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/><path class="skin" d="M28 44 L82 44 L74 120 L36 120 Z" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/><ellipse class="deep" cx="55" cy="44" rx="27" ry="6" stroke="currentColor" stroke-width="3.5"/></svg></div>
        <div class="road" aria-hidden="true"></div>
        <div class="auto" id="auto" aria-hidden="true">
          <svg viewBox="0 0 340 232">
            <!-- open cabin, you can see through it -->
            <path d="M136 46 L272 46 L272 150 L136 150 Z" class="thru"/>
            <!-- driver -->
            <path d="M156 132 Q156 98 172 96 Q188 98 190 132 Z" fill="#E9E1CF" stroke="#000" stroke-width="2.5" stroke-linejoin="round"/>
            <circle class="skin" cx="172" cy="82" r="12" stroke="#000" stroke-width="2.5"/>
            <path d="M160 80 Q160 68 172 68 Q184 68 184 78 Q176 73 160 80 Z" fill="#000"/>
            <path d="M160 112 L134 110" stroke="#000" stroke-width="4" stroke-linecap="round"/>
            <rect x="150" y="130" width="44" height="12" rx="3" fill="#2B2B2B" stroke="#000" stroke-width="2"/>
            <!-- passenger -->
            <rect x="222" y="104" width="44" height="40" rx="6" fill="#3A3A3A" stroke="#000" stroke-width="2"/>
            <path d="M228 140 Q228 106 244 104 Q260 106 262 140 Z" fill="#C8455A" stroke="#000" stroke-width="2.5" stroke-linejoin="round"/>
            <circle class="skin" cx="244" cy="89" r="13" stroke="#000" stroke-width="2.5"/>
            <path d="M231 88 Q230 74 244 74 Q258 74 258 88 Q258 100 262 104 L254 100 Q256 84 244 82 Q234 82 234 96 Z" fill="#000"/>
            <!-- pillar -->
            <path d="M206 46 L206 150" stroke="#000" stroke-width="3"/>
            <!-- yellow canopy with the side cut open -->
            <path d="M100 44 Q104 24 128 24 L290 24 Q328 24 328 66 L328 150 L272 150 L272 46 L136 46 L136 116 L100 116 Z" fill="#F2C230" stroke="#000" stroke-width="3" stroke-linejoin="round"/>
            <path d="M102 36 Q108 22 128 22 L290 22 Q330 22 330 64" fill="none" stroke="#000" stroke-width="8" stroke-linecap="round"/>
            <rect x="272" y="130" width="56" height="9" fill="#000"/>
            <!-- windscreen -->
            <path d="M108 46 L132 46 L132 110 L102 110 Z" fill="rgba(255,255,255,.6)" stroke="#000" stroke-width="3" stroke-linejoin="round"/>
            <path d="M112 54 L118 54 L110 96" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/>
            <!-- green front face and fender -->
            <path d="M100 110 L136 110 L136 196 L84 196 Q80 150 100 110 Z" fill="#3E9B5C" stroke="#000" stroke-width="3" stroke-linejoin="round"/>
            <path d="M102 116 L134 116" stroke="#F2C230" stroke-width="5"/>
            <circle cx="112" cy="134" r="7" fill="#FFF3B0" stroke="#000" stroke-width="2.5"/>
            <rect x="96" y="146" width="12" height="6" rx="2" fill="#F08A24" stroke="#000" stroke-width="1.5"/>
            <path d="M42 206 Q46 174 72 172 Q100 172 106 206 Z" fill="#3E9B5C" stroke="#000" stroke-width="3" stroke-linejoin="round"/>
            <!-- floor board -->
            <rect x="104" y="184" width="150" height="12" rx="3" fill="#2F7A48" stroke="#000" stroke-width="2.5"/>
            <!-- green rear body -->
            <path d="M150 150 L312 150 Q336 152 337 178 L337 198 Q337 206 328 206 L302 206 Q300 178 272 178 Q244 178 242 206 L150 206 Z" fill="#3E9B5C" stroke="#000" stroke-width="3" stroke-linejoin="round"/>
            <path d="M156 168 L236 168" stroke="#2F7A48" stroke-width="3" stroke-linecap="round"/>
            <rect x="298" y="160" width="28" height="15" rx="2" fill="#F2C230" stroke="#000" stroke-width="2"/>
            <text x="312" y="171" transform="translate(624 0) scale(-1 1)" text-anchor="middle" font-size="8" font-weight="700" fill="#000" font-family="Big Shoulders, sans-serif">KA 01</text>
            <rect x="331" y="158" width="6" height="12" rx="2" fill="#D63A3A" stroke="#000" stroke-width="1.5"/>
            <!-- wheels -->
            <g class="wheel" id="wf"><circle cx="72" cy="206" r="24" fill="#111" stroke="#000" stroke-width="2"/><circle cx="72" cy="206" r="10" fill="#BDBDBD" stroke="#000" stroke-width="2"/><path d="M72 196 L72 216 M62 206 L82 206" stroke="#555" stroke-width="2.5"/></g>
            <g class="wheel" id="wr"><circle cx="272" cy="206" r="24" fill="#111" stroke="#000" stroke-width="2"/><circle cx="272" cy="206" r="10" fill="#BDBDBD" stroke="#000" stroke-width="2"/><path d="M272 196 L272 216 M262 206 L282 206" stroke="#555" stroke-width="2.5"/></g>
          </svg>
        </div>
        <p class="cap" id="basedCap">Rajasthan roots, Greater Noida by address (Bennett University). When I’m not writing full-stack code or solving algorithmic problems on LeetCode, you’ll find me exploring applied AI, LLM architectures, and building modern web apps.</p></div>
      </div>
    </section>

    <!-- 4. Work -->
    <section class="layer work" id="work" data-bg="leaf" aria-label="Selected work">
      <div class="track" id="track">
        <div class="work-head">
          <h2 data-amp="9"><svg class="peek" id="peek" viewBox="0 0 130 70" aria-hidden="true"><path class="skin" d="M18 70 L18 44 Q18 8 58 8 L72 8 Q112 8 112 44 L112 70 Z" stroke="#000" stroke-width="3"/><path d="M18 50 Q18 8 58 8 L72 8 Q112 8 112 48 Q104 38 94 44 Q86 32 74 40 Q64 28 52 38 Q42 30 34 42 Q24 38 18 50 Z" fill="#000"/><ellipse cx="50" cy="58" rx="9" ry="11" fill="#fff" stroke="#000" stroke-width="2.5"/><ellipse cx="82" cy="58" rx="9" ry="11" fill="#fff" stroke="#000" stroke-width="2.5"/><circle id="pl" cx="54" cy="60" r="4" fill="#000"/><circle id="pr" cx="86" cy="60" r="4" fill="#000"/><path class="skin" d="M4 70 Q4 58 14 58 Q24 58 24 70 Z M106 70 Q106 58 116 58 Q126 58 126 70 Z" stroke="#000" stroke-width="3"/></svg>Selected work</h2>
          <p>A few scalable platforms, AI systems and research projects I’ve engineered, from hackathon-winning apps to production storefronts.</p>
          <p class="work-more">Explore my open-source code and competitive programming on <a href="https://github.com/" target="_blank" rel="noopener">GitHub</a> &amp; <a href="https://leetcode.com/" target="_blank" rel="noopener">LeetCode</a>.</p>
        </div>

        <a class="proj" href="work/corridor-tms.html" data-case="corridor-tms">
          <div class="label"><span>Eunoia</span><em>Mental Wellness Platform</em></div>
          <div class="cover"><img src="work/corridor-tms-cover.jpg" alt="Eunoia Student Mental Wellness Platform" loading="lazy" style="object-position:left top"></div>
          <h3>Stigma-free student burnout &amp; wellness platform</h3>
          <p>Built for Smart India Hackathon supporting 1200+ users via Next.js, TypeScript &amp; Supabase. Reduced page latency by 30% with server-side caching.</p>
        </a>

        <a class="proj" href="work/the-local-project.html" data-case="the-local-project">
          <div class="label"><span>MyDishGenie</span><em>AI Nutrition &amp; Gemini LLM</em></div>
          <div class="cover"><img src="work/the-local-project-cover.jpg" alt="MyDishGenie AI Nutrition Recommendation Platform" loading="lazy" style="object-position:left center"></div>
          <h3>AI-powered personalized nutrition recommendation</h3>
          <p>Engineered LLM integration via Gemini API with complex structured prompts for 500+ daily users. Improved data retrieval speed by 35% with indexed schemas.</p>
        </a>

        <a class="proj" href="work/upgrad-design-system.html" data-case="upgrad-design-system">
          <div class="label"><span>Sartae Storefront</span><em>Shopify E-Commerce &amp; UI/UX</em></div>
          <div class="cover"><img src="work/upgrad-design-system-cover.jpg" alt="Sartae Custom Streetwear Storefront" loading="lazy"></div>
          <h3>Custom Shopify storefront with 20% navigation boost</h3>
          <p>Structured product catalog for 5+ collections using custom Liquid object schemas &amp; metafields, managing 10+ product pages and checkout flow.</p>
        </a>

        <a class="proj" href="work/malayali-kada.html" data-case="malayali-kada">
          <div class="label"><span>Ethereum Research</span><em>ICCCNet-2025 Best Paper</em></div>
          <div class="cover"><img src="work/malayali-kada-cover.webp" alt="Blockchain Innovation Research Publication" loading="lazy"></div>
          <h3>Best Paper Award at ICCCNet-2025 (Manchester, UK)</h3>
          <p>Co-authored and presented peer-reviewed research on Ethereum blockchain innovation at an international conference hosted by Manchester Metropolitan University.</p>
        </a>

        <a class="proj" href="work/temple.html" data-case="temple">
          <div class="label"><span>LeetCode 269+</span><em>Algorithms &amp; Data Structures</em></div>
          <div class="cover"><img src="work/temple-cover.webp" alt="LeetCode 269+ Solved, 100 Days Badge" loading="lazy" style="object-position:left top"></div>
          <h3>269+ Algorithmic Challenges Mastered</h3>
          <p>129 Easy, 129 Medium, 11 Hard problems with 46-day streak and 100 Days Badge. Strong problem solving foundation in trees, graphs, DP, and core CS.</p>
        </a>

        <a class="proj" href="work/upgrad-three-doors.html" data-case="upgrad-three-doors">
          <div class="label"><span>Backend &amp; APIs</span><em>FastAPI, Docker &amp; PostgreSQL</em></div>
          <div class="cover"><img src="work/upgrad-three-doors-cover.jpg" alt="Full-stack APIs, Docker & Cloud Architecture" loading="lazy" style="object-position:left top"></div>
          <h3>Scalable microservices &amp; high-availability APIs</h3>
          <p>Engineered RESTful APIs with FastAPI and Node.js, containerized services using Docker, and built CI/CD workflows deploying to Vercel and GCP.</p>
        </a>
      </div>
    </section>

    <!-- 5. About -->
    <section class="layer" id="about" data-bg="kokum" aria-label="About">
      <div class="about-inner" style="position:relative">
        <svg class="plane" id="plane" style="color:var(--fg)" viewBox="0 0 260 110" aria-hidden="true"><path id="trail" d="M4 100 Q50 30 96 76 Q128 106 150 70 Q164 46 188 40" fill="none" stroke="currentColor" stroke-width="3.5" stroke-dasharray="7 9" stroke-linecap="round"/><g id="planeBody"><path d="M196 36 L256 6 L226 66 L214 48 Z" fill="#fff" stroke="#000" stroke-width="3.5" stroke-linejoin="round"/><path d="M214 48 L256 6 L206 56 Z" fill="#000"/></g></svg>
        <h2 class="st" id="aboutSt">
          <span><i>I care about the code</i></span>
          <span><i>and architecture that make</i></span>
          <span><i>software fast and reliable.</i></span>
        </h2>
        <p class="about-sub" id="aboutSub">Full-stack developer and Computer Science undergraduate at Bennett University (CGPA 8.53/10). I specialize in building data-driven web applications with Next.js, React, TypeScript, Node.js, PostgreSQL/Supabase, and integrating LLM features via the Gemini API.</p>
        <dl class="facts" id="facts">
          <div><dt>Now</dt><dd>B.Tech CSE, Bennett University (CGPA 8.53/10)</dd></div>
          <div><dt>Also</dt><dd>Freelance Web Developer, Sartae</dd></div>
          <div><dt>Honors</dt><dd>Best Paper Award @ ICCCNet-2025 (Manchester, UK)</dd></div>
          <div><dt>LeetCode</dt><dd>269+ Solved (129 Easy, 129 Medium, 11 Hard · 100 Days Badge)</dd></div>
        </dl>
        <div class="tools" id="tools" aria-label="Tools">
          <span>Next.js</span><span>React.js</span><span>TypeScript</span><span>JavaScript</span><span>Node.js</span><span>Python</span><span>PostgreSQL</span><span>Supabase</span><span>Gemini API</span><span>Tailwind CSS</span><span>Docker</span><span>Git</span><span>GitHub Actions</span><span>C++</span><span>Java</span><span>FastAPI</span><span>Redis</span><span>Vercel</span>
        </div>
        <div class="more" id="more"><a href="https://github.com/" target="_blank" rel="noopener">GitHub Profile</a><a href="https://leetcode.com/" target="_blank" rel="noopener">LeetCode Profile</a><a href="https://www.linkedin.com/" target="_blank" rel="noopener">LinkedIn Profile</a></div>
      </div>
    </section>

    <div class="ruler" id="ruler" aria-hidden="true">
      <div class="ticks"></div>
      <div class="head" id="head"></div>
    </div>
  </div>
</div>

<div class="scroll-space" id="space"></div>





<div class="notice" id="notice" role="dialog" aria-labelledby="noticeTitle" aria-describedby="noticeText" hidden>
  <svg class="notice-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 3.2A9 9 0 1 0 20.8 16 7 7 0 0 1 15.5 3.2Z" fill="#F2C230" stroke="#000" stroke-width="1.8" stroke-linejoin="round"/></svg>
  <div class="notice-body">
    <p class="notice-title" id="noticeTitle">Experience Goutam's Portfolio on a bigger screen</p>
    <p class="notice-text" id="noticeText">To experience this interactive portfolio in its full potential, open it on a desktop browser.</p>
    <div class="notice-actions"><button type="button" id="noticeCopy">Copy link</button><button type="button" id="noticeOk" class="solid">Continue here</button></div>
  </div>
</div>
<div class="cs" id="cs" role="dialog" aria-modal="true" aria-labelledby="csTitle">
  <div class="cs-bar">
    <button class="cs-back" id="csBack" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>Back to work</button>
    <span class="cs-title" id="csTitle">Case study</span>
    <a class="cs-back cs-dl" id="csDl" href="#" download hidden><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11M7 10.5l5 5 5-5M5 20h14"/></svg>Download</a>
  </div>
  <div class="cs-body"><div class="cs-load" aria-hidden="true"><i></i></div><iframe id="csFrame" title="Case study"></iframe></div>
</div>

<!-- Awwwards nominee badge. z-index sits under the case study viewer (100) and phone notice (95) so it never covers them. -->
<div id="awwwards" style="position: fixed; z-index: 90; transform: translateY(-50%); top: 50%;  right: 0"><a href="https://www.awwwards.com/sites/nesils-lucid-dreams" target="_blank" rel="noopener" aria-label="Nesil's Lucid Dreams, Nominee on Awwwards"><svg width="53.08" height="171.358" aria-hidden="true"><path class="js-color-bg" fill="white" d="M0 0h53.08v171.358H0z"></path><g class="js-color-text" fill="black"><path d="M20.048 153.585v-2.002l6.752-3.757h-6.752v-1.9h10.23v2.002l-6.752 3.757h6.752v1.9zM29.899 142.382a3.317 3.317 0 0 1-1.359 1.293c-.575.297-1.223.446-1.944.446-.721 0-1.369-.149-1.944-.446a3.317 3.317 0 0 1-1.359-1.293c-.331-.564-.497-1.232-.497-2.003 0-.769.166-1.437.497-2.002a3.332 3.332 0 0 1 1.359-1.294c.575-.297 1.224-.445 1.944-.445.722 0 1.369.148 1.944.445a3.326 3.326 0 0 1 1.359 1.294c.33.565.496 1.233.496 2.002.001.77-.166 1.438-.496 2.003m-1.703-3.348c-.435-.331-.967-.497-1.601-.497s-1.167.166-1.601.497c-.434.332-.65.78-.65 1.345s.217 1.014.65 1.346c.434.33.967.496 1.601.496s1.166-.166 1.601-.496c.434-.332.649-.78.649-1.346.001-.565-.215-1.013-.649-1.345M22.912 134.996v-1.812h1.185c-.43-.283-.752-.593-.973-.929-.219-.336-.329-.732-.329-1.19 0-.479.127-.902.38-1.272.254-.37.635-.633 1.141-.79-.478-.262-.851-.591-1.118-.985a2.221 2.221 0 0 1-.402-1.265c0-.682.2-1.218.599-1.607.4-.391.957-.585 1.668-.585h5.218v1.812H25.37c-.682 0-1.023.303-1.023.907 0 .467.264.85.789 1.146.527.299 1.286.446 2.28.446h2.865v1.813H25.37c-.682 0-1.023.303-1.023.906 0 .468.275.851.826 1.147.551.298 1.352.446 2.404.446h2.704v1.812h-7.369zM21.626 122.457c-.225.224-.502.336-.833.336s-.608-.112-.833-.336a1.128 1.128 0 0 1-.336-.833c0-.331.111-.609.336-.833.225-.225.502-.336.833-.336s.608.111.833.336c.225.224.337.502.337.833 0 .332-.112.608-.337.833m1.286-1.739h7.366v1.813h-7.366v-1.813zM22.912 118.668v-1.812h1.185a3.348 3.348 0 0 1-.951-1.009 2.434 2.434 0 0 1-.351-1.272c0-.681.19-1.229.57-1.644.38-.414.931-.621 1.651-.621h5.263v1.812h-4.722c-.418 0-.727.096-.92.285-.195.19-.293.447-.293.769 0 .302.116.58.351.833.233.254.577.458 1.03.613.453.156.992.234 1.615.234h2.938v1.812h-7.366zM29.833 109.129a3.33 3.33 0 0 1-1.432 1.169 4.535 4.535 0 0 1-1.805.373 4.537 4.537 0 0 1-1.807-.373c-.579-.248-1.057-.638-1.432-1.169s-.563-1.196-.563-1.995c0-.771.183-1.413.549-1.93a3.28 3.28 0 0 1 1.382-1.141 4.221 4.221 0 0 1 1.709-.364h.746v5.071c.447-.02.838-.183 1.168-.49.332-.307.498-.724.498-1.248 0-.41-.093-.754-.277-1.031-.186-.278-.473-.529-.863-.753l.542-1.462c.69.303 1.224.724 1.592 1.265.371.541.556 1.235.556 2.083 0 .799-.188 1.464-.563 1.995m-4.085-3.574c-.41.088-.746.261-1.009.52-.262.258-.395.61-.395 1.06 0 .428.137.784.409 1.067.272.282.604.458.994.525v-3.172zM29.833 100.878c-.375.531-.852.921-1.432 1.169a4.552 4.552 0 0 1-3.612 0c-.579-.248-1.057-.638-1.432-1.169s-.563-1.196-.563-1.995c0-.77.183-1.412.549-1.93a3.278 3.278 0 0 1 1.382-1.14 4.222 4.222 0 0 1 1.709-.365h.746v5.072a1.794 1.794 0 0 0 1.168-.49c.332-.307.498-.724.498-1.249 0-.41-.093-.753-.277-1.031-.186-.277-.473-.528-.863-.753l.542-1.462c.69.302 1.224.724 1.592 1.265.371.541.556 1.234.556 2.083 0 .799-.188 1.464-.563 1.995m-4.085-3.573c-.41.088-.746.261-1.009.519-.262.258-.395.611-.395 1.06 0 .429.137.784.409 1.067.272.282.604.458.994.526v-3.172zM35.481 16.926l-4.782 14.969h-3.266l-2.584-9.682-2.584 9.682h-3.268l-4.781-14.969h3.713l2.673 10.276 2.524-10.276h3.445l2.524 10.276 2.674-10.276zM37.979 27.083c1.426 0 2.495 1.068 2.495 2.495 0 1.425-1.069 2.495-2.495 2.495-1.425 0-2.495-1.07-2.495-2.495-.001-1.427 1.07-2.495 2.495-2.495"></path></g></svg></a></div>`;
