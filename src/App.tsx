import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBug, FaCode, FaTools, FaGraduationCap, FaBriefcase, FaDownload } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useRef, useState } from 'react';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9]);

  const navLinks = [
    { title: "About", href: "#about" },
    { title: "Experience", href: "#experience" },
    { title: "Projects", href: "#projects" },
    { title: "Skills", href: "#skills" },
    { title: "Contact", href: "#contact" }
  ];

  const skills = [
    "Test Automation", "Playwright", "Cypress", "JMeter",
    "API Testing", "Performance Testing", "Test Planning",
    "JIRA", "Agile Methodologies", "Git",
    "Java", "JavaScript", "Postman"
  ];

  const experience = [
    {
      title: "Software Quality Assurance Engineer",
      company: "IT22 B.V.",
      period: "2023 - Present",
      responsibilities: [
        "Skilled in using tools like Postman for API validation and testing",
        "Reduced regression testing time by 60% through test automation",
        "Created and executed detailed test plans, test cases, and test scripts for various projects.",
        "Developed and maintained test frameworks using Playwright and Core Java"
      ]
    },
    {
      title: "QA Engineer",
      company: "Ropstam Solutions",
      period: "2022 - 2023",
      responsibilities: [
        "Developed and executed test plans for web applications",
        "Performed API testing using Postman and Newman",
        "Conducted performance testing using JMeter",
        "Collaborated with developers to improve code quality"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Capital University of Science & Technology,Islamabad",
      // year: "2019",
      details: ""
    },
    {
      degree: "ICS",
      institution: "Chenab College",
      // year: "2020",
      // details: "Foundation Level Certification"
    }
  ];

  const projects = [
    {
      title: "Fortes Energy Systems",
      description: "Developed and maintained an end-to-end test automation framework using Selenium and TestNG for a major e-commerce platform.",
      tech: ["Playwright", "Java", "TestNG"]
    },
    {
      title: "ERP System",
      description: "Created comprehensive API testing suite using Postman and Newman for RESTful services.",
      tech: ["Postman", "JavaScript"]
    },
    {
      title: "E-Commerce Platform",
      description: "Conducted load and stress testing for a high-traffic web application using JMeter.",
      tech: ["JMeter", "Performance Testing", "Analysis"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <div className="min-h-screen" ref={targetRef}>
      {/* Navbar */}
      <nav className="navbar fixed w-full z-50 px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white text-2xl font-bold"
          >
            MU
          </motion.div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Desktop Navigation */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  className={`md:flex items-center gap-8 ${isNavOpen ? 'block absolute top-full left-0 right-0 bg-gray-900 p-4' : 'hidden md:flex'}`}
>
  {navLinks.map((link, index) => (
    <motion.a
      key={index}
      href={link.href}
      className="nav-link"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {link.title}
    </motion.a>
  ))}
  <motion.a
    href="https://drive.google.com/file/d/1zDOxdeBKHbuAjNEr200pOs42aPCFFMC8/view?usp=sharing"
    target="_blank" // Open in new tab
    rel="noopener noreferrer" // Security best practice
    className="download-btn"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <FaDownload />
    Download CV
  </motion.a>
</motion.div>
        </div>
      </nav>

      {/* Header/Hero Section */}
      <header className="hero-gradient text-white py-32 relative pt-40">
        <motion.div
          style={{ opacity, scale }}
          className="container mx-auto px-4 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Muhammad Usman
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              QA Engineer
            </motion.h2>
            <motion.p 
              className="text-xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Passionate about ensuring software quality through comprehensive testing strategies
              and automation solutions. Experienced in building robust test frameworks and implementing
              efficient QA processes.
            </motion.p>
            <motion.div 
              className="flex justify-center gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {/* <motion.a 
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="https://github.com/yourusername" 
                className="text-white hover:text-blue-200"
              >
                <FaGithub size={32} />
              </motion.a> */}
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="https://linkedin.com/in/usmanchaudhrry" 
                className="text-white hover:text-blue-200"
              >
                <FaLinkedin size={32} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="mailto:usmanchaudhrry@gmail.com" 
                className="text-white hover:text-blue-200"
              >
                <MdEmail size={32} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </header>

      {/* Experience Section */}
      <section id="experience" className="py-32 mesh-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="section-title text-center flex items-center justify-center gap-2 mb-16">
              <FaBriefcase className="text-blue-600" />
              Professional Experience
            </h2>
            <div className="max-w-4xl mx-auto">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="mb-8 glass-card rounded-lg p-8 shadow-xl"
                >
                  <h3 className="text-2xl font-semibold text-blue-600">{exp.title}</h3>
                  <p className="text-white-600 mb-4">{exp.company} | {exp.period}</p>
                  <ul className="list-disc list-inside text-white-700 space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

     {/* Education Section */}
<section id="education" className="py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
  <div className="container mx-auto px-4">
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="section-title text-center flex items-center justify-center gap-2 mb-16">
        <FaGraduationCap className="text-blue-600" />
        Education & Certifications
      </h2>
      <div className="max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="mb-8 bg-gray-800 rounded-lg p-8 shadow-xl" // Dark background
          >
            <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3> {/* White text */}
            {/* <p className="text-white mb-4">{edu.institution} | {edu.year}</p> White text */}
            <p className="text-white">{edu.details}</p> {/* White text */}
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-gradient-to-tr from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="section-title text-center text-white mb-16">Skills & Expertise</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className="skill-badge animate-glow"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 projects-background relative">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="section-title text-center text-white mb-16">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="project-card rounded-lg p-8 shadow-xl"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">{project.title}</h3>
                  <p className="text-gray-700 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* QA Tools Background Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-20 left-10 transform -rotate-12">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <FaCode className="w-32 h-32 text-blue-300" />
            </motion.div>
          </div>
          <div className="absolute top-40 right-20 transform rotate-12">
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <FaBug className="w-24 h-24 text-blue-300" />
            </motion.div>
          </div>
          <div className="absolute bottom-20 left-1/4 transform -rotate-45">
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <FaTools className="w-40 h-40 text-blue-300" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gradient-to-tr from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="section-title text-center text-white mb-16">What I Do</h2>
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="glass-card rounded-lg p-8 text-center"
              >
                <motion.div 
                  className="animate-float"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaBug className="w-16 h-16 mx-auto text-blue-400 mb-6" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4">Test Automation</h3>
                <p className="text-gray-300">
                  Building robust automated test suites for web and mobile applications
                </p>
              </motion.div>
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="glass-card rounded-lg p-8 text-center"
              >
                <motion.div 
                  className="animate-float"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaCode className="w-16 h-16 mx-auto text-blue-400 mb-6" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4">API Testing</h3>
                <p className="text-gray-300">
                  Comprehensive testing of RESTful APIs and microservices
                </p>
              </motion.div>
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="glass-card rounded-lg p-8 text-center"
              >
                <motion.div 
                  className="animate-float"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaTools className="w-16 h-16 mx-auto text-blue-400 mb-6" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4">Performance Testing</h3>
                <p className="text-gray-300">
                  Load testing and performance optimization strategies
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg">© {new Date().getFullYear()} Muhammad Usman. All rights reserved.</p>
            <p className="mt-4">
              <a href="mailto:usmanchaudhrry@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              usmanchaudhrry@gmail.com
              </a>
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;