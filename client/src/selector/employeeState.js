import { selector } from "recoil"
import axios from "axios"

export const employeeState = selector({
  key: "employees",
  get: async () => {
    const response = await axios.get("http://localhost:5000/employee/")
    return response.data
  },
})
