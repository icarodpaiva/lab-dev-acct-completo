import mongoose from 'mongoose'

const cursoSchema = new mongoose.Schema(
  {
    id: { type: String, required: [true, 'id is required'] },
    nome: { type: String, required: [true, 'name is required'] },
    diaDaSemana: {
      type: String,
      required: [true, 'weekday is required'],
      enum: ['segunda', 'terça', 'quarta', 'quinta', 'sexta']
    }
  },
  { versionKey: false }
)

cursoSchema.methods.weekendTest = function () {
  const weekend =
    this.diaDaSemana === 'sabado' || this.diaDaSemana === 'domingo'

  return weekend
}

export default cursoSchema
