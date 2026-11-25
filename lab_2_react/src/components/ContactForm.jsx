import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  // Створюємо змінну стану isOpen (початково false)[cite: 9]
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Встановлюємо isOpen в true через 1 хвилину (60000 мс)[cite: 9]
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null; // Якщо isOpen хибне, нічого не рендериться

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md relative">
        
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">Зв'яжіться зі мною</h2>
        
        {/* Встав замість ВАШ_ЕНДПОЙНТ своє посилання Formspree[cite: 9] */}
        <form action="https://formspree.io/f/ВАШ_ЕНДПОЙНТ" method="POST" className="flex flex-col gap-4">
          <input type="text" name="name" placeholder="І'мя" required className="border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" name="email" placeholder="Email" required className="border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="tel" name="phone" placeholder="Номер телефону" required className="border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea name="message" placeholder="Ваше повідомлення (пропозиція роботи)" rows="4" required className="border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
          
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition mt-2">
            Надіслати пропозицію
          </button>
        </form>

        {/* Додайте кнопку "Закрити", щоб встановити isOpen назад в false[cite: 9] */}
        <button 
          onClick={() => setIsOpen(false)} 
          className="mt-4 w-full text-gray-500 hover:text-red-500 font-semibold transition py-2"
        >
          Закрити
        </button>
        
      </div>
    </div>
  );
};

export default ContactForm;