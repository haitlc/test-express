const companyController = require('../controllers').company

module.exports = app => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Todos API'
    }))

    app.get('/api/company', (req, res) => res.status(200).send({
        message: "Welcome to api/company"
    }))
    app.post('/api/company', companyController.create)
}