const app = require('./config/server');

const routeHome = require('./app/routes/home');
routeHome(app);

const routeFomularioAddNoticia = require('./app/routes/formulari_inclusao_noticia');
routeFomularioAddNoticia(app);

const routeNoticias = require('./app/routes/noticias');
routeNoticias(app);


app.listen(3000, () =>{
    console.log('Server on')
});