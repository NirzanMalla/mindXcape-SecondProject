/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Grid } from "@mui/material";
import NewsCard from "../components/NewsCard";
import useFetch from "../Hooks/UseFetch";
import LoadingErrorComponent from "../components/LoadingErrorComponent";
import UrlHandler from "../utils/UrlHandler";
import PaginationComponent from "../components/Pagination";
import usePagination from "../Hooks/usePagination";

const Football = () => {
  const query = "football";
  const url = UrlHandler(query);
  const { data, loading, error } = useFetch(url);
  const itemsPerPage = 6;
  const { currentPage, currentPageData, totalPages, handlePageChange } =
    usePagination(data, itemsPerPage);

  return (
    <LoadingErrorComponent loading={loading} error={error}>
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
