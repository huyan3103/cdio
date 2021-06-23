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
    if (req.success) {
      const url = await getImgUrl(req.file)
      const employeeInfor = new Employee({
        name: `${req.body.firstName} ${req.body.lastName}`,
        address: `${req.body.district}, ${req.body.city}`,
        phone: req.body.phone,
        mail: req.body.mail,
        description: {
          advantage: req.body.advantage,
          disadvantage: req.body.disadvantage,
          salary: req.body.salary,
          experience: req.body.experience,
        },
        image:
          url ||
          "https://res.cloudinary.com/huyan/image/upload/v1622477070/default-image_pf91dt.jpg",
        accountId: req.body.username,
      })
      await employeeInfor.save()
      next()
    } else {
      req.succes = false
      next()
    }
  } catch (err) {
    console.log(err)
    req.succes = false
    next()
  }
}

module.exports = { updateInfo }
