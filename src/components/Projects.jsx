import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaImages, FaTimes, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';
import { useLanguage } from '../LanguageContext';
import { useFilter } from '../FilterContext';
import { SiGoogleappsscript, SiJavascript, SiGoogle, SiPython, SiReact, SiDotnet, SiPostgresql, SiOpenjdk } from 'react-icons/si';
import { FaLinux } from 'react-icons/fa';

const tagIcons = {
    'App Script': <SiGoogleappsscript />,
    'JavaScript': <SiJavascript />,
    'Google Suite': <SiGoogle />,
    'Python': <SiPython />,
    'React': <SiReact />,
    '.NET': <SiDotnet />,
    'Linux': <FaLinux />,
    'SQL': <SiPostgresql />,
    'Java': <SiOpenjdk />,
};

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const { t } = useLanguage();
    const { selectedTag } = useFilter();

    const allProjects = t.projects.list;

    // Filter projects based on selected tech tag
    const projects = useMemo(() => {
        if (!selectedTag) return allProjects;
        return allProjects.filter(project =>
            project.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
        );
    }, [allProjects, selectedTag]);

    // Reset index when filter changes
    useEffect(() => {
        setCurrentIndex(0);
    }, [selectedTag]);

    // Automatic carousel
    useEffect(() => {
        if (!isPaused && !isGalleryOpen && projects.length > 0) {
            const interval = setInterval(() => {
                const project = projects[currentIndex];
                const totalItems = (project.video ? 1 : 0) + (project.images?.length || 0);

                if (totalItems > 1 && currentImageIndex < totalItems - 1) {
                    setCurrentImageIndex(prev => prev + 1);
                } else {
                    setCurrentIndex((prev) => (prev + 1) % projects.length);
                    setCurrentImageIndex(0);
                }
            }, 5000); // 5 seconds per image/project state

            return () => clearInterval(interval);
        }
    }, [isPaused, isGalleryOpen, projects.length, currentIndex, currentImageIndex]);

    const nextProject = () => {
        if (projects.length === 0) return;
        setCurrentIndex((prev) => (prev + 1) % projects.length);
        setCurrentImageIndex(0);
    };

    const prevProject = () => {
        if (projects.length === 0) return;
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
        setCurrentImageIndex(0);
    };

    const openGallery = (startIndex = 0) => {
        setCurrentImageIndex(startIndex);
        setIsGalleryOpen(true);
    };

    const nextImage = (e) => {
        if (e) e.stopPropagation();
        const totalItems = (projects[currentIndex].video ? 1 : 0) + (projects[currentIndex].images?.length || 0);
        if (totalItems === 0) return;
        setCurrentImageIndex((prev) => (prev + 1) % totalItems);
    };

    const prevImage = (e) => {
        if (e) e.stopPropagation();
        const totalItems = (projects[currentIndex].video ? 1 : 0) + (projects[currentIndex].images?.length || 0);
        if (totalItems === 0) return;
        setCurrentImageIndex((prev) => (prev - 1 + totalItems) % totalItems);
    };

    return (
        <section id="projects" className="py-32 relative">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold mb-20 text-center"
                >
                    {t.projects.title} <span className="text-primary">{t.projects.title_highlight}</span>
                </motion.h2>

                {projects.length === 0 ? (
                    <div className="text-center py-20 glass-panel">
                        <p className="text-xl text-gray-400">No hay proyectos con la tecnología: <span className="text-primary font-bold">{selectedTag}</span></p>
                    </div>
                ) : (
                    <div className="relative">
                        {/* Main Card */}
                        <div className="glass-panel p-8 md:p-12 min-h-[500px] flex flex-col md:flex-row gap-12 items-center relative overflow-hidden group">

                            {/* Background Glow */}
                            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-500"></div>

                            {/* Image Placeholder / Visual */}
                            <div
                                className="w-full md:w-1/2 h-80 bg-gradient-to-br from-bg to-black border border-white/10 rounded-xl flex items-center justify-center relative overflow-hidden cursor-pointer group/image"
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                            >
                                <AnimatePresence mode='wait'>
                                    {projects[currentIndex].images && projects[currentIndex].images.length > 0 ? (
                                        <motion.div
                                            key={`${currentIndex}-${currentImageIndex}`}
                                            initial={{ opacity: 0, scale: 1.05 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.5 }}
                                            className="absolute inset-0 w-full h-full"
                                            onClick={() => openGallery(currentImageIndex)}
                                        >
                                            <img
                                                src={projects[currentIndex].video && currentImageIndex === 0
                                                    ? projects[currentIndex].images[0] // Show first image as thumbnail for video
                                                    : projects[currentIndex].images[projects[currentIndex].video ? currentImageIndex - 1 : currentImageIndex]
                                                }
                                                alt={projects[currentIndex].title}
                                                className="w-full h-full object-cover opacity-60 group-hover/image:opacity-90 transition-opacity duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/30 group-hover/image:bg-black/10 transition-colors duration-500"></div>

                                            {/* Subtle Progress Bar */}
                                            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 overflow-hidden z-20">
                                                <motion.div
                                                    key={`${currentIndex}-${currentImageIndex}-${isPaused}`}
                                                    initial={{ width: 0 }}
                                                    animate={{ width: isPaused ? '0%' : '100%' }}
                                                    transition={{ duration: isPaused ? 0 : 5, ease: "linear" }}
                                                    className="h-full bg-primary/60"
                                                />
                                            </div>

                                            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pointer-events-none">
                                                {projects[currentIndex].video && currentImageIndex === 0 ? (
                                                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center mb-4 shadow-xl">
                                                        <FaPlay className="text-2xl text-white ml-1" />
                                                    </div>
                                                ) : (
                                                    <FaImages className="text-4xl text-white mb-2 drop-shadow-lg opacity-0 group-hover/image:opacity-100 transition-opacity" />
                                                )}
                                                <span className="text-white font-bold drop-shadow-lg opacity-0 group-hover/image:opacity-100 transition-opacity bg-black/40 px-3 py-1 rounded-full text-sm">
                                                    {projects[currentIndex].video && currentImageIndex === 0 ? 'Ver Video' : `Ver Galería (${projects[currentIndex].images.length})`}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                    )}
                                </AnimatePresence>

                                {/* Mini nav inside card for images */}
                                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover/image:opacity-100 transition-opacity z-20 pointer-events-none">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                        className="p-2 rounded-full bg-black/50 hover:bg-primary text-white transition-colors pointer-events-auto"
                                    >
                                        <FaChevronLeft size={14} />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                        className="p-2 rounded-full bg-black/50 hover:bg-primary text-white transition-colors pointer-events-auto"
                                    >
                                        <FaChevronRight size={14} />
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="w-full md:w-1/2 relative z-10 text-center md:text-left">
                                <AnimatePresence mode='wait'>
                                    <motion.div
                                        key={projects[currentIndex].title + selectedTag}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                    >
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                            {projects[currentIndex].title}
                                        </h3>

                                        <p className="text-gray-300 mb-8 text-base md:text-lg leading-relaxed">
                                            {projects[currentIndex].description}
                                        </p>

                                        {/* Tags Layout with Icons */}
                                        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
                                            {projects[currentIndex].tags.map(tag => (
                                                <span key={tag} className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-mono rounded-full bg-white/5 text-primary border border-white/10 hover:bg-primary/10 transition-colors cursor-default">
                                                    {tagIcons[tag] && <span className="text-lg">{tagIcons[tag]}</span>}
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6">
                                            <button
                                                onClick={() => openGallery(currentImageIndex)}
                                                disabled={!projects[currentIndex].video && (!projects[currentIndex].images || projects[currentIndex].images.length === 0)}
                                                className={`flex items-center justify-center gap-2 transition-colors group/btn ${projects[currentIndex].video || (projects[currentIndex].images && projects[currentIndex].images.length > 0)
                                                    ? 'text-white hover:text-primary cursor-pointer'
                                                    : 'text-gray-600 cursor-not-allowed'
                                                    }`}
                                            >
                                                <span className="font-bold tracking-wider">{projects[currentIndex].video && currentImageIndex === 0 ? 'VER VIDEO' : t.projects.btn_details}</span>
                                                {projects[currentIndex].video && currentImageIndex === 0 ? <FaPlay className="text-sm group-hover/btn:scale-110 transition-transform" /> : <FaImages className="text-sm group-hover/btn:scale-110 transition-transform" />}
                                            </button>

                                            {projects[currentIndex].demoUrl && (
                                                <a
                                                    href={projects[currentIndex].demoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-2 text-white hover:text-secondary transition-colors group/demo"
                                                >
                                                    <span className="font-bold tracking-wider">TRY DEMO</span>
                                                    <FaExternalLinkAlt className="text-sm group-hover/demo:scale-110 transition-transform" />
                                                </a>
                                            )}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Navigation Controls - Centered */}
                        <div className="flex flex-col items-center gap-6 mt-8">
                            <div className="flex items-center gap-6">
                                <button
                                    onClick={prevProject}
                                    className="p-3 rounded-full border border-white/10 hover:bg-white/10 hover:border-primary/50 text-white transition-all duration-300 group"
                                >
                                    <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                                </button>

                                {/* Progress Dots */}
                                <div className="flex gap-2 items-center">
                                    {projects.map((_, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => { setCurrentIndex(idx); setCurrentImageIndex(0); }}
                                            className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${idx === currentIndex ? 'w-10 bg-primary' : 'w-3 bg-gray-600 hover:bg-gray-400'
                                                }`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={nextProject}
                                    className="p-3 rounded-full border border-white/10 hover:bg-white/10 hover:border-primary/50 text-white transition-all duration-300 group"
                                >
                                    <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Gallery Modal */}
            <AnimatePresence>
                {isGalleryOpen && projects.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                        onClick={() => setIsGalleryOpen(false)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2"
                            onClick={() => setIsGalleryOpen(false)}
                        >
                            <FaTimes size={32} />
                        </button>

                        <div className="relative max-w-5xl w-full aspect-video" onClick={(e) => e.stopPropagation()}>
                            {projects[currentIndex].video && currentImageIndex === 0 ? (
                                <iframe
                                    src={`${projects[currentIndex].video}?autoplay=1`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full rounded-lg shadow-2xl border border-white/10"
                                ></iframe>
                            ) : (
                                <img
                                    src={projects[currentIndex].images[projects[currentIndex].video ? currentImageIndex - 1 : currentImageIndex]}
                                    alt={`Gallery ${currentImageIndex}`}
                                    className="w-full h-full object-contain rounded-lg shadow-2xl border border-white/10"
                                />
                            )}

                            <button
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-black/50 hover:bg-primary/80 text-white rounded-full transition-all"
                                onClick={prevImage}
                            >
                                <FaChevronLeft size={24} />
                            </button>

                            <button
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-black/50 hover:bg-primary/80 text-white rounded-full transition-all"
                                onClick={nextImage}
                            >
                                <FaChevronRight size={24} />
                            </button>

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {[...(projects[currentIndex].video ? [null] : []), ...(projects[currentIndex].images || [])].map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-primary w-4' : 'bg-white/50'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
