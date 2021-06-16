import "./item.css"
import { useHistory } from "react-router"

const Employee = (props) => {
  const { accountId, name, image, address, phone } = props
  const history = useHistory()

  const handleClick = () => {
    history.push(`/list/${accountId}`)
  }

  return (
    <div className="item" onClick={handleClick}>
      <div className="item-img">
        <img src={image} alt="food/drink"></img>
      </div>
      <div className="item-info">
        <div className="item-about">
          <h3>{name}</h3>
        </div>
        <div className="item-description">
          <p>{address}</p>
        </div>
        <div className="item-description">
          <p>{phone}</p>
        </div>
      </div>
    </div>
  )
}

export default Employee
