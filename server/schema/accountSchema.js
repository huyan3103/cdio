const mongoose = require("mongoose")

const accountSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  signup: {
    type: Boolean,
    default: false,
  },
})

const Account = mongoose.model("Account", accountSchema)

module.exports = Account
