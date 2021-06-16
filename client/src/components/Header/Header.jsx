import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { loginState } from "../../atom/loginState"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { useHistory } from "react-router"
import {
  Navbar,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap"

const Header = () => {
  const login = useRecoilValue(loginState)
  const setLogin = useSetRecoilState(loginState)
  const history = useHistory()
  const [isOpen, setIsOpen] = useState(false)
  const storage = window.sessionStorage

  const handleLogout = () => {
    setLogin(null)
    storage.removeItem("login")
    history.push("/")
  }
  const toggle = () => setIsOpen(!isOpen)
  useEffect(() => {
    setLogin(JSON.parse(storage.getItem("login")))
  }, [])
  return (
    <>
      <Navbar color="light" light expand="md">
        <Link className="navbar-brand fs-2 ms-3" to="/">
          Hilfe
        </Link>
        <NavbarToggler onClick={toggle}></NavbarToggler>
        <Collapse isOpen={isOpen} navbar className="fs-5">
          <Nav className="ms-auto" navbar>
            <NavItem>
              <Link className="nav-link me-3" to="/employee/signup">
                Bạn muốn tìm việc ?
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className="me-2">
              {!login ? <NotLogin /> : <AfterLogin handleLogout={handleLogout} />}
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  )
}

function NotLogin() {
  return (
    <>
      <DropdownToggle nav className="text-danger">
        Đăng kí/Đăng nhập
      </DropdownToggle>
      <DropdownMenu right className="text-dark">
        <DropdownItem>
          <Link className="nav-link" to="/login">
            Đăng nhập
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link className="nav-link" to="/signup">
            Đăng kí
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </>
  )
}

function AfterLogin(props) {
  const { handleLogout } = props
  return (
    <>
      <DropdownToggle nav className="text-danger">
        Tài khoản
      </DropdownToggle>
      <DropdownMenu right className="text-dark end-0">
        <DropdownItem>
          <Link className="nav-link" to="#">
            Thong tin tài khoản
          </Link>
        </DropdownItem>
        <DropdownItem>
          <button className="btn" onClick={handleLogout}>
            Đăng xuất
          </button>
        </DropdownItem>
      </DropdownMenu>
    </>
  )
}

export default Header
