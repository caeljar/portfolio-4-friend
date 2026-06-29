import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../portfolioData';

const Projects: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="projects" className="w-full min-h-screen bg-secondary text-primary py-24 flex flex-col justify-center">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 h-auto min-h-[75vh]">

                {/* Menu Controllers */}
                <div className="w-full md:w-1/3 flex flex-row md:flex-col overflow-x-auto md:overflow-visible no-scrollbar pb-4 md:pb-0 space-x-6 md:space-x-0 md:space-y-8 border-b md:border-b-0 md:border-l border-primary/20 md:pl-8 relative snap-x snap-mandatory">
                    {/* The general indicator line has been removed in favor of layoutId in button */}

                    {portfolioData.projects.map((project, index) => (
                        <button
                            key={project.id}
                            onClick={() => setActiveIndex(index)}
                            className={`relative text-left text-sm whitespace-nowrap snap-start md:whitespace-normal md:text-4xl font-bold tracking-tighter uppercase transition-colors duration-500 ${activeIndex === index ? 'text-primary' : 'text-primary/30 hover:text-primary/60'
                                }`}
                        >
                            <span className="block text-sm font-medium tracking-widest mb-2">0{index + 1}</span>
                            {project.title}

                            {/* Animated Indicator specific to this button */}
                            {activeIndex === index && (
                                <motion.div
                                    layoutId="projectIndicator"
                                    className="hidden md:block absolute left-[-33px] top-0 h-full w-[2px] bg-primary"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Vertical Carousel Display */}
                <div className="w-full md:w-2/3 h-[50vh] md:h-auto min-h-[500px] relative overflow-hidden group">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="absolute inset-0 flex flex-col justify-end"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
                                style={{ backgroundImage: `url(${portfolioData.projects[activeIndex].image})` }}
                            />

                            <div className="relative z-10 bg-gradient-to-t from-primary via-primary/80 to-transparent p-8 md:p-12 text-secondary">
                                <h3 className="text-4xl font-bold mb-4">{portfolioData.projects[activeIndex].title}</h3>
                                <p className="text-lg leading-relaxed max-w-2xl opacity-90">
                                    {portfolioData.projects[activeIndex].description}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default Projects;
