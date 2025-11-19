import {ThemeToggle} from "../components/ThemeToggle";
import {LanguageToggle} from "../components/LanguageToggle";
import {CrimsonWebBackground} from "../components/CrimsonWebBackground";
import {Navbar} from "../components/Navbar";
import {PageTransition} from "../components/PageTransition";
import {HomeCard} from "../components/HomeCard";

export const Home = () => {
    return (
        <PageTransition>
        <div className="
                        min-h-screen 
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
            <HomeCard />
        </div>
        </PageTransition>
    ); 
};