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
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => (
            <Link
              key={key}
              to={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* mobile nav */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
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