import mongoose from 'mongoose'

const alunoSchema = new mongoose.Schema(
  {
    id: { type: String, required: [true, 'id is required'] },
    nome: { type: String, required: [true, 'name is required'] },
    sobrenome: { type: String, required: [true, 'lastname is required'] },
    idade: { type: Number, required: [true, 'age is required'] },
    idCurso: { type: String, required: [true, 'id of course is required'] }
  },
  { versionKey: false }
)

export default alunoSchema
