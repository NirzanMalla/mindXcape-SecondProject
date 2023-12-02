import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';

const news = [
    {
        image:"https://i2-prod.leicestermercury.co.uk/incoming/article8865483.ece/ALTERNATES/s615/0_Leicester-City-v-Sunderland-Sky-Bet-Championship.jpg",
        title:"Skysports news",
        heading:"Pundit reveals 'the scariest thing' about Leicester City with Championship title prediction",
        description:"Chris Iwelumo claims Leicester City are ‘going to run away’ with the Championship title. Like everyone the former Wolves striker turned pundit has been impressed with the way Enzo Maresca’s team have responded to losing their Premier League status."
    },
    {
        image:"https://i2-prod.leicestermercury.co.uk/incoming/article8865483.ece/ALTERNATES/s615/0_Leicester-City-v-Sunderland-Sky-Bet-Championship.jpg",
        title:"Skysports news",
        heading:"Pundit reveals 'the scariest thing' about Leicester City with Championship title prediction",
        description:"Chris Iwelumo claims Leicester City are ‘going to run away’ with the Championship title. Like everyone the former Wolves striker turned pundit has been impressed with the way Enzo Maresca’s team have responded to losing their Premier League status."
    },
    {
        image:"https://i2-prod.leicestermercury.co.uk/incoming/article8865483.ece/ALTERNATES/s615/0_Leicester-City-v-Sunderland-Sky-Bet-Championship.jpg",
        title:"Skysports news",
        heading:"Pundit reveals 'the scariest thing' about Leicester City with Championship title prediction",
        description:"Chris Iwelumo claims Leicester City are ‘going to run away’ with the Championship title. Like everyone the former Wolves striker turned pundit has been impressed with the way Enzo Maresca’s team have responded to losing their Premier League status."
    }
]

export default function NewsCard() {

  return (
        <Container>
        <Grid container>
        {news.map((value, index)=>(
            <Grid item key={index} md={4} sm={6} xs={12} >
        <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        sx={{ height: 170 }}
        image={value.image}
        title={value.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {value.heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {value.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>))}
    </Grid>
    </Container>
    
    
    
    
  );
}
