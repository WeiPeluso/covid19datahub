import React, { useState, useEffect } from "react";
import Header from "./components/ui/Header";
import GlobalAndCountry from "./components/ui/GlobalAndCountry";
import axios from "axios";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  summary: {
    borderLeft: "4px solid #8455d3",
    borderBottom: "1px solid #EFEFEF",
    width: "90%",
    marginLeft: "6%",
  },
  h2: {
    // border: "2px solid #8455d3",
    paddingLeft: "10px",
    marginBottom: "10px",
  },
  date: {
    // border: "2px solid #8455d3",
    margin: "0",
    paddingLeft: "10px",
    color: "#8897BA",
  },
}));

function App() {
  const classes = useStyles();
  const [date, setDate] = useState("");
  const [globalData, setGlobalData] = useState("");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => {
        console.log(res.data);
        setDate(res.data.Date);
        setGlobalData(res.data.Global);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);

  return (
    <div className="App">
      <Header />
      <div className={classes.summary}>
        <h2 className={classes.h2}>Case Summary</h2>
        <p className={classes.date}>Last updated at: {date}</p>
      </div>
      <GlobalAndCountry globalData={globalData} />
    </div>
  );
}

export default App;
