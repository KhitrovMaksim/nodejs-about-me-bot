const { KHITROV_ABOUT_ME_BOT_TOKEN } = process.env;

const listOfCommands = [
  { command: '/start', description: 'List of commands' },
  { command: '/help', description: 'List of commands' },
  { command: '/about', description: 'About myself' },
  { command: '/links', description: 'List of my social networks' },
];

const aboutMe = {
  firstName: 'Maksim',
  lastName: 'Khitrov',
  birthDate: 1985,
  socialNetworks: [
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/maksim-khitrov/' },
    { name: 'GitHub', link: 'https://github.com/KhitrovMaksim' },
  ],
};

module.exports = {
  listOfCommands,
  aboutMe,
  KHITROV_ABOUT_ME_BOT_TOKEN,
};
