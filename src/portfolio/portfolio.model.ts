import { model, Schema, Types } from 'mongoose';

const PortfolioSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  owner: {
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  },
  transactions: [{
    type: Types.ObjectId,
    ref: 'Transaction',
  }],
}, {
  timestamps: true,
});

export default model('Portfolio', PortfolioSchema);
