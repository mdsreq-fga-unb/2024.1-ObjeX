const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfessorSchema = new Schema(
    {
        nome: String,
        email: {
            type: String,
            unique: true
        },
        senha: String,
        turma: String,
        role: {
            type: String,
            enum: ['professor', 'admin'],
            default: 'professor'
        }
    },
    {
        timestamps: true
    },
    {
        collection: 'professores'
    }
);

module.exports = mongoose.model('Professor', ProfessorSchema);