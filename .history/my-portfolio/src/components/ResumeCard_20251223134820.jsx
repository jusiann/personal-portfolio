import { useState, useRef, useEffect } from 'react';
import { useLanguage, cn } from '../lib/utils';
import { getSkillIcon, FiMail, FiPhone, FiUser, FiCalendar, FiBriefcase, FiMapPin, FiGlobe } from '../lib/icons';

import skillsData from '../data/skills.json';

export const ResumeCard = () => {
    const { translate } = useLanguage();
    const [activeTab, setActiveTab] = useState('about');
    const contentRef = useRef(null);

    // RESET SCROLL POSITION
    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, [activeTab]);

    const tabs = [
        { id: 'about', label: translate('resume.about_title') },
        { id: 'education', label: translate('resume.education_title') },
        { id: 'experience', label: translate('resume.experience_title') },
    ];

    const renderContent = () => {
        switch (activeTab) {
            // ... (about, education, experience cases remain mostly same but could rely on profile.json too)
            // For now let's focus on the massive Skills object.

            case 'about':
                return (
                    <div>
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                            {translate('resume.about_title')}
                        </h3>
                        <p className="text-foreground/80 leading-relaxed text-lg mb-8 text-justify">
                            {translate('resume.about_text')}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 p-2 pl-3 rounded-lg bg-primary/2 border border-primary/10 hover:bg-primary/4 transition-colors duration-200">
                                    <FiUser className="text-primary mt-0.5 shrink-0" />
                                    <span className="text-foreground/80 text-sm">{translate('home.name')} {translate('home.surname')}</span>
                                </div>
                                <div className="flex items-start gap-3 p-2 pl-3 rounded-lg bg-primary/2 border border-primary/10 hover:bg-primary/4 transition-colors duration-200">
                                    <FiCalendar className="text-primary mt-0.5 shrink-0" />
                                    <span className="text-foreground/80 text-sm">{translate('resume.birth_day')} {translate('resume.february')} {translate('resume.birth_year')}</span>
                                </div>
                                <div className="flex items-start gap-3 p-2 pl-3 rounded-lg bg-primary/2 border border-primary/10 hover:bg-primary/4 transition-colors duration-200">
                                    <FiBriefcase className="text-primary mt-0.5 shrink-0" />
                                    <span className="text-foreground/80 text-sm">{translate('resume.position')}</span>
                                </div>
                                <div className="flex items-start gap-3 p-2 pl-3 rounded-lg bg-primary/2 border border-primary/10 hover:bg-primary/4 transition-colors duration-200">
                                    <FiMapPin className="text-primary mt-0.5 shrink-0" />
                                    <span className="text-foreground/80 text-sm">{translate('resume.location')}</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 p-2 pl-3 rounded-lg bg-primary/2 border border-primary/10 hover:bg-primary/4 transition-colors duration-200">
                                    <FiMail className="text-primary mt-0.5 shrink-0" />
                                    <span className="text-foreground/80 text-sm">{translate('resume.email')}</span>
                                </div>
                                <div className="flex items-start gap-3 p-2 pl-3 rounded-lg bg-primary/2 border border-primary/10 hover:bg-primary/4 transition-colors duration-200">
                                    <FiPhone className="text-primary mt-0.5 shrink-0" />
                                    <span className="text-foreground/80 text-sm">{translate('resume.phone')}</span>
                                </div>
                                <div className="flex items-start gap-3 p-2 pl-3 rounded-lg bg-primary/2 border border-primary/10 hover:bg-primary/4 transition-colors duration-200">
                                    <FiGlobe className="text-primary mt-0.5 shrink-0" />
                                    <span className="text-foreground/80 text-sm">{translate('resume.turkish')} ({translate('resume.native')}), {translate('resume.english')} ({translate('resume.english_level')})</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'education':
                return (
                    <div>
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">
                            {translate('resume.education_title')}
                        </h3>

                        {/* Timeline */}
                        <div className="relative pl-8">
                            {/* Timeline Line - starts below the first dot */}
                            <div className="absolute left-[7px] top-12 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

                            {/* University */}
                            <div className="relative pb-6 group">
                                {/* Timeline Dot with pulse */}
                                <div className="absolute -left-8 top-6 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/40 ring-4 ring-background group-hover:scale-125 transition-transform duration-300 z-10">
                                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                                </div>

                                <div className="bg-card/5 group-hover:bg-card/10 rounded-xl p-6 transition-colors duration-300 border border-primary/10 group-hover:border-primary/30 text-center">
                                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                                        {translate('resume.education.university_start')} - {translate('resume.present')}
                                    </span>
                                    <h4 className="text-xl font-semibold text-foreground mb-2">
                                        {translate('resume.education.university_degree')}
                                    </h4>
                                    <p className="text-primary font-medium">
                                        {translate('resume.education.university_name')}
                                    </p>
                                </div>
                            </div>

                            {/* High School */}
                            <div className="relative group">
                                {/* Timeline Dot - no pulse for completed education */}
                                <div className="absolute -left-8 top-6 w-4 h-4 rounded-full bg-primary/50 shadow-lg shadow-primary/20 ring-4 ring-background group-hover:scale-125 transition-transform duration-300 z-10" />


                                <div className="bg-card/5 group-hover:bg-card/10 rounded-xl p-6 transition-colors duration-300 border border-primary/10 group-hover:border-primary/30 text-center">
                                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary/70 text-xs font-medium mb-3">
                                        {translate('resume.education.highschool_start')} - {translate('resume.education.highschool_end')}
                                    </span>
                                    <h4 className="text-xl font-semibold text-foreground mb-2">
                                        {translate('resume.education.highschool_degree')}
                                    </h4>
                                    <p className="text-primary/70 font-medium">
                                        {translate('resume.education.highschool_name')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'experience':
                return (
                    <div>
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">
                            {translate('resume.experience_title')}
                        </h3>

                        {/* Timeline */}
                        <div className="relative pl-8">
                            {/* Timeline Line - starts below the dot */}
                            <div className="absolute left-[7px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/30" />

                            {/* YAPIRADAR */}
                            <div className="relative group">
                                {/* Timeline Dot with pulse */}
                                <div className="absolute -left-8 top-6 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/40 ring-4 ring-background group-hover:scale-125 transition-transform duration-300 z-10">
                                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                                </div>

                                <div className="bg-card/5 group-hover:bg-card/10 rounded-xl p-6 transition-colors duration-300 border border-primary/10 group-hover:border-primary/30 text-center">
                                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                                        {translate('resume.experience.yapiradar_start')} - {translate('resume.present')}
                                    </span>
                                    <h4 className="text-xl font-semibold text-foreground mb-2">
                                        {translate('resume.experience.yapiradar_title')}
                                    </h4>
                                    <p className="text-primary font-medium mb-3">
                                        {translate('resume.experience.yapiradar_company')}
                                    </p>
                                    <p className="text-sm text-foreground/70 leading-relaxed">
                                        {translate('resume.experience.yapiradar_description')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'skills': {
                const skillsDataWithIcons = {
                    frontend: skillsData.frontend.map(s => ({ ...s, icon: getSkillIcon(s.icon) })),
                    backend: skillsData.backend.map(s => ({ ...s, icon: getSkillIcon(s.icon) })),
                    tools: skillsData.tools.map(s => ({ ...s, icon: getSkillIcon(s.icon) }))
                };

                const SkillCard = ({ skill }) => {
                    const totalSegments = 5;
                    const filledSegments = skill.level;
                    const radius = 16;
                    const cx = 22;
                    const cy = 22;
                    const gapDegrees = 20;
                    const segmentDegrees = (360 - (gapDegrees * totalSegments)) / totalSegments;

                    const describeArc = (startAngle, endAngle) => {
                        const start = {
                            x: cx + radius * Math.cos((startAngle - 90) * Math.PI / 180),
                            y: cy + radius * Math.sin((startAngle - 90) * Math.PI / 180)
                        };
                        const end = {
                            x: cx + radius * Math.cos((endAngle - 90) * Math.PI / 180),
                            y: cy + radius * Math.sin((endAngle - 90) * Math.PI / 180)
                        };
                        const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
                        return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
                    };

                    const getSegmentPath = (index) => {
                        const startAngle = index * (segmentDegrees + gapDegrees);
                        const endAngle = startAngle + segmentDegrees;
                        return describeArc(startAngle, endAngle);
                    };

                    return (
                        <div className="
                            group
                            relative
                            flex flex-col items-center
                            p-4
                            rounded-xl
                            bg-card/5
                            hover:bg-primary/5
                            transition-all duration-300
                            hover:scale-105
                            cursor-default
                        ">
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />

                            {/* 5-Segment Circular Progress */}
                            <div className="relative w-14 h-14 mb-2">
                                <svg className="w-14 h-14" viewBox="0 0 44 44">
                                    {/* 5 dilim çiz */}
                                    {[...Array(totalSegments)].map((_, i) => (
                                        <path
                                            key={i}
                                            d={getSegmentPath(i)}
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            className={i < filledSegments ? "text-primary" : "text-foreground/15"}
                                        />
                                    ))}
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <skill.icon className="w-5 h-5 text-primary" />
                                </div>
                            </div>

                            <span className="text-xs text-foreground/70 text-center font-medium group-hover:text-foreground/90 transition-colors">
                                {skill.name}
                            </span>
                        </div>
                    );
                };

                return (
                    <div>
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">
                            {translate('resume_skills_title')}
                        </h3>

                        <div className="space-y-6">
                            {/* Frontend */}
                            <div>
                                <h4 className="text-sm font-semibold text-primary mb-3 text-center uppercase tracking-wider">
                                    {translate('resume_skills_frontend')}
                                </h4>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {skillsDataWithIcons.frontend.map(skill => (
                                        <SkillCard key={skill.name} skill={skill} />
                                    ))}
                                </div>
                            </div>

                            {/* Backend */}
                            <div>
                                <h4 className="text-sm font-semibold text-primary mb-3 text-center uppercase tracking-wider">
                                    {translate('resume_skills_backend')}
                                </h4>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {skillsDataWithIcons.backend.map(skill => (
                                        <SkillCard key={skill.name} skill={skill} />
                                    ))}
                                </div>
                            </div>

                            {/* Tools */}
                            <div>
                                <h4 className="text-sm font-semibold text-primary mb-3 text-center uppercase tracking-wider">
                                    {translate('resume_skills_tools')}
                                </h4>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {skillsDataWithIcons.tools.map(skill => (
                                        <SkillCard key={skill.name} skill={skill} />
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

                {/* TAB NAVIGATION */}
                <div className="mb-6 flex flex-col md:flex-row justify-center gap-2">
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

                {/* CARD */}
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
                        transition-transform 
                        duration-500
                        hover:scale-[1.01]
                    "
                >
                    {/* CONTENT */}
                    <div ref={contentRef} className="p-6 md:p-8 h-[460px] overflow-y-auto">
                        {renderContent()}
                    </div>
                </div>

                {/* GLOW EFFECT */}
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
