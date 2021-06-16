import { useState, useRef } from "react"
import { useHistory } from "react-router"
import { loginState } from "../../atom/loginState"
import { useSetRecoilState } from "recoil"
import axios from "axios"
import { Form, FormGroup, Label, Input } from "reactstrap"

const Signupee = () => {
  const [avatar, setAvatar] = useState()
  const fileInput = useRef()
  const imageTemp = useRef()
  const isMounted = useRef(true)
  const history = useHistory()
  const setLogin = useSetRecoilState(loginState)
  const [input, setInput] = useState({
    username: "",
    password: "",
    name: "",
    address: "",
    phone: "",
    mail: "",
    description: "",
  })

  const handleChangeFile = (e) => {
    setAvatar(e.target.files[0])
    imageTemp.current = URL.createObjectURL(e.target.files[0])
  }
  const triggerInput = () => {
    fileInput.current.click()
  }
  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(input)
    const formData = new FormData()
    formData.append("avatar", avatar)
    for (const [key, value] of Object.entries(input)) {
      formData.append(key, value)
    }
    const response = await axios.post(`http://localhost:5000/employee/signup/`, formData)
    if (response.status === 200 && isMounted.current) {
      setLogin(response.data.user)
      history.push(`/employee/${input.username}`)
    }
  }

  return (
    <div className="container mt-3 mb-5">
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center mb-2">
          <h3>Đăng Kí Tìm Việc</h3>
        </div>
        <Form className="col-12 col-md-9 col-lg-5" onSubmit={handleSubmit}>
          <div className="d-flex align-items-center flex-column">
            <div style={{ height: "210px", width: "200px" }}>
              <img
                style={{ height: "100%", width: "100%" }}
                src={imageTemp.current}
                alt=""
                className="rounded"
              ></img>
            </div>
            <button type="button" className="mt-3" onClick={triggerInput}>
              Thay đổi ảnh
            </button>
          </div>
          <input
            type="file"
            ref={fileInput}
            style={{ position: "absolute", top: "-100000000px" }}
            onChange={handleChangeFile}
            name="avatar"
            accept="images/*"
          ></input>
          <div>
            <div className="d-flex flex-column gap-3">
              <FormGroup>
                <Label htmlFor="username" className="fs-5">
                  Username
                </Label>
                <Input
                  type="text"
                  name="username"
                  autoComplete="off"
                  value={input.username}
                  onChange={handleInputChange}
                  className="mt-1"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="password" className="fs-5">
                  Password
                </Label>
                <Input
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={handleInputChange}
                  className="mt-1"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="name" className="fs-5">
                  Name
                </Label>
                <Input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={handleInputChange}
                  autoComplete="off"
                  className="mt-1"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="address" className="fs-5">
                  Address
                </Label>
                <Input
                  type="text"
                  name="address"
                  value={input.address}
                  onChange={handleInputChange}
                  autoComplete="off"
                  className="mt-1"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="phone" className="fs-5">
                  Phone
                </Label>
                <Input
                  type="text"
                  name="phone"
                  value={input.phone}
                  onChange={handleInputChange}
                  autoComplete="off"
                  className="mt-1"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="mail" className="fs-5">
                  Mail
                </Label>
                <Input
                  type="email"
                  name="mail"
                  value={input.mail}
                  onChange={handleInputChange}
                  autoComplete="off"
                  className="mt-1"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="description" className="fs-5">
                  Descripttion
                </Label>
                <textarea
                  type="text"
                  name="description"
                  row="12"
                  spellCheck="false"
                  value={input.description}
                  onChange={handleInputChange}
                  className="mt-1 form-control"
                  required
                />
              </FormGroup>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <button type="submit" className="btn btn-primary fs-5">
                Đăng Kí
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Signupee
