import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';

export const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className={cn(
                "fixed max-sm:hidden top-5 right-20 z-50 transition-all duration-300",
                "hover:scale-110 active:scale-95",
                "focus:outline-hidden text-3xl"
            )}
        >
            {language === 'tr' ? '🇹🇷' : '🇬🇧'}
        </button>
    );
};
