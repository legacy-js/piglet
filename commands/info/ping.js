module.exports = {
    name: "ping",
    description: "Returns latency and API ping",
    run: async(client, message, args) => {
        message.channel.send(`🏓 pong, \`${client.ws.ping}ms\`.`);
    }
}