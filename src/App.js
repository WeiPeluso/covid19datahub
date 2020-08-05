import React, { useState, useEffect } from "react";
import Header from "./components/ui/Header";
import GlobalAndCountry from "./components/ui/GlobalAndCountry";
import axios from "axios";
import { makeStyles } from "@material-ui/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
  formControl: {
    marginTop: "40px",
    marginLeft: "45%",
    padding: "10px",
  },
}));

function App() {
  const classes = useStyles();
  const [date, setDate] = useState("");
  const [allData, setAllData] = useState("");
  const [globalData, setGlobalData] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [country, setCountry] = useState("United States of America");
  const [countryData, setCountryData] = useState({});
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => {
        setAllData(res.data);
        setDate(res.data.Date);
        setGlobalData(res.data.Global);
        for (let i = 0; i < res.data.Countries.length; i++) {
          if (res.data.Countries[i].Country === country) {
            setCountryData(res.data.Countries[i]);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);
  const handleChange = (event) => {
    setCountry(event.target.value);
    setRefresh(!refresh);
  };
  return (
    <div className="App">
      <Header />
      <div className={classes.summary}>
        <h2 className={classes.h2}>Case Summary</h2>
        <p className={classes.date}>Last updated at: {date}</p>
      </div>

      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Country
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={country}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          {allData.Countries
            ? allData.Countries.map((country) => {
                return (
                  <MenuItem key={country.Country} value={country.Country}>
                    {country.Country}
                  </MenuItem>
                );
              })
            : console.log("loading")}
        </Select>
      </FormControl>
      <GlobalAndCountry globalData={globalData} countryData={countryData} />
    </div>
  );
}

export default App;
