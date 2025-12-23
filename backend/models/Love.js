const mongoose = require("mongoose");

const LoveSchema = new mongoose.Schema(
  {
    birthday: {
      type: Date,
      required: true,
    },
    anniversary: {
      type: Date,
      required: true,
    },

    messageEn: {
      type: String,
      default: "",
    },
    messageTa: {
      type: String,
      default: "",
    },

    images: {
      type: [String],
      default: [],
    },

    proposalAnswer: {
      type: String, // YES | NO
      default: null,
    },
    proposalAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Love", LoveSchema);
