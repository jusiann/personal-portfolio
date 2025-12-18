import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useLanguageContext } from '../context/LanguageContext';

export const cn = (...inputs) => {
    return twMerge(clsx(...inputs));
};

export const useLanguage = () => {
    const { language, translate, t, toggleLanguage } = useLanguageContext();
    return { lang: language, translate, t, toggleLanguage };
};