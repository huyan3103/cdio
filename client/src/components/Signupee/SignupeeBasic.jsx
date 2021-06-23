import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import { signupeeStyles } from "./signupeeStyles"
import { Link } from "react-router-dom"

const SignupeeBasic = (props) => {
  const classes = signupeeStyles()
  const { input, changeInput, setNext } = props
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
            onClick={() => setNext(false)}
          >
            Tiếp theo
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

export default SignupeeBasic
