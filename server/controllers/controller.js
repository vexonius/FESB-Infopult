const db = require('../models/index')

module.exports = {
  async getQueryResults(req, res) {
    return res.status(200).json('All query results')
  },
  async info(req, res) {
    if (db.is) {
      return res
        .status(200)
        .json({ status: 'ok', message: 'All functions working normaly' })
    } else {
      return res
        .status(400)
        .json({ status: 'error', message: 'Something is not working' })
    }
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
        db.Point.findAll({ where: { idOffice: 100 } })
          .then(points => {
            person.points = points
            return res.status(200).json(person)
          })
          .catch(err => {
            return res.status(400).json(err)
          })
      })
      .catch(err => {
        return res.status(400).json(err)
      })
  },

  async getSearchResults(req, res) {
    let queryTerm = req.params.searchTerm

    db.Person.findAll({
      limit: 6,
      where: {
        firstName: db.sequelize.where(
          db.sequelize.fn('LOWER', db.sequelize.col('firstName')),
          'LIKE',
          '%' + queryTerm + '%'
        )
      }
    })
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

  async getOffice(req, res) {
    let officeId = req.params.id

    db.Office.findOne({ where: { id: officeId } })
      .then(office => {
        return res.status(200).json(office)
      })
      .catch(err => {
        return res.status(400).json(err)
      })
  },

  async getOfficeDirections(req, res) {
    let officeId = req.params.id

    db.Direction.findAll({ where: { officeId: officeId } })
      .then(directions => {
        return res.status(200).json(directions)
      })
      .catch(err => {
        return res.status(400).json(err)
      })
  },

  async getAllOffices(req, res) {
    db.Office.findAll()
      .then(offices => {
        return res.status(200).json(offices)
      })
      .catch(err => {
        return res.status(400).json(err)
      })
  }
}
