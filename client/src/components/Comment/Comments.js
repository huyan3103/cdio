import CommentItem from "./CommentItem"
import Container from "@material-ui/core/Container"
import { commentStyle } from "./commentStyles"

const Comments = (props) => {
  const { user } = props
  const classes = commentStyle()

  return (
    <Container maxWidth="md" className={classes.comment}>
      <h3 className={classes.header}>Comment</h3>
      <>
        {user.map((comment, index) => {
          return <CommentItem name={comment.name} content={comment.content} key={index} />
        })}
      </>
    </Container>
  )
}

export default Comments
