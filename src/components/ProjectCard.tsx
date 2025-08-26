import { ExternalLink} from 'lucide-react';
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  keywords: string[];
  codeUrl?: string;
  pdfUrl?: string;
}

const ProjectCard = ({ title, description, keywords, codeUrl, pdfUrl }: ProjectCardProps) => {
  return (
    <div className="academic-card group">
      <h3 className="project-title">{title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {keywords.map((keyword, index) => (
          <span key={index} className="keyword-tag">
            {keyword}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="academic-button-primary flex items-center gap-2"
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