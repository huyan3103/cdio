import CommentItem from "./CommentItem"
import "./Comments.css"
const Comments = (props) => {
  return (
    <div className="=comments">
      <h3>Comment</h3>
      <ul className="comment-list">
        {props.comments.map((comment, index) => {
          return <CommentItem name={comment.name} content={comment.content} key={index} />
        })}
      </ul>
    </div>
  )
}

export default Comments
