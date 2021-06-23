import { useHistory } from "react-router"
import { selectedState } from "../../atom/selectedState"
import { useSetRecoilState } from "recoil"
import Grid from "@material-ui/core/Grid"
import { mainerStyles } from "./mainerStyles"

const Employee = (props) => {
  const { accountId, name, image, address, phone, description } = props
  const history = useHistory()
  const setSelected = useSetRecoilState(selectedState)
  const classes = mainerStyles()

  const handleClick = () => {
    setSelected(accountId)
    history.push(`/list/${name}`)
  }

  return (
    <>
      <Grid item md={5} xs={12} className={classes.employee}>
        <Grid className={classes.image}>
          <img src={image} alt=""></img>
        </Grid>
        <Grid className={classes.content}>
          <p>
            Họ tên: <span>{name}</span>
          </p>
          <p>
            Địa chỉ: <span>{address}</span>
          </p>
          <p>
            Số điện thoại: <span>{phone}</span>
          </p>
          <p>
            Lương mong muốn: <span>{formatPrice(description.salary)}</span>
          </p>
          <button type="button" onClick={handleClick} className={classes.button}>
            Chi tiết
          </button>
        </Grid>
      </Grid>
    </>
  )
}

export default Employee

const formatPrice = (money) => {
  let price = money.split("")
  let length
  if (money.length / 3 > 2 && money.length % 3 !== 0) length = money.length / 3
  else if (money.length / 3 > 2 && money.length % 3 === 0) length = money.length / 3 - 1
  else if (money.length / 3 > 1) length = 1
  else length = 0
  for (let i = 1; i <= length; i++) {
    if (i === 1) price.splice(i * -3, 0, ".")
    else price.splice(i * -4 + 1, 0, ".")
  }
  price = price.join("")
  return price
}
