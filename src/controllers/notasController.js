const db = require('../database/models/index')

module.exports = {
    index: function(req, res) {
        db.Notas.findAll()
        .then
    }
}