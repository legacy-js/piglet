module.exports = {
    name: "help",
    description: "Displays the help menu.",
    run: async(client, message, args) => {

        const embed = {
            "description": "Piglet is a cute and retro multipurpose bot for Discord based around old video games.",
            "color": 15423854,
            "fields": [{
                    "name": "Commands",
                    "value": "Prefix: `#`\n```\nInfo — help, ping\nFun — kanye\nGames —  rockpaperscissors\n```"
                },
                {
                    "name": "Links",
                    "value": "[@invite](https://discord.com/oauth2/authorize?client_id=850945637348540446&permissions=540404806&scope=bot%20applications.commands) | [@support](https://discord.gg/BH7SATYDsZ) | [@repository](https://github.com/zenepity/piglet)"
                }
            ],
            "author": {
                "name": "Piglet",
                "icon_url": "https://res.cloudinary.com/zenepity/image/upload/v1623001058/%5Bpiglet%5D/5235gfdt463sdfx_duubnl.jpg"
            },
            "footer": {
                "text": message.author.tag,
                "icon_url": message.author.avatarURL()
            }
        }

        message.channel.send(null, {
            embed: embed
        })
    }
}