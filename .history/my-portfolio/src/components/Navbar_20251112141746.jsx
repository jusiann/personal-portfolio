import {useEffect, useState} from 'react';
import {cn} from '../lib/utils';

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];


export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const scrollAction = () => {
            setIsScrolled(window.screenY > 10);
        }

        window.addEventListener("scroll", scrollAction);

        return () => window.removeEventListener("scroll", scrollAction);
    }, []);

    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs " : "py-5"
            )}>

            <div className="container flex items-center justify-between">
                <a 
                    className="text-xl font-bold text-primary flex items-center" 
                    href="#hero"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Adil </span> Portfolio   
                    </span>
                </a>

                {/* RESPONSIVE DESKTOP NAVIGATION */}

                <div className="hidden md:flex space-x-8">
                    { navItems.map((item, key) => (
                        <a 
                            className="text-foreground/80 hover:text-primary transition-colors duration-200"
                            href={item.href} 
                            key={key}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* RESPONSIVE MOBILE NAVIGATION */}

                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen 
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"

                )}>
                    <div className="flex flex-col space-y-8 text-xl">
                    { navItems.map((item, key) => (
                        <a 
                            className="text-foreground/80 hover:text-primary transition-colors duration-200"
                            href={item.href} 
                            key={key}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};
