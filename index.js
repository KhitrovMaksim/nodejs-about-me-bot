const TelegramApi = require('node-telegram-bot-api');
const Commands = require('./lib/commands');
const PersonalData = require('./lib/personalData');
const { KHITROV_ABOUT_ME_BOT_TOKEN: token, aboutMe, listOfCommands } = require('./lib/data');
const logger = require('./logger');

const bot = new TelegramApi(token, { polling: true });

const commands = new Commands(listOfCommands);
const informationAboutMe = new PersonalData(aboutMe);

const start = () => {
  logger.info('Bot started');

  bot.setMyCommands(commands.getCommands());

  bot.on('message', async (msg) => {
    const { text } = msg;
    const chatId = msg.chat.id;
    const { username } = msg.chat;

    logger.info(`Request's string: ${text}; Username: ${username}; User id: ${chatId}`);

    const methodsDict = {
      '/start': commands.getSerializedList(),
      '/help': commands.getSerializedList(),
      '/about': informationAboutMe.getSerializedPersonalData(),
      '/links': informationAboutMe.getSerializedSocialNetworks(),
    };
    const message = methodsDict[text] || `"${text}" is not a command. Please try again!`;

    return bot.sendMessage(chatId, message);
  });
};

process.on('exit', () => {
  logger.info('Bot stopped');
});

start();
