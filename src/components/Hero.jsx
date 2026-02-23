import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
            </div>

            <div className="w-full px-4 md:px-8 lg:px-12 z-10 relative flex justify-center text-center">
                <div className="max-w-5xl w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-primary font-mono text-lg md:text-xl mb-4 tracking-widest">
                            {t.hero.greeting}
                        </h2>

                        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight">
                            RENATO <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary dark:via-white light:via-slate-900">
                                ALVAREZ
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex flex-col items-center gap-8"
                    >
                        <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed text-center px-4">
                            {t.hero.role_prefix} <span className="text-white dark:text-white light:text-slate-900 font-bold">{t.hero.role_highlight1}</span> {t.hero.role_connector} <span className="text-white dark:text-white light:text-slate-900 font-bold">{t.hero.role_highlight2}</span>. {t.hero.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6">
                            <a
                                href="#projects"
                                className="px-8 py-4 bg-primary text-black font-bold text-center rounded-none hover:bg-white transition-colors duration-300"
                            >
                                {t.hero.btn_projects}
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 border border-white/20 text-white text-center hover:bg-white/10 transition-colors duration-300"
                            >
                                {t.hero.btn_contact}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
