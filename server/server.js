require('dotenv').config({ path: __dirname + '/.env' })
const cors = require('cors')
const express = require('express')
const controller = require('./controllers/controller')

const PORT = process.env.PORT

// Inicijalizacija express modula
const app = express()

app.use(cors())

// Sve navedene rute REST API-ja, zajedno s odgovarajucim funkcijama controllera
app.get('/', controller.info)
app.get('/pretraga/:searchTerm', controller.getSearchResults)
app.get('/osobe', controller.getAllStaff)
app.get('/osobe/:id', controller.getPerson)
app.get('/osobe/department/:department', controller.getDepartment)
app.get('/prostorije', controller.getAllOffices)
app.get('/prostorije/:id', controller.getOffice)
app.get('/prostorije/:id/directions', controller.getOfficeDirections)
app.get('/apistatus', controller.info)

// Pridodjeljujemo prikljucnu tocku na kojoj server pocinje osluskivati zahtjeve
app.listen(PORT, () => {
  console.log(`Started listening on port ${PORT}`)
})
