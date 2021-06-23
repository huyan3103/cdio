const Employer = require("../schema/employerSchema")
const cloudinary = require("cloudinary").v2

function getImgUrl(file) {
  const type = file.mimetype
  const base64 = file.buffer.toString("base64")
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      `data:${type};base64,${base64}`,
      { folder: "hirewebsite/employer" },
      (error, result) => {
        if (error) reject(error)
        resolve(result.secure_url)
      },
    )
  })
}

const changeAvatar = async (req, res) => {
  try {
    const imageUrl = await getImgUrl(req.file)
    const choosenEmployer = await Employer.findOne({ accountId: req.params.username })
    choosenEmployer.image = imageUrl
    await choosenEmployer.save()
    res.status(200).json({ image: imageUrl })
  } catch (err) {
    console.log(err)
    res.sendStatus(408)
  }
}

const signupInfo = async (req, res, next) => {
  try {
    if (req.success) {
      const employerInfor = new Employer({
        name: `${req.body.firstName} ${req.body.lastName}`,
        address: `${req.body.district}, ${req.body.city}`,
        phone: req.body.phone,
        mail: req.body.mail,
        accountId: req.body.username,
      })
      await employerInfor.save()
      next()
    } else next()
  } catch (err) {
    console.log(err)
    req.success = false
    next()
  }
}

module.exports = { signupInfo, changeAvatar }
