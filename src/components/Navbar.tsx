import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../portfolioData';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${(scrolled || isOpen) ? 'bg-secondary/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center relative">
                <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="text-primary font-bold text-xl md:text-2xl tracking-tighter cursor-pointer hover:opacity-70 transition-opacity z-50"
                    onClick={() => setIsOpen(false)}
                >
                    {portfolioData.author.name.toUpperCase()}
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-12">
                    {portfolioData.links.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={500}
                                spy={true}
                                activeClass="border-b-2 border-primary"
                                className="text-primary text-sm font-medium tracking-widest uppercase cursor-pointer py-1 relative group"
                            >
                                {link.name}
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden z-50 flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="w-8 h-0.5 bg-primary mb-2 transition-transform origin-center"
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-8 h-0.5 bg-primary mb-2 transition-opacity"
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="w-8 h-0.5 bg-primary transition-transform origin-center"
                    />
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "100vh" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="absolute top-full left-0 w-full bg-secondary/95 backdrop-blur-md shadow-lg md:hidden overflow-hidden flex flex-col items-center justify-start pt-12 space-y-8 h-screen"
                        >
                            {portfolioData.links.map((link, i) => (
                                <motion.div
                                    key={link.to}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        className="text-primary text-2xl font-bold tracking-widest uppercase cursor-pointer"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
