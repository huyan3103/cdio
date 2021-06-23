import { makeStyles } from "@material-ui/core/styles"

export const mainerStyles = makeStyles((theme) => ({
  employee: {
    display: "flex",
    boxShadow: "0px 0px 5px rgba(48,48,48,0.3)",
    borderRadius: "5px",
    cursor: "default",
    backgroundColor: "white",
    padding: "10px",
  },
  image: {
    height: "240px",
    width: "200px",
    "& img": {
      height: "100%",
      width: "100%",
      borderRadius: "5px",
    },
    borderRadius: "5px",
  },
  content: {
    padding: "15px 15px",
    fontSize: "18px",
  },
  button: {
    padding: "5px 15px",
    borderRadius: "5px",
    backgroundColor: "rgba(9, 145, 235)",
    color: "white",
    border: "none",
    cursor: "default",
  },
}))
