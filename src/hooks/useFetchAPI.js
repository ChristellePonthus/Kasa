import { useState, useEffect } from "react";

const useFetchAPI = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;

    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }
    fetchData();
  }, [url]);

  return data;
};

export default useFetchAPI;
