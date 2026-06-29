import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../portfolioData';

const Hero: React.FC = () => {
    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants: any = {
        hidden: { y: 40, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const iconVariants: any = {
        hover: { scale: 1.2, y: -5, transition: { type: "spring", stiffness: 400, damping: 10 } }
    };

    return (
        <section id="hero" className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-secondary -z-10" />

            <motion.div
                className="container mx-auto px-6 md:px-12 flex flex-col items-start max-w-5xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.p variants={itemVariants} className="text-primary font-medium tracking-widest uppercase mb-4 opacity-70">
                    {portfolioData.author.role}
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-tight mb-8 mt-12 md:mt-0"
                >
                    {portfolioData.author.name.split(' ')[0]} <br />
                    <span className="text-secondary" style={{ WebkitTextStroke: "2px #121212" }}>
                        {portfolioData.author.name.split(' ')[1] || ''}
                    </span>
                </motion.h1>

                <motion.p variants={itemVariants} className="max-w-2xl text-lg md:text-xl leading-relaxed mb-12">
                    {portfolioData.author.philosophy}
                </motion.p>

                <motion.div variants={itemVariants} className="flex space-x-6">
                    {portfolioData.socials.map((social) => {
                        const IconText = social.name.slice(0, 2).toUpperCase();

                        return (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                                whileHover="hover"
                                variants={iconVariants}
                                className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-secondary transition-colors duration-300"
                            >
                                <span className="font-bold text-sm tracking-widest">{IconText}</span>
                            </motion.a>
                        )
                    })}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
