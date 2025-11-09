import { useState } from 'react';
import { Sun, Moon} from 'lucide-react';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? <Sun /> : <Moon />}
    </button>
}