import { useState, useRef, useEffect } from "react"
import { useParams, useHistory } from "react-router"
import { loginState } from "../../atom/loginState"
import { useSetRecoilState } from "recoil"
import axios from "axios"
import { Form, FormGroup, Label, Input } from "reactstrap"

const EmployerInfo = () => {
  const { username } = useParams()
  const [avatar, setAvatar] = useState()
  const fileInput = useRef()
  const imageTemp = useRef()
  const isMounted = useRef(true)
  const history = useHistory()
  const setLogin = useSetRecoilState(loginState)
  const [input, setInput] = useState({
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
    const formData = new FormData()
    formData.append("avatar", avatar)
    for (const [key, value] of Object.entries(input)) {
      formData.append(key, value)
    }
    const response = await axios.post(`http://localhost:5000/employer/${username}/info/`, formData)
    if (response.status === 200 && isMounted.current) {
      setLogin(response.data.user)
      history.push("/")
    }
  }

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  return (
    <div className="container mt-3 mb-5">
      <div className="row justify-content-center">
        <div className="d-flex justify-content-center mb-2">
          <h3>Cập Nhật Thông Tin</h3>
        </div>
        <Form onSubmit={handleSubmit} className="col-12 col-md-9 col-lg-5">
          <div className="d-flex align-items-center flex-column">
            <div style={{ height: "210px", width: "200px" }}>
              <img
                style={{ height: "100%", width: "100%" }}
                className="rounded"
                src={imageTemp.current}
                alt=""
              ></img>
            </div>
            <button type="button" className="mt-3" onClick={triggerInput}>
              Thay đổi ảnh
            </button>
            <input
              type="file"
              ref={fileInput}
              style={{ position: "absolute", top: "-100000000px" }}
              onChange={handleChangeFile}
              name="avatar"
              accept="images/*"
            ></input>
          </div>
          <div>
            <FormGroup>
              <Label htmlFor="name" className="fs-5">
                Họ tên
              </Label>
              <Input
                type="text"
                name="name"
                value={input.name}
                onChange={handleInputChange}
                className="mt-1"
                required
              />
            </FormGroup>
            <FormGroup className="mt-3">
              <Label htmlFor="address" className="fs-5">
                Địa chỉ
              </Label>
              <Input
                type="text"
                name="address"
                value={input.address}
                onChange={handleInputChange}
                className="mt-1"
                required
              />
            </FormGroup>
            <FormGroup htmlFor="phone" className="mt-3">
              <Label htmlFor="phone" className="fs-5">
                SĐT
              </Label>
              <Input
                type="text"
                name="phone"
                value={input.phone}
                onChange={handleInputChange}
                className="mt-1"
                required
              />
            </FormGroup>

            <FormGroup className="mt-3">
              <Label htmlFor="mail" className="fs-5">
                Mail
              </Label>
              <Input
                type="email"
                name="mail"
                value={input.mail}
                onChange={handleInputChange}
                className="mt-1"
                required
              />
            </FormGroup>

            <FormGroup className="mt-3">
              <Label htmlFor="description" className="fs-5">
                Mô tả bản thân
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

            <div className="d-flex justify-content-center mt-4">
              <button type="submit" className="btn btn-primary fs-5">
                Cập Nhật
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default EmployerInfo
