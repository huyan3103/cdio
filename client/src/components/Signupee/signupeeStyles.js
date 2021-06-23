import { makeStyles } from "@material-ui/core/styles"
export const signupeeStyles = makeStyles((theme) => ({
  signupee: {
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "10px",
    marginTop: "20px",
  },
  avatarimg: {
    height: "150px",
    width: "150px",
  },
  icon: {
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
  textarea: {
    width: "100%",
    height: "100px",
    resize: "none",
    borderRadius: "5px",
  },
}))
