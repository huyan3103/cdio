import { useState } from "react"
import { Link } from "react-router-dom"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import MenuIcon from "@material-ui/icons/Menu"
import Box from "@material-ui/core/Box"
import { headerStyles } from "./headerStyles"
import MenuItemNoLogin from "./MenuItemNoLogin"
import MenuItemLogin from "./MenuItemLogin"

function HeaderDisplay(props) {
  const classes = headerStyles()
  const { handleLogout, login } = props
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const mobileMenuId = "primary-search-account-menu-mobile"
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      id={mobileMenuId}
      keepMounted
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      style={{ position: "absolute", top: "45px", left: "-13px" }}
    >
      <MenuItem>
        <IconButton>
          <Link to="/" className={classes.menuitemmobile}>
            Trang chủ
          </Link>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton>
          <Link to="/list" className={classes.menuitemmobile}>
            Nhân Viên
          </Link>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton>
          <Link to="/employee/signup" className={classes.menuitemmobile}>
            Tuyển Dụng
          </Link>
        </IconButton>
      </MenuItem>
    </Menu>
  )

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
          <IconButton>
            <Link to="/" className={classes.brand}>
              Hifle
            </Link>
          </IconButton>
          <Box className={classes.menudesktop} ml={7}>
            <IconButton>
              <Link to="/" className={classes.menuitemdesktop}>
                Trang chủ
              </Link>
            </IconButton>
            <IconButton>
              <Link to="/list" className={classes.menuitemdesktop}>
                Nhân Viên
              </Link>
            </IconButton>
            <IconButton>
              <Link to="/employee/signup" className={classes.menuitemdesktop}>
                Tuyển dụng
              </Link>
            </IconButton>
          </Box>
          <div className={classes.grow} />
          {login ? <MenuItemLogin handleLogout={handleLogout} /> : <MenuItemNoLogin />}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  )
}

export default HeaderDisplay
