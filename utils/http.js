require('dotenv').config()

const express = require('express'),
    app = express(),
    port = process.env.PORT;

app.use(express.static(__dirname.replace('utils', 'http')));

app.get('*', (req, res) => {
    res.send('404 ERROR: Not found.')
})

app.listen(port, () => {
    console.log(`🚀 ${require('../package.json').name} v${require('../package.json').version} now running at port ${port}.`)
})