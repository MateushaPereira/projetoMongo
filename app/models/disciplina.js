var mongoose = require('mongoose');
module.exports = function(){
    var schema = mongoose.Schema({
        nome:{
            type:String,
            required: true
        },
        cargaHoraria: {
            type: Number,
            required: true,
            enum: [20, 40, 80],
            // default: function(v){
            //     if((this.cargaHoraria === 20) && (this.cargaHoraria === 40) && (this.cargaHoraria === 80)){
            //         return 'Curso cadastrado com sucesso !'
            //     }else{
            //         return 'A carga horaria deve ser 20, 40 ou 80 horas'
            //     }
            // }
        },
        professor:{
            type:mongoose.Schema.ObjectId,
            ref: 'Professor',
            required: true
        },
        curso:{
            type:mongoose.Schema.ObjectId,
            ref: 'Curso',
            required: true
        },
        created:{
            type:Date,
            default:Date.now,
            required: false
        }

    });

    return mongoose.model('Disciplina', schema);
}