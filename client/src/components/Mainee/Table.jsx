import { useState, useEffect } from "react"
import { DataGrid } from "@material-ui/data-grid"
import Button from "@material-ui/core/Button"
import { loginState } from "../../atom/loginState"
import { useRecoilValue } from "recoil"

const renderAcceptButton = (params) => {
  return (
    <strong>
      <Button
        variant="contained"
        size="small"
        style={{ marginLeft: 16, backgroundColor: "green", color: "white" }}
        onClick={() => {}}
      >
        Chấp Nhận
      </Button>
    </strong>
  )
}

const renderRejectButton = () => {
  return (
    <strong>
      <Button
        variant="contained"
        size="small"
        style={{ marginLeft: 16, backgroundColor: "red", color: "white" }}
        onClick={() => {
          // parseName(params.row.col6)
        }}
      >
        Từ Chối
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
    field: "employerName",
    headerName: "Họ Tên",
    width: 200,
    sortable: false,
  },
  {
    field: "employerAdd",
    headerName: "Địa Chỉ",
    width: 230,
    sortable: false,
  },
  {
    field: "employerPhone",
    headerName: "Số Điện Thoại",
    width: 160,
    sortable: false,
  },
  {
    field: "accept",
    headerName: "Chấp Nhận",
    width: 130,
    renderCell: renderAcceptButton,
    disableClickEventBubbling: true,
    sortable: false,
  },
  {
    field: "reject",
    headerName: "Từ Chối",
    width: 130,
    renderCell: renderRejectButton,
    disableClickEventBubbling: true,
    sortable: false,
  },
]

function Table() {
  const user = useRecoilValue(loginState)
  return (
    <div style={{ height: 400, width: "100%", marginTop: "20px" }}>
      <DataGrid rows={user.wanting} columns={columns} pageSize={5} getRowId={(row) => row.id} />
    </div>
  )
}

export default Table
