import { useLanguageContext } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguageContext();

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
                {language === "tr" ? "EN" : "TR"}
            </button>
        </>
    );
};
