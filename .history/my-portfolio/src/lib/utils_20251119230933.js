import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';
import {useLocation} from 'react-router-dom';
import {translations} from './translations';

export const cn = (...inputs) => {
    return twMerge(clsx(...inputs));
};

export const useLanguage = () => {
    const location = useLocation();
    const currentLang = location.pathname.startsWith('/tr') ? 'tr' : 'en';
    
    const t = (key) => {
        return translations[currentLang][key] || key;
    };
    
    return { lang: currentLang, t };
};