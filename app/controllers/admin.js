module.exports.formulario_inclusao_noticias = function(app,req,res) {
    res.render('admin/form_add_noticia', { validacao : {}, noticia : {}})
}


module.exports.noticias_salvar = function(app,req,res) {
        var noticia = req.body;
        req.assert('titulo', 'Título não pode ser vazio').notEmpty()
        req.assert('resumo', 'Resumo é obrigatório').notEmpty()
        req.assert('resumo', 'Deve ter entre 10 e 100 caracteres').len(10,100)
        req.assert('autor', 'Nome do autor é obrigatório').notEmpty()
        req.assert('data_noticia', 'Data  é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'})
        req.assert('noticia', 'Noticia é obrigatório').notEmpty()

        var erros = req.validationErrors()


        if(erros) {
            res.render('admin/form_add_noticia', {validacao: erros,  noticia: noticia});
            return
        }

        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia,connection, function(error, result){
            res.redirect('/noticias')
        });
}