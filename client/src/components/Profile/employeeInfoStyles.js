import { makeStyles } from "@material-ui/core/styles"

export const employeeInfoStyles = makeStyles((theme) => ({
  detail: {
    border: "0.5px solid black",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px rgba(48,48,48,0.2)",
    backgroundColor: "white",
  },
  avatardiv: {
    padding: "5px",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  avatar: {
    height: "270px",
    width: "228px",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px rgba(48,48,48,0.3)",
  },
  detailinfo: {
    padding: "10px 5px",
    fontSize: "18px",
  },
  hirebutton: {
    marginLeft: "55px",
    "& button": {
      backgroundColor: "rgba(84, 157, 235)",
      height: "40px",
      width: "70px",
      color: "white",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "160px",
    },
    "& button:hover": {
      backgroundColor: "rgba(49, 137, 232)",
    },
  },
  detaiinfo1: {
    fontSize: "20px",
    borderBottom: "0.5px solid black",
    width: "80px",
    paddingBottom: "5px",
  },
  detailcontent: {
    padding: "5px",
    lineHeight: "25px",
  },
}))
