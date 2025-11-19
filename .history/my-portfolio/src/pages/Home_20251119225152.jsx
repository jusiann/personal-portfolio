import {ThemeToggle} from "../components/ThemeToggle";
import {LanguageToggle} from "../components/LanguageToggle";
import {CrimsonWebBackground} from "../components/CrimsonWebBackground";
import {Navbar} from "../components/Navbar";
import {PageTransition} from "../components/PageTransition";
import ProfileCard from "../components/ProfileCard";

export const Home = () => {
    // Profile data - can be connected to translations later
    const profileData = {
        name: "Adil Erişir",
        bio: "Frontend geliştirici • React, Vite, modern UI tasarımı ve kullanıcı deneyimi odaklı çözümler",
        avatarSrc: "/assets/avatar.jpg", // Update with your actual avatar path
        links: [
            { 
                id: 'github', 
                name: 'GitHub', 
                href: 'https://github.com/jusiann', 
                icon: 'github' 
            },
            { 
                id: 'linkedin', 
                name: 'LinkedIn', 
                href: 'https://linkedin.com/in/yourusername', 
                icon: 'linkedin' 
            },
            { 
                id: 'twitter', 
                name: 'Twitter', 
                href: 'https://twitter.com/yourusername', 
                icon: 'twitter' 
            },
            { 
                id: 'mail', 
                name: 'Email', 
                href: 'mailto:your.email@example.com', 
                icon: 'mail' 
            },
        ]
    };

    return (
        <PageTransition>
        <div className="
                        min-h-screen 
                        bg-background 
                        text-foreground 
                        overflow-x-hidden">

            {/* THEME TOGGLE */}
            <ThemeToggle />

            {/* LANGUAGE TOGGLE */}
            <LanguageToggle />

            {/* BACKGROUND EFFECTS */}
            <CrimsonWebBackground />

            {/* NAVBAR */}
            <Navbar />
            
            {/* MAIN CONTENT */}
            <main className="relative z-10 pt-20">
                <ProfileCard 
                    name={profileData.name}
                    bio={profileData.bio}
                    avatarSrc={profileData.avatarSrc}
                    links={profileData.links}
                />
            </main>

            {/* FOOTER */}
        </div>
        </PageTransition>
    ); 
};