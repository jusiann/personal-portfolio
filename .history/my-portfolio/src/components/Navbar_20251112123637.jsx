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
        const scrollAction = () = {
            setIsScrolled(window.screenY > 10);
        };
    }, []);

    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300",
        
            )}>
        </nav>
    );
};
