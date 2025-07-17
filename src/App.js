import { useState, useEffect, useRef } from 'react';
import Game from './Components/Game';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [volume, setVolume] = useState(0.6);
  const lightSoundRef = useRef(null);
  const darkSoundRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedVolume = localStorage.getItem('volume');
    if (savedTheme) setTheme(savedTheme);
    if (savedVolume) setVolume(parseFloat(savedVolume));
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('volume', volume.toString());
  }, [theme, volume]);

  const toggleTheme = () => {
    const sound = theme === 'light' ? darkSoundRef.current : lightSoundRef.current;
    if (sound) {
      sound.volume = volume;
      sound.play();
    }
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App ${theme}`}>
      <audio ref={lightSoundRef} src="/sounds/light.mp3" preload="auto" />
      <audio ref={darkSoundRef} src="/sounds/dark.mp3" preload="auto" />

      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '🌞'}
      </button>

      <label className="volume-label">
        🔉 Volume:
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
      </label>

      <Game />
    </div>
  );
}