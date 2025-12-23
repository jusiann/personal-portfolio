import { useLanguage } from '../lib/utils';
import { getSkillIcon } from '../lib/icons';

import skillsData from '../data/skills.json';

export const SkillsCard = () => {
    const { translate } = useLanguage();

    const SKILLS = {
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
        <div className="relative w-[90%] mx-auto min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center pt-32 pb-8">
            <div className="w-full max-w-6xl">

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
                    <div className="p-6 md:p-8">
                        <div className="space-y-6">
                            {/* Frontend */}
                            <div>
                                <h4 className="text-sm font-semibold text-primary mb-3 text-center uppercase tracking-wider">
                                    {translate('skills.frontend')}
                                </h4>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {SKILLS.frontend.map(skill => (
                                        <SkillCard key={skill.name} skill={skill} />
                                    ))}
                                </div>
                            </div>

                            {/* Backend */}
                            <div>
                                <h4 className="text-sm font-semibold text-primary mb-3 text-center uppercase tracking-wider">
                                    {translate('skills.backend')}
                                </h4>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {SKILLS.backend.map(skill => (
                                        <SkillCard key={skill.name} skill={skill} />
                                    ))}
                                </div>
                            </div>

                            {/* Tools */}
                            <div>
                                <h4 className="text-sm font-semibold text-primary mb-3 text-center uppercase tracking-wider">
                                    {translate('skills.tools')}
                                </h4>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {SKILLS.tools.map(skill => (
                                        <SkillCard key={skill.name} skill={skill} />
                                    ))}
                                </div>
                            </div>
                        </div>
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
