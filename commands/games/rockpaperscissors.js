module.exports = {
    name: "rockpaperscissors",
    description: "Play rock paper scissors in Discord.",
    aliases: ["rps", "rock-paper-scissors"],
    run: async(client, message, args) => {
        const options = ['Rock', 'Paper', 'Scissors'];
        const embedified = {
            "description": `I choose... **${options[Math.floor(Math.random() * options.length)]}**!`,
            "color": 15423854
        }

        message.channel.send(null, {
            embed: embedified
        })
    }
}