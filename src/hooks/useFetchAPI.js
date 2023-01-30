import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useFetchAPI = (props) => {
  const [data, setData] = useState([]);
  console.log("props", props);

  useEffect(() => {
    fetch("logements.json")
      .then(function (res) {
        console.log("res : ", res);
        res.json();
      })
      .then(() => {
        setData(props);
      })
      .catch((error) => console.error(error));
  });

  console.log("data", data);

  return <div></div>;
};

export default useFetchAPI;
