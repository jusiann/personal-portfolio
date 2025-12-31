import { useState, useRef, useEffect } from 'react';
import { useLanguage, cn } from '../lib/utils';
import { FiMail, FiPhone, FiUser, FiCalendar, FiBriefcase, FiMapPin, FiGlobe } from '../lib/icons';

function ResumeCard() {
    const { translate } = useLanguage();
    const [activeTab, setActiveTab] = useState('about');
    const contentRef = useRef(null);

    const tabs = [
        { id: 'about', label: translate('resume.about_title') },
        { id: 'education', label: translate('resume.education_title') },
        { id: 'experience', label: translate('resume.experience_title') },
    ];

    // RESET SCROLL POSITION
    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, [activeTab]);

    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return (
                    <div>

                        {/* ABOUT ME */}
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                            {translate('resume.about_title')}
                        </h3>
                        <p className="text-foreground/80 leading-relaxed text-lg mb-8 text-justify">
                            {translate('resume.about_text')}
                        </p>

                        {/* PERSONAL INFO */}
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

                        {/* HOBBIES & INTERESTS */}
                        <div className="mt-8 text-center">
                            <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
                                {translate('resume.hobbies_title')}
                            </h4>
                            <div className="flex flex-wrap justify-center gap-3">
                                {['fitness', 'walking', 'origami', 'reading', 'photography', 'music'].map((hobby) => (
                                    <span
                                        key={hobby}
                                        className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                                    >
                                        {translate(`resume.hobbies.${hobby}`)}
                                    </span>
                                ))}
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

                        {/* TIMELINE */}
                        <div className="relative pl-8">

                            <div className="absolute left-[7px] top-12 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

                            {/* UNIVERSITY */}
                            <div className="relative pb-6 group">

                                {/* TIMELINE DOT */}
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

                            {/* HIGH SCHOOL */}
                            <div className="relative group">

                                {/* TIMELINE DOT  */}
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

                        {/* TIMELINE */}
                        <div className="relative pl-8">
                            <div className="absolute left-[7px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/30" />

                            {/* YAPIRADAR */}
                            <div className="relative group">
                                {/* TIMELINE DOT */}
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
}

export default ResumeCard;