import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: "Goutam Kumar Hanjwani · Full-Stack Developer",
  description: "Full-stack developer and Computer Science undergraduate (CGPA 8.53/10) who builds scalable, data-driven web applications with Next.js, React, TypeScript, Node.js, PostgreSQL/Supabase, and Gemini API.",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Goutam Kumar Hanjwani",
    title: "Goutam Kumar Hanjwani · Full-Stack Developer",
    description: "Full-stack developer and Computer Science undergraduate who builds scalable, data-driven web applications with Next.js, React, TypeScript, PostgreSQL, and Gemini API.",
    url: "https://goutamkumar.dev/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#545388",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <Script src="/vendor/gsap.min.js" strategy="beforeInteractive" />
        <Script src="/vendor/ScrollTrigger.min.js" strategy="beforeInteractive" />
        <Script src="/vendor/lenis.min.js" strategy="beforeInteractive" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
