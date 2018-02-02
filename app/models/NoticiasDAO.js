function NoticiasDAO() {
    this.connection = connection

}

NoticiasDAO.prototype.getNoticias = function(callback) {
    this.connection.query('select * from noticias order by data_criacao', callback)
}

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback) {
    console.log(id_noticia.id_noticia)
    this.connection.query('select * from noticias where ID_NOTICIA = ' + id_noticia.id_noticia, callback)
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, connection, callback) {
    this.connection.query('insert into noticias set ? ', noticia, callback)
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback) {
this.connection.query('select * from noticias order by data_criacao desc limit 5', callback)
}


module.exports = function() {
    return NoticiasDAO;
}