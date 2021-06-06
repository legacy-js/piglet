// utils
require('dotenv').config();

// modules
const Discord = require('discord.js');
const { Events } = require("discord-addons");
const fs = require('fs');

// variables
const client = new Discord.Client()
new Events(client);

// collections
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

// cmd handler
["command", "events"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

// login
client.login(process.env.TOKEN);