import { makeStyles } from "@material-ui/core/styles"

export const footerStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#3f4547",
    padding: "10px 20px",
    color: "white",
    [theme.breakpoints.down("md")]: {
      padding: "10px 0px",
    },
    boxShadow: "0px 0px 5px rgba(48,48,48,0.3)",
  },
  footercontent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& li": {
      listStyle: "none",
      fontSize: "16px",
    },
  },
}))
