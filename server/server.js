const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")

const employeeRouter = require("./routes/employeeRouter")
const employerRouter = require("./routes/employerRouter")
const loginRouter = require("./routes/loginRouter")
const hireRouter = require("./routes/hireRouter")

const cloudinaryConfig = require("./config/cloudinaryConfig")

mongoose.connect("mongodb://localhost:27017/hirewebsite", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cloudinaryConfig)

app.use("/employer", employerRouter)
app.use("/employee", employeeRouter)
app.use("/login", loginRouter)
app.use("/hire", hireRouter)

app.listen(5000, () => console.log("Server is running"))
