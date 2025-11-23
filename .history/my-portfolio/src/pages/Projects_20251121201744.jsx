import {useState} from "react";
import {CrimsonWebBackground} from "../components/CrimsonWebBackground";
import {Navbar} from "../components/Navbar";
import {PageTransition} from "../components/PageTransition";
import {useLanguage} from "../lib/utils";

export const Projects = () => {
    const {t} = useLanguage();
    const [currentProject, setCurrentProject] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

    const currentProjectData = projects[currentProject];
    const totalImages = currentProjectData.images.length;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    };

    const nextProject = () => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
        setCurrentImageIndex(0);
    };

    const prevProject = () => {
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
        setCurrentImageIndex(0);
    };

    return (
        <PageTransition>
            <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
                <CrimsonWebBackground />
                <Navbar />
                
                <div className="relative w-[90%] mx-auto min-h-[calc(100vh-8rem)] flex items-center justify-center pt-32 pb-8">
                    <div className="w-full max-w-6xl">
                        <div 
                            className="
                                relative 
                                bg-card/10 
                                backdrop-blur-sm
                                rounded-2xl 
                                border-l-4 
                                border-primary
                                shadow-2xl
                                p-6
                                md:p-8
                                min-h-[400px]
                                transition-all 
                                duration-500
                                hover:scale-[1.01]
                            "
                        >
                            <div className="space-y-6">
                                <div className="relative aspect-video bg-card/20 rounded-lg overflow-hidden flex items-center justify-center">
                                    <img 
                                        src={currentProjectData.images[currentImageIndex]} 
                                        alt={`${currentProjectData.name} - ${currentImageIndex + 1}`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="450"%3E%3Crect fill="%23dc2626" width="800" height="450"/%3E%3Ctext fill="%23fff" font-family="system-ui" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EProject Image%3C/text%3E%3C/svg%3E';
                                        }}
                                    />
                                    
                                    {totalImages > 1 && (
                                        <>
                                            <button 
                                                onClick={prevImage}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80 transition-colors"
                                                aria-label="Previous image"
                                            >
                                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                            <button 
                                                onClick={nextImage}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80 transition-colors"
                                                aria-label="Next image"
                                            >
                                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </>
                                    )}
                                </div>

                                <div className="border-l-4 border-primary pl-4">
                                    <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground mb-2">
                                        {currentProjectData.name}
                                    </h2>
                                    <div className="w-full h-0.5 bg-primary/30 mb-4" />
                                    <p className="text-primary font-medium">
                                        {currentProjectData.description}
                                    </p>
                                </div>

                                <div className="flex justify-center gap-8 pt-4">
                                    <button 
                                        onClick={prevProject}
                                        className="text-yellow-300 hover:text-yellow-400 transition-colors"
                                        aria-label="Previous project"
                                    >
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button 
                                        onClick={nextProject}
                                        className="text-yellow-300 hover:text-yellow-400 transition-colors"
                                        aria-label="Next project"
                                    >
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div 
                                className="
                                    absolute 
                                    -inset-4 
                                    bg-primary/5 
                                    blur-3xl 
                                    -z-10 
                                    opacity-50
                                    animate-pulse-subtle
                                "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};