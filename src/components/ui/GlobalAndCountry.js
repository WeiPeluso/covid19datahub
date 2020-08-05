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
    backgroundColor: "#699BCB",
    height: "35px;",
    textAlign: "center",
    paddingTop: "15px",
  },
  casesNo: {
    textAlign: "center",
    height: "50px;",
    color: "#699BCB",
    fontSize: "1rem",
  },
  deaths: {
    backgroundColor: "#C67171",
    height: "35px;",
    textAlign: "center",
    paddingTop: "15px",
  },
  deathsNo: {
    textAlign: "center",
    height: "50px;",
    color: "#C67171",
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
            <span>{Number(TotalConfirmed).toLocaleString("en")}</span>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.deathsNo}>
            <span>+{Number(NewDeaths).toLocaleString("en")}</span>
            <br />
            <span>{Number(TotalDeaths).toLocaleString("en")}</span>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.recoveredNo}>
            <span>+{Number(NewRecovered).toLocaleString("en")}</span>
            <br />
            <span>{Number(TotalRecovered).toLocaleString("en")}</span>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>{props.countryData.Country}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.casesNo}>
            <span>
              +{Number(props.countryData.NewConfirmed).toLocaleString("en")}
            </span>
            <br />
            <span>
              {Number(props.countryData.TotalConfirmed).toLocaleString("en")}
            </span>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.deathsNo}>
            <span>
              +{Number(props.countryData.NewDeaths).toLocaleString("en")}
            </span>
            <br />
            <span>
              {Number(props.countryData.TotalDeaths).toLocaleString("en")}
            </span>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.recoveredNo}>
            <span>
              +{Number(props.countryData.NewRecovered).toLocaleString("en")}
            </span>
            <br />
            <span>
              {Number(props.countryData.TotalRecovered).toLocaleString("en")}
            </span>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default GlobalaAndCountry;
