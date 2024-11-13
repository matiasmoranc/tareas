import { useEffect, useState } from "react";
import IconMon from "./icons/IconMon";
import IconSun from "./icons/IconSun";

const initialStateDarkMode = localStorage.getItem('theme') === 'dark';

const Header = () => {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
        }

    }, [darkMode])


    // const handleClickToggleTheme = () => {

    // }

    return (
        <header className="container mx-auto px-4 pt-8 md:max-w-xl">
            <div className="flex justify-between">
                <h1 className="uppercase text-white text-3xl font-bold tracking-[0.3em]">Tareas</h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {
                        darkMode ? <IconSun /> : <IconMon fill="#fff" />
                    }
                </button>
            </div>
        </header>
    );
}

export default Header;