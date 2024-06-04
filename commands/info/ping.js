const { Message, Client } = require("discord.js");

module.exports = {
        name: "ping",
        description: `Test the bots response time ws.`,
        aliases: [],
         async execute(client, message, args) {
                message.reply({ content: `:ping_pong: **Pong \`${client.ws.ping}ms\`**` }).catch((err) => {
      console.log(`i'm couldn't reply to the message: ` + err.message)                      });
        },
};