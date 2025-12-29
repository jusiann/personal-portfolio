import { CrimsonWebBackground } from "../components/CrimsonWebBackground";
import { Navbar } from "../components/Navbar";
import { PageTransition } from "../components/PageTransition";
import { ProjectCard } from "../components/ProjectCard";
import { Footer } from "../components/Footer";

function Projects() {
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
                <ProjectCard />

                {/* FOOTER */}
                <Footer />
            </div>
        </PageTransition>
    );
}

export default Projects;