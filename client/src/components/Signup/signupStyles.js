import { makeStyles } from "@material-ui/core/styles"
export const signupStyles = makeStyles((theme) => ({
  signup: {
    paddingTop: "30px",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 20px",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px rgba(48,48,48,0.3)",
    backgroundColor: "white",
    [theme.breakpoints.up("md")]: {
      width: "450px",
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))
