import { useState, useEffect } from "react";

// Hook personnalisé permettant d'appeler l'API dans les composants
// où elle est nécessaire, avec l'url correspondante

const useFetchAPI = (url) => {
  // Initialisation de l'état des données
  const [data, setData] = useState([]);

  // Assignation des données selon la réponse de l'API
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
