import { DataGrid } from "@material-ui/data-grid"
import Button from "@material-ui/core/Button"
import { loginState } from "../../atom/loginState"
import { useRecoilValue } from "recoil"

const renderDelteButton = () => {
  return (
    <strong>
      <Button
        variant="contained"
        size="small"
        style={{ marginLeft: 16, backgroundColor: "#f0241d", color: "white" }}
        onClick={() => {}}
      >
        Xóa
      </Button>
    </strong>
  )
}

const columns = [
  {
    field: "id",
    hide: true,
    identify: true,
  },
  {
    field: "employeeName",
    headerName: "Họ Tên",
    width: 200,
    sortable: false,
  },
  {
    field: "employeeAdd",
    headerName: "Địa Chỉ",
    width: 230,
    sortable: false,
  },
  {
    field: "employeePhone",
    headerName: "Số Điện Thoại",
    width: 160,
    sortable: false,
  },
  {
    field: "status",
    headerName: "Trạng thái",
    width: 150,
  },
  {
    field: "delete",
    headerName: "Xóa",
    width: 100,
    renderCell: renderDelteButton,
    disableClickEventBubbling: true,
    sortable: false,
  },
]

function TableEmployer() {
  const user = useRecoilValue(loginState)
  return (
    <div style={{ height: 400, width: "100%", marginTop: "20px" }}>
      <DataGrid rows={user.hire} columns={columns} pageSize={5} getRowId={(row) => row.id} />
    </div>
  )
}

export default TableEmployer
