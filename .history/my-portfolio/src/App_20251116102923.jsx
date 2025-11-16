import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { Home } from "./pages/Home";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* TURKISH ROUTES */}
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/tr" element={<Home />}/>
        <Route path="/tr/skills" element={<Skills />}/>
        <Route path="/tr/projects" element={<Projects />}/>
        <Route path="/tr/contact" element={<Contact />}/>
        
        {/* ENGLISH ROUTES */}
        <Route path="/en" element={<Home />}/>
        <Route path="/en/skills" element={<Skills />}/>
        <Route path="/en/projects" element={<Projects />}/>
        <Route path="/en/contact" element={<Contact />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
