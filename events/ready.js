const { prefix } = require('../configs/config.json');
const version = require('../package.json')
const fs = require('fs')
const AsciiTable = require('ascii-table')

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Logged in as ${client.user.tag}`);

        client.user.setStatus("online")
        setInterval(() => {
            const Activities = [`/help | Ready!`,`Guilds : ${client.guilds.cache.size}`,`Members : ${client.guilds.cache
            .reduce((a, b) => a + b.memberCount, 0)
            .toLocaleString()}`, `${prefix}help | Ready!`]
            const Random_A = 
            Activities[Math.floor(Math.random() * Activities.length)]; 
            
            client.user.setActivity(`${Random_A}`, { type: 4 })},1000 * 5)


            var table = new AsciiTable('The Bot is Ready')
            table
              .setBorder('│', '─', "✥", "✥")
              .setHeading('Name', 'Value', 'Status ')
              .addRow(`Bot`, client.user.tag)
              .addRow(`Guild(s)`, `${client.guilds.cache.size} Server(s)`)
              .addRow(`Member(s)`, `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Members`)
              .addRow(`Discord.js`, `${version.dependencies['discord.js']}`)
              .addRow(`Node.js`, `${process.version}`)
              .addRow(`Memory`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`)
             
            console.log(table.toString())

    }
};
