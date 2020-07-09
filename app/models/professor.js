var mongoose = require('mongoose');
require('mongoose-type-email');
module.exports = function (){
    var schema = mongoose.Schema({
        nome:{
            type: String,
            required: true
        },
        email:{
          type: mongoose.SchemaTypes.Email,
          required: true,
          index: {
              unique: true
          }
        }, 
        dataNascimento:{
            type: Date,
            required: true
        },
        ativo:{
            type: Boolean,
            required: false,
            default: function(v){
                this.ativo = true
            }
        }
    });

    return mongoose.model('Professor', schema);
}