import {createRoot} from 'react-dom/client'
import {ThemeProvider} from './context/ThemeContext.jsx'
import {LanguageProvider} from './context/LanguageContext.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
)
