const router = require("express").Router()
const bcrypt = require("bcrypt")
const Account = require("../schema/accountSchema")
const Employee = require("../schema/employeeSchema")
const Employer = require("../schema/employerSchema")

router.post("/", async (req, res) => {
  try {
    const account = await Account.findOne({ username: req.body.username })
    if (account === null) res.status(200).json({ success: 1 })
    else if (await bcrypt.compare(req.body.password, account.password)) {
      switch (account.role) {
        case "employee": {
          const user = await Employee.findOne({ accountId: req.body.username })
          res.status(200).json({ user, role: "employee" })
        }
        case "employer": {
          const user = await Employer.findOne({ accountId: req.body.username })
          res.status(200).json({ user, role: "employer" })
        }
      }
    } else res.json({ success: 2 })
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
