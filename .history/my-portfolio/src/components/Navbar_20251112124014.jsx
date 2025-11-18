import {useEffect, useState} from 'react';
import cn from '../lib/utils';

const NavItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];


export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
        </nav>
    );
};
