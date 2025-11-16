import { createContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children, language }) => {
    return (
        <LanguageContext.Provider value={language}>
            {children}
        </LanguageContext.Provider>
    );
};

export const LanguageToggle = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentLang = location.pathname.startsWith('/en') ? 'en' : 'tr';

    const toggleLanguage = () => {
        const newLang = currentLang === 'tr' ? 'en' : 'tr';
        navigate(`/${newLang}${location.hash}`);
    };

    return (
        <button
            onClick={toggleLanguage}
            className={cn(
                "fixed max-sm:hidden top-5 right-20 z-50 transition-all duration-300",
                "hover:scale-110 active:scale-95",
                "focus:outline-hidden text-3xl"
            )}
        >
            {currentLang === 'tr' ? '🇹🇷' : '🇬🇧'}
        </button>
    );
};
