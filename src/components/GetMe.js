import React, { useEffect, useState } from "react";

const GetMe = () => {
  const BOT_TOKEN = "7922746045:AAHRnPLaMqhLgyPoJZpU9kwtM-HEf4UmNiA";
  const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/getMe`;

  const [botInfo, setBotInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBotInfo = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.ok) {
          setBotInfo(data.result);
        } else {
          setError("Не удалось получить данные о боте.");
        }
      } catch (error) {
        setError("Произошла ошибка при запросе к API.");
      } finally {
        setLoading(false);
      }
    };

    fetchBotInfo();
  }, []);

  if (loading) {
    return <p>Загрузка данных о боте...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Информация о боте GetMe</h1>
      {botInfo ? (
        <div>
          <p><strong>Имя бота:</strong> {botInfo.first_name}</p>
          <p><strong>Юзернейм:</strong> @{botInfo.username}</p>
          <p><strong>ID:</strong> {botInfo.id}</p>
        </div>
      ) : (
        <p>Не удалось получить данные о боте.</p>
      )}
    </div>
  );
};

export default GetMe;
