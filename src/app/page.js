'use client';

import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

// Custom hook for scroll animations
function useScrollAnimation() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);
  
  return { ref, controls, inView };
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroProgress, [0, 1], [0, -60]);
  const heroOpacity = useTransform(heroProgress, [0, 1], [1, 0.6]);
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const projectDetails = {
    1: {
      title: "Employee Gate Pass",
      description: "A comprehensive employee tracking system designed to monitor employee login/logout times and calculate working hours. Features include real-time attendance tracking, automated report generation, and admin dashboard for managing employee data."
    },
    2: {
      title: "Automated Local Grievance System",
      description: "A digital platform for citizens to file complaints about local issues like street garbage, road problems, and civic amenities. The system automatically routes complaints to appropriate local officers and tracks resolution status."
    },
    3: {
      title: "OCR and NLP-Based Ingredient Analysis",
      description: "An AI-powered mobile application that scans food packaging labels and analyzes ingredients using OCR and NLP technologies. The system provides health insights, allergy warnings, and personalized dietary recommendations."
    }
  };

  return (
    <>
      <div className="animated-bg"></div>
      {/* Scroll progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50" style={{ scaleX: progressScaleX }} />
      <main className="min-h-screen gradient-bg relative">
        <div className="max-w-5xl mx-auto px-6 py-16 relative z-10">
          {/* Header Section */}
          <motion.div
            ref={heroRef}
            className="flex items-center gap-8 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ y: heroY, opacity: heroOpacity }}
          >
            {/* Profile Image */}
            <motion.div
              className="w-52 h-52 rounded-2xl overflow-hidden  p-1 flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="/Image4.jpg"
                  alt="Srujan K R"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Name and Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Srujan K R
              </motion.h1>
              <motion.p
                className="text-lg text-gray-300 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                I'm a fresher pursued my maters's in computer application, where I've developed strong skills in software development. 
                I'm job-ready and eager to bring my fresh perspective and technical knowledge to innovative projects, contributing effectively to dynamic team. 
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Contact Information Bar */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          >
            <motion.div
              className="rounded-2xl p-6 border"
              whileHover={{ scale: 1.02, boxShadow: "0 0 0 1px rgba(100, 116, 139, 0.35), 0 10px 35px rgba(148, 163, 184, 0.25)" }}
              transition={{ duration: 0.3 }}
              style={{ background: '#111111', borderColor: '#2A2A2A' }}
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                {/* Email */}
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-6 h-6 text-gray-600 dark:text-gray-400"
                    // whileHover={{ rotate: 360 }}
                    // transition={{ duration: 0.5 }}
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </motion.div>
                  <a href="mailto:srujankr1472@gmail.com" className="text-blue-500 font-medium text-2xl hover:underline">srujankr1472@gmail.com</a>
                </motion.div>

                {/* Phone */}
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-6 h-6 text-gray-600 dark:text-gray-400"
                    // whileHover={{ rotate: 360 }}
                    // transition={{ duration: 0.5 }}
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </motion.div>
                  <span className="text-gray-800 dark:text-gray-200 font-medium text-2xl">9141060525</span>
                </motion.div>

                {/* Date of Birth */}
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-6 h-6 text-gray-600 dark:text-gray-400"
                    // whileHover={{ rotate: 360 }}
                    // transition={{ duration: 0.5 }}
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                    </svg>
                  </motion.div>
                  <span className="text-gray-800 dark:text-gray-200 font-medium text-2xl">14, November 2002</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            className="mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.h2
              className="text-5xl font-bold text-white mb-8"
              variants={fadeInUp}
            >
              Education
            </motion.h2>

            <motion.div className="space-y-6" variants={staggerContainer}>
              {/* Master's Degree */}
              <motion.div
                className="rounded-2xl p-8 border transition-colors duration-300"
                variants={scaleIn}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 0 1px rgba(100, 116, 139, 0.35), 0 10px 35px rgba(148, 163, 184, 0.25)",
                  borderColor: "rgba(148, 163, 184, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                style={{ background: '#111111', borderColor: '#2A2A2A', boxShadow: '0 6px 18px rgba(0, 0, 0, 0.45)' }}
              >
                <motion.div className="flex flex-col md:flex-row md:items-center md:justify-between" variants={staggerContainer}>
                  <motion.div className="mb-4 md:mb-0" variants={staggerContainer}>
                    <motion.h3
                      className="text-3xl font-bold text-white mb-2"
                      variants={fadeInUp}
                    >
                      Master of Computer Applications
                    </motion.h3>
                    <motion.p
                      className="text-2xl text-gray-300 mb-1"
                      variants={fadeInUp}
                    >
                      JSS Academy of Technical Education, Bengaluru
                    </motion.p>
                    <motion.p
                      className="text-gray-400"
                      variants={fadeInUp}
                    >
                      February 2024 - August 2025(waiting for result)
                    </motion.p>
                  </motion.div>
                  <motion.div className="flex flex-col items-start md:items-end space-y-2" variants={staggerContainer}>
                    <motion.span
                      className="bg-green-400/40 backdrop-blur-lg  text-white px-4 py-2 rounded-full text-sm font-semibold"
                      variants={scaleIn}
                      whileHover={{ scale: 1.1, backgroundColor: "#059669" }}
                    >
                      CGPA: 8.17
                    </motion.span>
                    <motion.span
                      className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                      variants={scaleIn}
                      whileHover={{ scale: 1.1 }}
                    >
                      Completed
                    </motion.span>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Bachelor's Degree */}
              <motion.div
                className="rounded-2xl p-8 border transition-colors duration-300"
                variants={scaleIn}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 0 1px rgba(100, 116, 139, 0.35), 0 10px 35px rgba(148, 163, 184, 0.25)",
                  borderColor: "rgba(148, 163, 184, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                style={{ background: '#111111', borderColor: '#2A2A2A', boxShadow: '0 6px 18px rgba(0, 0, 0, 0.45)' }}
              >
                <motion.div className="flex flex-col md:flex-row md:items-center md:justify-between" variants={staggerContainer}>
                  <motion.div className="mb-4 md:mb-0" variants={staggerContainer}>
                    <motion.h3
                      className="text-3xl font-bold text-white mb-2"
                      variants={fadeInUp}
                    >
                      Bachelor of Science
                    </motion.h3>
                    <motion.p
                      className="text-2xl text-gray-300 mb-1"
                      variants={fadeInUp}
                    >
                      Mandya University, Mandya
                    </motion.p>
                    <motion.p
                      className="text-gray-400"
                      variants={fadeInUp}
                    >
                      August 2020 - August 2023
                    </motion.p>
                  </motion.div>
                  <motion.div className="flex flex-col items-start md:items-end space-y-2" variants={staggerContainer}>
                    <motion.span
                      className="bg-green-400/40 backdrop-blur-lg text-white px-4 py-2 rounded-full text-sm font-semibold"
                      variants={scaleIn}
                      whileHover={{ scale: 1.1 }}
                    >
                      CGPA: 6.86
                    </motion.span>
                    <motion.span
                      className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                      variants={scaleIn}
                      whileHover={{ scale: 1.1, backgroundColor: "#4b5563" }}
                    >
                      Completed
                    </motion.span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>


          {/* Skills Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.0, ease: "easeOut" }}
          >
            <motion.h2
              className="text-5xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.2 }}
            >
              Skills
            </motion.h2>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
            >
              {/* HTML */}
              <motion.div
                className="bg-[#111111] border border-white-700 text-white px-6 py-3 rounded-full text-lg font-medium"
                variants={scaleIn}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "bg-[#333333]"
                }}
                whileTap={{ scale: 0.95 }}
              >
                HTML
              </motion.div>

              {/* Tailwind CSS */}
              <motion.div
                className="bg-[#111111] border border-white-700 text-white px-6 py-3 rounded-full text-lg font-medium"
                variants={scaleIn}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "bg-[#333333]"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Tailwind CSS
              </motion.div>

              {/* SQL */}
              <motion.div
                className="bg-[#111111] border border-white-700 text-white px-6 py-3 rounded-full text-lg font-medium"
                variants={scaleIn}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "bg-[#333333]"
                }}
                whileTap={{ scale: 0.95 }}
              >
                SQL
              </motion.div>

              {/* PostgreSQL */}
              <motion.div
                className="bg-[#111111] border border-white-700 text-white px-6 py-3 rounded-full text-lg font-medium"
                variants={scaleIn}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "bg-[#333333]"
                }}
                whileTap={{ scale: 0.95 }}
              >
                PostgreSQL
              </motion.div>

              {/* Next.js */}
              <motion.div
                className="bg-[#111111] border border-white-700 text-white px-6 py-3 rounded-full text-lg font-medium"
                variants={scaleIn}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "bg-[#333333]"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Next.js
              </motion.div>

              {/* Python */}
              <motion.div
                className="bg-[#111111] border border-white-700 text-white px-6 py-3 rounded-full text-lg font-medium"
                variants={scaleIn}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "bg-[#333333]"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Python
              </motion.div>

              {/* React */}
              <motion.div
                className="bg-[#111111] border border-white-700 text-white px-6 py-3 rounded-full text-lg font-medium"
                variants={scaleIn}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "bg-[#333333]"
                }}
                whileTap={{ scale: 0.95 }}
              >
                React
              </motion.div>

              {/* JavaScript */}
              <motion.div
                className="bg-[#111111] border border-white-700 text-white px-6 py-3 rounded-full text-lg font-medium"
                variants={scaleIn}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "bg-[#333333]"
                }}
                whileTap={{ scale: 0.95 }}
              >
                JavaScript
              </motion.div>

              {/* Node.js */}
              <motion.div
                className="bg-[#111111] border border-white-700 text-white px-6 py-3 rounded-full text-lg font-medium"
                variants={scaleIn}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "bg-[#333333]"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Node.js
              </motion.div>

              {/* TypeScript */}

            </motion.div>
          </motion.div>

          {/* Personal Projects Section */}
          <motion.div
            className="mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.h2
              className="text-5xl font-bold text-white mb-8"
              variants={fadeInUp}
            >
              Personal Projects
            </motion.h2>

            <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16" variants={staggerContainer}>
              {/* Employee Gate Pass */}
              <motion.div
                className="rounded-2xl p-8 cursor-pointer group relative"
                variants={fadeInUp}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 0 0 1px rgba(100, 116, 139, 0.35), 0 10px 35px rgba(148, 163, 184, 0.25)",
                  borderColor: "rgba(148, 163, 184, 0.4)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('YOUR_GITHUB_LINK_1', '_blank')}
                style={{
                  background: "#111111", /* dark grey */
                  border: "1px solid #2A2A2A",
                  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.45)",
                  minHeight: "380px"
                }}
              >
                {/* Hover Popup (description) */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                  <div className="bg-gray-500 text-gray-200 border border-gray-700 rounded-2xl p-6 max-w-lg mx-6 shadow-2xl">
                    <p className="text-lg leading-relaxed">{projectDetails[1].description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">Employee Gate Pass</h3>
                  <motion.div
                    className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ rotate: 45, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.div>
                </div>
                <div className="text-gray-400 text-base mb-6 leading-relaxed text-lg">
                  Employee tracking system for login/logout and working hours monitoring with comprehensive reporting features.
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-[#333333] text-white-400 px-3 py-2 rounded-full text-md font-medium ">HTML</span>
                  <span className="bg-[#333333] text-white-400 px-3 py-2 rounded-full text-md font-medium ">CSS</span>
                  <span className="bg-[#333333] text-white-400 px-3 py-2 rounded-full text-md font-medium ">JS</span>
                  <span className="bg-[#333333] text-white-400 px-3 py-2 rounded-full text-md font-medium ">PHP</span>
                  <span className="bg-[#333333] text-white-400 px-3 py-2 rounded-full text-md font-medium ">MySQL</span>
                </div>
              </motion.div>

              {/* Automated Local Grievance System */}
              <motion.div
                className="rounded-2xl p-8 cursor-pointer group relative"
                variants={fadeInUp}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 0 0 1px rgba(100, 116, 139, 0.35), 0 10px 35px rgba(148, 163, 184, 0.25)",
                  borderColor: "rgba(148, 163, 184, 0.4)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://github.com/srujan1472/Local-Grievance-Management-System', '_blank')}
                style={{
                  background: "#111111", /* dark grey */
                  border: "1px solid #2A2A2A",
                  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.45)",
                  minHeight: "380px"
                }}
              >
                {/* Hover Popup (description) */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                  <div className="bg-gray-500 text-gray-200 border border-gray-700 rounded-2xl p-6 max-w-lg mx-6 shadow-2xl">
                    <p className="text-lg leading-relaxed">{projectDetails[2].description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">Automated Local Grievance System</h3>
                  <motion.div
                    className="text-gray-400 group-hover:text-green-400 transition-colors duration-300"
                    whileHover={{ rotate: 45, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.div>
                </div>
                <div className="text-gray-400 text-base mb-6 leading-relaxed text-lg">
                  Complaint filing system for local officers about street issues and garbage with automated routing and tracking.
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-[#333333] text-white px-3 py-2 rounded-full text-md font-medium ">Next.js</span>
                  <span className="bg-[#333333] text-white px-3 py-2 rounded-full text-md font-medium ">Prisma</span>
                  <span className="bg-[#333333] text-white px-3 py-2 rounded-full text-md font-medium ">Next Auth</span>
                  <span className="bg-[#333333] text-white px-3 py-2 rounded-full text-md font-medium ">PostgreSQL</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Third Project - Full Width */}
            <motion.div
              className="mt-8 w-[48%] my-2 rounded-2xl p-8 cursor-pointer group relative"
              variants={fadeInUp}
              whileHover={{
                scale: 1.01,
                y: -3,
                boxShadow: "0 0 0 1px rgba(100, 116, 139, 0.35), 0 10px 35px rgba(148, 163, 184, 0.25)",
                borderColor: "rgba(148, 163, 184, 0.4)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.99 }}
              onClick={() => window.open('https://github.com/srujan1472/ML-Project', '_blank')}
              style={{
                background: "#111111", /* dark grey */
                border: "1px solid #2A2A2A",
                boxShadow: "0 6px 18px rgba(0, 0, 0, 0.45)",
                minHeight: "380px"
              }}
            >
              {/* Hover Popup (description) */}
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                <div className="bg-gray-500 text-gray-200 border border-gray-700 rounded-2xl p-6 max-w-2xl mx-6 shadow-2xl">
                  <p className="text-lg leading-relaxed">{projectDetails[3].description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">OCR and NLP-Based Ingredient Analysis</h3>
                <motion.div
                  className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300"
                  whileHover={{ rotate: 45, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.div>
              </div>
              <div className="text-gray-400 text-base mb-6 leading-relaxed max-w-4xl text-lg">
                Food ingredient scanner with health analysis and consumer suggestions using advanced OCR and NLP technologies for comprehensive ingredient analysis.
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="bg-[#333333] text-white px-3 py-2 rounded-full text-md font-medium ">OCR</span>
                <span className="bg-[#333333] text-white px-3 py-2 rounded-full text-md font-medium ">NLP</span>
                <span className="bg-[#333333] text-white px-3 py-2 rounded-full text-md font-medium ">Python</span>
                <span className="bg-[#333333] text-white px-3 py-2 rounded-full text-md font-medium ">AI/ML</span>
              </div>
            </motion.div>

            {/* Removed framer-motion modal popup for performance */}

            {/* Instructions for adding GitHub links */}

          </motion.div>

          {/* Work Experience Section */}
          <motion.div
            className="mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.h2
              className="text-5xl font-bold text-white mb-8"
              variants={fadeInUp}
            >
              Work Experience
            </motion.h2>

            <motion.div className="space-y-6" variants={staggerContainer}>
              {/* Full Stack Web Development */}
              <motion.div
                className="rounded-2xl p-8 border transition-colors duration-300"
                variants={scaleIn}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 0 1px rgba(100, 116, 139, 0.35), 0 10px 35px rgba(148, 163, 184, 0.25)",
                  borderColor: "rgba(148, 163, 184, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                style={{ background: '#111111', borderColor: '#2A2A2A', boxShadow: '0 6px 18px rgba(0, 0, 0, 0.45)' }}
              >
                <motion.div className="flex flex-col md:flex-row md:items-center md:justify-between" variants={staggerContainer}>
                  <motion.div className="mb-4 md:mb-0" variants={staggerContainer}>
                    <motion.h3
                      className="text-3xl font-bold text-white mb-2"
                      variants={fadeInUp}
                    >
                      Full Stack Web Development
                    </motion.h3>
                    <motion.p
                      className="text-2xl text-gray-300 mb-1"
                      variants={fadeInUp}
                    >
                      Dotch Endeavours
                    </motion.p>
                    <motion.p
                      className="text-gray-400 italic"
                      variants={fadeInUp}
                    >
                      November 2024 - January 2025
                    </motion.p>
                    <motion.div
                      className="mt-4"
                      variants={fadeInUp}
                    >
                      <p className="text-gray-400 italic mb-2">Achievements/Tasks</p>
                      <p className="text-gray-300 ml-4">
                        - Here, we learned how to develop web pages and backend using HTML, PHP, and MySQL, ensuring a dynamic and responsive user experience.
                      </p>
                    </motion.div>
                  </motion.div>
                  <motion.div className="flex flex-col items-start md:items-end space-y-2" variants={staggerContainer}>
                    <motion.span
                      className="bg-green-400/40 backdrop-blur-lg text-white px-4 py-2 rounded-full text-sm font-semibold"
                      variants={scaleIn}
                      whileHover={{ scale: 1.1, backgroundColor: "#059669" }}
                    >
                      Completed
                    </motion.span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Strengths Section */}
          <motion.div
            className="mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.h2
              className="text-5xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 9.8 }}
            >
              Strengths
            </motion.h2>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={staggerContainer}
            >
              <motion.div
                className="bg-[#111111] border border-gray-700 mr-2 text-white px-6 py-3 rounded-full text-lg font-medium"
                variants={scaleIn}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "[bg-#111111]"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Problem-Solving Skills
              </motion.div>

              <motion.div
                className="bg-[#111111] border border-gray-700 mr-2 ml-2 text-white px-6 py-3 rounded-full text-lg font-medium"
                variants={scaleIn}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "[bg-#111111]"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Attention to Detail
              </motion.div>

              <motion.div
                className="bg-[#111111] border border-gray-700 mr-2 ml-2 text-white px-6 py-3 rounded-full text-lg font-medium"
                variants={scaleIn}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "[bg-#111111]"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Adaptability
              </motion.div>

              <motion.div
                className="bg-[#111111] border border-gray-700 mr-2 ml-2 text-white px-6 py-3 rounded-full text-lg font-medium"
                variants={scaleIn}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "[bg-#111111]"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Time Management
              </motion.div>

            </motion.div>
          </motion.div>

          {/* Languages Section */}
          <motion.div
            className="mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.h2
              className="text-5xl font-bold text-white mb-8"
              variants={fadeInUp}
            >
              Languages
            </motion.h2>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={staggerContainer}>
              <motion.div
                variants={fadeInUp}
              >
                <div className="text-2xl text-white font-semibold mb-2">Kannada</div>
                <div className="text-xl text-gray-400 italic">Full Professional Proficiency</div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
              >
                <div className="text-2xl text-white font-semibold mb-2">English</div>
                <div className="text-xl text-gray-400 italic">Full Professional Proficiency</div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
              >
                <div className="text-2xl text-white font-semibold mb-2">Hindi</div>
                <div className="text-xl text-gray-400 italic">Limited Working Proficiency</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Interests Section */}
          <motion.div
            className="mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.h2
              className="text-5xl font-bold text-white mb-8"
              variants={fadeInUp}
            >
              Interests
            </motion.h2>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={staggerContainer}
            >
              <motion.div
                className="bg-[#111111] border border-gray-700 mr-2 text-white px-6 py-3 rounded-full text-lg font-medium"
                variants={scaleIn}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "bg-[#333333]",
                  
                }}
                whileTap={{ scale: 0.95 }}
              >
                Technology Trends
              </motion.div>

              <motion.div
                className="bg-[#111111] border border-gray-700 ml-2 text-white px-6 py-3 rounded-full text-lg font-medium"
                variants={scaleIn}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "[bg-#333333]",
                  
                }}
                whileTap={{ scale: 0.95 }}
              >
                Working with IoT Devices / Arduino
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
        
        {/* Footer Section */}
        <footer className="py-6 border-t border-gray-800">
          <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
            <div className="text-gray-400">
              © {new Date().getFullYear()} Srujan K R
            </div>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </motion.button>
          </div>
        </footer>
      </main>
    </>
  );
}