const router = require("express").Router()
const { createAccount } = require("../middleware/createAccount")
const { signupInfo, changeAvatar } = require("../middleware/employerMiddleware")
const Account = require("../schema/accountSchema")
const multer = require("multer")
const Employer = require("../schema/employerSchema")

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.post("/signup", [createAccount, signupInfo], async (req, res) => {
  if (req.success === false) res.json({ success: false })
  else {
    const employer = await Employer.findOne({ accountId: req.body.username })
    res.json({ employer, success: true })
  }
})

router.post("/:username/info", [upload.single("avatar"), changeAvatar])

module.exports = router
