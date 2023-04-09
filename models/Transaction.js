import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    affiliateld: Boolean,
    cost: String,
    products: Array,
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;
