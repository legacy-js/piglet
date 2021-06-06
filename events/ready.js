module.exports.run = async(client, message) => {

    if (Number(process.version.slice(1).split('.')[0]) < 12) {
        return console.log('✋ Node v12.0.0 or above is required to run this project, please update your version of node.')
    }

    require('../utils/http.js')

    console.log(`👌 Logged in as ${client.user.tag}!`);
    client.user.setStatus('dnd')
}