'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const overlayRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(prev => {
      const isOpening = !prev;

      if (isOpening) {
        // Animate circle reveal
        gsap.fromTo(
          overlayRef.current,
          { clipPath: 'circle(0% at 90% 5%)' },
          {
            clipPath: 'circle(150% at 50% 50%)',
            duration: 0.6,
            ease: 'power2.out',
          }
        );
      } else {
        // Animate circle hide
        gsap.to(overlayRef.current, {
          clipPath: 'circle(0% at 90% 5%)',
          duration: 0.4,
          ease: 'power1.inOut',
        });
      }

      return isOpening;
    });
  };

  const linkClasses = (path) =>
    `link ${pathname === path ? 'active-link' : ''}`;

  return (
    <nav className="navbar p-4 flex justify-between items-center relative">
      <Link
        className={`${linkClasses('/')} logo text-l font-bold flex items-center gap-2`}
        data-aos="fade-in"
        href='/'
      >
        <Image
          alt="logo"
          src="/globe-2.svg"
          width={30}
          height={30}
          className="logo-pic rotate inline-block"
        />
        Derrick+Ongwae
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-5 items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
        >
          <Link className={linkClasses('/')} data-aos="fade-in" href="/">Home</Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
        >
          <Link className={linkClasses('/about')} data-aos="fade-in" data-aos-delay="200" href="/about">Information</Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
        >
          <Link className={linkClasses('/resume')} data-aos="fade-in" data-aos-delay="400" href="/resume">Resume</Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
        >
          <Link className={linkClasses('/projects')} data-aos="fade-in" data-aos-delay="600" href="/projects">Projects</Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
        >           <Link className={linkClasses('/contact')} data-aos="fade-in" data-aos-delay="800" href="/contact">Contact</Link>
        </motion.div>
      </div>

      {/* Hamburger */}
      <div className="md:hidden hamburger z-50">
        <button onClick={toggleMenu} className="text-2xl h-button">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* GSAP Animated Circle Overlay */}
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-full h-full  z-40 pointer-events-none overlay"
        style={{ clipPath: 'circle(0% at 90% 5%)' }}
      />

      {/* Dropdown Content (positioned above overlay) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full z-40 flex items-center justify-center"
          >
            <div className="flex flex-col items-center px-6 py-4 space-y-6 text-xl">
              <Link className={linkClasses('/')} href="/" onClick={toggleMenu}>Home</Link>
              <Link className={linkClasses('/about')} href="/about" onClick={toggleMenu}>Information</Link>
              <Link className={linkClasses('/resume')} href="/resume" onClick={toggleMenu}>Resume</Link>
              <Link className={linkClasses('/projects')} href="/projects" onClick={toggleMenu}>Projects</Link>
              <Link className={linkClasses('/contact')} href="/contact" onClick={toggleMenu}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
