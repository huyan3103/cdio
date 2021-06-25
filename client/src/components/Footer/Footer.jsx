import Grid from "@material-ui/core/Grid"
import { footerStyles } from "./footerStyles"

const Footer = () => {
  const classes = footerStyles()

  return (
    <Grid container className={classes.footer}>
      <Grid item xs={4} className={classes.footercontent}>
        <h2>Hỗ Trợ</h2>
        <ul className={classes.list}>
          <li>Bảo mật thông tin</li>
          <li>FAQs</li>
          <li>Chính sách chung</li>
        </ul>
      </Grid>
      <Grid item xs={4} className={classes.footercontent}>
        <h2>Liên Hệ</h2>
        <ul className={classes.list}>
          <li>Email góp ý</li>
          <li>Hotline</li>
          <li>0964 444 777</li>
        </ul>
      </Grid>
      <Grid item xs={4} className={classes.footercontent}>
        <h2>Về Chúng Tôi</h2>
        <ul className={classes.list}>
          <li>Mục đích</li>
          <li>Tầm nhìn</li>
          <li>Về Hifle</li>
        </ul>
      </Grid>
    </Grid>
  )
}

export default Footer
