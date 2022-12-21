const mongoose = require('mongoose');

const {Schema} = mongoose

const fonctionSchema = new Schema(
    {
      id : Schema,
      libelle: String,
      abrev: String ,

    }
)

const FonctionModel  = mongoose.model('Fonction' , fonctionSchema)

module.exports = FonctionModel