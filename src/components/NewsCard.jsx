/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

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
        title={value?.title || "default image"}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {value?.description ?? "This is the default description section"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {value?.content ?? "This is the default content section"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="success">
          Share
        </Button>
        <Button size="small" variant="outlined" color="success">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
