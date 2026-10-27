import CaseStudyRenderer from './CaseStudyRenderer';
import data from '../case-studies-data.json';

export function generateStaticParams() {
  return Object.keys(data).map(slug => ({ slug }));
}

export function generateMetadata({ params }) {
  const item = data[params.slug];
  return {
    title: item?.title || 'Case Study · Goutam Kumar Hanjwani',
  };
}

export default function CaseStudyPage({ params }) {
  return <CaseStudyRenderer slug={params.slug} />;
}
