import {useNavigate, useLocation } from 'react-router-dom';
import {cn} from '../lib/utils';
import { FaFlagUsa } from 'react-icons/fa';
import { SiTurkishairlines } from 'react-icons/si';

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
                "focus:outline-none text-foreground/80 hover:text-foreground",
                "flex items-center gap-1 text-sm"
            )}
        >
            <FiGlobe className="text-base" />
            <span className="font-medium uppercase">
                {currentLang === 'tr' ? 'EN' : 'TR'}
            </span>
        </button>
    );
};
