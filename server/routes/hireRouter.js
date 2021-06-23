const router = require("express").Router()
const Employee = require("../schema/employeeSchema")
const Employer = require("../schema/employerSchema")

router.post("/", async (req, res) => {
  try {
    const find = [
      Employee.findOne({ accountId: req.body.employeeID }),
      Employer.findOne({ accountId: req.body.employerID }),
    ]
    const value = await Promise.all(find)
    value[0].wanting = [
      ...value[0].wanting,
      {
        id: Math.random(),
        employerID: req.body.employerID,
        employerName: req.body.employerName,
        employerAdd: req.body.employerAdd,
        employerPhone: req.body.employerPhone,
      },
    ]
    value[1].hire = [
      ...value[1].hire,
      { employeeID: req.body.employeeID, employeeName: req.body.employeeName },
    ]
    await Promise.all([(value[0].save(), value[1].save())]).then(() => res.sendStatus(200))
  } catch (err) {
    console.log(err)
    res.sendStatus(403)
  }
})

module.exports = router
