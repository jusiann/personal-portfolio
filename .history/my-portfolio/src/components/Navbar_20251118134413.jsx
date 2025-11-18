import {cn} from "../lib/utils";
import {Menu, X} from "lucide-react";
import {useEffect, useState} from "react";
import {useLocation, Link} from "react-router-dom";
import {translations} from "../lib/translations";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const lang = location.pathname.startsWith('/en') ? 'en' : 'tr';

  const navItems = [
    { name: translations[lang].home, href: `/${lang}` },
    { name: translations[lang].skills, href: `/${lang}/skills`},
    { name: translations[lang].projects, href: `/${lang}/projects` },
    { name: translations[lang].contact, href: `/${lang}/contact` },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between h-8 pr-24">
        <a
          className="text-xl font-heading font-bold text-primary flex items-center group relative"
          href="#hero"
        >
          <span className="relative z-10 transition-all duration-300">
            <span className="text-glow text-foreground group-hover:text-primary transition-colors duration-300"> Adil </span>{" "}
            <span className="group-hover:tracking-wide transition-all duration-300">Portfolio</span>
          </span>
          {/* Diagonal hover effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent" 
                 style={{
                   background: 'linear-gradient(45deg, transparent 40%, rgba(220, 38, 38, 0.1) 50%, transparent 60%)'
                 }}
            />
          </div>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item, key) => (
            <Link
              key={key}
              to={item.href}
              className="relative px-6 py-3 font-medium text-foreground/80 hover:text-primary transition-all duration-500 group overflow-hidden rounded-lg"
            >
              {/* Background hover effect */}
              <div className="absolute inset-0 bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center rounded-lg" />
              
              {/* Linear crimson line effect - Bottom */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              
              {/* Diagonal sweep effect inspired by page transition */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" 
                     style={{
                       background: 'linear-gradient(45deg, transparent 30%, rgba(220, 38, 38, 0.15) 50%, transparent 70%)',
                       width: '120%',
                       left: '-20%'
                     }}
                />
              </div>
              
              {/* Text */}
              <span className="relative z-10 group-hover:tracking-wide transition-all duration-300">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* mobile nav */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-3 text-foreground z-50 relative group rounded-lg overflow-hidden"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {/* Button hover effect */}
          <div className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg" />
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          
          <span className="relative z-10 block group-hover:text-primary transition-colors duration-300">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </span>
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <Link
                key={key}
                to={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}; 