import { useEffect, useState } from "react";
import { useCallback } from "react";

const useApi = (url, model) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(" ");

  const fetchApi = useCallback(() => {
    setError(" ");
    setLoading(true);
    if (model !== " " && model !== "None") {
      fetch(url, {
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setLoading(false);
          setData(json.Results);
        })
        .catch((error) => {
          setError(error);
        });
    }
  }, [url,model]);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  return { error, loading, data };
};

export default useApi;
