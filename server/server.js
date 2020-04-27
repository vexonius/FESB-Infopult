/* eslint-disable linebreak-style */
const express = require('express')
const controller = require('./controllers/controller')

const PORT = 8081 || process.env.PORT;

const app = express();

app.get('/', controller.info)
app.get("/osobe", controller.getAllStaff);
app.get("/osobe/:id", controller.getPerson);
app.get('/naslovna', controller.info)

app.listen(PORT, () => { console.log(`Started listening on port ${PORT}`); })