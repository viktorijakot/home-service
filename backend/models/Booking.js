const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  date: {
    type: Date,
    required: [true, "field is required. e.g. 2022-04-28"],
  },
  time: {
    type: String,
    required: [true, "field is required. e.g. 14:00"],
  },
  userEmail: {
    type: String,
    required: [true, "field is required."],
    validate: {
      validator: function (email) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: (props) => `${props.value} is not a valid email!`, // Custom message for invalid email
    },
  },
  userName: {
    type: String,
    required: true, 
  },
  status: {
    type: String,
    required: [true, "Booking status is required."],
    enum: {
      values: ["confirmed", "pending", "cancelled"],
      message: "{VALUE} is not supported",
    },
  },
});

module.exports = mongoose.model("Booking", bookingSchema);