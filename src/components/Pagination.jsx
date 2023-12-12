/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { Pagination } from "@mui/material";

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Box display="flex" justifyContent="center" mt="20px">
      <Pagination
        count={totalPages}
        page={currentPage}
        color="secondary"
        variant="outlined"
        onChange={(event, page) => onPageChange(page)}
        size="medium"
        siblingCount={1}
      />
    </Box>
  );
};

export default PaginationComponent;
