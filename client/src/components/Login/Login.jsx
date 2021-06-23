import { Link } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import { loginState } from "../../atom/loginState"
import { useSetRecoilState } from "recoil"
import { useHistory } from "react-router"
import axios from "axios"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import { loginStyles } from "./loginStyles"

const Login = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  })
  const classes = loginStyles()
  const isMounted = useRef(true)
  const setLoginState = useSetRecoilState(loginState)
  const history = useHistory()
  const [display, setDisplay] = useState(false)
  const [display2, setDisplay2] = useState(false)
  const storage = window.sessionStorage

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  const changeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { username: input.username, password: input.password }
    const response = await axios
      .post("http://localhost:5000/login/", data)
      .catch((err) => console.log(err))
    if (response.data.success === 0 && isMounted.current) {
      setLoginState(response.data.user)
      storage.setItem("login", JSON.stringify(response.data.user))
      if (response.data.role === "employer") history.push("/list")
      else if (response.data.role === "employee") history.push(`/employee/${input.username}`)
    } else if (response.data.success === 1 && isMounted.current) {
      setDisplay(true)
      setTimeout(() => {
        setDisplay(false)
      }, 1500)
    } else if (response.data.success === 2 && isMounted.current) {
      setDisplay2(true)
      setTimeout(() => {
        setDisplay2(false)
      }, 1500)
    }
  }

  return (
    <>
      <Container component="main" maxWidth="xs" className={classes.login}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng Nhập
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Tên tài khoản"
              name="username"
              autoComplete="off"
              autoFocus
              value={input.username}
              onChange={changeInput}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật khẩu"
              type="password"
              autoComplete="off"
              value={input.password}
              onChange={changeInput}
            />
            {display ? (
              <div>Tài khoản không tồn tại</div>
            ) : display2 ? (
              <div>Sai mật khẩu hoặc tài khoản</div>
            ) : null}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Đăng Nhập
            </Button>
            <Grid container>
              <Grid item>
                <p>
                  Bạn chưa có tài khoản ?
                  <span>
                    <Link to="/signup" style={{ marginLeft: "5px" }}>
                      Đăng ký
                    </Link>
                  </span>
                </p>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  )
}

export default Login
