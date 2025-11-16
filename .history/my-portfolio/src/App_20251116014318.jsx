import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home } from "./pages/Home";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/tr" element={<Home />}/>
        <Route path="/tr/skills" element={<Skills />}/>
        <Route path="/tr/projects" element={<Projects />}/>
        <Route path="/tr/contact" element={<Contact />}/>
        
        <Route path="/en" element={<Home />}/>
        <Route path="/en/skills" element={<Skills />}/>
        <Route path="/en/projects" element={<Projects />}/>
        <Route path="/en/contact" element={<Contact />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
