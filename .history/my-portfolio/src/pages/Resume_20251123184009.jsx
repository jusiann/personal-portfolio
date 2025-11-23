import { CrimsonWebBackground } from "../components/CrimsonWebBackground";
import { Navbar } from "../components/Navbar";
import { PageTransition } from "../components/PageTransition";
import { ResumeCard } from "../components/ResumeCard";
import { Footer } from "../components/Footer";


export const Resume = () => {

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
                <ResumeCard />

                {/* FOOTER */}
                <Footer />
            </div>
        </PageTransition>
    );
};
