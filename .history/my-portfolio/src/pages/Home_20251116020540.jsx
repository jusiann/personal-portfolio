import {ThemeToggle} from "../components/ThemeToggle";
import {LanguageToggle} from "../components/LanguageToggle";
import {CrimsonWebBackground} from "../components/CrimsonWebBackground";
import {Navbar} from "../components/Navbar";
import {PageTransition} from "../components/PageTransition";

export const Home = () => {
    return (
        <PageTransition>
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
        </PageTransition>
    );
};