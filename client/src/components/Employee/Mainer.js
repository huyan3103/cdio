import Employee from "./Employee"
import { employeeState } from "../../selector/employeeState"
import { selectedState } from "../../atom/selectedState"
import { useEffect, useState } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"

const Mainer = () => {
  const [employees, setEmployees] = useState([])
  const listEmployees = useRecoilValue(employeeState)
  const setSelected = useSetRecoilState(selectedState)

  useEffect(() => {
    setSelected("")
    setEmployees(listEmployees)
  }, [])

  return (
    <Container component="main" maxWidth="lg">
      <Grid conatiner style={{ paddingTop: "50px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Danh sách giúp việc</h2>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          {employees &&
            employees.map((item) => {
              return <Employee key={item._id} {...item} />
            })}
        </div>
      </Grid>
    </Container>
  )
}

export default Mainer
