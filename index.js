const TelegramApi = require('node-telegram-bot-api');
const Commands = require('./lib/commands');
const PersonalData = require('./lib/personalData');
const {
  KHITROV_ABOUT_ME_BOT_TOKEN: token, aboutMe, listOfCommands,
} = require('./lib/data');

const bot = new TelegramApi(token, { polling: true });

const commands = new Commands(listOfCommands);
const informationAboutMe = new PersonalData(aboutMe);

const start = () => {
  bot.setMyCommands(commands.getCommands());

  bot.on('message', async (msg) => {
    const { text } = msg;
    const chatId = msg.chat.id;

    if (text === '/start' || text === '/help') {
      return bot.sendMessage(chatId, commands.getSerializedList());
    }

    if (text === '/about') {
      return bot.sendMessage(chatId, informationAboutMe.getSerializedPersonalData());
    }

    if (text === '/links') {
      return bot.sendMessage(chatId, informationAboutMe.getSerializedSocialNetworks());
    }

    return bot.sendMessage(chatId, `"${text}" is not a command. Please try again!`);
  });
};

start();
