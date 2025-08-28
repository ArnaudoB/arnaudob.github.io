import { Mail, MapPin, Phone, Download, Github, Linkedin, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import heroImage from '../assets/hero-academic.jpg';
import profilePic from "../assets/profilepic.jpg";
import logoX from "../assets/Logo-Epolytechnique.jpeg";

const Index = () => {
  const mlProjects = [
    {
      title: "Generative Larvae",
      description: "A year-long research project in collaboration with the Institut Pasteur, where my team and I developed Transformer and 3D CNN models from scratch to simulate and analyze the trajectories of genetically modified Drosophila larvae, quantifying behavioral differences relative to wild-type larvae.",
      keywords: ["Deep Learning", "Transformers", "3D CNN", "PyTorch"],
      pdfUrl: "https://arnaudob.github.io/pdfs/psc_eng.pdf"
    },
    {
      title: "ResQwen : A Multimodal Model for Predicting YouTube Video Engagement",
      description: "School project tackling the prediction of YouTube engagement for short Bengali films. ResQwen combines a ResNet-50 for thumbnail analysis, a Qwen3-0.6B language model for title encoding, and auxiliary features (channel metadata, upload time) into a unified multimodal architecture. The work also explores custom loss functions tailored to view-count prediction as well..!",
      keywords: [
      "Multimodal Learning",
      "ResNet-50",
      "Qwen3-0.6B",
      "Deep Learning",
      "Fine-tuning"
      ],
      codeUrl: "https://github.com/ArnaudoB/Predict-YouTube-Views",
      pdfUrl: "https://arnaudob.github.io/pdfs/ResQwen.pdf"
    }
  ];

  const mathProjects = [
    {
      title: "Number of solutions of polynomial equations over finite fields",
      description: "Memo in which I present how Fourier analysis over Abelian groups can help establish results on the number of solutions of polynomial equations over finite fields, with an application to the Fermat-Wiles equation !",
      keywords: ["Algebra", "Group Theory"],
      pdfUrl: "https://arnaudob.github.io/pdfs/memo_finite_fields.pdf"
    },
    {
      title: "Solving PDEs with Markov Chains",
      description: "Short notebook in which I explain (and prove) how Markov Chains can help approximate solutions to certain PDEs, with an application to the Laplace equation and a more complex (Helmholtz-like) equation as well",
      keywords: ["Markov Chains", "PDEs", "Python", "NumPy"],
      codeUrl: "https://github.com/ArnaudoB/Small-Project-Solving-PDEs-with-markov-chains",
    }
  ];

  const teachingExperience = [
    {
      title: "Logic and reasoning methods course for incoming preparatory classes students",
      description: "Comprehensive logic and reasoning methods course with 50 exercises and solutions I wrote to help incoming preparatory classes students",
      keywords: ["Logic", "Reasoning methods"],
      pdfUrl: "https://arnaudob.github.io/pdfs/logic_course.pdf"
    },
    {
      title: "Exercises on the Symmetric Group",
      description: "Collection of exercises on the Symmetric Group (with solutions), intended to help students prepare for the Ecole Polytechnique entrance mathematics exam.",
      keywords: ["Algebra", "Symmetric Group"],
      pdfUrl: "https://arnaudob.github.io/pdfs/symmetric_group.pdf"
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
            <img
              src={profilePic}
              alt="Baptiste Arnaudo"
              className="w-32 h-32 rounded-full border-2 border-white/30 mb-4 object-cover"
            />
            <img
              src={logoX}
              alt="École Polytechnique"
              className="w-16 h-16 rounded-lg border border-white/30 mb-6 object-contain bg-white"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
              Baptiste Arnaudo
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              I am a third-year student at École Polytechnique with a passion for problem-solving
              and machine learning research, particularly theoretical topics such as
              Statistical Learning Theory, Geometric and Topological Deep Learning, and
              Training Dynamics. I am also seeking a six-month research internship
              starting in February 2026 !
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
      <Section id="ml-research" title="Machine Learning Research and Projects" className="bg-gradient-to-b from-muted to-background">
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

      {/* Extracurricular activities */}
      # TODO : add links to the websites, buttons that point to these links, and put extracurricular on top of the website
      <Section id="extracurricular" title="Extracurricular Activities">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="academic-card text-center">
          <h3 className="project-title">President of Binet IA (2024 - 2025)</h3>
          <p className="text-muted-foreground">
            President of Binet IA, Ecole Polytechnique’s AI association, where I lead a team in organizing conferences, workshops, and hackathons.
          </p>
        </div>
        <div className="academic-card text-center">
          <h3 className="project-title">Executive Board Member of Unaite (2024 - 2025)</h3>
          <p className="text-muted-foreground">
            Executive board member of Unaite, France’s leading AI confederation uniting the AI associations of top schools (Ecole Polytechnique, CentraleSupélec, HEC, Télécom Paris, La Sorbonne, and others). We organized hackathons, research papers contests, workshops, conferences, and launched <em>Ignaite</em>, an AI start-up accelerator, which we presented at the French National Assembly with sponsors from Google, Anthropic, and more to foster student and early-career innovation in AI.
          </p>
          </div>
          <div className="academic-card text-center">
            <h3 className="project-title">X-Forum's Treasurer (2024 - 2025)</h3>
            <p className="text-muted-foreground"> Treasurer of X-Forum, the association organizing the yearly annual career-fair, gathering 200+ companies and 1000+ students !</p>
          </div>
        </div>
      </Section>


      {/* Hobbies Section */}
      <Section id="hobbies" title="Hobbies & Interests">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="academic-card text-center">
            <h3 className="project-title">Philosophy (2024 - 2025)</h3>
            <p className="text-muted-foreground">
              Completed a Bachelor's degree in Philosophy with honors, pursued in parallel with my scientific studies out of a genuine passion for knowledge.
            </p>
          </div>

          <div className="academic-card text-center">
            <h3 className="project-title">Basket-Ball</h3>
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
