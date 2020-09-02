const db = require('../models/index')

module.exports = {
  async getQueryResults(req, res) {
    return res.status(200).json('All query results')
  },
  async info(req, res) {
    if (db.is)
      return res
        .status(200)
        .json({ status: 'ok', message: 'All functions working normaly' })
  },
  async getAllStaff(req, res) {
    db.Person.findAll()
      .then(staff => {
        return res.status(200).json(staff)
      })
      .catch(err => {
        return res.status(400).json(err)
      })
  },
  async getPopularSearches(req, res) {
    db.query()
      .then(people => {
        return res.status(200).json(people)
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
  },
  async getSearchResults(req, res) {
    let queryTerm = req.params.searchTerm

    db.sequelize
      .query(
        'SELECT * FROM "People" AS "Person" WHERE "Person"."firstName" LIKE :name',
        {
          replacements: {name: queryTerm},
          type: db.Sequelize.QueryTypes.SELECT
        }
      )
      .then(result => {
        return res.status(200).json(result)
      })
      .catch(err => {
        return res.status(400).json(err)
      })
  },
  async getDepartment(req, res) {
    let department = req.params.department

    db.Person.findAll({ limit: 4, where: { departemnt: department } })
      .then(people => {
        return res.status(200).json(people)
      })
      .catch(err => {
        return res.status(400).json(err)
      })
  },
  async getOffice(req, res) {},
  async getOfficeDirections(req, res) {},
  async getAllOffices(req, res) {}
}
