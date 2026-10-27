'use client';

import { useEffect, useRef } from 'react';
import data from '../case-studies-data.json';

export default function CaseStudyRenderer({ slug }) {
  const containerRef = useRef(null);
  const item = data[slug];

  useEffect(() => {
    if (!item) return;

    // Add case study flag to html and body so globals.css overflow:hidden is disabled
    document.documentElement.classList.add('is-case-study');
    document.body.classList.add('is-case-study');

    // Add font links if needed
    const addedLinks = [];
    if (item.links && item.links.length) {
      item.links.forEach(linkHtml => {
        const div = document.createElement('div');
        div.innerHTML = linkHtml;
        const link = div.firstElementChild;
        if (link) {
          document.head.appendChild(link);
          addedLinks.push(link);
        }
      });
    }

    // Set body attributes if any
    if (item.bodyAttrs) {
      const matchTheme = item.bodyAttrs.match(/data-theme=["']([^"']+)["']/i);
      if (matchTheme) document.documentElement.setAttribute('data-theme', matchTheme[1]);
    }

    // Load scripts sequentially
    let cancelled = false;
    async function loadScripts() {
      for (const s of item.scripts || []) {
        if (cancelled) break;
        if (s.src) {
          await new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = s.src;
            script.async = false;
            script.onload = resolve;
            script.onerror = () => {
              console.warn('Failed to load script', s.src);
              resolve();
            };
            document.body.appendChild(script);
          });
        } else if (s.code) {
          try {
            const script = document.createElement('script');
            script.text = s.code;
            document.body.appendChild(script);
          } catch (err) {
            console.error('Error executing case study script:', err);
          }
        }
      }
    }

    loadScripts();

    return () => {
      cancelled = true;
      document.documentElement.classList.remove('is-case-study');
      document.body.classList.remove('is-case-study');
      addedLinks.forEach(l => l.remove());
    };
  }, [item]);

  if (!item) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: '#888' }}>
        Case study not found.
      </div>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: item.styles }} />
      <div
        ref={containerRef}
        className="cs-content-mount"
        style={{ display: 'contents' }}
        dangerouslySetInnerHTML={{ __html: item.bodyContent }}
      />
    </>
  );
}
