const db = require('../models/index')

const STAFF_FLAG = "staff"

module.exports = {
  async getQueryResults(req, res) {
    return res.status(200).json('All query results')
  },
  async info(req, res) {
    if(db.is)
    return res
      .status(200)
      .json({ status: 'ok', message: 'All functions working normaly' })
  },
  async getAllStaff(req, res) {
    db.Person.findAll({ where: { attribute: STAFF_FLAG } })
      .then(staff => {
        return res.status(200).json(staff)
      })
      .catch(err => {
        return res.status(400).json(err)
      })
  },
  async getPopularSearches(req, res) {
    db.Person.findAll({ where: { attribute: STAFF_FLAG } })
      .then(staff => {
        return res.status(200).json(staff)
      })
      .catch(err => {
        return res.status(400).json(err)
      })
  },
  async getPerson(req, res) {
    let personId = req.params.id

    db.Person.findOne({ where: { id: personId } })
      .then(person => {
        return res.status(200).json(person)
      })
      .catch(err => {
        return res.status(400).json(err)
      })
  }
}
