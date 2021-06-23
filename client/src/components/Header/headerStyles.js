import { makeStyles } from "@material-ui/core/styles"
export const headerStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "rgba(48,48,48,0.95)",
  },
  grow: {
    flexGrow: 1,
  },
  brand: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      color: "white",
    },
    "&:active": {
      backgroundColor: "none",
    },
    color: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  menudesktop: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  menuitemdesktop: {
    color: "white",
    fontSize: "17px",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      color: "white",
    },
  },
  menuitemmobile: {
    color: "black",
    fontSize: "17px",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      color: "black",
    },
  },
  loginlogout: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      color: "white",
    },
    "&:active": {
      backgroundColor: "none",
    },
    color: "white",
    fontSize: "18px",
  },
  mobilemenu: {
    position: "absolute",
    top: "20px",
  },
}))
