import React, { useEffect, useState } from "react";

const GetUpdates = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(false); // Для отображения состояния загрузки
  const BOT_TOKEN = "7922746045:AAHRnPLaMqhLgyPoJZpU9kwtM-HEf4UmNiA";
  const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/getMe`;

  // Функция для получения данных
  const fetchUpdates = async () => {
    setLoading(true); // Включаем состояние загрузки
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      if (data.ok) {
        setUpdates(data.result); // Сохраняем данные в состояние
      } else {
        console.error("Ошибка Telegram API:", data);
      }
    } catch (error) {
      console.error("Ошибка запроса:", error);
    } finally {
      setLoading(false); // Выключаем состояние загрузки
    }
  };
  return (
    <div>
      <h1>Telegram Bot GetUpdates</h1>
      <button onClick={fetchUpdates} disabled={loading}>
        {loading ? "Загрузка..." : "Получить данные"}
      </button>
      {updates.length > 0 ? (
        <ul>
          {updates.map((update) => (
            <li key={update.update_id}>
              {update.message
                ? `${update.message.from.first_name}: ${update.message.text}`
                : "Нет сообщений"}
            </li>
          ))}
        </ul>
      ) : (
        <p>{loading ? "Загрузка..." : "Нет данных"}</p>
      )}
    </div>
  );
};

export default GetUpdates;
