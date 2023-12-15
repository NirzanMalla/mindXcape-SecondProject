/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Grid, Box } from "@mui/material";
import NewsCard from "../components/NewsCard";
import useFetch from "../Hooks/UseFetch";
import LoadingErrorComponent from "../components/LoadingErrorComponent";
import UrlHandler from "../utils/UrlHandler";
import PaginationComponent from "../components/Pagination";
import usePagination from "../Hooks/usePagination";
import CountrySelect from "../components/SelectCountriesComponent";
import { useState } from "react";

const Football = () => {
  const query = "games";
  const [country, setCountry] = useState("us");
  const url = UrlHandler(query, country);
  const { data, loading, error } = useFetch(url);
  const itemsPerPage = 6;
  const { currentPage, currentPageData, totalPages, handlePageChange } =
    usePagination(data, itemsPerPage);
  const handleChange = (countryCode) => {
    setCountry(countryCode);
  };

  return (
    <LoadingErrorComponent loading={loading} error={error}>
      <Box
        style={{
          marginTop: "80px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CountrySelect value={country} onChange={handleChange} />
      </Box>
      <Container
        style={{
          marginTop: "80px",
        }}
      >
        <Grid container rowSpacing={2} columnSpacing={2}>
          {currentPageData.map((value, index) => (
            <Grid item key={index} md={4} sm={6} xs={12}>
              <NewsCard value={value} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </LoadingErrorComponent>
  );
};

export default Football;
