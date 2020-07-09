module.exports = function (app){
    var controller = {};
    var curso = app.models.curso;

    controller.salvaCurso = function (req, res){
        curso.create(req.body).then(
            function (curso){
                res.status(201).json(curso);
            }, function (erro){
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.listaCurso = function (req, res){
        curso.find().exec().then(
            function(curso){
                res.status(200).json(curso);
            }, function(erro){
                res.status(500).json(erro);
            }
        );
    };

    controller.alteraCurso = function (req, res){
        var _id = req.body._id;
        curso.findByIdAndUpdate(_id, req.body).exec().then(
            function(curso){
                res.status(200).json(curso);
            },function(erro){
                res.status(500).json(erro);
            }
        );
    };

    controller.removeCurso = function (req, res){
        var _id = req.params.id;
        curso.remove({"_id": _id}).exec().then(
            function(curso){
                res.status(204).end();
            }, function(erro){
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.obtemCurso = function(req,res){
        var _id = req.params.id;
        curso.findById(_id).exec().then(
            function(curso){
                if(!curso){
                    res.status(404).end();
                }else{
                    res.status(200).json(curso);
                }
            }, function(erro){
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    return controller;
}