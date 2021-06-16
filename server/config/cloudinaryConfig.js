const { config } = require("cloudinary")

const cloudinaryConfig = (req, res, next) => {
  config({
    cloud_name: "huyan",
    api_key: "236986549732836",
    api_secret: "KxdpMh7Eqvsbeg0ggwrhUilZHZA",
  })
  next()
}

module.exports = cloudinaryConfig
