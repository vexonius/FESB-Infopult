module.exports = {
  async getQueryResults(req, res) {
    return res.status(200).json('All query results')
  },
  async info(req, res) {
    return res.status(200).json('Infopult')
  },
  async getAllStaff(req, res) {
    return res.status(200).json('osobe')
  },
  async getPerson(req, res) {
    return res.status(200).json('osoba')
  }
};
