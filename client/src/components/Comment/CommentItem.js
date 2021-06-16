import "./CommentItem.css"
const CommentItem = (props) => {
  return (
    <li className="comment-item">
      <p>{props.name}</p>
      <p>{props.content}</p>
    </li>
  )
}

export default CommentItem
