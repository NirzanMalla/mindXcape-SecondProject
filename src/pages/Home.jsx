import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Grid } from "@mui/material";
import NewsCard from "../components/NewsCard";

const Home = () => {
  const [data, setData] = useState([]);

  const getNews = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=sports&apiKey=7bac9af99b1f428aabfad796604cf50c"
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

export default Home;
