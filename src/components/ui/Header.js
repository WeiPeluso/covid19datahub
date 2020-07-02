import React from "react";
import header from "../../assets/header.png";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    // border: "2px solid",
    // borderColor: "red",
    display: "flex",
    justifyContent: "space-around",
    paddingTop: "2%;",
    paddingBottom: "2%;",
  },
  headerImg: {
    height: "100px",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.headerContainer}>
      <div>
        <img className={classes.headerImg} alt="header" src={header} />
      </div>
      <div>
        <p>Call(General COVID-19 Questions): 2-1-1 (24/7)</p>
        <p>Cal(Medical COVID-19 Questions): 1-800-962-1253 (24/7)</p>
      </div>
    </div>
  );
};

export default Header;
