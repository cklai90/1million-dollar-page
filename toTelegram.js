
// This code uses the node-telegram-bot-api library for node.js

const TelegramBot = require('node-telegram-bot-api');

// Replace the value below with your Telegram token
const token = 'YOUR-TELEGRAM-TOKEN';

const bot = new TelegramBot(token, {polling: true});

// Replace the value below with your chat id
const chatId = 'YOUR-CHAT-ID';

// Message that you want to send
const message = 'Hello World!';

bot.sendMessage(chatId, message);
