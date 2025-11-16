import { createContext, useContext } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const useTranslation = () => {
    const language = useContext(LanguageContext);
    if (!language) {
        throw new Error('useTranslation must be used within a LanguageProvider');
    }
    
    const t = (key) => {
        return translations[language][key] || key;
    };
    
    return { t, language };
};

export const LanguageProvider = ({ children, language }) => {
    return (
        <LanguageContext.Provider value={language}>
            {children}
        </LanguageContext.Provider>
    );
};
