const dbConnetion = require('../../config/dbConnection');

    module.exports = (app) => {

        const connection = dbConnetion();

    app.get('/noticias', (req, res) =>{
            connection.query('select * from noticias', (err, result) => {
            res.render('noticias/noticias', {noticias : result});
        });
    });
}




