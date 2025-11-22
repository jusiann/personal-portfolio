import { useState } from "react";
import { useLanguage } from "../lib/utils";
import { cn } from "../lib/utils";
import {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiTailwindcss,
    SiCplusplus, SiPython, SiPostgresql, SiMongodb, SiMysql, SiNodedotjs, SiExpress,
    SiGit, SiFigma, SiPostman, SiBlender, SiUnity, SiJsonwebtokens, SiNpm, SiJira, SiEslint,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { FiMail, FiPhone, FiUser, FiCalendar, FiBriefcase, FiMapPin, FiGlobe } from 'react-icons/fi';

export const ResumeCard = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState('about');

    const tabs = [
        { id: 'about', label: t('resume_about_title') },
        { id: 'education', label: t('resume_education_title') },
        { id: 'experience', label: t('resume_experience_title') },
        { id: 'skills', label: t('resume_skills_title') },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return (
                    <div>
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                            {t('resume_about_title')}
                        </h3>
                        <p className="text-foreground/80 leading-relaxed text-lg mb-8">
                            {t('profile_about_text')}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 p-2 pl-3 rounded-lg bg-primary/2 border border-primary/10 hover:bg-primary/4 transition-colors duration-200">
                                    <FiUser className="text-primary mt-0.5 shrink-0" />
                                    <span className="text-foreground/80 text-sm">{t('profile_name')} {t('profile_surname')}</span>
                                </div>
                                <div className="flex items-start gap-3 p-2 pl-3 rounded-lg bg-primary/2 border border-primary/10 hover:bg-primary/4 transition-colors duration-200">
                                    <FiCalendar className="text-primary mt-0.5 shrink-0" />
                                    <span className="text-foreground/80 text-sm">7 {t('february')} 2004</span>
                                </div>
                                <div className="flex items-start gap-3 p-2 pl-3 rounded-lg bg-primary/2 border border-primary/10 hover:bg-primary/4 transition-colors duration-200">
                                    <FiBriefcase className="text-primary mt-0.5 shrink-0" />
                                    <span className="text-foreground/80 text-sm">{t('current_position')}</span>
                                </div>
                                <div className="flex items-start gap-3 p-2 pl-3 rounded-lg bg-primary/2 border border-primary/10 hover:bg-primary/4 transition-colors duration-200">
                                    <FiMapPin className="text-primary mt-0.5 shrink-0" />
                                    <span className="text-foreground/80 text-sm">{t('location_city')}</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 p-2 pl-3 rounded-lg bg-primary/2 border border-primary/10 hover:bg-primary/4 transition-colors duration-200">
                                    <FiMail className="text-primary mt-0.5 shrink-0" />
                                    <span className="text-foreground/80 text-sm">adilefe257@gmail.com</span>
                                </div>
                                <div className="flex items-start gap-3 p-2 pl-3 rounded-lg bg-primary/2 border border-primary/10 hover:bg-primary/4 transition-colors duration-200">
                                    <FiPhone className="text-primary mt-0.5 shrink-0" />
                                    <span className="text-foreground/80 text-sm">+90 545 676 43 24</span>
                                </div>
                                <div className="flex items-start gap-3 p-2 pl-3 rounded-lg bg-primary/2 border border-primary/10 hover:bg-primary/4 transition-colors duration-200">
                                    <FiGlobe className="text-primary mt-0.5 shrink-0" />
                                    <span className="text-foreground/80 text-sm">{t('turkish')} ({t('native')}), {t('english')} (B1)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'education':
                return (
                    <div>
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                            {t('resume_education_title')}
                        </h3>
                        <div className="space-y-4">
                            <div className="border-l-4 border-primary pl-4">
                                <h4 className="text-lg font-semibold text-foreground">
                                    {t('education_university_degree')}
                                </h4>
                                <p className="text-primary font-medium">
                                    {t('education_university_name')}
                                </p>
                                <p className="text-sm text-foreground/60">
                                    2023 - {t('present')}
                                </p>
                            </div>
                            <div className="border-l-4 border-primary/50 pl-4">
                                <h4 className="text-lg font-semibold text-foreground">
                                    {t('education_highschool_degree')}
                                </h4>
                                <p className="text-primary/80 font-medium">
                                    {t('education_highschool_name')}
                                </p>
                                <p className="text-sm text-foreground/60">
                                    2018 - 2022
                                </p>
                            </div>
                        </div>
                    </div>
                );
            case 'experience':
                return (
                    <div>
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                            {t('resume_experience_title')}
                        </h3>
                        <div className="space-y-6">
                            <div className="border-l-4 border-primary pl-4">
                                <h4 className="text-lg font-semibold text-foreground">
                                    {t('experience_yapiradar_title')}
                                </h4>
                                <p className="text-primary font-medium">
                                    {t('experience_yapiradar_company')}
                                </p>
                                <p className="text-sm text-foreground/60 mb-2">
                                    2024 - {t('present')}
                                </p>
                                <p className="text-sm text-foreground/70">
                                    {t('experience_yapiradar_description')}
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
                        { name: 'C++', icon: SiCplusplus },
                        { name: 'Java', icon: FaJava },
                        { name: 'Python', icon: SiPython },
                        { name: 'Node.js', icon: SiNodedotjs },
                        { name: 'Express', icon: SiExpress },
                        { name: 'PostgreSQL', icon: SiPostgresql },
                        { name: 'MongoDB', icon: SiMongodb },
                        { name: 'MySQL', icon: SiMysql },
                    ],
                    tools: [
                        { name: 'Git', icon: SiGit },
                        { name: 'VS Code', icon: VscVscode },
                        { name: 'Postman', icon: SiPostman },
                        { name: 'JWT', icon: SiJsonwebtokens },
                        { name: 'NPM', icon: SiNpm },
                        { name: 'Jira', icon: SiJira },
                        { name: 'ESLint', icon: SiEslint },
                        { name: 'Blender', icon: SiBlender },
                        { name: 'Unity', icon: SiUnity },
                    ]
                };

                return (
                    <div>
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
                <div className="mb-6">
                    <div className="flex flex-col md:flex-row overflow-x-auto justify-center bg-background/20 backdrop-blur-sm rounded-lg p-1 gap-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    "px-6 py-2 text-sm font-medium transition-all duration-200 rounded-md min-w-fit w-full md:w-auto",
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