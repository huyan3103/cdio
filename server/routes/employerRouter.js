const router = require("express").Router()
const { createAccount } = require("../middleware/createAccount")
const { updateInfo } = require("../middleware/employerMiddleware")
const Account = require("../schema/accountSchema")
const multer = require("multer")
const Employer = require("../schema/employerSchema")

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.post("/signup", createAccount, (req, res) => {
  if (req.success === false) res.json({ success: false })
  else res.json({ success: true })
})

router.post("/:username/info", [upload.single("avatar"), updateInfo], async (req, res) => {
  try {
    const account = await Account.findOne({ username: req.params.username })
    account.signup = true
    await account.save()
    const user = await Employer.findOne({ accountId: req.params.username })
    res.status(200).json({ user, role: "employer" })
  } catch (err) {
    console.log(err)
    res.sendStatus(408)
  }
})

module.exports = router
