import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
  {
    paymentMethod: {
      type: String,
      enum: ['khalti', 'esewa'],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ['paid', 'unpaid'],
      default: 'unpaid',
    },
    amount: {
      type: Number,
      required: true,
    },
    token: {
      type: String,
    },
    pidx: {
      type: String,
    },
    userId: {
      type: String,  
    },
    orderId: {
      type: String,  
    },
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model("Payment", PaymentSchema);
export default Payment;