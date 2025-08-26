import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, title, children, className = '' }: SectionProps) => {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container-width">
        <h2 className="section-title text-center mb-16">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;