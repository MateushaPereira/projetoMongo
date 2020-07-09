var mongoose = require('mongoose');
module.exports = function(){
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        cargaHoraria: {
            type: Number,
            required: true,
            min: [400, 'A carga minima do curso deve ser de 400 horas'],
            max: [1200, 'A carga maxima do curso deve ser de 1200 horas']
        },
        ativo:{
            type: Boolean,
            required:false,
            default: function(v){
                this.ativo = true
            }
        },
        valorMensalidade:{
            type: Number,
            required:true,
            min: [99, 'O valor da mensalidade deve ser no minimo de 99 reais' ],
            max: [399, 'O valor da mensalidade deve ser no maximo de 399']
        },
        created:{
            type:Date,
            default:Date.now,
            required:false
        }
    });

    return mongoose.model('Curso', schema);
}