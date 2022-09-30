import mongoose from 'mongoose';
// const { Schema } = mongoose;

const TransactionSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  type:{
    type: String,
    required: true
  },
  value:{
    type: Number,
    required: true
  }
})

export default mongoose.model("Transaction", TransactionSchema)
