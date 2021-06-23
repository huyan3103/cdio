import { makeStyles } from "@material-ui/core/styles"

export const indexStyles = makeStyles((theme) => ({
  login: {
    paddingTop: "30px",
  },
  image: {
    width: "300px",
    height: "350px",
    marginLeft: "auto",
    marginRight: "auto",
    "& img": {
      height: "100%",
      width: "100%",
    },
  },
  contentindex: {
    padding: "40px 35px",
    lineHeight: "40px",

    "& a": {
      color: "white",
      backgroundColor: "rgba(27, 156, 242)",
      textDecoration: "none",
      padding: "15px 20px",
      borderRadius: "5px",
      boxShadow: "0px 0px 5px rgba(48,48,48,0.3)",
    },
    "& a:hover": {
      color: "white",
      backgroundColor: "rgba(9, 145, 235)",
    },
  },
}))
