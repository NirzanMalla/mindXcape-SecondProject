/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Grid } from "@mui/material";
import NewsCard from "../components/NewsCard";

const Golf = () => {
  const [data, setData] = useState([]);
  const apikey = import.meta.env.VITE_API_KEY;
  const getNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=golf&apiKey=${apikey}`
      );
      setData(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <Container
      style={{
        marginTop: "80px",
      }}
    >
      <Grid container rowSpacing={2} columnSpacing={2}>
        {data.map((value, index) => (
          <Grid item key={index} md={4} sm={6} xs={12}>
            <NewsCard value={value} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Golf;
