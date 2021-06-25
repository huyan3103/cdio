import { useState, useRef, useEffect } from "react"
import { useParams } from "react-router"
import { loginState } from "../../atom/loginState"
import { useRecoilState } from "recoil"
import axios from "axios"
import Avatar from "@material-ui/core/Avatar"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import { employerStyles } from "./employerStyles"
import TableEmployer from "./TableEmployer"

const EmployerInfo = () => {
  const { username } = useParams()
  const [avatar, setAvatar] = useState()
  const [login, setLogin] = useRecoilState(loginState)
  const imageTemp = useRef()
  const fileInput = useRef()
  const classes = employerStyles()
  const storage = window.sessionStorage

  const handleChangeFile = (e) => {
    setAvatar(e.target.files[0])
    imageTemp.current = URL.createObjectURL(e.target.files[0])
  }

  const triggerInput = () => {
    fileInput.current.click()
  }

  useEffect(() => {
    imageTemp.current = login.image
  }, [])

  const changeAvatar = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("avatar", avatar)
    const response = await axios.post(`http://localhost:5000/employer/${username}/info/`, formData)
    const newLoginState = { ...login, image: response.data.image }
    if (response.status === 200) {
      storage.setItem("login", JSON.stringify(newLoginState))
      setLogin({ ...login, image: response.data.image })
    }
  }

  return (
    <div style={{ paddingTop: "30px", height: "fit-content" }}>
      <Container component="main" maxWidth="md" className={classes.container}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar
            className={classes.avatar}
            src={imageTemp.current || login.image}
            onClick={triggerInput}
          ></Avatar>
          <Typography>Bấm vào hình trên để đổi ảnh đại diện</Typography>
          <button type="button" onClick={changeAvatar} className={classes.savebutton}>
            Lưu
          </button>
        </div>
        <div className={classes.information}>
          <div>
            <Typography component="h2" variant="h5" className={classes.accountinfoheader}>
              Thông tin tài khoản
            </Typography>
            <div className={classes.accountinfodetail}>
              <p>
                Họ tên: <span>{login.name}</span>
              </p>
              <p>
                Địa chỉ: <span>{login.address}</span>
              </p>
              <p>
                Số điện thoại: <span>{login.phone}</span>
              </p>
              <p>
                Mail: <span>{login.mail}</span>
              </p>
              <p>
                Số người đã thuê: <span>{login.hire?.length || 0}</span>
              </p>
            </div>
          </div>
        </div>

        <input
          type="file"
          ref={fileInput}
          style={{ position: "absolute", top: "-100000000px" }}
          onChange={handleChangeFile}
          name="avatar"
          accept="images/*"
        ></input>
      </Container>
      <Container component="main" maxWidth="md" className={classes.listemployee}>
        <div className={classes.hireheader}>
          <Typography component="h2" variant="h5">
            Danh Sách Người Đã Thuê
          </Typography>
          <TableEmployer />
        </div>
      </Container>
    </div>
  )
}

export default EmployerInfo
