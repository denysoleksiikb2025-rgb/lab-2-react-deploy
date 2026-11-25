import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('light');

  // Автоматичне визначення теми за часом (07:00 – 21:00)
  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  // Керування класом dark на body та збереження кольорів
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
      document.body.style.backgroundColor = '#16171d';
      document.body.style.color = '#d1d5db';
    } else {
      document.body.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#1f2937';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      {/* Кнопка перемикання теми */}
      <div className="flex justify-end p-4">
        <button 
          onClick={toggleTheme} 
          className="px-4 py-2 bg-gray-200 text-black dark:bg-gray-800 dark:text-white rounded-md font-bold transition hover:opacity-80"
        >
          {theme === 'light' ? '🌙 Нічний режим' : '☀️ Денний режим'}
        </button>
      </div>

      <Header />
      <main>
        <About />
        <Education />
        <Experience />
        <Skills />
        <Reviews />
      </main>

      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;