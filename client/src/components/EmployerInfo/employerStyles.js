import { makeStyles } from "@material-ui/core/styles"
export const employerStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    gap: "20px",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 20px",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px rgba(48,48,48,0.3)",
    backgroundColor: "white",
    maxHeight: "300px",
    [theme.breakpoints.up("md")]: {
      width: "450px",
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    height: "200px",
    width: "200px",
    border: "0.5px solid black",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  information: {
    borderRadius: "5px",
    boxShadow: "0px 0px 5px rgba(48,48,48,0.3)",
    backgroundColor: "white",
    maxHeight: "300px",
    [theme.breakpoints.up("md")]: {
      width: "450px",
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  accountinfoheader: {
    borderBottom: "0.5px solid black",
    padding: "10px 15px",
  },
  accountinfodetail: {
    padding: "15px",
    "& p": {
      fontSize: "17px",
    },
  },
  savebutton: {
    marginTop: "10px",
    padding: "5px 30px",
    borderRadius: "2px",
    backgroundColor: "rgba(58, 158, 252)",
    color: "white",
    border: "none",
  },
  hireheader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: theme.spacing(6),
    padding: theme.spacing(3),
  },
  listemployee: {
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px rgba(48,48,48,0.3)",
  },
}))
