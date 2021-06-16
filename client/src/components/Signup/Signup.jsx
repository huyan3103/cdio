import { useState, useRef, useEffect } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import { Form, FormGroup, Label, Input } from "reactstrap"

const Signup = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [display, setDisplay] = useState(false)
  const isMounted = useRef(true)
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { username, password }
    const response = await axios.post("http://localhost:5000/employer/signup/", data)
    if (response.data.success === true && isMounted.current) {
      history.push(`/${username}/info`)
    }
    if (response.data.success === false) {
      setDisplay(true)
      setTimeout(() => {
        setDisplay(false)
      }, 1500)
    }
  }

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center mb-3">
          <h2>Đăng Kí Tài Khoản</h2>
        </div>
        <Form onSubmit={handleSubmit} className="col-12 col-md-9 col-lg-5">
          <FormGroup>
            <Label htmlFor="username" className="fs-5">
              Tài Khoản
            </Label>
            <Input
              type="text"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Tài Khoản"
              required
              className="mt-1"
            ></Input>
          </FormGroup>
          {display && <span className="text-danger">Trùng mật khẩu</span>}
          <FormGroup className="mt-3">
            <Label htmlFor="password" className="fs-5">
              Mật Khẩu
            </Label>
            <Input
              type="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mật Khẩu"
              required
              className="mt-1"
            ></Input>
          </FormGroup>
          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-primary fs-5" type="Submit">
              Đăng Kí
            </button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Signup
