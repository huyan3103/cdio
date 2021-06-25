import { makeStyles } from "@material-ui/core/styles"

export const commentStyle = makeStyles((theme) => ({
  comment: {
    padding: "10px 20px",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0px 0px 0px rgba(48,48,48,0.3)",
    marginTop: "20px",
  },
  header: {
    fontSize: "25px",
  },
  usercomment: {
    backgroundColor: "#edeff2",
    boxShadow: "0px 0px 0px rgba(48,48,48,0.3)",
    borderRadius: "5px",
    margin: "20px 0",
    padding: "5px 20px 10px 20px",
  },
  name: {
    fontSize: "22px",
    padding: "10px 0",
  },
  content: {
    fontSize: "18px",
    paddingTop: "10px",
    paddingLeft: "5px",
  },
}))
