import { model, Schema, Types } from 'mongoose'

const TranscationSchema = new Schema({
  status: {
    type: String,
    enum: ['placed', 'processing', 'shipped', 'delivered'],
    require: true,
  },
  cost: {
    type: Types.ObjectId,
    ref: "Product",
    require: true
  },
  buyer: {
    type: Types.ObjectId,
    ref: "Customer",
    require: true
  },
}, {
  timestamps: true
});

export default model('Transcation', TranscationSchema)
