import Grid from "@material-ui/core/Grid"
import { commentStyle } from "./commentStyles"

const CommentItem = (props) => {
  const classes = commentStyle()
  const { name, content } = props

  return (
    <Grid conatiner className={classes.usercomment}>
      <Grid xs={3} className={classes.name}>
        {name}
      </Grid>
      <Grid xs={8} className={classes.content}>
        {content}
      </Grid>
    </Grid>
  )
}

export default CommentItem
