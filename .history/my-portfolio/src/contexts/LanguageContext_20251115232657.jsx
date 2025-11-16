import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../lib/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const useTranslation = () => {
    const { language } = useLanguage();
    
    const t = (key) => {
        return translations[language][key] || key;
    };
    
    return { t, language };
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('tr');

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage === 'en' || storedLanguage === 'tr') {
            setLanguage(storedLanguage);
        } else {
            // Varsayılan dil Türkçe
            localStorage.setItem('language', 'tr');
            setLanguage('tr');
        }
    }, []);

    const toggleLanguage = () => {
        const newLanguage = language === 'tr' ? 'en' : 'tr';
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
