import {cn} from "../lib/utils";
import {Menu, X, Code2, Sparkles} from "lucide-react";
import {useEffect, useState} from "react";
import {useLocation, Link} from "react-router-dom";
import {translations} from "../lib/translations";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();
  const lang = location.pathname.startsWith('/en') ? 'en' : 'tr';

  const navItems = [
    { name: translations[lang].home, href: `/${lang}` },
    { name: translations[lang].skills, href: `/${lang}/skills` },
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
    <>
      {/* Background particles for navbar */}
      <div className="fixed top-0 left-0 w-full h-20 z-30 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-500",
          isScrolled 
            ? "py-2 bg-background/70 backdrop-blur-xl shadow-2xl border-b border-primary/20" 
            : "py-4 bg-background/30 backdrop-blur-sm"
        )}
      >
        {/* Crimson glow line */}
        <div className={cn(
          "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-500",
          isScrolled ? "opacity-60" : "opacity-0"
        )} />

        <div className="container flex items-center justify-between h-8 pr-24">
          {/* Logo with enhanced effects */}
          <Link
            to={`/${lang}`}
            className="text-xl font-heading font-bold text-primary flex items-center group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
            <Code2 className="w-6 h-6 mr-2 text-primary group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10 flex items-center">
              <span className="text-glow text-foreground group-hover:text-primary transition-colors duration-300"> 
                Adil 
              </span>
              <Sparkles className="w-4 h-4 ml-1 text-primary animate-pulse" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, key) => (
              <Link
                key={key}
                to={item.href}
                className={cn(
                  "relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group",
                  isActiveRoute(item.href)
                    ? "text-primary bg-primary/10 shadow-lg shadow-primary/25"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                )}
                onMouseEnter={() => setHoveredItem(key)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Background glow effect */}
                <div className={cn(
                  "absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 opacity-0 transition-opacity duration-300",
                  hoveredItem === key && "opacity-100"
                )} />
                
                {/* Active indicator */}
                {isActiveRoute(item.href) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                )}
                
                {/* Icon and text */}
                <span className="relative z-10 flex items-center space-x-2">
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.name}</span>
                </span>
                
                {/* Hover line effect */}
                <div className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-300",
                  hoveredItem === key && "scale-x-100"
                )} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={cn(
              "md:hidden p-3 rounded-lg text-foreground z-50 transition-all duration-300 relative group",
              isMenuOpen ? "bg-primary/20 text-primary" : "hover:bg-primary/10 hover:text-primary"
            )}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <div className="absolute inset-0 rounded-lg bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300" />
            <div className="relative z-10">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>

          {/* Mobile Navigation */}
          <div
            className={cn(
              "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center",
              "transition-all duration-500 md:hidden",
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
          >
            {/* Mobile background effects */}
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                />
              ))}
            </div>

            <div className="flex flex-col space-y-6 text-xl relative z-10">
              {navItems.map((item, key) => (
                <Link
                  key={key}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-4 px-8 py-4 rounded-xl font-medium transition-all duration-300 group",
                    isActiveRoute(item.href)
                      ? "text-primary bg-primary/10 shadow-lg shadow-primary/25 scale-105"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5 hover:scale-105"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.name}</span>
                  {isActiveRoute(item.href) && (
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse ml-auto" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}; 