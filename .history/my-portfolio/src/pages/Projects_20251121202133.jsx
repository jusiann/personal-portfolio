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
            name: t('project_portfolio_name'),
            description: t('project_portfolio_description'),
            images: [
                '/src/assets/images/project1-1.png',
                '/src/assets/images/project1-2.png',
                '/src/assets/images/project1-3.png',
            ],
            technologies: ['React', 'Tailwind CSS', 'Vite'],
        },
        {
            name: t('project_ecommerce_name'),
            description: t('project_ecommerce_description'),
            images: [
                '/src/assets/images/project2-1.png',
                '/src/assets/images/project2-2.png',
            ],
            technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
        },
        {
            name: t('project_taskmanager_name'),
            description: t('project_taskmanager_description'),
            images: [
                '/src/assets/images/project3-1.png',
            ],
            technologies: ['React', 'Firebase', 'Material-UI'],
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