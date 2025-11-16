import {ThemeToggle} from "../components/ThemeToggle";
import {LanguageToggle} from "../components/LanguageToggle";
import {CrimsonWebBackground} from "../components/CrimsonWebBackground";
import {Navbar} from "../components/Navbar";
import {LanguageProvider} from "../contexts/LanguageContext";

export const Home = ({ lang = 'tr' }) => {
    return (
        <LanguageProvider language={lang}>
            <div className="
                            mih-h-screen 
                            bg-background 
                            text-foreground 
                            overflow-x-hidden">
                {/* THEME TOGGLE */}
                <ThemeToggle />
                {/* LANGUAGE TOGGLE */}
                <LanguageToggle />
                {/* BACKGROUND EFFECTS */}
                <CrimsonWebBackground />

                {/* NAVBAR */}
                <Navbar />
                {/* MAIN CONTENT */}

                {/* FOOTER */}
            </div>
        </LanguageProvider>
    );
};