import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { useFilter } from '../FilterContext';

const techStack = [
    { name: 'App Script', icon: '/icons/appscript.svg' },
    { name: 'Python', icon: '/icons/python.svg' },
    { name: 'SQL', icon: '/icons/sql.png' },
    { name: 'Power BI', icon: '/icons/powerbi.png' },
    { name: 'Java', icon: '/icons/java.png' },
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'JavaScript', icon: '/icons/javascript.png' },
    { name: '.NET', icon: '/icons/dotnet.png' },
    { name: 'Linux', icon: '/icons/linux.png' },
    { name: 'Google Suite', icon: '/icons/google.svg' },
];

const About = () => {
    const { t } = useLanguage();
    const { selectedTag, toggleTag } = useFilter();

    return (
        <section id="about" className="py-32 relative">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-20"></div>
                        <div className="glass-panel p-6 md:p-10 relative">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.about.title} <span className="text-primary">{t.about.title_highlight}</span></h2>
                            <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg" dangerouslySetInnerHTML={{ __html: t.about.p1 }}></p>
                            <p className="text-gray-300 leading-relaxed text-base md:text-lg" dangerouslySetInnerHTML={{ __html: t.about.p2 }}></p>
                        </div>
                    </motion.div>

                    {/* Right Column - Stats + Tech Stack */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4"
                    >
                        {/* Stats Row */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass-panel p-6 text-center hover:-translate-y-2 transition-transform duration-300">
                                <h3 className="text-4xl font-bold text-primary mb-2">2+</h3>
                                <p className="text-gray-400 text-sm uppercase tracking-wider">{t.about.stats.years}</p>
                            </div>
                            <div className="glass-panel p-6 text-center hover:-translate-y-2 transition-transform duration-300">
                                <h3 className="text-4xl font-bold text-secondary mb-2">10+</h3>
                                <p className="text-gray-400 text-sm uppercase tracking-wider">{t.about.stats.projects}</p>
                            </div>
                        </div>

                        {/* Tech Stack Grid */}
                        <div className="glass-panel p-6 md:p-8">
                            <h3 className="text-xl font-bold text-white mb-6 text-center">
                                {t.about.stats.stack}
                            </h3>
                            <div className="grid grid-cols-5 gap-3 md:gap-4">
                                {techStack.map((tech, index) => {
                                    const isActive = selectedTag === tech.name;
                                    return (
                                        <motion.div
                                            key={tech.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                            onClick={() => toggleTag(tech.name)}
                                            className={`group flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 cursor-pointer ${isActive ? 'bg-primary/20 scale-110 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]' : 'hover:bg-white/5'
                                                }`}
                                        >
                                            <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg transition-all duration-300 p-2 ${isActive ? 'bg-primary/30' : 'bg-white/5 group-hover:bg-white/10 group-hover:scale-110'
                                                }`}>
                                                <img
                                                    src={tech.icon}
                                                    alt={tech.name}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <span className={`text-[10px] md:text-xs transition-colors text-center leading-tight ${isActive ? 'text-primary font-bold' : 'text-gray-400 group-hover:text-white'
                                                }`}>
                                                {tech.name}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                            {selectedTag && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="mt-6 text-center"
                                >
                                    <button
                                        onClick={() => toggleTag(null)}
                                        className="text-xs text-primary hover:underline"
                                    >
                                        Limpiar filtro: {selectedTag}
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
