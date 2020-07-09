module.exports = function (app){
    var controller = {};
    var professor = app.models.professor;

    controller.salvaProfessor = function (req, res){
        professor.create(req.body).then(
            function (professor){
                res.status(201).json(professor);
            }, function (erro){
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.listaProfessor = function (req, res){
        professor.find().exec().then(
            function(professor){
                res.status(200).json(professor);
            }, function(erro){
                res.status(500).json(erro);
            }
        );
    };

    controller.alteraProfessor = function (req, res){
        var _id = req.body._id;
        professor.findByIdAndUpdate(_id, req.body).exec().then(
            function(professor){
                res.status(200).json(professor);
            },function(erro){
                res.status(500).json(erro);
            }
        );
    };

    controller.removeProfessor = function (req, res){
        var _id = req.params.id;
        professor.remove({"_id": _id}).exec().then(
            function(professor){
                res.status(204).end();
            }, function(erro){
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.obtemProfessor = function(req,res){
        var _id = req.params.id;
        professor.findById(_id).exec().then(
            function(professor){
                if(!professor){
                    res.status(404).end();
                }else{
                    res.status(200).json(professor);
                }
            }, function(erro){
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    return controller;
}