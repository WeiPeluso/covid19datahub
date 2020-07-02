import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // border: "2px solid red",
    width: "90%",
    marginLeft: "5%;",
    marginTop: "2%",
  },

  paper: {
    textAlign: "center",
    height: "50px;",
  },
  cases: {
    backgroundColor: "#DB9D90",
    height: "35px;",
    textAlign: "center",
    paddingTop: "15px",
  },
  casesNo: {
    textAlign: "center",
    height: "50px;",
    color: "#DB9D90",
    fontSize: "1rem",
  },
  deaths: {
    backgroundColor: "#B6C0D3",
    height: "35px;",
    textAlign: "center",
    paddingTop: "15px",
  },
  deathsNo: {
    textAlign: "center",
    height: "50px;",
    color: "#5e7092",
    fontSize: "1rem",
  },
  recovered: {
    backgroundColor: "#A1E2B2",
    height: "35px;",
    textAlign: "center",
    paddingTop: "15px",
  },
  recoveredNo: {
    textAlign: "center",
    height: "50px",
    color: "#27b8a4",
    fontSize: "1rem",
  },
}));
const GlobalaAndCountry = (props) => {
  const classes = useStyles();
  const {
    NewConfirmed,
    NewDeaths,
    NewRecovered,
    TotalConfirmed,
    TotalDeaths,
    TotalRecovered,
  } = props.globalData;

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.cases}>Cases</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.deaths}>Deaths</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.recovered}>Recovered</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>World</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.casesNo}>
            <span>+{Number(NewConfirmed).toLocaleString("en")}</span>
            <br />
            <span>{TotalConfirmed}</span>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.deathsNo}>
            <span>+{NewDeaths}</span>
            <br />
            <span>{TotalDeaths}</span>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.recoveredNo}>
            <span>+{NewRecovered}</span>
            <br />
            <span>{TotalRecovered}</span>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=4</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=2</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=2</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=2</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default GlobalaAndCountry;
