import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useLanguageContext } from '../context/LanguageContext';

export function cn(...inputs) {
    return twMerge(clsx(...inputs));
};

export function useLanguage() {
    const { language, translate, t, toggleLanguage } = useLanguageContext();

    return {
        lang: language,
        translate,
        t,
        toggleLanguage,
    };
};
