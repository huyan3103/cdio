const mongoose = require("mongoose")

const employerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "https://res.cloudinary.com/huyan/image/upload/v1622477070/default-image_pf91dt.jpg",
  },
  accountId: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  hire: {
    type: [Object],
    default: [],
  },
})

const Employer = mongoose.model("Employer", employerSchema)

module.exports = Employer
