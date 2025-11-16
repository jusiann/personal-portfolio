import {ThemeToggle} from "../components/ThemeToggle";
import {CrimsonWebBackground} from "../components/CrimsonWebBackground";
import {Navbar} from "../components/Navbar";

export const Home = () => {
    return <div className="
                            mih-h-screen 
                            bg-background 
                            text-foreground 
                            overflow-x-hidden">
        {/* THEME TOGGLE */}
        <ThemeToggle />
        {/* BACKGROUND EFFECTS */}
        <CrimsonWebBackground />

        {/* NAVBAR */}
        <Navbar />
        {/* MAIN CONTENT */}

        {/* FOOTER */}
    </div>
};