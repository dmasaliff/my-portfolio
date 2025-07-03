import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            return savedTheme === 'dark';
        }
        return false;
    });

    useEffect(() => {
        const html = document.documentElement;

        if (isDarkMode) {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const handleToggleChange = (event) => {
        setIsDarkMode(event.target.checked);
    };

    return (
        <li className="flex items-center pl-8 mt-2 lg:mt-0 ">
            <div className="flex">
                <span className="mr-2 text-sm text-dark dark:text-gray-300">light</span>
                <input
                    type="checkbox"
                    className="hidden"
                    id="dark-toggle"
                    checked={isDarkMode}
                    onChange={handleToggleChange}
                />
                <label htmlFor="dark-toggle">
                    <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-600 p-1 dark:bg-gray-400 transition-colors duration-300">
                        <div className={`toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out ${isDarkMode ? 'translate-x-full' : ''}`}></div>
                    </div>
                </label>
                <span className="ml-2 text-sm text-dark dark:text-gray-300">dark</span>
            </div>
        </li>
    );
};

export default ThemeToggle; // Export ThemeToggle di sini