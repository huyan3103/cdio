import "./ProfileInfo.css"
const ProfileInfo = (props) => {
  const { employee, hire } = props
  return (
    <div className="d-flex flex-column gap-3">
      <div className="row justify-content-center ms-2">
        <img
          src={employee.image}
          alt=""
          className="rounded d-block"
          style={{ height: "300px", width: "280px" }}
        />

        <div className="d-flex flex-column justify-content-around fs-5 col-md-5 col-8 gap-lg-1">
          <div className="row">
            <div className="col-7">Họ Tên:</div>
            <div className="col-5">{employee.name}</div>
          </div>
          <div className="row">
            <div className="col-7 ">Địa chỉ:</div>
            <div className="col-5">{employee.address}</div>
          </div>
          <div className="row">
            <div className="col-7 ">Lương mong muốn:</div>
            <div className="col-5">3.000.000</div>
          </div>
          <div className="row">
            <div className="col-7 ">Kinh nghiệm:</div>
            <div className="col-5">3 năm</div>
          </div>
          <div className="row">
            <div className="col-7 ">Số điện thoại:</div>
            <div className="col-5">{employee.phone}</div>
          </div>
          <div className="row">
            <div className="col-7">Email:</div>
            <div className="col-5">{employee.mail}</div>
          </div>
          <div className="row gap-3 justify-content-center ms-4 mt-3">
            <button type="button" className="btn btn-primary col-4" onClick={hire}>
              Thuê
            </button>
            <button type="button" className="btn btn-danger col-4">
              Ghi nhớ
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
