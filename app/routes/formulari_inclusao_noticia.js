module.exports = (app) => {
    app.get('/formulari_inclusao_noticia', (req, res) => {
        res.render('admin/form_add_noticia');
    });
}