const mysql = require('mysql');

const connMySQL = function(){
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123mudar',
        database: 'portal_noticias'
    });
}

module.exports = function() {
    console.log('O autoload carregou o módulo de conexão com o bd');
    return connMySQL;
}