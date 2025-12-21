import { CrimsonWebBackground } from "../components/CrimsonWebBackground";
import { Navbar } from "../components/Navbar";
import { PageTransition } from "../components/PageTransition";
import { SkillsCard } from "../components/SkillsCard";
import { Footer } from "../components/Footer";

export const Skills = () => {
    return (
        <PageTransition>
            <div className="
                min-h-screen 
                bg-background
                text-foreground 
                overflow-x-hidden
                flex
                flex-col
            ">

                {/* BACKGROUND EFFECTS */}
                <CrimsonWebBackground />

                {/* NAVBAR */}
                <Navbar />

                {/* MAIN CONTENT */}
                <SkillsCard />

                {/* FOOTER */}
                <Footer />
            </div>
        </PageTransition>
    );
};
