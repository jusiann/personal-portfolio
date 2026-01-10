import {useEffect} from 'react';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  const AnimatedRoutes = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    );
  };

  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
