const mongoose = require("mongoose");

const otpSchema = mongoose.Schema(
  {
    userId :{
        type : mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true,
    },

    otp:{
        type: Number,
        required: true,
    },
    createdAt: { type: Date, default: Date.now, expires: 300 }, // Expires in 5 minutes
  }
);


const Otp = mongoose.model("Otp", otpSchema);

module.exports = Otp;