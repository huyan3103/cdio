import { useEffect } from "react"
import { loginState } from "../../atom/loginState"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { useHistory } from "react-router"
import HeaderDisplay from "./HeaderDisplay"

const Header = () => {
  const login = useRecoilValue(loginState)
  const setLogin = useSetRecoilState(loginState)
  const history = useHistory()
  const storage = window.sessionStorage

  const handleLogout = () => {
    setLogin(null)
    storage.removeItem("login")
    history.push("/")
  }

  useEffect(() => {
    setLogin(JSON.parse(storage.getItem("login")))
  }, [])
  return (
    <>
      <HeaderDisplay handleLogout={handleLogout} login={login} />
    </>
  )
}

export default Header
