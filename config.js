// Конфигурация Telegram
const TELEGRAM_CONFIG = {
  // Токен бота для отправки сообщений
  BOT_TOKEN: '7657941896:AAFmDJ9O9peZv5vQxVLvUHgJJa6AYhZp2HU',
  
  // ID канала для получения заявок
  CHAT_ID: '@Cryptogramm_2',
  
  // Ссылка на основной канал для пользователей
  CHANNEL_URL: 'https://t.me/+rO_BPFRWtlUzYzJi',
  
  // Название канала
  CHANNEL_NAME: 'Братский движок'
};

// Экспорт конфигурации
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TELEGRAM_CONFIG;
} else {
  window.TELEGRAM_CONFIG = TELEGRAM_CONFIG;
} 