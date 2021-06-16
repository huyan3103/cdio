const Employee = require("../schema/employeeSchema")
const cloudinary = require("cloudinary").v2

function getImgUrl(file) {
  const type = file.mimetype
  const base64 = file.buffer.toString("base64")
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      `data:${type};base64,${base64}`,
      { folder: "hirewebsite/employee" },
      (error, result) => {
        if (error) reject(error)
        resolve(result.secure_url)
      },
    )
  })
}

const updateInfo = async (req, res, next) => {
  try {
    const url = await getImgUrl(req.file)
    const employeeInfor = new Employee({
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      mail: req.body.mail,
      description: req.body.description,
      image: url,
      accountId: req.body.username,
    })
    await employeeInfor.save()
    next()
  } catch (err) {
    console.log(err)
    res.sendStatus(408)
  }
}

module.exports = { updateInfo }
