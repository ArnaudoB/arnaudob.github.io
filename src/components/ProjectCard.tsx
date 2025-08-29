import { ExternalLink } from 'lucide-react';
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  keywords: string[];
  codeUrl?: string;
  pdfUrl?: string;
  logo?: string;
}

const ProjectCard = ({ title, description, keywords, codeUrl, pdfUrl, logo }: ProjectCardProps) => {
  return (
    <div className="academic-card group text-center">
      {/* Title */}
      <h3 className="project-title mb-2">{title}</h3>

      {/* Centered logo under title */}
      {logo && (
        <div className="flex justify-center mb-4">
          <img 
            src={logo} 
            alt={`${title} logo`} 
            className="w-12 h-12 object-contain" 
          />
        </div>
      )}

      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {keywords.map((keyword, index) => (
          <span key={index} className="keyword-tag">
            {keyword}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2"
          >
            <FaGithub size={16} />
            View Code
          </a>
        )}
        {pdfUrl && (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="academic-button-secondary flex items-center gap-2"
          >
            <ExternalLink size={16} />
            View PDF
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
