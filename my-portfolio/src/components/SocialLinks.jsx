import { useState, useEffect } from 'react';
import { useLanguage } from '../lib/utils';
import { FiDownload, SiGithub, SiLinkedin, SiInstagram, SiReact, SiNodedotjs, SiCplusplus, SiUnity } from '../lib/icons';

export const SocialLinks = () => {
    const { translate } = useLanguage();
    const [currentIconIndex, setCurrentIconIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const socialMedia = [
        {
            name: "GitHub",
            url: "https://github.com/jusiann",
            Icon: SiGithub,
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/adil-efe-023645294/",
            Icon: SiLinkedin,
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/adlefee/",
            Icon: SiInstagram,
        },
    ];

    // Rotating skill icons
    const rotatingSkills = [
        { Icon: SiReact, name: 'React' },
        { Icon: SiNodedotjs, name: 'Node.js' },
        { Icon: SiCplusplus, name: 'C++' },
        { Icon: SiUnity, name: 'Unity' },
    ];

    // Rotate icons every 1 second (synced with pulse animation)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIconIndex((prev) => (prev + 1) % rotatingSkills.length);
        }, 1000);
        return () => clearInterval(interval);
    }, [rotatingSkills.length]);

    const CurrentSkillIcon = rotatingSkills[currentIconIndex].Icon;
    const currentSkillName = rotatingSkills[currentIconIndex].name;

    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8">

            {/* LEFT SIDE */}
            <div className="flex flex-col md:flex-row items-center gap-4">
                {/* CV DOWNLOAD BUTTON */}
                <a
                    href="/cv.pdf"
                    download
                    className="
                        relative
                        group
                        flex
                        items-center
                        gap-2
                        px-5
                        py-2.5
                        rounded-full
                        border-2
                        border-foreground/30
                        text-foreground/70
                        font-medium
                        transition-all
                        duration-300
                        hover:border-primary
                        hover:text-primary
                        hover:scale-105
                        active:scale-95
                    "
                    aria-label={translate('download_cv')}
                >
                    <span className="absolute inset-y-1 inset-x-5 rounded-full bg-primary/25 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                    <FiDownload className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">{translate('download_cv')}</span>
                </a>

                {/* SOCIAL MEDIA LINKS */}
                <div className="flex gap-4 items-center">
                    {socialMedia.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                relative
                                group
                                p-3
                                text-foreground/70
                                hover:text-primary
                                transition-all
                                duration-300
                                hover:scale-110
                            "
                            aria-label={social.name}
                        >
                            <span className="absolute inset-2.5 rounded-full bg-primary/30 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                            <social.Icon className="w-6 h-6 relative z-10" />
                        </a>
                    ))}
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div
                className="
                    relative
                    group
                    p-3
                    text-foreground/70
                    hover:text-primary
                    transition-all
                    duration-300
                    hover:scale-110
                    cursor-default
                    hidden md:block
                "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <span className="absolute inset-2.5 rounded-full bg-primary/30 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                <CurrentSkillIcon className="w-6 h-6 relative z-10 transition-all duration-300" />

                {isHovered && (
                    <span className="
                        absolute
                        -top-8
                        left-1/2
                        -translate-x-1/2
                        px-2
                        py-1
                        text-xs
                        font-medium
                        text-foreground
                        bg-card/90
                        backdrop-blur-sm
                        rounded
                        whitespace-nowrap
                        border border-primary/20
                    ">
                        {currentSkillName}
                    </span>
                )}
            </div>
        </div>
    );
};
