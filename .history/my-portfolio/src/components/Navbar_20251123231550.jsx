import {cn} from '../lib/utils';
import {Menu, X} from 'lucide-react';
import {useEffect, useState} from 'react';
import {useLocation, Link} from 'react-router-dom';
import {translations} from '../lib/translations';
import {ThemeToggle} from './ThemeToggle';
import {LanguageToggle} from './LanguageToggle';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const lang = location.pathname.startsWith("/en") ? "en" : "tr";

  const navItems = [
    {name: translations[lang].home, href: `/${lang}`},
    {name: translations[lang].resume, href: `/${lang}/resume`},
    {name: translations[lang].projects, href: `/${lang}/projects`},
    {name: translations[lang].contact, href: `/${lang}/contact`},
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
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 py-5",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="w-[90%] mx-auto flex items-center justify-between h-8">

        {/* HERO LINK AND TOGGLES */}
        <div className="flex items-center gap-6">
          <Link
            className="text-xl font-heading font-bold text-primary flex items-center"
            to={`/${lang}`}
          >
            <span className="relative z-10">
              <span className="text-glow/50 text-foreground"> Adil </span>{" "}
              Portfolio
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex items-center space-x-4">
          {
            navItems.map((item, key) => (
              <Link
                key={key}
                to={item.href}
                className={`relative px-4 py-3 font-medium transition-colors duration-300 group ${isActiveRoute(item.href)
                  ? 'text-primary'
                  : 'text-foreground/80 hover:text-primary'
                  }`}
              >
                <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-primary to-transparent transition-transform duration-500 origin-center ${isActiveRoute(item.href)
                  ? 'scale-x-100'
                  : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />

                <span className="relative z-10">
                  {item.name}
                </span>
              </Link>
            ))}
        </div>


        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => {
            setIsMenuOpen((previous) => !previous);
            if (!isMenuOpen) {
              window.scrollTo({top: 0, behavior: 'smooth'});
            }
          }}
          className="md:hidden p-2 text-foreground z-50 hover:text-primary transition-colors duration-300"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* MOBILE NAVIGATION */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >

          {/* MOBILE NAVIGATION LINKS */}
          <div className="flex flex-col space-y-8 text-xl">
            {
              navItems.map((item, key) => (
                <Link
                  key={key}
                  to={item.href}
                  className={`relative px-4 py-2 transition-colors duration-300 group ${isActiveRoute(item.href)
                    ? 'text-primary'
                    : 'text-foreground/80 hover:text-primary'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-primary to-transparent transition-transform duration-500 ${isActiveRoute(item.href)
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