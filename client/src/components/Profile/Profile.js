import ProfileInfo from "./ProfileInfo.js"
import Comments from "../Comment/Comments.js"
import "./Profile.css"
import { employeeState } from "../../selector/employeeState.js"
import { loginState } from "../../atom/loginState"
import { useRecoilValue } from "recoil"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import axios from "axios"

const Profile = () => {
  const { accountid } = useParams()
  const [employee, setEmployee] = useState()
  const employees = useRecoilValue(employeeState)
  const login = useRecoilValue(loginState)
  console.log(login)
  useEffect(() => {
    const selectedEmployee = employees.find((value) => value.accountId === accountid)
    setEmployee(selectedEmployee)
  }, [])

  const hire = async () => {
    if (login.accountId !== undefined) {
      const data = {
        employerID: login.accountId,
        employerName: login.name,
        employerAdd: login.address,
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
    <div className="container d-flex flex-column mt-4">
      <div className="row gap-5">
        <div className="row col-8 border border-dark">
          {employee && <ProfileInfo employee={employee} key={employee._id} hire={hire} />}
          <div className="d-flex flex-column align-items-start ms-5 mt-3">
            <div className="fs-5">Mô tả bản thân</div>
            <pre className="fs-6 col-10">{employee && employee.description}</pre>
          </div>
        </div>
        <div className="row col-4">
          <div className="d-flex flex-column align-items-center">
            <ul className="list-group col-8">
              <li className="list-group-item">
                <h5 className="ms-3">Một Số Thông Tin</h5>
              </li>
              <li className="list-group-item">Cam kết uy tín</li>
              <li className="list-group-item">Thông tin trang web</li>
            </ul>
          </div>
        </div>
      </div>
      <Comments comments={user.comments} />
    </div>
  )
}

export default Profile
