import { useEffect } from "react";
import { useState } from "react";
import Accomodations from "../assets/logements.json";

function useFetchAPI() {
  const [data, setData] = useState([]);

  // const logements = JSON.stringify(Logements);

  let responseClone;

  const getData = async () => {
    fetch(Accomodations)
      .then(function (res) {
        responseClone = res.clone();
        console.log("responseClone", responseClone);
        return res.json();
      })
      .then(
        function (data) {
          setData(data);
        },
        function (rejectReason) {
          console.log(
            "Error parsing JSON from response: ",
            rejectReason,
            responseClone
          );
          responseClone.text().then(function (bodyText) {
            console.log(
              "Received the following instead of valid JSON: ",
              bodyText
            );
          });
        }
      )
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
  });

  console.log("data", data);

  return data;
}

export default useFetchAPI;
