import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBug, FaCode, FaTools, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useRef } from 'react';

function App() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9]);

  const skills = [
    "Test Automation", "Selenium", "Cypress", "JMeter",
    "API Testing", "Performance Testing", "Test Planning",
    "JIRA", "Agile Methodologies", "CI/CD", "Git",
    "Python", "JavaScript", "SQL", "Postman"
  ];

  const experience = [
    {
      title: "QA Engineer",
      company: "IT22 B.V.",
      period: "2023 - Present",
      responsibilities: [
        "Lead a team of 5 QA engineers in implementing automated testing solutions",
        "Reduced regression testing time by 60% through test automation",
        "Implemented CI/CD pipeline for automated testing",
        "Developed and maintained test frameworks using Selenium and Cypress"
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
      year: "2024",
      details: ""
    },
    {
      degree: "ICS",
      institution: "Chenab College",
      year: "2020",
      details: ""
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
      tech: ["Postman", "Newman", "JavaScript", "Jenkins"]
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
      {/* Header/Hero Section */}
      <header className="hero-gradient text-white py-32 relative">
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
              Senior QA Engineer
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
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="https://github.com/yourusername" 
                className="text-white hover:text-blue-200"
              >
                <FaGithub size={32} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="https://linkedin.com/in/yourusername" 
                className="text-white hover:text-blue-200"
              >
                <FaLinkedin size={32} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="mailto:your.email@example.com" 
                className="text-white hover:text-blue-200"
              >
                <MdEmail size={32} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </header>

      {/* Experience Section */}
      <section className="py-32 mesh-gradient">
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
                  <p className="text-gray-600 mb-4">{exp.company} | {exp.period}</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
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
      <section className="py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
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
                  className="mb-8 gradient-border rounded-lg p-8 shadow-xl"
                >
                  <h3 className="text-2xl font-semibold text-blue-600">{edu.degree}</h3>
                  <p className="text-gray-600 mb-4">{edu.institution} | {edu.year}</p>
                  <p className="text-gray-700">{edu.details}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 bg-gradient-to-tr from-blue-900 to-indigo-900 text-white">
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
                  className="skill-badge bg-white/10 text-white border border-white/20"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 projects-background relative">
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
                  <p className="text-white mb-6">{project.description}</p>
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
      <section className="py-32 bg-gradient-to-tr from-gray-900 to-blue-900 text-white">
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
                <p className="text-black">
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
                <p className="text-black">
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
                <p className="text-black">
                  Load testing and performance optimization strategies
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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