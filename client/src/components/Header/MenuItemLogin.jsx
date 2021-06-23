import { useState } from "react"
import { useHistory } from "react-router"
import { headerStyles } from "./headerStyles"
import IconButton from "@material-ui/core/IconButton"
import AccountCircle from "@material-ui/icons/AccountCircle"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import Typography from "@material-ui/core/Typography"
import { loginState } from "../../atom/loginState"
import { useRecoilValue } from "recoil"

const MenuItemLogin = (props) => {
  const classes = headerStyles()
  const { handleLogout } = props
  const [anchorEl, setAnchorEl] = useState(null)
  const history = useHistory()
  const isMenuOpen = Boolean(anchorEl)
  const login = useRecoilValue(loginState)
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleOpenEmployer = () => {
    history.push(`/${login.accountId}/info`)
    setAnchorEl(null)
  }

  const handleOpenEmployee = () => {
    history.push(`/employee/${login.accountId}`)
    setAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const menuId = "primary-search-account-menu"
  const renderMenuEmployer = (
    <div>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        style={{ top: "40px" }}
      >
        <MenuItem onClick={handleOpenEmployer}>Hồ sơ</MenuItem>
        <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
      </Menu>
    </div>
  )

  const renderMenuEmployee = (
    <div>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        style={{ top: "40px" }}
      >
        <MenuItem onClick={handleOpenEmployee}>Hồ sơ</MenuItem>
        <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
      </Menu>
    </div>
  )

  return (
    <>
      <div className={classes.sectionDesktop}>
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <Typography style={{ marginRight: "7px" }}>Tài Khoản</Typography>
          <AccountCircle />
        </IconButton>
      </div>
      {login.hasOwnProperty("hire") ? renderMenuEmployer : renderMenuEmployee}
    </>
  )
}

export default MenuItemLogin
