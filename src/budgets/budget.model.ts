import { model, Schema } from 'mongoose'

const BudgetSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: ['Income', 'Expense'],
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  archived: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export default model('Budget', BudgetSchema);
