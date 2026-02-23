import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { FaGlobeAmericas, FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    const [theme, setTheme] = useState('dark');
    const { scrollY } = useScroll();
    const { t, toggleLanguage, language } = useLanguage();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
            setIsMenuOpen(false); // Close menu on scroll down
        } else {
            setHidden(false);
        }
    });

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-0 left-0 w-full z-50 py-6"
            >
                <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                    <div className="glass-panel px-6 py-4 rounded-full flex justify-between items-center bg-bg/80 backdrop-blur-md border-white/5">
                        <a href="#" className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors">
                            RA<span className="text-primary">.</span>
                        </a>

                        <ul className="hidden md:flex gap-8">
                            {['about', 'experience', 'projects', 'contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item}`}
                                        className="text-sm font-medium text-gray-300 hover:text-white hover:tracking-widest transition-all duration-300 uppercase"
                                    >
                                        {t.nav[item]}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-4">
                            <div className="hidden md:flex items-center gap-4 border-r border-white/10 pr-4">
                                <button
                                    onClick={toggleLanguage}
                                    className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                                    title="Change Language"
                                >
                                    <FaGlobeAmericas className="text-primary" />
                                    <span className="uppercase">{language === 'es' ? 'EN' : 'ES'}</span>
                                </button>

                                <button
                                    onClick={toggleTheme}
                                    className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                                    title="Toggle Theme"
                                >
                                    {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-secondary" />}
                                </button>
                            </div>

                            <a
                                href="#contact"
                                className="hidden md:block px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-bold transition-colors border border-white/5"
                            >
                                {t.nav.cta}
                            </a>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden p-2 text-gray-300 hover:text-white"
                            >
                                <div className="w-6 h-5 flex flex-col justify-between">
                                    <span className={`h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                    <span className={`h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                    <span className={`h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 md:hidden pt-24 px-6 bg-bg/95 backdrop-blur-xl"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {['about', 'experience', 'projects', 'contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-3xl font-bold text-white hover:text-primary transition-colors"
                                >
                                    {t.nav[item]}
                                </a>
                            ))}
                            <div className="flex justify-center gap-8 mt-4 pt-8 border-t border-white/10">
                                <button onClick={toggleLanguage} className="flex items-center gap-2 text-lg text-gray-300">
                                    <FaGlobeAmericas className="text-primary" />
                                    {language === 'es' ? 'English' : 'Español'}
                                </button>
                                <button onClick={toggleTheme} className="flex items-center gap-2 text-lg text-gray-300">
                                    {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-secondary" />}
                                    {theme === 'dark' ? 'Light' : 'Dark'}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
