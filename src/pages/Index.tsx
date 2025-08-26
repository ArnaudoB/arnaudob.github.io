import { Mail, MapPin, Phone, Download, Github, Linkedin, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import heroImage from '../assets/hero-academic.jpg';

const Index = () => {
  const mlProjects = [
    {
      title: "Deep Learning for Computer Vision",
      description: "Advanced neural network architectures for image classification and object detection, achieving state-of-the-art performance on benchmark datasets.",
      keywords: ["Deep Learning", "Computer Vision", "PyTorch", "CNNs", "Transfer Learning"],
      codeUrl: "https://github.com/researcher/dl-vision",
      pdfUrl: "https://arxiv.org/paper-link"
    },
    {
      title: "Natural Language Processing with Transformers",
      description: "Novel attention mechanisms for improved language understanding and generation tasks, with applications in sentiment analysis and machine translation.",
      keywords: ["NLP", "Transformers", "BERT", "Attention", "Language Models"],
      codeUrl: "https://github.com/researcher/nlp-transformers",
      pdfUrl: "https://paper-repository.com/nlp-paper"
    },
    {
      title: "Reinforcement Learning for Robotics",
      description: "End-to-end learning algorithms for robotic manipulation tasks using deep reinforcement learning and sim-to-real transfer.",
      keywords: ["Reinforcement Learning", "Robotics", "Sim-to-Real", "Policy Gradient", "PPO"],
      codeUrl: "https://github.com/researcher/rl-robotics",
      pdfUrl: "https://robotics-journal.com/rl-paper"
    }
  ];

  const mathProjects = [
    {
      title: "Topology and Algebraic Geometry",
      description: "Investigating connections between topological invariants and algebraic structures in complex manifolds, with applications to string theory.",
      keywords: ["Topology", "Algebraic Geometry", "Manifolds", "Cohomology", "String Theory"],
      codeUrl: "https://github.com/researcher/topology-algebra",
      pdfUrl: "https://math-journal.com/topology-paper"
    },
    {
      title: "Number Theory and Cryptography",
      description: "Exploring elliptic curves and their applications in modern cryptographic protocols, including post-quantum security analysis.",
      keywords: ["Number Theory", "Elliptic Curves", "Cryptography", "Post-Quantum", "Security"],
      codeUrl: "https://github.com/researcher/crypto-curves",
      pdfUrl: "https://crypto-conference.com/number-theory-paper"
    }
  ];

  const teachingExperience = [
    {
      title: "Machine Learning Fundamentals",
      description: "Comprehensive course covering supervised and unsupervised learning, neural networks, and practical implementation using Python and scikit-learn.",
      keywords: ["Machine Learning", "Python", "Scikit-learn", "Neural Networks", "Data Science"],
      codeUrl: "https://github.com/researcher/ml-course",
      pdfUrl: "https://university.edu/ml-syllabus.pdf"
    },
    {
      title: "Advanced Mathematics for Computer Science",
      description: "Graduate-level course in linear algebra, calculus, and discrete mathematics with applications to algorithm design and complexity theory.",
      keywords: ["Linear Algebra", "Calculus", "Discrete Math", "Algorithms", "Complexity Theory"],
      codeUrl: "https://github.com/researcher/math-cs-course",
      pdfUrl: "https://university.edu/advanced-math-syllabus.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero/About Section */}
      <section
        id="about"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.8), rgba(59, 130, 246, 0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-width text-center text-white z-10">
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 rounded-full bg-white/20 border-2 border-white/30 mb-4 flex items-center justify-center">
              <span className="text-white/60 text-sm">Your Photo</span>
            </div>
            <div className="w-16 h-16 bg-white/20 border border-white/30 rounded-lg flex items-center justify-center mb-6">
              <span className="text-white/60 text-xs">Logo</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">Dr. Research Scholar</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Advancing the frontiers of machine learning and mathematical research through innovative algorithms and theoretical insights.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#ml-research" className="academic-button-primary bg-white/20 border border-white/30 hover:bg-white/30">
              View Research
            </a>
            <a href="#contact" className="academic-button-secondary bg-transparent border border-white text-white hover:bg-white/20">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* ML Research Section */}
      <Section id="ml-research" title="Machine Learning Research" className="bg-gradient-to-b from-muted to-background">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mlProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Section>

      {/* Mathematical Projects Section */}
      <Section id="math-projects" title="Mathematical Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mathProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Section>

      {/* Teaching Section */}
      <Section id="teaching" title="Teaching" className="bg-gradient-to-b from-muted to-background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teachingExperience.map((course, index) => (
            <ProjectCard key={index} {...course} />
          ))}
        </div>
      </Section>

      {/* Hobbies Section */}
      <Section id="hobbies" title="Hobbies & Interests">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="academic-card text-center">
            <h3 className="project-title">Classical Music</h3>
            <p className="text-muted-foreground">Piano performance and composition, with a focus on Bach and contemporary classical pieces.</p>
          </div>
          <div className="academic-card text-center">
            <h3 className="project-title">Chess</h3>
            <p className="text-muted-foreground">Competitive chess player with a rating of 2100+ and active in local tournaments.</p>
          </div>
          <div className="academic-card text-center">
            <h3 className="project-title">Photography</h3>
            <p className="text-muted-foreground">Landscape and abstract photography, exploring the intersection of mathematics and visual art.</p>
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Education" className="bg-gradient-to-b from-muted to-background">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="academic-card">
            <h3 className="project-title">Graduate Studies</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Advanced Machine Learning Theory</li>
              <li>• Computational Complexity</li>
              <li>• Modern Algebra</li>
              <li>• Real and Complex Analysis</li>
              <li>• Differential Geometry</li>
            </ul>
          </div>
          <div className="academic-card">
            <h3 className="project-title">Research Methods</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Statistical Learning Theory</li>
              <li>• Optimization Methods</li>
              <li>• Information Theory</li>
              <li>• Probability Theory</li>
              <li>• Measure Theory</li>
            </ul>
          </div>
          <div className="academic-card">
            <h3 className="project-title">Applied Mathematics</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Numerical Methods</li>
              <li>• Partial Differential Equations</li>
              <li>• Mathematical Modeling</li>
              <li>• Linear Programming</li>
              <li>• Graph Theory</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CV Section */}
      <Section id="cv" title="Curriculum Vitae">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground mb-8 text-lg">
            Download my complete academic CV including publications, presentations, and detailed research experience.
          </p>
          <a
            href="/cv-academic.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="academic-button-primary inline-flex items-center gap-3"
          >
            <Download size={20} />
            Download CV (PDF)
          </a>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact" className="bg-gradient-to-b from-muted to-background">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="academic-card">
              <h3 className="project-title">Get in Touch</h3>
              <p className="text-muted-foreground mb-6">
                I'm always interested in discussing research collaborations, academic opportunities, or innovative projects.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-primary" />
                  <span>researcher@university.edu</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-primary" />
                  <span>Research University, Department of Computer Science</span>
                </div>
              </div>
            </div>
            
            <div className="academic-card">
              <h3 className="project-title">Academic Profiles</h3>
              <p className="text-muted-foreground mb-6">
                Connect with me on academic and professional platforms.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/researcher" className="academic-button-secondary flex items-center gap-2">
                  <Github size={16} />
                  GitHub
                </a>
                <a href="https://linkedin.com/in/researcher" className="academic-button-secondary flex items-center gap-2">
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a href="https://scholar.google.com/citations?user=researcher" className="academic-button-secondary flex items-center gap-2">
                  <ExternalLink size={16} />
                  Google Scholar
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Index;
