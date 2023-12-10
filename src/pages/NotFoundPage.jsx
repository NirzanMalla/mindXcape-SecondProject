/* eslint-disable react/no-unescaped-entities */
import { Box, Typography } from "@mui/material";
import LoadingErrorComponent from "../components/LoadingErrorComponent";
const NotFoundPage = () => {
  return (
    <>
      <LoadingErrorComponent>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Typography component="h2">Page Not Found (Error 404)</Typography>
          <Typography>
            We're sorry, but the page you're looking for couldn't be found.
          </Typography>
        </Box>
      </LoadingErrorComponent>
    </>
  );
};

export default NotFoundPage;
