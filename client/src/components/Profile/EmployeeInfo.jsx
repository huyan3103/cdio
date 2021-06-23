import ProfileInfo from "./ProfileInfo"
import Comments from "../Comment/Comments.js"
import { employeeState } from "../../selector/employeeState.js"
import { loginState } from "../../atom/loginState"
import { selectedState } from "../../atom/selectedState.js"
import { useRecoilValue } from "recoil"
import { useState, useEffect } from "react"
import axios from "axios"
import Container from "@material-ui/core/Container"

const EmployeeInfo = () => {
  const [employee, setEmployee] = useState()
  const employees = useRecoilValue(employeeState)
  const login = useRecoilValue(loginState)
  const selected = useRecoilValue(selectedState)
  console.log(employees)
  console.log(selected)
  useEffect(() => {
    const selectedEmployee = employees.find((value) => value.accountId === selected)
    console.log(selectedEmployee)
    setEmployee(selectedEmployee)
  }, [selected])

  const hire = async () => {
    if (login.accountId !== undefined) {
      const data = {
        employerID: login.accountId,
        employerName: login.name,
        employerAdd: login.address,
        employerPhone: login.phone,
        employeeID: employee.accountId,
        employeeName: employee.name,
      }
      const response = await axios.post("http://localhost:5000/hire/", data)
      console.log(response)
    }
  }

  const user = {
    comments: [
      {
        name: "Huy An",
        content: "Ok",
      },
      {
        name: "Huy An",
        content: "Ok",
      },
    ],
  }

  return (
    <Container style={{ padding: "30px 0" }}>
      <>{employee && <ProfileInfo employee={employee} key={employee._id} hire={hire} />}</>
    </Container>
  )
}

export default EmployeeInfo
