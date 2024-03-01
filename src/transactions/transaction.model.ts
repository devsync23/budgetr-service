import { model, Schema, Types } from 'mongoose';

const TransactionSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  merchants: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
}, {
  timestamps: true
});

export default model('Transaction', TransactionSchema);
