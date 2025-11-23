import {useNavigate, useLocation } from 'react-router-dom';
import {cn} from '../lib/utils';

export const LanguageToggle = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentLang = location.pathname.startsWith('/en') ? 'en' : 'tr';

    const toggleLanguage = () => {
        const newLang = currentLang === 'tr' ? 'en' : 'tr';
        navigate(`/${newLang}${location.hash}`);
    };

    return (
        <>
            {/* LANGUAGE TOGGLE BUTTON */}  
            <button
                onClick={toggleLanguage}
                className={cn(
                    "px-3 py-2 transition-all duration-300",
                    "hover:scale-110 active:scale-95",
                    "focus:outline-none text-foreground/80 hover:text-foreground",
                    "text-sm font-medium uppercase"
                )}
            >
                {currentLang === 'tr' ? 'EN' : 'TR'}
            </button>
        </>
    );
};
