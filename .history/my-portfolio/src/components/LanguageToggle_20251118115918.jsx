import {useNavigate, useLocation } from 'react-router-dom';
import {cn} from '../lib/utils';

// Flag icon components
const TurkishFlag = () => (
    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="18" fill="#E30A17"/>
        <circle cx="7" cy="9" r="4" fill="white"/>
        <circle cx="8.5" cy="9" r="3" fill="#E30A17"/>
        <polygon points="14,6 16,8 14,10 15,9 13,9" fill="white"/>
    </svg>
);

const BritishFlag = () => (
    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="18" fill="#012169"/>
        <path d="M0 0L24 18M24 0L0 18" stroke="white" strokeWidth="2"/>
        <path d="M0 0L24 18M24 0L0 18" stroke="#C8102E" strokeWidth="1"/>
        <path d="M12 0V18M0 9H24" stroke="white" strokeWidth="4"/>
        <path d="M12 0V18M0 9H24" stroke="#C8102E" strokeWidth="2"/>
    </svg>
);

export const LanguageToggle = ({ className = "" }) => {
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
                "transition-all duration-300",
                "hover:scale-110 active:scale-95",
                "focus:outline-none p-2 rounded-lg bg-background/20 backdrop-blur-sm border border-white/10",
                "shadow-lg hover:shadow-xl",
                className
            )}
        >
            {currentLang === 'tr' ? <BritishFlag /> : <TurkishFlag />}
        </button>
    );
};
