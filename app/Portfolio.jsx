'use client';

import { useEffect, useRef } from 'react';
import { initLucidDreams } from './lucid-dreams';
import { BODY_HTML } from './body-html';

export default function Portfolio() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    initLucidDreams();
  }, []);

  return (
    <div
      id="portfolio-root"
      style={{ display: 'contents' }}
      dangerouslySetInnerHTML={{ __html: BODY_HTML }}
    />
  );
}
