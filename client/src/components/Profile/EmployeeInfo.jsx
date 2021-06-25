import ProfileInfo from "./ProfileInfo"
import { employeeState } from "../../selector/employeeState.js"
import { loginState } from "../../atom/loginState"
import { selectedState } from "../../atom/selectedState.js"
import { useRecoilValue } from "recoil"
import { useState, useEffect } from "react"
import axios from "axios"
import Container from "@material-ui/core/Container"
import Comments from "../Comment/Comments"

const EmployeeInfo = () => {
  const [employee, setEmployee] = useState()
  const employees = useRecoilValue(employeeState)
  const login = useRecoilValue(loginState)
  const selected = useRecoilValue(selectedState)
  useEffect(() => {
    const selectedEmployee = employees.find((value) => value.accountId === selected)
    setEmployee(selectedEmployee)
  }, [selected])

  const hire = async () => {
    if (login) {
      if (login.hasOwnProperty("hire")) {
        const data = {
          employerID: login.accountId,
          employerName: login.name,
          employerAdd: login.address,
          employerPhone: login.phone,
          employeeID: employee.accountId,
          employeeName: employee.name,
          employeePhone: employee.phone,
          employeeAdd: employee.address,
        }
        const response = await axios.post("http://localhost:5000/hire/", data)
        if (response.status === 200) {
          alert("Thuê người thành công")
        }
        if (response.status === 403) {
          alert("Thất bại. Vui lòng thử lại sau")
        }
        if (response.status === 208) {
          alert("Bạn đã thuê người này")
        }
      } else {
        alert("Bạn không phải người thuê")
      }
    } else {
      alert("Vui lòng đăng nhập")
    }
  }

  const user = [
    {
      name: "Huy An",
      content: "Ok",
    },
    {
      name: "Huy An",
      content: "Ok",
    },
  ]

  return (
    <Container style={{ padding: "30px 0" }}>
      <>{employee && <ProfileInfo employee={employee} key={employee._id} hire={hire} />}</>
      <Comments user={user} />
    </Container>
  )
}

export default EmployeeInfo
