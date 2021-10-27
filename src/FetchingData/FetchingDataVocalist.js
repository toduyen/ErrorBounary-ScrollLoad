import axios from "axios";
import { useState, useEffect } from "react";
export default function UseFetchingData(initialUrl, initialData) {
  const [Data, setData] = useState(initialData);
  const [Url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      setIsError(false);
      await axios(Url)
        .then((res) => {
          setIsLoading(false);
          setData(res.data);
        })
        .catch((error) => {
          error ? setIsError(true) : setIsError(false);
        });
    };
    fetch();
  }, [Url]);
  return [{ Data, isLoading, isError }, setUrl];
}
