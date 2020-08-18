require('dotenv').config({ path: __dirname + '/.env' })
const express = require('express')
const controller = require('./controllers/controller')

const PORT = 8081 || process.env.PORT

const app = express()

app.get('/', controller.info)
app.get('/osobe', controller.getAllStaff)
app.get('/osobe/:id', controller.getPerson)
app.get('/apistatus', controller.info)

app.listen(PORT, () => {
  console.log(`Started listening on port ${PORT}`)
})
