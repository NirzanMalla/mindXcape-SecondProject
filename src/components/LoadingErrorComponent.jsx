/* eslint-disable react/prop-types */
import Typography from "@mui/material/Typography";
const LoadingErrorComponent = ({ loading, error, children }) => {
  if (loading) {
    return (
      <Typography
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Loading....
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Error
      </Typography>
    );
  }

  return children;
};

export default LoadingErrorComponent;
