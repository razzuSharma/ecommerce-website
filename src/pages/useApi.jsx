import { useState, useEffect } from "react";
import axios from "axios";

export default function useApi(apiEndpoint) {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        await axios.get(apiEndpoint).then((res) => setProductData(res.data));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [apiEndpoint]);

  return { productData, setProductData, isLoading, error };
}
//   useEffect(() => {
//     try
//     async function fetchData() {
//       await axios.get(apiEndpoint).then((res) => setProductData(res.data));
//     }
//     fetchData();
//   }, [apiEndpoint]);
//   return { productData };
// }

// try {
//   setIsLoading(true);
//   const response = await fetch(apiEndpoint);
//   const responseData = await response.json();
//   setData(responseData);
// } catch (error) {
//   setError(error);
// } finally {
//   setIsLoading(false);
// }
