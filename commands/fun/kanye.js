module.exports = {
    name: 'kanye',
    description: "Sends a random Kanye West quote",
    aliases: ['kanyewest'],
    run: async(client, message, args) => {
        const request = require('superagent')

        request.get('https://api.kanye.rest/').then(res => {
            if (res.statusCode !== 200) return;

            const kanye = (JSON.parse(res.text)).quote;

            const embedified = {
                "description": `*"${kanye}"* - Kanye West`,
                "color": 15423854
            }

            return message.channel.send(null, {
                embed: embedified
            })
        })
    }
}