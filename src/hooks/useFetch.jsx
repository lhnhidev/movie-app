import { useEffect, useState } from "react";

const DEFAULT_HEADER = {
  accept: "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
};

export default function useFetch(
  { url = "", method = "GET", header = {} },
  { enable } = { enable: true },
) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (enable) {
      setIsLoading(true);
      fetch(`${import.meta.env.VITE_HOST}${url}`, {
        method,
        headers: {
          ...DEFAULT_HEADER,
          ...header,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => console.error(err))
        .finally(() => {
          setIsLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(header), method, url, enable]);

  return { data, isLoading };
}
