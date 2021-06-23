import { useState, useRef } from "react"
import { useHistory } from "react-router-dom"
import { loginState } from "../../atom/loginState"
import { useSetRecoilState } from "recoil"
import axios from "axios"
import SignupeeBasic from "./SignupeeBasic"
import SignupeeDetail from "./SignupeeDetail"

const Signupee = () => {
  const [avatar, setAvatar] = useState()
  const isMounted = useRef(true)
  const history = useHistory()
  const setLogin = useSetRecoilState(loginState)
  const [next, setNext] = useState(true)
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    district: "",
    city: "",
    phone: "",
    mail: "",
    advantage: "",
    disadvantage: "",
    salary: "",
    experience: "",
  })

  const changeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  const handleSubmit = async () => {
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
    <>
      {next ? (
        <SignupeeBasic input={input} changeInput={changeInput} setNext={setNext} />
      ) : (
        <SignupeeDetail
          input={input}
          changeInput={changeInput}
          setNext={setNext}
          handleSubmit={handleSubmit}
          setAvatar={setAvatar}
        />
      )}
    </>
  )
}

export default Signupee
