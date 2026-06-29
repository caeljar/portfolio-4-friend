import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioData } from '../portfolioData';

const Curriculum: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section id="curriculum" className="w-full min-h-screen py-24 bg-primary text-secondary flex items-center">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Photo with Parallax */}
                <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden flex items-end justify-end bg-[#1a1a1a]">
                    <motion.div
                        style={{
                            y,
                            backgroundImage: `url(${portfolioData.author.picture})`
                        }}
                        className="absolute inset-0 w-full h-[120%] bg-center bg-cover opacity-80"
                    // Placeholder background image, can be replaced by real photo
                    //initial={{ backgroundImage: `url(${portfolioData.author.picture})` }}
                    />
                    <div className="z-10 border border-secondary p-8 backdrop-blur-sm bg-black/20">
                        <h2 className="text-3xl font-bold tracking-widest uppercase">{portfolioData.author.name}</h2>
                        <p className="tracking-widest mt-2">{portfolioData.author.role}</p>
                    </div>
                </div>

                {/* Bio and Skills */}
                <div className="flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-4xl font-bold tracking-tighter mb-3">Sobre Mí</h3>
                        <p className="text-sm leading-relaxed mb-6 text-secondary/80">
                            {portfolioData.author.bio}
                        </p>
                        <div className='flex justify-between'>
                            <div className='w-9/20'>
                                <h4 className='text-xl font-bold uppercase tracking-widest mb-3 border-b border-secondary/30 pb-2 inline-block'>Misión</h4>
                                <p className="text-sm leading-relaxed mb-3 text-secondary/80">
                                    {portfolioData.author.mission}
                                </p>
                            </div>
                            <div className='w-9/20'>
                                <h4 className='text-xl font-bold uppercase tracking-widest mb-3 border-b border-secondary/30 pb-2 inline-block'>Visión</h4>
                                <p className="text-sm leading-relaxed mb-3 text-secondary/80">
                                    {portfolioData.author.vision}
                                </p>
                            </div>
                        </div>


                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                        }}
                    >
                        <h4 className="text-xl font-bold uppercase tracking-widest mb-6 border-b border-secondary/30 pb-2 inline-block">
                            Core Competencies
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {portfolioData.skills.map((skill, index) => (
                                <motion.li
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, x: -20 },
                                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                                    }}
                                    className="flex items-center space-x-3 text-lg"
                                >
                                    <span className="w-2 h-2 rounded-full bg-secondary" />
                                    <span className="text-sm">{skill}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Curriculum;
