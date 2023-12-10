/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Grid } from "@mui/material";
import NewsCard from "../components/NewsCard";
import useFetch from "../Hooks/UseFetch";
import LoadingErrorComponent from "../components/LoadingErrorComponent";
import UrlHandler from "../utils/UrlHandler";

const Swimming = () => {
  const query = "swimming";
  const url = UrlHandler(query);
  const { data, loading, error } = useFetch(url);

  return (
    <LoadingErrorComponent loading={loading} error={error}>
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
    </LoadingErrorComponent>
  );
};

export default Swimming;
