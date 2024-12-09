import axios from "axios";
import { useEffect, useState } from "react";
// const axios = require("axios");

export const usePrison = () => {
  const [searchedName, setSearchedName] = useState("");
  const [loading, setLoading] = useState(true);
  const [names, setNames] = useState([]);
  const [namesNumber, setNamesNumber] = useState(0);

  useEffect(() => {
    const getPrison = async (name) => {
      setLoading(true); //if get all data now remove the loading state
      console.log("loading befor featching", loading);
      // Define the data you want to send in the request body

      // Define the URL for your GET request
      // http://syrianprisoners-back.point-dev.net
      const url = "https://syrianprisoners-back.point-dev.net/api/prisoner";

      // Define the params to include in the request
      const params = {
        full_name: name,
      };

      try {
        // Send a GET request with headers
        const response = await axios.get(url, { params });

        // Handle the response
        let names = response.data;
        setNamesNumber(response.data.data.length)
        setNames(names);
        setLoading(false); //if get all data now remove the loading state
        console.log("loading after featching", loading);
      } catch (error) {
        // Handle any errors
        console.error("Error:", error);
      }
    };

    setTimeout(() => getPrison(searchedName), 400);
    // console.log("there is a change here ")
    // sendDataWithHeaders();
  }, [searchedName]);

  const changeNameHandler = (e) => {
    setTimeout(async () => {
      setSearchedName(e.target.value);
      console.log("firstName", searchedName);
    }, 300);
  };
  return {
    changeNameHandler,
    searchedName,
    setSearchedName,
    loading,
    setLoading,
    names,
    setNames,
    namesNumber
  };
};
