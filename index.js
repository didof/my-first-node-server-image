const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hi there!')
})

app.listen(8080, () => {
    console.info('Listening on port 8080')
})