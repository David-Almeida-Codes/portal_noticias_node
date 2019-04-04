
 const mysql = require('mysql');

 const connMysql = () => {
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '2244',
        database : 'portal_noticias' 
    });
 }

 module.exports = () =>{
    return connMysql;
 }