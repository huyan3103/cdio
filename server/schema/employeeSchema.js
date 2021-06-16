const mongoose = require("mongoose")

const employeeSchema = mongoose.Schema({
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
  description: {
    type: String,
  },
  image: {
    type: String,
    default: "https://res.cloudinary.com/huyan/image/upload/v1622477070/default-image_pf91dt.jpg",
  },
  status: {
    type: String,
    enum: ["Available", "Unavailable"],
    default: "Available",
  },
  accountId: {
    type: String,
    required: true,
    unique: true,
  },
  signup: {
    type: String,
    enum: ["Finished", "Unfinished"],
    default: "Unfinished",
  },
  wanting: {
    type: [Object],
    default: [],
  },
})

const Employee = mongoose.model("Employee", employeeSchema)

module.exports = Employee
