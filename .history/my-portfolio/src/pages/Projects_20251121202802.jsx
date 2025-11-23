import {useState, useEffect} from "react";
import {CrimsonWebBackground} from "../components/CrimsonWebBackground";
import {Navbar} from "../components/Navbar";
import {PageTransition} from "../components/PageTransition";
import {ProjectCard} from "../components/ProjectCard";
import {useLanguage} from "../lib/utils";

export const Projects = () => {
    const {t} = useLanguage();
    const [currentProject, setCurrentProject] = useState(0);

    const projects = [
        {
            name: t('project_parkour_name'),
            description: t('project_parkour_description'),
            images: [
                '/src/assets/images/projects/parkour_shooter_game/1.png',
                '/src/assets/images/projects/parkour_shooter_game/2.png',
                '/src/assets/images/projects/parkour_shooter_game/3.png',
            ],
        },
        {
            name: t('project_endless_name'),
            description: t('project_endless_description'),
            images: [
                '/src/assets/images/projects/endless_survival_game/1.png',
                '/src/assets/images/projects/endless_survival_game/2.png',
                '/src/assets/images/projects/endless_survival_game/3.png',
            ],
        },
        {
            name: t('project_myhabits_name'),
            description: t('project_myhabits_description'),
            images: [
                '/src/assets/images/projects/myhabits_desktop_app/1.png',
                '/src/assets/images/projects/myhabits_desktop_app/2.png',
                '/src/assets/images/projects/myhabits_desktop_app/3.png',
            ],
        },
        {
            name: t('project_chatting_name'),
            description: t('project_chatting_description'),
            images: [
                '/src/assets/images/projects/chatting_app/1.png',
                '/src/assets/images/projects/chatting_app/2.png',
                '/src/assets/images/projects/chatting_app/3.png',
            ],
        },
        {
            name: t('project_habits_mobile_name'),
            description: t('project_habits_mobile_description'),
            images: [
                '/src/assets/images/projects/habits_mobile_app/1.png',
                '/src/assets/images/projects/habits_mobile_app/2.png',
                '/src/assets/images/projects/habits_mobile_app/3.png',
            ],
        },
    ];

    useEffect(() => {
        const handleNext = () => {
            setCurrentProject((prev) => (prev + 1) % projects.length);
        };

        const handlePrev = () => {
            setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
        };

        window.addEventListener('nextProject', handleNext);
        window.addEventListener('prevProject', handlePrev);

        return () => {
            window.removeEventListener('nextProject', handleNext);
            window.removeEventListener('prevProject', handlePrev);
        };
    }, [projects.length]);

    return (
        <PageTransition>
            <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
                <CrimsonWebBackground />
                <Navbar />
                
                <div className="relative w-[90%] mx-auto min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center pt-32 pb-8">
                    <div className="w-full max-w-6xl">
                        <ProjectCard project={projects[currentProject]} />
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};