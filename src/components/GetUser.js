import React, { useEffect, useState } from "react";

const GetUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Проверяем доступность SDK
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;

      // Инициализируем приложение
      tg.ready();

      // Получаем данные пользователя
      const initData = tg.initDataUnsafe;
      console.log("Данные пользователя:", initData);

      // Сохраняем данные в состояние
      setUser(initData.user);
    } else {
      console.error("Telegram WebApp SDK недоступен!");
    }
  }, []);
  return (
    <div>
      <h1>Данные пользователя</h1>
      {user ? (
        <div>
          <p>Привет, {user.first_name} {user.last_name}!</p>
          <p>Ваш ID: {user.id}</p>
          <p>Имя пользователя: {user.username}</p>
        </div>
      ) : (
        <p>Не удалось загрузить данные пользователя.</p>
      )}
    </div>
  );
};

export default GetUser;
