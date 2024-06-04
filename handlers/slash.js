const fs = require('fs');
const ascii = require('ascii-table');
let table = new ascii(`SlashCommands`);
table.setHeading('Commands', 'Load Status');

module.exports = (client) => {
  fs.readdirSync('./SlashCommands').forEach((folder) => {
    const commandFiles = fs.readdirSync(`./SlashCommands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
      const command = require(`../SlashCommands/${folder}/${file}`);
      if (command.name) {
        client.slashCommands.set(command.name, command);
        table.addRow(command.name, '🟢 Working');
        table.setBorder('│', '─', "✥", "✥")
      } else {
        table.addRow(file, '🔴 Not Working');
        table.setBorder('│', '─', "✥", "✥")
        continue;
      }
    }
    });
    const commands = client.slashCommands.map(({ execute, ...data }) => data);
    // Register slash commands
    console.log(table.toString());
    console.log('Started refreshing slash commands.../_');
    console.log(`Successfully reloaded (/${commands.length}) slash commands!`);
}