import { Mail, Download, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navigation from '../components/Navigation';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import heroImage from '../assets/hero-academic.jpg';
import profilePic from "../assets/profilepic.jpg";
import logoX from "../assets/Logo-Epolytechnique.jpeg";
import pasteurLogo from "../assets/logos/pasteur.png";

const Index = () => {
  const mlProjects = [
    {
      title: "Generative Larvae",
      description: "A year-long research project in collaboration with the Institut Pasteur, where my team and I developed Transformer and 3D CNN models from scratch to simulate and analyze the trajectories of genetically modified Drosophila larvae, quantifying behavioral differences relative to wild-type larvae.",
      keywords: ["Deep Learning", "Transformers", "3D CNN", "PyTorch"],
      pdfUrl: "https://arnaudob.github.io/pdfs/psc_eng.pdf",
      logo: pasteurLogo
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
    },
    {
      title: "ML Engineer Intern at GE Healthcare (06/2025 - 09/2025)",
      description: "I worked on breast MRI analysis as part of GE's BreView software. During the internship, I trained state-of-the-art models (nnU-Netv2, nnDetection) to segment breasts and detect lesions, and designed algorithms to identify the chest wall and nipples from segmentation masks. I also had the chance to bring everything together into a highly optimized C++ pipeline ready for production.",
      keywords: [
        "Medical Imaging",
        "Deep Learning",
        "Image Processing",
        "Mathematical Morphology",
        "nnU-Netv2",
        "nnDetection",
        "C++"
  ]
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
        className="relative min-h-[calc(100vh-4rem)] pt-20"
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
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-2 border-white/30 mb-4 object-cover"
            />
            <img
              src={logoX}
              alt="Ecole Polytechnique"
              className="w-20 h-20 rounded-lg border border-white/30 mb-6 object-contain bg-white"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
              Baptiste Arnaudo
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              I am a third-year (master's) student at Ecole Polytechnique with a passion for problem-solving
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
      <Section id="extracurricular" title="Extracurricular Activities">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="academic-card text-center">
            <h3 className="project-title">President of Binet IA (2024 - 2025)</h3>
            <p className="text-muted-foreground">
              President of Binet IA, Ecole Polytechnique's AI association, where I lead a team in organizing conferences, workshops, and hackathons.
            </p>
          </div>

          <div className="academic-card text-center">
            <h3 className="project-title">Executive Board Member of Unaite (2024 - 2025)</h3>
            <p className="text-muted-foreground">
              Executive board member of Unaite, France's leading AI confederation uniting the AI associations of top schools (Ecole Polytechnique, CentraleSupélec, HEC, Télécom Paris, La Sorbonne, and others). We organized hackathons, research papers contests, workshops, conferences, and launched <em>Ignaite</em>, an AI start-up accelerator, which we presented at the French National Assembly with sponsors from Google, Anthropic, and more to foster student and early-career innovation in AI.
            </p>
            <a
              href="https://unaite.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              Learn More
            </a>
          </div>

          <div className="academic-card text-center">
            <h3 className="project-title">X-Forum's Treasurer (2024 - 2025)</h3>
            <p className="text-muted-foreground">
              Treasurer of X-Forum, the association organizing the yearly annual career-fair, gathering 150+ companies and 2000+ students!
            </p>
            <a
              href="https://xforum.binets.fr/en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              Official Site
            </a>
          </div>

        </div>
      </Section>



      {/* Hobbies Section */}
    <Section id="hobbies" title="Hobbies & Interests">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div className="academic-card text-center">
          <h3 className="project-title">Philosophy (2024 - 2025)</h3>
          <p className="text-muted-foreground">
            Earned a Bachelor's degree in Philosophy with honors, pursued in parallel with my scientific studies out of a deep passion for knowledge.
          </p>
        </div>

        <div className="academic-card text-center">
          <h3 className="project-title">Basketball & Sports</h3>
          <p className="text-muted-foreground">
            I play center (even though deep down I know I'm really a small forward at heart) for my school's basketball team, competing against other schools from across the region! I also maintain a daily workout routine (lifting, calisthenics, running…) as I believe regular exercise is essential for both physical and mental well-being.
          </p>
        </div>

        <div className="academic-card text-center">
          <h3 className="project-title">Language Learning</h3>
          <p className="text-muted-foreground">
            I developed a strong interest in languages at the end of 2024, which led me to start studying Modern Standard Arabic independently (though with some struggle..!)
            <br /><br />
            أبحث عن شخص أتحدث معه بالعربية، فلا تتردد في التواصل معي إن أردت
            <br /><br />
            I also resumed studying Italian recently to reconnect with my old Italian roots...
          </p>
        </div>

      </div>
    </Section>


          {/* Education Section */}
    <Section id="education" title="Education" className="bg-gradient-to-b from-muted to-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Preparatory Classes */}
        <div className="academic-card">
          <h3 className="project-title">Preparatory Classes (MPSI → MP*) (2021 - 2023)</h3>
          <ul className="text-muted-foreground space-y-2">

            <li className="font-semibold text-black">Mathematics</li>
            <li>• Linear Algebra and Multilinear Algebra</li>
            <li>• Real Analysis (Asymptotics, Differential Calculus, Integration...)</li>
            <li>• Probability Theory and Statistics</li>
            <li>• Differential Equations (ODEs and PDEs)</li>
            <li>• Group, Ring, and Field Theory</li>
            <li>• Numerical Methods and Scientific Computing</li>

            <li className="font-semibold text-blue-800 mt-4">Physics</li>
            <li>• Classical Mechanics (Newtonian)</li>
            <li>• Quantum and Statistical Physics</li>
            <li>• Thermodynamics</li>
            <li>• Electromagnetism and Optics</li>

            <li className="font-semibold text-red-800 mt-4">Computer Science</li>
            <li>• Data Structures and Algorithms (Python and OCaml)</li>
            <li>• Automata and Complexity Theory</li>
          </ul>
        </div>

        {/* Ecole Polytechnique (Years 1 & 2) */}
        <div className="academic-card">
          <h3 className="project-title">Ecole Polytechnique (Years 1 & 2)</h3>
          <ul className="text-muted-foreground space-y-2">

            <li className="font-semibold text-black">Mathematics</li>
            <li>• Measure Theory</li>
            <li>• Statistics (Estimators, Introduction to Statistical Learning Theory...)</li>
            <li>• Markov Chains and Martingales</li>
            <li>• Convex Optimization and Control Theory</li>
            <li>• Complex Analysis and Differential Calculus</li>

            <li className="font-semibold text-blue-800 mt-4">Physics</li>
            <li>• Advanced Quantum Mechanics</li>

            <li className="font-semibold text-red-800 mt-4">Computer Science</li>
            <li>• Object-Oriented Programming in Java</li>
            <li>• Advanced Data Structures and Algorithms</li>
            <li>• Algorithms for Data Science</li>
          </ul>
        </div>

        {/* Ecole Polytechnique (Year 3) */}
        <div className="academic-card">
          <h3 className="project-title">Ecole Polytechnique (Year 3)</h3>
          <ul className="text-muted-foreground space-y-2">

            <li className="font-semibold text-black">Mathematics</li>
            <li>• Research Project (6 months)</li>
            <li>• Probability Theory for ML (Monte-Carlo and Generative Models)</li>
            <li>• Statistical Learning Theory</li>
            <li>• Statistical Processes</li>
            <li>• Algebraic Topology</li>
            <li>• Riemannian Geometry</li>
            <li>• Random Matrix Theory</li>

            <li className="font-semibold text-red-800 mt-4">Computer Science</li>
            <li>• Graph Deep Learning</li>
            <li>• Multimodal Generative AI</li>
          </ul>
        </div>

      </div>
    </Section>


      {/* CV Section */}
      <Section id="cv" title="Curriculum Vitae">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground mb-8 text-lg">
            Download my CV including research and professional experience.
          </p>
          <a
          href="/pdfs/CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center gap-3"
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
                I'm always interested in discussing research collaborations, academic opportunities, or innovative projects !
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-primary" />
                  <span>baptiste.arnaudo@polytechnique.edu</span>
                </div>
              </div>
            </div>
            
            <div className="academic-card">
              <h3 className="project-title">Academic Profiles</h3>
              <p className="text-muted-foreground mb-6">
                Connect with me !
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/ArnaudoB" className="academic-button-secondary flex items-center gap-2">
                  <FaGithub size={16} />
                  GitHub
                </a>
                <a href="https://linkedin.com/in/baptiste-arnaudo/" className="academic-button-secondary flex items-center gap-2">
                  <FaLinkedin size={16} />
                  LinkedIn
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
