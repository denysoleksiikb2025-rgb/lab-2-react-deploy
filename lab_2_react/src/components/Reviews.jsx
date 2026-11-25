import React, { useState, useEffect } from 'react';

const Reviews = () => {
  // Використовуємо useState для збереження списку[cite: 8]
  const [reviews, setReviews] = useState([]);
  const variant = 1; // <--- ВПИШИ СВІЙ НОМЕР ВАРІАНТА ТУТ[cite: 8]

  useEffect(() => {
    // Отримуємо дані з https://jsonplaceholder.typicode.com...[cite: 8]
    fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`)
      .then(response => response.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <section className="p-4 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Відгуки роботодавців</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {/* Відрендерити коментарі використовуючи метод .map()[cite: 9] */}
        {reviews.map(review => (
          <div key={review.id} className="p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800 dark:border-gray-700 transition hover:shadow-md">
            <h3 className="font-bold text-lg capitalize mb-1">{review.name}</h3>
            <p className="text-blue-600 dark:text-blue-400 text-sm mb-3 font-medium">{review.email}</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{review.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;