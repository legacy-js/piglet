const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(message) {
        message.channel.send('🏓 pong!');
    },
};