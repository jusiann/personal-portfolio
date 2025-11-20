import {ThemeToggle} from "../components/ThemeToggle";
import {LanguageToggle} from "../components/LanguageToggle";
import {CrimsonWebBackground} from "../components/CrimsonWebBackground";
import {Navbar} from "../components/Navbar";
import {PageTransition} from "../components/PageTransition";
import ProfileCard from "../components/ProfileCard";

export const Home = () => {
    // Profil verileri - translations.js ile entegre edilebilir
    const profileData = {
        name: "Adil Erişir",
        bio: "Frontend Geliştirici • React, Vite ve modern UI tasarımı ile kullanıcı deneyimi odaklı çözümler üretiyorum",
        avatarSrc: "/avatar.jpg",
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
                href: 'https://linkedin.com/in/adilerisir', 
                icon: 'linkedin' 
            },
            { 
                id: 'twitter', 
                name: 'Twitter', 
                href: 'https://twitter.com/adilerisir', 
                icon: 'twitter' 
            },
            { 
                id: 'mail', 
                name: 'E-posta', 
                href: 'mailto:adil@example.com', 
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