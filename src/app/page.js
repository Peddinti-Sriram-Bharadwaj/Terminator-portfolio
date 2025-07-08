// src/app/page.js
"use client";

import { useState, useEffect } from 'react';
import { useLoading } from '../context/LoadingContext';
import T800Preloader from '../components/T800Preloader';
import TargetingOverlay from '../components/TargetingOverlay';
import FuelCell from '../components/FuelCell';
import Navbar from '../components/Navbar';
import data from '../../portfolioData.json';
import ProjectCard from '../components/ProjectCard';
import TechStack from '../components/TechStack';
import AnimatedSection from '../components/AnimatedSection';
import KineticWordsAnimation from '../components/KineticWordsAnimation';
import { FaLinkedin, FaGithub, FaKaggle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import SkynetOnline from '../components/SkynetOnline';
import { useKonamiCode } from '../hooks/useKonamiCode'; 
import GlitchedText from '../components/GlitchedText';
import SystemGauges from '../components/SystemGauges';
import ScanModal from '../components/ScanModal'; 

export default function Home() {
  const { isLoading, setIsLoading } = useLoading();
  const [target, setTarget] = useState(null);
  const [showSkynet, setShowSkynet] = useState(false);
  const [scannedProject, setScannedProject] = useState(null);

  // Activate the Konami Code listener
  useKonamiCode(() => {
    setShowSkynet(true);
    // Hide the Skynet message after 5 seconds
    setTimeout(() => setShowSkynet(false), 5000);
  });

  useEffect(() => {
    // This will hide the preloader after a set time.
    const timer = setTimeout(() => setIsLoading(false), 4000); // 4-second loading screen
    return () => clearTimeout(timer); // Cleanup the timer
  }, [setIsLoading]);

  // Handles the "Target Acquired" effect and scrolling
  const handleNavLinkClick = (targetId) => {
    setTarget(targetId.toUpperCase());
    setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      setTarget(null);
    }, 700); // Duration must match the overlay animation
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const accentColor = "text-amber-400";
  const hoverAccentColor = "hover:text-amber-300";

  return (
    <>
      <AnimatePresence>
        {isLoading && <T800Preloader />}
      </AnimatePresence>

      {/* Render the modal when a project is selected */}
      <AnimatePresence>
        {scannedProject && <ScanModal project={scannedProject} onClose={() => setScannedProject(null)} />}
      </AnimatePresence>

      {/* Conditionally render the Skynet component */}
      <AnimatePresence>
        {showSkynet && <SkynetOnline />}
      </AnimatePresence>
      
      <TargetingOverlay target={target} />
      <Navbar name={data.name} onNavLinkClick={handleNavLinkClick} />
      
      <motion.main 
        className="p-8 md:p-16 lg:p-24 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <AnimatedSection>
          <section id="home" className="relative text-center min-h-[250px] flex flex-col justify-center">
            <KineticWordsAnimation />
            <GlitchedText originalText={data.name} className="text-5xl font-bold mb-2" />
            <p className="text-xl text-gray-400 mb-6">{data.tagline}</p>
            <div className="flex justify-center gap-6 text-3xl text-gray-400">
              <a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer" className={hoverAccentColor}><FaLinkedin /></a>
              <a href={data.socials.github} target="_blank" rel="noopener noreferrer" className={hoverAccentColor}><FaGithub /></a>
              <a href={data.socials.kaggle} target="_blank" rel="noopener noreferrer" className={hoverAccentColor}><FaKaggle /></a>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="about">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300 leading-relaxed">{data.about}</p>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">My Tech Stack</h2>
            <TechStack skills={data.skills} />
          </section>
        </AnimatedSection>
        
        <AnimatedSection>
          <section id="projects">
            <h2 className="text-3xl font-bold mb-4">My Work</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {data.projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </motion.div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="reading">
            <h2 className="text-3xl font-bold mb-4">Currently Reading</h2>
            <div className="space-y-4">
              {data.readingList.map((book, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold">{book.title}</h3>
                  <p className="text-gray-400">by {book.author}</p>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>
        
        <AnimatedSection>
          <footer id="contact" className="text-center border-t border-gray-700 pt-10">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-400 mb-6">
              Feel free to reach out. My inbox is always open!
            </p>
            <a href={`mailto:${data.email}`} className={`${accentColor} ${hoverAccentColor} text-xl hover:underline`}>
              {data.email}
            </a>
            <div className="flex justify-center gap-6 text-2xl mt-8 text-gray-400">
              <a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer" className={hoverAccentColor}><FaLinkedin /></a>
              <a href={data.socials.github} target="_blank" rel="noopener noreferrer" className={hoverAccentColor}><FaGithub /></a>
              <a href={data.socials.kaggle} target="_blank" rel="noopener noreferrer" className={hoverAccentColor}><FaKaggle /></a>
            </div>
            <div className="mt-10 pt-6 border-t border-gray-800 flex justify-around max-w-sm mx-auto">
              <FuelCell />
              <SystemGauges />
            </div>
          </footer>
        </AnimatedSection>
      </motion.main>
    </>
  );
}