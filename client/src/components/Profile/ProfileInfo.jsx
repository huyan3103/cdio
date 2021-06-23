import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { employeeInfoStyles } from "./employeeInfoStyles"
import Button from "@material-ui/core/Button"

const ProfileInfo = (props) => {
  const { employee, hire } = props
  const classes = employeeInfoStyles()

  return (
    <Container maxWidth="md">
      <CssBaseline />
      <div>
        <Grid
          container
          style={{ justifyContent: "center", gap: "30px" }}
          className={classes.detail}
        >
          <Grid item xs={12} md={3} className={classes.avatardiv}>
            <img src={employee.image} className={classes.avatar} alt=""></img>
          </Grid>
          <Grid item xs={12} md={5} className={classes.detailbutton}>
            <Typography
              component="h3"
              variant="h5"
              style={{ borderBottom: "0.5px solid black", padding: "10px 5px" }}
            >
              Thông Tin Cơ Bản
            </Typography>
            <div className={classes.detailinfo}>
              <p>
                Họ tên: <span>{employee.name}</span>
              </p>
              <p>
                Địa chỉ: <span>{employee.address}</span>
              </p>
              <p>
                Số điện thoại: <span>{employee.phone}</span>
              </p>
              <p>
                Lương mong muốn: <span>{formatPrice(employee.description.salary)}</span>
              </p>
              <p>
                Mail: <span>{employee.mail}</span>
              </p>
            </div>
            <div className={classes.hirebutton}>
              <Button onClick={hire}>Thuê</Button>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          style={{ justifyContent: "center", gap: "30px", marginTop: "15px" }}
          className={classes.detail}
        >
          <Grid item xs={12} className={classes.detailbutton}>
            <Typography
              component="h3"
              variant="h5"
              style={{ borderBottom: "0.5px solid black", padding: "10px 5px" }}
            >
              Thông Tin Chi Tiết
            </Typography>
            <div className={classes.detailinfo}>
              <div>
                <Typography className={classes.detaiinfo1}>Ưu điểm</Typography>
                <pre className={classes.detailcontent}>{employee.description.advantage}</pre>
              </div>

              <div>
                <Typography className={classes.detaiinfo1}>Ưu điểm</Typography>
                <pre className={classes.detailcontent}>{employee.description.disadvantage}</pre>
              </div>
              <div>
                <Typography className={classes.detaiinfo1}>Ưu điểm</Typography>
                <pre className={classes.detailcontent}>{employee.description.experience}</pre>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default ProfileInfo

const formatPrice = (money) => {
  let price = money.split("")
  let length
  if (money.length / 3 > 2 && money.length % 3 !== 0) length = money.length / 3
  else if (money.length / 3 > 2 && money.length % 3 === 0) length = money.length / 3 - 1
  else if (money.length / 3 > 1) length = 1
  else length = 0
  for (let i = 1; i <= length; i++) {
    if (i === 1) price.splice(i * -3, 0, ".")
    else price.splice(i * -4 + 1, 0, ".")
  }
  price = price.join("")
  return price
}
