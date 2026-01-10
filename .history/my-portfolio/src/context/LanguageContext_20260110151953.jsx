import {createContext, useContext, useState, useEffect} from 'react';
import tr from '../data/locales/tr.json';
import en from '../data/locales/en.json';

const LanguageContext = createContext();

function LanguageProvider({ children }) {
    const translations = { tr, en };


    const [language, setLanguage] = useState(() => {
        const stored = localStorage.getItem("language");

        return (stored === "tr" || stored === "en") ? stored : "en";
    });

    const translate = (key) => {
        const keys = key.split('.');
        let value = translations[language];

        for (const k of keys) {
            value = value?.[k];

            if (!value)
                return key;
        }
        return value;
    };

    const toggleLanguage = () => {
        setLanguage(prev => prev === "tr" ? "en" : "tr");
    };

    const value = {
        language,
        setLanguage,
        translate,
        toggleLanguage,
        isRtl: false
    };

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export { LanguageProvider };
export const useLanguageContext = () => useContext(LanguageContext);
