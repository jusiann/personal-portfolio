import {useNavigate, useLocation } from 'react-router-dom';
import {cn} from '../lib/utils';
import { FaFlag } from 'react-icons/fa';
import { GiTurkey } from 'react-icons/gi';

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
                "text-lg"
            )}
        >
            {currentLang === 'tr' ? <FaFlag className="text-blue-500" /> : <GiTurkey className="text-red-500" />}
        </button>
    );
};
