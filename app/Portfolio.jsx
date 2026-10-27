'use client';

import { useEffect, useRef } from 'react';
import { initLucidDreams } from './lucid-dreams';
import Header from './components/Header';
import Hero from './components/Hero';
import Hello from './components/Hello';
import Systems from './components/Systems';
import Beliefs from './components/Beliefs';
import Based from './components/Based';
import Work from './components/Work';
import About from './components/About';
import Ruler from './components/Ruler';
import MobileNotice from './components/MobileNotice';
import CaseStudyDrawer from './components/CaseStudyDrawer';

export default function Portfolio() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    initLucidDreams();
  }, []);

  return (
    <>
      <div className="frame">
        <div className="stage" id="stage">
          <canvas className="dust" id="dust" aria-hidden="true" />
          <div className="grain" aria-hidden="true">
            <i className="g1" />
            <i className="g2" />
            <i className="g3" />
          </div>

          <Header />

          {/* nested frames used for the dive in and the dive out */}
          <div className="tunnel" id="tunnel" aria-hidden="true" />

          {/* 0. Hero, and later the contact ending */}
          <Hero />

          {/* 1. Hello */}
          <Hello />

          {/* 2. Systems */}
          <Systems />

          {/* 2b. Beliefs */}
          <Beliefs />

          {/* 3. Based */}
          <Based />

          {/* 4. Work */}
          <Work />

          {/* 5. About (All Stack & Skills) */}
          <About />

          <Ruler />
        </div>
      </div>

      <div className="scroll-space" id="space" />

      <MobileNotice />
      <CaseStudyDrawer />
    </>
  );
}
