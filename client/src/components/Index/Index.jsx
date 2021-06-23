import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import { Link } from "react-router-dom"
import { indexStyles } from "./indexStles"

const Index = () => {
  const classes = indexStyles()

  return (
    <Container component="main" maxWidth="md" style={{ paddingTop: "30px" }}>
      <Grid container>
        <Grid item md={6} xs={12} className={classes.image}>
          <img
            src="https://res.cloudinary.com/huyan/image/upload/v1624438770/hirewebsite/slider_f09a6abdbf_auh7kz.png"
            alt=""
          ></img>
        </Grid>
        <Grid md={6} xs={12} className={classes.contentindex}>
          <h2>Tìm người giúp việc tại Hilfe</h2>
          <p>
            Bạn cần tìm người giúp việc để chăm lo nhà cửa và con cái bạn? Hãy đến Hifle - Nơi kết
            nối bạn với những người giúp việc, bạn có thể tìm thấy người phù hợp với yêu cầu của
            bạn.
          </p>
          <Link to="/list">Tìm giúp việc</Link>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={6} className={classes.image}>
          <img
            src="https://res.cloudinary.com/huyan/image/upload/v1624438799/hirewebsite/tvs_mota_fa6100288b_ahx5gg.png"
            alt=""
          ></img>
        </Grid>
        <Grid md={6} className={classes.contentindex}>
          <h2>Đăng ký giúp việc tại Hilfe</h2>
          <p>
            Bạn cần tìm việc để kiếm thu nhập? Hãy đến Hifle - Nơi kết nối bạn với những người tìm
            kiếm giúp việc, bạn có thể tìm thấy người phù hợp với yêu cầu của bạn.
          </p>
          <Link to="/employee/signup">Đăng ký giúp việc</Link>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Index
