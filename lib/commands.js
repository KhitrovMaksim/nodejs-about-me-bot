class Commands {
  constructor(commandsList) {
    this.setCommands(commandsList);
  }

  getCommands() {
    return this.commandsList;
  }

  getSerializedList() {
    return this.commandsList
      .map((command) => `${command.command} - ${command.description}`)
      .join('\n');
  }

  setCommands(newCommandsList) {
    this.commandsList = newCommandsList;
  }
}

module.exports = Commands;
