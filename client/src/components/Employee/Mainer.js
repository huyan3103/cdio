import Employee from "./Employee"
import "./item.css"
import { employeeState } from "../../selector/employeeState"
import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"

const Mainer = () => {
  const [employees, setEmployees] = useState([])
  const listEmployees = useRecoilValue(employeeState)
  useEffect(() => {
    setEmployees(listEmployees)
  }, [])

  return (
    <div className="menu">
      <div className="menu-item">
        {employees &&
          employees.map((item) => {
            return <Employee key={item._id} {...item} />
          })}
      </div>
    </div>
  )
}

export default Mainer
