import {CrimsonWebBackground} from "../components/CrimsonWebBackground";
import {Navbar} from "../components/Navbar";
import {PageTransition} from "../components/PageTransition";
import {ProjectCard} from "../components/ProjectCard";

export const Projects = () => {
    return (
        <PageTransition>
            <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
                <CrimsonWebBackground />
                <Navbar />
                
                <div className="relative w-[90%] mx-auto min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center pt-32 pb-8">
                    <div className="w-full max-w-6xl">
                        <ProjectCard />
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};