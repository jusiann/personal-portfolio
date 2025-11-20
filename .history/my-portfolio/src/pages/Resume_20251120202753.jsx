import {CrimsonWebBackground} from "../components/CrimsonWebBackground";
import {Navbar} from "../components/Navbar";
import {PageTransition} from "../components/PageTransition";
import {Briefcase, GraduationCap, Code2, Award} from "lucide-react";

export const Resume = () => {

    return (
        <PageTransition>
        <div className="
                        min-h-screen 
                        bg-background 
                        text-foreground 
                        overflow-x-hidden">
            {/* BACKGROUND EFFECTS */}
            <CrimsonWebBackground />

            {/* NAVBAR */}
            <Navbar />
            
            {/* MAIN CONTENT */}
            <div className="container pt-32">
                <h1 className="text-4xl font-bold text-primary">Pesume</h1>
                {/* Projects content buraya gelecek */}
            </div>

            {/* FOOTER */}
        </div>
        </PageTransition>
    );
};
