import { useState, useEffect } from 'react';
import Game from './Components/Game';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
       if (savedTheme) setTheme(savedTheme);
     }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
     }, [theme]);

  const toggleTheme = () => {     
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App ${theme}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '🌞'}
      </button>
      <Game />
    </div>
  );
}