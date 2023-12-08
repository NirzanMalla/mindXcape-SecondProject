/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Grid } from "@mui/material";
import NewsCard from "../components/NewsCard";
import useFetch from "../components/UseFetch";

const Nba = () => {
  const apikey = import.meta.env.VITE_API_KEY;
  const url = `https://newsapi.org/v2/everything?q=basketball&apiKey=${apikey}`;
  const { data } = useFetch(url);

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

export default Nba;
