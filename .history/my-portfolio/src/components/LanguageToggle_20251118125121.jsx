import {useNavigate, useLocation } from 'react-router-dom';
import {cn} from '../lib/utils';
import { FaGlobe, FaLanguage } from 'react-icons/fa';

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
                "focus:outline-none p-2 rounded-lg bg-background/80 backdrop-blur-sm",
                "border border-border/50 hover:border-border",
                "flex items-center gap-2 text-foreground/80 hover:text-foreground"
            )}
        >
            <FaGlobe className="text-lg" />
            <span className="text-sm font-medium uppercase">
                {currentLang === 'tr' ? 'EN' : 'TR'}
            </span>
        </button>
    );
};
