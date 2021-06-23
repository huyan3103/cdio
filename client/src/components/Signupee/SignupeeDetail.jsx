import { useRef } from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"
import { signupeeStyles } from "./signupeeStyles"
import { Link } from "react-router-dom"

const SignupeeDetail = (props) => {
  const classes = signupeeStyles()
  const { input, changeInput, setNext, handleSubmit, setAvatar } = props
  const fileInput = useRef()
  const imageTemp = useRef()

  const handleChangeFile = (e) => {
    setAvatar(e.target.files[0])
    imageTemp.current = URL.createObjectURL(e.target.files[0])
  }
  const triggerInput = () => {
    fileInput.current.click()
  }

  return (
    <Container component="main" maxWidth="xs" className={classes.signupee}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.icon}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Đăng Ký Thành Nhân Viên
        </Typography>
        <form className={classes.form} noValidate onSubmit={(e) => e.preventDefault()}>
          <Grid container spacing={1}>
            <Grid item xs={12} className={classes.avatar}>
              <Avatar
                className={classes.avatarimg}
                onClick={triggerInput}
                src={imageTemp.current}
              ></Avatar>
              <Typography>Bấm vào ảnh trên đê đổi ảnh đại diện</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Ưu điểm</Typography>
            </Grid>
            <Grid item xs={12}>
              <textarea
                variant="outlined"
                required
                name="advantage"
                autoComplete="off"
                placeholder="Ưu điểm"
                value={input.advantage}
                onChange={changeInput}
                className={classes.textarea}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Nhược điểm</Typography>
            </Grid>
            <Grid item xs={12}>
              <textarea
                variant="outlined"
                required
                fullWidth
                name="disadvantage"
                autoComplete="off"
                placeholder="Nhược điểm"
                value={input.disadvantage}
                onChange={changeInput}
                className={classes.textarea}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Lương mong muốn</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="salary"
                placeholder="Lương mong muốn"
                autoComplete="off"
                value={input.salary}
                onChange={changeInput}
                style={{ backgroundColor: "white" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Kinh nghiệm</Typography>
            </Grid>
            <Grid item xs={12}>
              <textarea
                variant="outlined"
                required
                fullWidth
                name="experience"
                autoComplete="off"
                placeholder="Liệt kê kinh nghiệm (VD:5 năm - Dọn nhà)"
                value={input.experience}
                onChange={changeInput}
                className={classes.textarea}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => setNext(true)}
              >
                Quay Lại
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
              >
                Đăng Ký
              </Button>
            </Grid>
          </Grid>
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
      <input
        type="file"
        ref={fileInput}
        style={{ position: "absolute", top: "-100000000px" }}
        onChange={handleChangeFile}
        name="avatar"
        accept="images/*"
      ></input>
    </Container>
  )
}

export default SignupeeDetail
