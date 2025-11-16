import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';

export const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className={cn(
                "fixed max-sm:hidden top-5 right-20 z-50 px-3 py-2 rounded-full transition-all duration-300",
                "bg-primary/10 hover:bg-primary/20 border border-primary/30",
                "focus:outline-hidden font-medium text-sm"
            )}
        >
            <span className="text-primary">
                {language === 'tr' ? '🇹🇷 TR' : '🇬🇧 EN'}
            </span>
        </button>
    );
};
