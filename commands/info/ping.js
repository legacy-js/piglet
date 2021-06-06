const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Ping!',
    run: async(client, message) => {
        message.channel.send(`🏓 pong, \`${client.ws.ping}ms\`.`);
    },
};