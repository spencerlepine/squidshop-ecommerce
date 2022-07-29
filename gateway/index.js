const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')

const app = express()

const jsonParser = bodyParser.json()
app.use(jsonParser)

app.get('/hello', (req, res) => {
  res.status(200).json({
    message: "Hello World!"
  })
})

const PORT = config.PORT

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => console.log(`Server on port ${PORT}`))
}

module.exports = app