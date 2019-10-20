module.exports = {
    async getQueryResults(req, res) {
        res.status(200).json('All query results');
    },
     async info(req, res) {
        res.status(200).json("Infopult");
     }
}