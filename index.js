// utils
require('dotenv').config();

// modules
const Discord = require('discord.js');
const { Events } = require("discord-addons");
const fs = require('fs');

// variables
const client = new Discord.Client({
    disableMention: ['everyone'],
    presence: {
        status: "dnd"
    },
});
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
new Events(client);

// main
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on('message', async(message) => {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(process.env.PREFIX)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length === 0) return;
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command)
        command.run(client, message, args);
});

client.login(process.env.TOKEN);