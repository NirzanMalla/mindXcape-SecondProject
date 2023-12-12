/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const NewsCard = ({ value }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        maxWidth: 345,
        objectFit: "contain",
        boxShadow: "5px 5px 10px 0px rgba(0, 0, 0, 0.5)",
      }}
    >
      <CardMedia
        sx={{ height: 170 }}
        image={
          value?.urlToImage ||
          "https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg"
        }
        style={{
          objectFit: "contain",
        }}
      />

      <CardContent>
        <Typography color="black" style={{ fontSize: "12px" }}>
          By-{value?.author ?? "Nirajan"}
          <br />
          Published at: {value?.publishedAt ?? "2023-11-23"}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {value?.title ?? "This is the default title section"}
        </Typography>
        <Typography color="text.secondary" style={{ fontSize: "14px" }}>
          {value?.description ?? "This is the default description section"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="success"
          style={{ marginRight: "5px" }}
        >
          Save
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="success"
          component={NavLink}
          to={value?.url}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
