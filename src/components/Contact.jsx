import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../LanguageContext';

const Contact = () => {
    const { t, language } = useLanguage();

    const linkedinUrl = language === 'en'
        ? 'https://www.linkedin.com/in/renato-alonso-alvarez-dinamarca-b6bb33223/?locale=en_US'
        : 'https://www.linkedin.com/in/renato-alonso-alvarez-dinamarca-b6bb33223/';

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-bg to-bg pointer-events-none"></div>

            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10 text-center">
                <h2 className="text-5xl md:text-7xl font-bold mb-8">
                    {t.contact.title_prefix} <span className="text-accent">{t.contact.title_highlight}</span>
                </h2>
                <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
                    {t.contact.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <a href="tel:+56974709816" className="glass-panel p-8 hover:bg-white/5 transition-all duration-300 group text-center">
                        <FaPhone className="text-3xl text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
                        <h3 className="text-lg font-bold mb-2">{t.contact.phone_title}</h3>
                        <p className="text-gray-400 text-sm">+56 9 7470 9816</p>
                    </a>

                    <a href="mailto:renatoalvarez1137@gmail.com" className="glass-panel p-8 hover:bg-white/5 transition-all duration-300 group text-center">
                        <FaEnvelope className="text-3xl text-secondary mb-4 mx-auto group-hover:scale-110 transition-transform" />
                        <h3 className="text-lg font-bold mb-2">{t.contact.email_title}</h3>
                        <p className="text-gray-400 text-sm">renatoalvarez1137@gmail.com</p>
                    </a>

                    <div className="glass-panel p-8 hover:bg-white/5 transition-all duration-300 group text-center">
                        <FaMapMarkerAlt className="text-3xl text-accent mb-4 mx-auto group-hover:scale-110 transition-transform" />
                        <h3 className="text-lg font-bold mb-2">{t.contact.location_title}</h3>
                        <p className="text-gray-400 text-sm">Coquimbo, Chile</p>
                    </div>
                </div>

                <a
                    href="https://docs.google.com/document/d/1j-W2U1h800jDuiVW8gQ4NOx0AWpG03Tz/export?format=pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-bold hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-105 mb-16"
                >
                    <FaEnvelope className="text-xl" />
                    {t.contact.download_cv}
                </a>

                <footer className="flex flex-col items-center gap-4 border-t border-white/10 pt-8">
                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        RA
                    </div>

                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Renato Alvarez. {t.contact.footer_rights}
                    </p>

                    <div className="flex gap-6">
                        <a href="https://github.com/RenatoLV" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaGithub size={20} /></a>
                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaLinkedin size={20} /></a>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
