/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getNews = async () => {
    try {
      const response = await axios.get(url);
      setData(response?.data?.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
      setError("Error Fetching News");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, []);
  return { data, loading, error };
};

export default useFetch;
