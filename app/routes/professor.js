module.exports = function (app){
    var controller = app.controllers.professor;

    app.post('/professores', controller.salvaProfessor);
    app.get('/professores', controller.listaProfessor);
    app.put('/professores', controller.alteraProfessor);
    app.delete('/professores/:id', controller.removeProfessor);
    app.get('/professores/:id', controller.obtemProfessor)
}