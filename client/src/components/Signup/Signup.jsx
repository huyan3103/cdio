import { useState, useRef, useEffect } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import { signupStyles } from "./signupStyles"
import { loginState } from "../../atom/loginState"
import { useSetRecoilState } from "recoil"

const Signup = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    district: "",
    city: "",
    phone: "",
    mail: "",
  })
  const [display, setDisplay] = useState(false)
  const formRef = useRef()
  const isMounted = useRef(true)
  const history = useHistory()
  const classes = signupStyles()
  const setLoginState = useSetRecoilState(loginState)
  const storage = window.sessionStorage

  const changeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formRef.current.reportValidity()) {
      const data = { ...input }
      const response = await axios.post("http://localhost:5000/employer/signup/", data)
      console.log(response.data)
      if (response.data.success && isMounted.current) {
        setLoginState(response.data.employer)
        storage.setItem("login", JSON.stringify(response.data.employer))
        history.push(`/employer/${input.username}`)
      }
      if (response.data.success === false) {
        setDisplay(true)
        setTimeout(() => {
          setDisplay(false)
        }, 1500)
      }
    }
  }

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  return (
    <Container component="main" maxWidth="xs" className={classes.signup}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          ĐĂNG KÝ
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit} ref={formRef}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography>Họ Tên</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="off"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                autoFocus
                placeholder="Họ"
                value={input.firstName}
                onChange={changeInput}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                name="lastName"
                autoComplete="off"
                placeholder="Tên"
                value={input.lastName}
                onChange={changeInput}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Tài Khoản</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="username"
                autoComplete="off"
                placeholder="Tên tài khoản"
                value={input.username}
                onChange={changeInput}
              />
              {display && <span style={{ color: "red" }}>Tài khoản đã tồn tại</span>}
            </Grid>
            <Grid item xs={12}>
              <Typography>Mật Khẩu</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                type="password"
                autoComplete="off"
                placeholder="Mật khẩu"
                value={input.password}
                onChange={changeInput}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Địa Chỉ</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="district"
                placeholder="Quận/Huyện"
                autoComplete="off"
                value={input.district}
                onChange={changeInput}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="city"
                placeholder="Thành Phố/Tỉnh"
                autoComplete="off"
                value={input.city}
                onChange={changeInput}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Số Điện Thoại</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phone"
                autoComplete="off"
                placeholder="Số điện thoại"
                value={input.phone}
                onChange={changeInput}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Email</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="mail"
                autoComplete="off"
                placeholder="abc@gmail.com"
                value={input.mail}
                onChange={changeInput}
                type="email"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Đăng Ký
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <p>
                Đã có tài khoản?
                <span>
                  <Link to="/login"> Đăng nhập</Link>
                </span>
              </p>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default Signup
