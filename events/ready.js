module.exports.run = async(client, message) => {

    if (Number(process.version.slice(1).split('.')[0]) < 12) {
        return console.log('✋ Node v12.0.0 or above is required to run this project, please update your version of node.')
    } else {
        console.log('🎉 Great! Your system\'s version of Node is up to date.')
    }

    console.log(`👌 Logged in as ${client.user.tag}!`);
    client.user.setStatus('dnd')
}