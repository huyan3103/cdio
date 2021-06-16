import Table from "./Table"
import { loginState } from "../../atom/loginState"
import { useRecoilValue } from "recoil"

const Mainee = () => {
  const login = useRecoilValue(loginState)
  const employers = login.wanting
  console.log(employers)
  return (
    <div className="container-md  container-fluid mt-4 d-flex justify-content-center">
      <div className="d-flex align-items-center flex-column col-12 col-md-10">
        {employers && employers.length !== 0 ? (
          <Table employers={employers} />
        ) : (
          <h2>Tạm thời chưa có người nào muốn thuê bạn</h2>
        )}
      </div>
    </div>
  )
}

export default Mainee
