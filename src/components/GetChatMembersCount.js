import React, { useEffect, useState } from "react";

const GetChatMembersCount = () => {
  const [membersCount, setMembersCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembersCount = async () => {
      const chatId = '7922746045'
      const BOT_TOKEN = '7922746045:AAHRnPLaMqhLgyPoJZpU9kwtM-HEf4UmNiA'; // Замените на ваш реальный BOT_TOKEN

      try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getChatMembersCount?chat_id=${chatId}`);
        const data = await response.json();

        if (data.ok) {
          setMembersCount(data.result);
        } else {
          setError('Не удалось получить количество участников чата.');
        }
      } catch (error) {
        setError('Произошла ошибка при запросе к API.');
      } finally {
        setLoading(false);
      }
    };

    fetchMembersCount();
  }, []);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Количество участников чата</h1>
      <p>{membersCount}</p>
    </div>
  );
};

export default GetChatMembersCount;
