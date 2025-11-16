import {ThemeToggle} from "../components/ThemeToggle";
import {LanguageToggle} from "../components/LanguageToggle";
import {CrimsonWebBackground} from "../components/CrimsonWebBackground";
import {Navbar} from "../components/Navbar";
import {PageTransition} from "../components/PageTransition";

export const Skills = () => {
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
            <div className="container pt-32">
                <h1 className="text-4xl font-bold text-primary">Skills</h1>
                {/* Skills content buraya gelecek */}
            </div>

            {/* FOOTER */}
        </div>
        </PageTransition>
    );
};