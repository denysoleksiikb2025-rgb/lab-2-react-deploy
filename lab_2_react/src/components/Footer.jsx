import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [sysInfo, setSysInfo] = useState({ userAgent: '', platform: '' });

  useEffect(() => {
    // Зчитуємо дані при монтуванні[cite: 8]
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform
    };
    
    // Зберігаємо ці дані в localStorage всередині ефекту[cite: 8]
    localStorage.setItem('systemInfo', JSON.stringify(info));

    // Отримуємо дані з localStorage[cite: 8]
    const savedInfo = JSON.parse(localStorage.getItem('systemInfo'));
    if (savedInfo) {
      setSysInfo(savedInfo);
    }
  }, []);

  return (
    <footer className="mt-10 p-6 border-t border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-center">
      {/* Якщо в тебе тут був свій код футера, можеш його залишити над цим блоком */}
      
      <div className="opacity-60"> {/* Робимо текст трохи тьмяним, щоб не відвертав увагу в CV */}
        <h4 className="font-bold text-sm mb-1">Системна інформація:</h4>
        <p className="text-xs">ОС: {sysInfo.platform}</p>
        <p className="text-xs mt-1">Браузер: {sysInfo.userAgent}</p>
      </div>
    </footer>
  );
};

export default Footer;