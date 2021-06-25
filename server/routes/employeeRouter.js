const router = require("express").Router()
const multer = require("multer")
const Employee = require("../schema/employeeSchema")
const { createAccount } = require("../middleware/createAccount")
const { updateInfo } = require("../middleware/employeeMiddleware")

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.post("/signup", [upload.single("avatar"), createAccount, updateInfo], async (req, res) => {
  try {
    console.log(req.success)
    console.log(req.body)
    if (req.success) {
      const user = await Employee.findOne({ accountId: req.body.username })
      res.status(200).json({ user, role: "employee" })
    } else {
      res.sendStatus(408)
    }
  } catch (err) {
    console.log(err)
    res.sendStatus(408)
  }
})

router.post("/:username/information", [upload.single("avatar"), updateInfo], async (req, res) => {
  res.sendStatus(204)
})

router.get("/", async (req, res) => {
  try {
    const allEmployees = await Employee.find({})
    res.status(200).json(allEmployees)
  } catch (err) {
    console.log(err)
    res.sendStatus(408)
  }
})

router.get("/:accountid", async (req, res) => {
  try {
    const selectedEmployee = await Employee.findOne({ username: req.params.accountId })
    res.status(200).json(selectedEmployee)
  } catch (err) {
    console.log(err)
    res.sendStatus(408)
  }
})

module.exports = router
