import { makeStyles } from "@material-ui/core/styles"
export const loginStyles = makeStyles((theme) => ({
  login: {
    paddingTop: "30px",
    height: "100vh",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 20px",
    borderRadius: "5px",
    backgroundColor: "white",
    boxShadow: "0px 0px 5px rgba(48,48,48,0.3)",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))
