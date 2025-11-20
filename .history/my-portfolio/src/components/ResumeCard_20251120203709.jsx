import { useState } from "react";
import { useLanguage } from "../lib/utils";
import { cn } from "../lib/utils";

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
            case 'skills':
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
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'].map(skill => (
                                        <span 
                                            key={skill} 
                                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-primary mb-3">
                                    {t('resume_skills_backend')}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Python', 'Django'].map(skill => (
                                        <span 
                                            key={skill} 
                                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-primary mb-3">
                                    {t('resume_skills_tools')}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Git', 'Docker', 'VS Code', 'Figma', 'Postman'].map(skill => (
                                        <span 
                                            key={skill} 
                                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-primary mb-3">
                                    {t('resume_skills_languages')}
                                </h4>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span>Türkçe</span>
                                        <span className="text-primary">Native</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>English</span>
                                        <span className="text-primary">Advanced</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
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
                        overflow-hidden
                        transition-all 
                        duration-500
                        hover:scale-[1.01]
                        animate-fade-in
                    "
                >
                    {/* Tab Navigation */}
                    <div className="bg-background/30 border-b border-primary/10">
                        <div className="flex overflow-x-auto justify-center">
                            {tabs.map((tab, index) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={cn(
                                        "px-8 py-3 text-sm font-medium transition-all duration-200 border-b-2 min-w-fit",
                                        "animate-fade-in-delay-" + (index + 1),
                                        activeTab === tab.id
                                            ? "text-primary border-primary bg-primary/5"
                                            : "text-foreground/60 border-transparent hover:text-foreground hover:bg-primary/5"
                                    )}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

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