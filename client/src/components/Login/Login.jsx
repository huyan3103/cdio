import { Link } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import { loginState } from "../../atom/loginState"
import { useSetRecoilState } from "recoil"
import { useHistory } from "react-router"
import axios from "axios"
import { Form, FormGroup, Label, Input } from "reactstrap"

const Login = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  })
  const isMounted = useRef(true)
  const setLoginState = useSetRecoilState(loginState)
  const history = useHistory()
  const [display, setDisplay] = useState(false)
  const [display2, setDisplay2] = useState(false)
  const storage = window.sessionStorage

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { username: input.username, password: input.password }
    const response = await axios
      .post("http://localhost:5000/login/", data)
      .catch((err) => console.log(err))
    if (response.data.success === undefined && isMounted.current) {
      setLoginState(response.data.user)
      storage.setItem("login", JSON.stringify(response.data.user))
      console.log(JSON.parse(storage.getItem("login")))
      if (response.data.role === "employer") history.push("/")
      else if (response.data.role === "employee") history.push(`/employee/${input.username}`)
    }
    if (response.data.success === 1 && isMounted.current) {
      setDisplay(true)
      setTimeout(() => {
        setDisplay(false)
      }, 1500)
    }
    if (response.data.success === 2 && isMounted.current) {
      setDisplay2(true)
      setTimeout(() => {
        setDisplay2(false)
      }, 1500)
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center mb-3">
          <h2>Đăng Nhập</h2>
        </div>
        <Form onSubmit={handleSubmit} className="col-12 col-md-9 col-lg-5">
          <FormGroup>
            <Label htmlFor="username" className="fs-5">
              Tài Khoản
            </Label>
            <Input
              type="text"
              autoComplete="off"
              name="username"
              value={input.username}
              onChange={handleChangeInput}
              placeholder="Tài Khoản"
              className="mt-1"
              required
            ></Input>
          </FormGroup>
          {display && <span className="text-danger">Tài khoản không tồn tại</span>}
          <FormGroup className="mt-3">
            <Label htmlFor="password" className="fs-5">
              Mật Khẩu
            </Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={handleChangeInput}
              placeholder="Mật Khẩu"
              className="mt-1"
              required
            ></Input>
          </FormGroup>
          {display2 && <span className="text-danger">Sai mật khẩu</span>}
          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-primary fs-5" type="submit">
              Đăng Nhập
            </button>
          </div>
          <div className="d-flex justify-content-center gap-2 fs-5 mt-2">
            <p>Không có tài khoản?</p>
            <Link to="/signup">Nhấn vào đây</Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login
