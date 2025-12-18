import { createContext, useContext, useState, useEffect } from 'react';
import tr from '../data/locales/tr.json';
import en from '../data/locales/en.json';

const translations = { tr, en };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        const stored = localStorage.getItem("language");
        return (stored === "tr" || stored === "en") ? stored : "en";
    });

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    const getNestedTranslation = (obj, path) => {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    };

    const translate = (key) => {
        const langData = translations[language];
        const text = getNestedTranslation(langData, key);
        return text || key;
    };

    const toggleLanguage = () => {
        setLanguage(prev => prev === "tr" ? "en" : "tr");
    };

    const value = {
        language,
        setLanguage,
        translate,
        toggleLanguage,
        t: translate,
        isRtl: false
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguageContext = () => useContext(LanguageContext);
