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

  const isActiveRoute = (href) => {
    if (href === `/${lang}`) {
      return location.pathname === `/${lang}` || location.pathname === `/${lang}/`;
    }
    return location.pathname.startsWith(href);
  };

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
        "relative w-full transition-all duration-300 py-5"
      )}
    >
      <div className="container flex items-center justify-between h-8 pr-24">
        <a
          className="text-xl font-heading font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Adil </span>{" "}
            Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => (
            <Link
              key={key}
              to={item.href}
              className={`relative px-4 py-3 font-medium transition-colors duration-300 group ${
                isActiveRoute(item.href) 
                  ? 'text-primary' 
                  : 'text-foreground/80 hover:text-primary'
              }`}
            >
              {/* Linear crimson line effect - Always visible for active, hover for others */}
              <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-primary to-transparent transition-transform duration-500 origin-center ${
                isActiveRoute(item.href)
                  ? 'scale-x-100'
                  : 'scale-x-0 group-hover:scale-x-100'
              }`} />
              
              {/* Text */}
              <span className="relative z-10">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* mobile nav */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 hover:text-primary transition-colors duration-300"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                className={`relative px-4 py-2 transition-colors duration-300 group ${
                  isActiveRoute(item.href)
                    ? 'text-primary'
                    : 'text-foreground/80 hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {/* Mobile crimson line - always visible for active, hover for others */}
                <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 ${
                  isActiveRoute(item.href)
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                }`} />
                
                <span className="relative z-10">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}; 