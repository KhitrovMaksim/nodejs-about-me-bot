class Commands {
  constructor(commandsList) {
    this.setCommands(commandsList);
  }

  getCommands() {
    return this.commandsList;
  }

  getSerializedList() {
    let serializedListOfCommands = '';
    this.commandsList.forEach((command) => {
      serializedListOfCommands += `${command.command} - ${command.description}\n`;
    });
    return serializedListOfCommands;
  }

  setCommands(newCommandsList) {
    this.commandsList = newCommandsList;
  }
}

module.exports = Commands;
