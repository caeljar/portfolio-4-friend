import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../portfolioData';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="w-full min-h-screen py-24 bg-primary text-secondary flex flex-col items-center justify-center relative overflow-hidden">

            {/* Background abstract element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary opacity-5 rounded-full blur-3xl -z-0" />

            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

                {/* Form Area */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4 mt-8 md:mt-0">Hablemos.</h2>
                    <p className="text-lg md:text-xl opacity-70 mb-12">Apertura para colaboraciones y consultas.</p>

                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="relative group">
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-transparent border-b border-secondary/30 py-3 outline-none focus:border-secondary transition-colors text-lg peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-0 top-3 text-secondary/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary peer-valid:-top-4 peer-valid:text-xs"
                            >
                                Nombre
                            </label>
                            <div className="absolute bottom-0 left-0 h-[2px] bg-secondary w-0 group-focus-within:w-full transition-all duration-500 ease-out" />
                        </div>

                        <div className="relative group">
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-transparent border-b border-secondary/30 py-3 outline-none focus:border-secondary transition-colors text-lg peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-0 top-3 text-secondary/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary peer-valid:-top-4 peer-valid:text-xs"
                            >
                                Email
                            </label>
                            <div className="absolute bottom-0 left-0 h-[2px] bg-secondary w-0 group-focus-within:w-full transition-all duration-500 ease-out" />
                        </div>

                        <div className="relative group">
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-transparent border-b border-secondary/30 py-3 outline-none focus:border-secondary transition-colors text-lg resize-none peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="message"
                                className="absolute left-0 top-3 text-secondary/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary peer-valid:-top-4 peer-valid:text-xs"
                            >
                                Mensaje
                            </label>
                            <div className="absolute bottom-0 left-0 h-[2px] bg-secondary w-0 group-focus-within:w-full transition-all duration-500 ease-out" />
                        </div>

                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05 }}
                            className="mt-8 px-12 py-4 bg-secondary text-primary font-bold tracking-widest uppercase hover:bg-secondary/90 transition-colors"
                        >
                            Enviar
                        </motion.button>
                    </form>
                </motion.div>

                {/* Map Placeholder Area */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full h-[500px] lg:h-full bg-[#111] border border-secondary/20 flex flex-col items-center justify-center p-8 text-center"
                >
                    <div className="w-16 h-16 rounded-full border border-secondary/50 flex items-center justify-center mb-6 animate-pulse">
                        <span className="block w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <h3 className="text-2xl font-medium tracking-widest uppercase mb-2">Ubicación</h3>
                    <p className="text-secondary/70 max-w-xs leading-relaxed">
                        {portfolioData.contact.location}
                    </p>
                    <a href={`mailto:${portfolioData.contact.email}`} className="mt-4 hover:underline text-lg font-bold tracking-widest">
                        {portfolioData.contact.email}
                    </a>
                    <p className="mt-2 hover:underline text-lg font-bold tracking-widest">
                        {portfolioData.contact.cellphone}
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
