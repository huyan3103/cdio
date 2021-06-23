import Grid from "@material-ui/core/Grid"
import { footerStyles } from "./footerStyles"

const Footer = () => {
  const classes = footerStyles()

  return (
    <Grid container className={classes.footer}>
      <Grid xs={4} className={classes.footercontent}>
        <h5>Hỗ Trợ</h5>
        <ul>
          <li>Bảo mật thông tin</li>
          <li>FAQs</li>
          <li>Chính sách chung</li>
        </ul>
      </Grid>
      <Grid xs={4} className={classes.footercontent}>
        <h5>Liên Hệ</h5>
        <ul>
          <li>Email góp ý</li>
          <li>Hotline</li>
          <li>0964 444 777</li>
        </ul>
      </Grid>
      <Grid xs={4} className={classes.footercontent}>
        <h5>Về Chúng Tôi</h5>
        <ul>
          <li>Mục đích</li>
          <li>Tầm nhìn</li>
          <li>Về Hifle</li>
        </ul>
      </Grid>
    </Grid>
  )
}

export default Footer
