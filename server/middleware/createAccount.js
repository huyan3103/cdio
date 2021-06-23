const bcrypt = require("bcrypt")
const Account = require("../schema/accountSchema")

const createAccount = async function (req, res, next) {
  try {
    const existAccount = await Account.findOne({ username: req.body.username })
    if (existAccount) {
      req.success = false
      next()
    } else {
      const salt = await bcrypt.genSalt()
      const hashPass = await bcrypt.hash(req.body.password, salt)
      const newAccount = new Account({
        username: req.body.username,
        password: hashPass,
        role: req.baseUrl.replace("/", ""),
      })
      newAccount.save()
      req.success = true
      next()
    }
  } catch (err) {
    console.log(err)
    req.success = false
    next()
  }
}

module.exports = { createAccount }
