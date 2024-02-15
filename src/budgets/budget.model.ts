import { model, Schema } from 'mongoose'

const BudgetSchema = new Schema({

}, {
  timestamps: true
});

export default model('Budget', BudgetSchema)
