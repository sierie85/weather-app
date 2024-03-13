import { useState, useEffect } from "react";
import axios from "axios";

interface AxiosProps {
  url: string;
  method: "head" | "options" | "put" | "post" | "patch" | "delete" | "get";
  body?: string;
  headers?: string;
}

export default function useAxios({
  url,
  method,
  body = JSON.stringify({}),
  headers = JSON.stringify({}),
}: AxiosProps) {
  const [data, setData] = useState<any>(null);
  const [isError, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios({
          method,
          url,
          headers: JSON.parse(headers),
          data: JSON.parse(body),
        });
        setData(res.data);
        setLoading(false);
      } catch (error: any) {
        if (error.response) {
          setError(
            `Server responded with a status code not equals to 2xx. ${error.response.data} ${error.response.status} ${error.response.headers}`
          );
        } else if (error.request) {
          setError(
            `The request was made but no response was received ${error.request}`
          );
        } else {
          setError(`Error ${error.message}`);
        }
        // console.log(error.config);
      }
    };
    fetchData();
  }, [method, url, body, headers]);

  return { data, isError, isLoading };
}
