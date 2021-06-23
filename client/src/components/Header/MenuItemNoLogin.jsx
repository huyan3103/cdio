import { Link } from "react-router-dom"
import { headerStyles } from "./headerStyles"
import IconButton from "@material-ui/core/IconButton"

const MenuItemNoLogin = () => {
  const classes = headerStyles()
  return (
    <>
      <div className={classes.sectionDesktop}>
        <IconButton>
          <Link to="/signup" className={classes.loginlogout}>
            Đăng ký
          </Link>
        </IconButton>
        <IconButton>
          <Link to="/login" className={classes.loginlogout}>
            Đăng nhập
          </Link>
        </IconButton>
      </div>
    </>
  )
}

export default MenuItemNoLogin
