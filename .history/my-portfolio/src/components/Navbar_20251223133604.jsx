import {cn, useLanguage} from '../lib/utils';
import {Menu, X} from 'lucide-react';
import {useEffect, useState} from 'react';
import {useLocation, Link} from 'react-router-dom';
import {ThemeToggle} from './ThemeToggle';
import {LanguageToggle} from './LanguageToggle';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { translate } = useLanguage();

  const navItems = [
    { name: translate('nav.home'), href: '/' },
    { name: translate('nav.resume'), href: '/resume' },
    { name: translate('nav.skills'), href: '/skills' },
    { name: translate('nav.projects'), href: '/projects' },
  ];

  const isActiveRoute = (href) => {
    if (href === '/') {
      return location.pathname === '/' || location.pathname === '';
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
            to="/"
          >
            <span className="relative z-10">
              <span className="text-glow/50 text-foreground"> Aidy </span>{" "}
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

          {/* HIRE ME BUTTON - Special Styling */}
          <Link
            to="/contact"
            className={cn(
              "relative px-5 py-2 font-semibold rounded-full transition-all duration-300 border-2",
              isActiveRoute('/contact')
                ? "bg-primary text-white border-primary shadow-lg shadow-primary/30"
                : "text-primary border-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30"
            )}
          >
            {translate('nav.hireme')}
          </Link>
        </div>


        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="md:hidden p-2 text-foreground z-50 hover:text-primary transition-colors duration-300"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* MOBILE NAVIGATION */}
        <div
          className={cn(
            "fixed top-0 right-0 h-screen w-full bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-transform duration-300 md:hidden",
            isMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
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

            {/* HIRE ME BUTTON - MOBILE */}
            <Link
              to="/contact"
              className={cn(
                "px-6 py-3 font-semibold rounded-full transition-all duration-300 border-2 text-center",
                isActiveRoute('/contact')
                  ? "bg-primary text-white border-primary"
                  : "text-primary border-primary hover:bg-primary hover:text-white"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {translate('nav.hireme')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};