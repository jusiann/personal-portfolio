import { useState } from "react";
import { useLanguage } from "../lib/utils";
import { cn } from "../lib/utils";
import { 
    SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiTailwindcss,
    SiC, SiCplusplus, SiPython, SiPostgresql, SiMongodb,
    SiGit, SiFigma, SiPostman, SiBlender, SiUnity
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { FaJava } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export const ResumeCard = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState('about');

    const tabs = [
        { id: 'about', label: t('resume_about_title') },
        { id: 'education', label: t('resume_education_title') },
        { id: 'skills', label: t('resume_skills_title') },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return (
                    <div className="animate-fade-in">
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                            {t('resume_about_title')}
                        </h3>
                        <p className="text-foreground/80 leading-relaxed text-lg">
                            {t('profile_tagline')}
                        </p>
                        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="text-primary font-semibold">Ad:</span> {t('profile_name')}
                            </div>
                            <div>
                                <span className="text-primary font-semibold">Soyad:</span> {t('profile_surname')}
                            </div>
                            <div>
                                <span className="text-primary font-semibold">Pozisyon:</span> {t('hero_subtitle')}
                            </div>
                            <div>
                                <span className="text-primary font-semibold">Konum:</span> İstanbul, TR
                            </div>
                        </div>
                    </div>
                );
            case 'education':
                return (
                    <div className="animate-fade-in">
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                            {t('resume_education_title')}
                        </h3>
                        <div className="space-y-4">
                            <div className="border-l-4 border-primary pl-4">
                                <h4 className="text-lg font-semibold text-foreground">
                                    Bilgisayar Mühendisliği
                                </h4>
                                <p className="text-primary font-medium">
                                    İstanbul Teknik Üniversitesi
                                </p>
                                <p className="text-sm text-foreground/60">
                                    2018 - 2022
                                </p>
                            </div>
                            <div className="border-l-4 border-primary/50 pl-4">
                                <h4 className="text-lg font-semibold text-foreground">
                                    Lise Diploması
                                </h4>
                                <p className="text-primary/80 font-medium">
                                    Fen Lisesi
                                </p>
                                <p className="text-sm text-foreground/60">
                                    2014 - 2018
                                </p>
                            </div>
                        </div>
                    </div>
                );
            case 'skills': {
                const skillsData = {
                    frontend: [
                        { name: 'HTML5', icon: SiHtml5 },
                        { name: 'CSS3', icon: SiCss3 },
                        { name: 'JavaScript', icon: SiJavascript },
                        { name: 'React', icon: SiReact },
                        { name: 'Bootstrap', icon: SiBootstrap },
                        { name: 'Tailwind CSS', icon: SiTailwindcss },
                    ],
                    backend: [
                        { name: 'C', icon: SiC },
                        { name: 'C++', icon: SiCplusplus },
                        { name: 'C#', icon: TbBrandCSharp },
                        { name: 'Java', icon: FaJava },
                        { name: 'Python', icon: SiPython },
                        { name: 'PostgreSQL', icon: SiPostgresql },
                        { name: 'MongoDB', icon: SiMongodb },
                    ],
                    tools: [
                        { name: 'Git', icon: SiGit },
                        { name: 'VS Code', icon: VscCode },
                        // { name: 'Figma', icon: SiFigma },
                        { name: 'Postman', icon: SiPostman },
                        { name: 'Blender', icon: SiBlender },
                        { name: 'Unity', icon: SiUnity },
                    ]
                };

                return (
                    <div className="animate-fade-in">
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                            {t('resume_skills_title')}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-lg font-semibold text-primary mb-3">
                                    {t('resume_skills_frontend')}
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {skillsData.frontend.map(skill => (
                                        <div 
                                            key={skill.name} 
                                            className="relative group"
                                        >
                                            <div className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer text-foreground/70 hover:text-primary">
                                                <skill.icon className="w-7 h-7" />
                                            </div>
                                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm text-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-primary/20">
                                                {skill.name}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-primary mb-3">
                                    {t('resume_skills_backend')}
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {skillsData.backend.map(skill => (
                                        <div 
                                            key={skill.name} 
                                            className="relative group"
                                        >
                                            <div className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer text-foreground/70 hover:text-primary">
                                                <skill.icon className="w-7 h-7" />
                                            </div>
                                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm text-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-primary/20">
                                                {skill.name}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-primary mb-3">
                                    {t('resume_skills_tools')}
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {skillsData.tools.map(skill => (
                                        <div 
                                            key={skill.name} 
                                            className="relative group"
                                        >
                                            <div className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer text-foreground/70 hover:text-primary">
                                                <skill.icon className="w-7 h-7" />
                                            </div>
                                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm text-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-primary/20">
                                                {skill.name}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
            default:
                return null;
        }
    };

    return (
        <div className="relative w-[90%] mx-auto min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center pt-32 pb-8">
            <div className="w-full max-w-6xl">
                {/* Tab Navigation */}
                <div className="mb-6 animate-fade-in">
                    <div className="flex flex-col md:flex-row overflow-x-auto justify-center bg-background/20 backdrop-blur-sm rounded-lg p-1 gap-1">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    "px-6 py-2 text-sm font-medium transition-all duration-200 rounded-md min-w-fit w-full md:w-auto",
                                    "animate-fade-in-delay-" + (index + 1),
                                    activeTab === tab.id
                                        ? "text-primary bg-primary/10 shadow-sm"
                                        : "text-foreground/60 hover:text-foreground hover:bg-primary/5"
                                )}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Card */}
                <div 
                    className="
                        relative 
                        bg-card/10 
                        backdrop-blur-sm
                        rounded-2xl 
                        border-l-4 
                        border-primary
                        shadow-2xl
                        overflow-hidden
                        transition-all 
                        duration-500
                        hover:scale-[1.01]
                        animate-fade-in-delay-2
                    "
                >
                    {/* Content */}
                    <div className="p-6 md:p-8 min-h-[400px]">
                        {renderContent()}
                    </div>
                </div>

                {/* Glow Effect */}
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
    );
};