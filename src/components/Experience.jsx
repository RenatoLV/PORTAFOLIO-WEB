import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const Experience = () => {
    const { t } = useLanguage();

    return (
        <section id="experience" className="py-32 relative">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold mb-24 text-center"
                >
                    {t.experience.title} <span className="text-secondary">{t.experience.title_highlight}</span>
                </motion.h2>

                <div className="relative">
                    {/* Glowing Center Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-secondary to-transparent md:-translate-x-1/2"></div>

                    {t.experience.jobs.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative mb-16 md:mb-24 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                } items-center`}
                        >
                            {/* Dot */}
                            <div className="absolute left-[-5px] md:left-1/2 w-3 h-3 bg-secondary rounded-full shadow-[0_0_15px_#7000FF] md:-translate-x-1/2 z-10"></div>

                            {/* Spacer for desktop alignment */}
                            <div className="hidden md:block w-1/2"></div>

                            {/* Card */}
                            <div className={`w-full md:w-1/2 pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                                }`}>
                                <div className="glass-panel p-6 md:p-8 hover:border-secondary/50 transition-colors duration-300 group">
                                    <span className="text-xs md:text-sm font-mono text-secondary mb-2 block tracking-wider">{exp.period}</span>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-secondary transition-colors">{exp.title}</h3>
                                    <h4 className="text-base md:text-lg text-gray-400 mb-6">{exp.company}</h4>

                                    <ul className="space-y-3">
                                        {exp.details.map((detail, i) => (
                                            <li key={i} className="flex items-start text-gray-300 text-sm leading-relaxed">
                                                <span className="mr-3 text-secondary mt-1">▹</span>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
